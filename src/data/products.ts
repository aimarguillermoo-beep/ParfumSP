import { arabProducts } from './arabProducts';

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'hombre' | 'mujer' | 'unisex' | 'arabe';
  description: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  size: string;
  isBestSeller?: boolean;
  isNew?: boolean;
  stock?: number;
  isAvailable?: boolean;
}

export const products: Product[] = [];

// Merge arab products into the main products array and sort alphabetically by name
export const allProducts: Product[] = [...products, ...arabProducts].sort((a, b) => a.name.localeCompare(b.name));


export const ARAB_BRANDS = [
  "Lattafa", "Armaf", "Al Haramain", "Al Wataniah",
  "Maison Alhambra", "Asdaff", "Ard al Zaafaran", "French Avenue",
  "Afnan", "Rasasi", "Paris Corner", "Rayhaan",
  "Orientica", "Bharara", "Zimaya"
];
