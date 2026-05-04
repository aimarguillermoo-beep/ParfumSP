import { useState, useCallback, useMemo, useEffect, type ReactNode } from 'react';
import type { Product } from '../data/products';
import { allProducts } from '../data/products';
import { supabase } from '../lib/supabase';
import { ProductOverridesContext, type OverridesMap } from './ProductOverridesContext';

const TABLE_NAME = 'product_overrides';

export function ProductOverridesProvider({ children }: { children: ReactNode }) {
  const [overrides, setOverrides] = useState<OverridesMap>({});
  const [isLoading, setIsLoading] = useState(true);

  // Initial load
  useEffect(() => {
    async function fetchOverrides() {
      try {
        const { data, error } = await supabase
          .from(TABLE_NAME)
          .select('*');

        if (error) throw error;

        if (data) {
          const map: OverridesMap = {};
          data.forEach((item: any) => {
            map[item.id] = {
              price: item.price,
              originalPrice: item.original_price,
              isAvailable: item.is_available,
              stock: item.stock,
              hasOffer: item.has_offer,
            };
          });
          setOverrides(map);
        }
      } catch (err) {
        console.error('Error fetching overrides from Supabase:', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchOverrides();

    // Subscribe to real-time changes
    const channel = supabase
      .channel('public:product_overrides')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: TABLE_NAME },
        (payload) => {
          console.log('Real-time change received:', payload);
          
          if (payload.eventType === 'DELETE') {
            setOverrides(prev => {
              const updated = { ...prev };
              delete updated[payload.old.id];
              return updated;
            });
          } else {
            const newItem = payload.new as any;
            setOverrides(prev => ({
              ...prev,
              [newItem.id]: {
                price: newItem.price,
                originalPrice: newItem.original_price,
                isAvailable: newItem.is_available,
                stock: newItem.stock,
                hasOffer: newItem.has_offer,
              }
            }));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const updatePrice = useCallback(async (productId: number, newPrice: number) => {
    try {
      const { error } = await supabase
        .from(TABLE_NAME)
        .upsert({ 
          id: productId, 
          price: newPrice,
          updated_at: new Date().toISOString()
        });
      
      if (error) throw error;
    } catch (err) {
      console.error('Error updating price:', err);
    }
  }, []);

  const setOffer = useCallback(async (productId: number, discountedPrice: number) => {
    try {
      const baseProduct = allProducts.find(p => p.id === productId);
      if (!baseProduct) return;

      const currentPrice = overrides[productId]?.price ?? baseProduct.price;

      const { error } = await supabase
        .from(TABLE_NAME)
        .upsert({
          id: productId,
          original_price: currentPrice,
          price: discountedPrice,
          has_offer: true,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;
    } catch (err) {
      console.error('Error setting offer:', err);
    }
  }, [overrides]);

  const removeOffer = useCallback(async (productId: number) => {
    try {
      const current = overrides[productId];
      if (!current) return;

      const { error } = await supabase
        .from(TABLE_NAME)
        .upsert({
          id: productId,
          price: current.originalPrice ?? current.price,
          original_price: null,
          has_offer: false,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;
    } catch (err) {
      console.error('Error removing offer:', err);
    }
  }, [overrides]);

  const updateStock = useCallback(async (productId: number, stock: number) => {
    try {
      const { error } = await supabase
        .from(TABLE_NAME)
        .upsert({ 
          id: productId, 
          stock: stock,
          updated_at: new Date().toISOString()
        });
      
      if (error) throw error;
    } catch (err) {
      console.error('Error updating stock:', err);
    }
  }, []);

  const toggleAvailability = useCallback(async (productId: number) => {
    try {
      const current = overrides[productId]?.isAvailable ?? true;
      const { error } = await supabase
        .from(TABLE_NAME)
        .upsert({ 
          id: productId, 
          is_available: !current,
          updated_at: new Date().toISOString()
        });
      
      if (error) throw error;
    } catch (err) {
      console.error('Error toggling availability:', err);
    }
  }, [overrides]);

  const resetAll = useCallback(async () => {
    try {
      const { error } = await supabase
        .from(TABLE_NAME)
        .delete()
        .neq('id', 0); // Delete all
      
      if (error) throw error;
      setOverrides({});
    } catch (err) {
      console.error('Error resetting all overrides:', err);
    }
  }, []);

  const resetProduct = useCallback(async (productId: number) => {
    try {
      const { error } = await supabase
        .from(TABLE_NAME)
        .delete()
        .eq('id', productId);
      
      if (error) throw error;
    } catch (err) {
      console.error('Error resetting product:', err);
    }
  }, []);

  // Merge base products with overrides
  const mergedProducts: Product[] = useMemo(() => {
    return allProducts.map(product => {
      const override = overrides[product.id];
      if (!override) return product;

      return {
        ...product,
        price: override.price ?? product.price,
        originalPrice: override.hasOffer
          ? (override.originalPrice ?? product.originalPrice)
          : product.originalPrice,
        stock: override.stock ?? product.stock,
        isAvailable: override.isAvailable ?? product.isAvailable ?? true,
      };
    });
  }, [overrides]);

  return (
    <ProductOverridesContext.Provider
      value={{
        overrides,
        mergedProducts,
        isLoading,
        updatePrice,
        setOffer,
        removeOffer,
        updateStock,
        toggleAvailability,
        resetAll,
        resetProduct,
      }}
    >
      {children}
    </ProductOverridesContext.Provider>
  );
}
