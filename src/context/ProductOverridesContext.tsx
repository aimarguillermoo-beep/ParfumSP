import { createContext, useContext } from 'react';
import type { Product } from '../data/products';

export interface ProductOverride {
  price?: number;
  originalPrice?: number;
  isAvailable?: boolean;
  stock?: number;
  hasOffer?: boolean;
}

export type OverridesMap = Record<number, ProductOverride>;

export interface ProductOverridesContextType {
  overrides: OverridesMap;
  mergedProducts: Product[];
  isLoading: boolean;
  updatePrice: (id: number, price: number) => Promise<void>;
  setOffer: (id: number, price: number) => Promise<void>;
  removeOffer: (id: number) => Promise<void>;
  updateStock: (id: number, stock: number) => Promise<void>;
  toggleAvailability: (id: number) => Promise<void>;
  resetAll: () => Promise<void>;
  resetProduct: (id: number) => Promise<void>;
}

export const ProductOverridesContext = createContext<ProductOverridesContextType | undefined>(undefined);

export function useProductOverrides() {
  const context = useContext(ProductOverridesContext);
  if (!context) {
    throw new Error('useProductOverrides must be used within a ProductOverridesProvider');
  }
  return context;
}
