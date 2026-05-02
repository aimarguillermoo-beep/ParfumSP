import { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from 'react';
import type { Product } from '../data/products';
import { allProducts } from '../data/products';

export interface ProductOverride {
  price?: number;
  originalPrice?: number;
  isAvailable?: boolean;
  stock?: number;
  hasOffer?: boolean;
}

type OverridesMap = Record<number, ProductOverride>;

interface ProductOverridesContextType {
  overrides: OverridesMap;
  mergedProducts: Product[];
  updatePrice: (id: number, price: number) => void;
  setOffer: (id: number, price: number) => void;
  removeOffer: (id: number) => void;
  updateStock: (id: number, stock: number) => void;
  toggleAvailability: (id: number) => void;
  resetAll: () => void;
  resetProduct: (id: number) => void;
}

const ProductOverridesContext = createContext<ProductOverridesContextType | undefined>(undefined);

const OVERRIDES_KEY = 'parfumsp_product_overrides';

function loadOverrides(): OverridesMap {
  try {
    const stored = localStorage.getItem(OVERRIDES_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveOverrides(overrides: OverridesMap) {
  localStorage.setItem(OVERRIDES_KEY, JSON.stringify(overrides));
}

export function ProductOverridesProvider({ children }: { children: ReactNode }) {
  const [overrides, setOverrides] = useState<OverridesMap>(loadOverrides);

  const updatePrice = useCallback((productId: number, newPrice: number) => {
    setOverrides(prev => {
      const updated = {
        ...prev,
        [productId]: { ...prev[productId], price: newPrice },
      };
      saveOverrides(updated);
      return updated;
    });
  }, []);

  const setOffer = useCallback((productId: number, discountedPrice: number) => {
    setOverrides(prev => {
      const baseProduct = allProducts.find(p => p.id === productId);
      if (!baseProduct) return prev;

      const currentPrice = prev[productId]?.price ?? baseProduct.price;

      const updated = {
        ...prev,
        [productId]: {
          ...prev[productId],
          originalPrice: currentPrice,
          price: discountedPrice,
          hasOffer: true,
        },
      };
      saveOverrides(updated);
      return updated;
    });
  }, []);

  const removeOffer = useCallback((productId: number) => {
    setOverrides(prev => {
      const current = prev[productId];
      if (!current) return prev;

      const updated = {
        ...prev,
        [productId]: {
          ...current,
          price: current.originalPrice ?? current.price,
          originalPrice: undefined,
          hasOffer: false,
        },
      };
      saveOverrides(updated);
      return updated;
    });
  }, []);

  const updateStock = useCallback((productId: number, stock: number) => {
    setOverrides(prev => {
      const updated = {
        ...prev,
        [productId]: { ...prev[productId], stock },
      };
      saveOverrides(updated);
      return updated;
    });
  }, []);

  const toggleAvailability = useCallback((productId: number) => {
    setOverrides(prev => {
      const current = prev[productId]?.isAvailable ?? true;
      const updated = {
        ...prev,
        [productId]: { ...prev[productId], isAvailable: !current },
      };
      saveOverrides(updated);
      return updated;
    });
  }, []);

  const resetAll = useCallback(() => {
    setOverrides({});
    localStorage.removeItem(OVERRIDES_KEY);
  }, []);

  const resetProduct = useCallback((productId: number) => {
    setOverrides(prev => {
      const updated = { ...prev };
      delete updated[productId];
      saveOverrides(updated);
      return updated;
    });
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

export function useProductOverrides() {
  const context = useContext(ProductOverridesContext);
  if (!context) {
    throw new Error('useProductOverrides must be used within a ProductOverridesProvider');
  }
  return context;
}
