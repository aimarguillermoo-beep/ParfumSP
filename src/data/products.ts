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
}

export const products: Product[] = [
  {
    id: 1,
    name: "Sauvage Élixir",
    brand: "Dior",
    price: 85000,
    originalPrice: 95000,
    image: "/images/perfume-sauvage.png",
    category: "hombre",
    description: "Una fragancia masculina intensa y magnética. Sauvage Élixir es la expresión más concentrada y lujosa de la línea, con una estela poderosa y adictiva que deja huella.",
    notes: {
      top: ["Pomelo", "Canela", "Nuez moscada"],
      heart: ["Lavanda", "Regaliz"],
      base: ["Ámbar", "Madera de sándalo", "Pachulí"]
    },
    size: "100ml",
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Coco Mademoiselle",
    brand: "Chanel",
    price: 92000,
    image: "/images/perfume-chanel.png",
    category: "mujer",
    description: "Una fragancia femenina irresistible y audaz. La esencia de una mujer que no pide permiso, con una mezcla provocativa de frescura cítrica y sensualidad oriental.",
    notes: {
      top: ["Naranja", "Bergamota", "Mandarina"],
      heart: ["Rosa", "Jazmín", "Lichi"],
      base: ["Pachulí", "Vetiver", "Vainilla", "Almizcle"]
    },
    size: "100ml",
    isBestSeller: true,
  },
  {
    id: 3,
    name: "Oud Wood",
    brand: "Tom Ford",
    price: 120000,
    originalPrice: 135000,
    image: "/images/perfume-oud.png",
    category: "unisex",
    description: "Una fragancia unisex extraordinaria que fusiona maderas exóticas con especias raras. Oud Wood es la definición de lujo silencioso y sofisticación absoluta.",
    notes: {
      top: ["Oud", "Cardamomo", "Pimienta rosa"],
      heart: ["Palo de rosa", "Sándalo"],
      base: ["Tonka", "Vetiver", "Ámbar"]
    },
    size: "100ml",
    isBestSeller: true,
  },
  {
    id: 4,
    name: "Acqua di Giò Profondo",
    brand: "Giorgio Armani",
    price: 72000,
    image: "/images/perfume-aqua.png",
    category: "hombre",
    description: "Una fragancia acuática que evoca la profundidad del mar Mediterráneo. Fresca, mineral y magnética, perfecta para el hombre moderno y aventurero.",
    notes: {
      top: ["Bergamota", "Mandarina verde", "Aquozone"],
      heart: ["Lavanda", "Ciprés", "Romero"],
      base: ["Ámbar mineral", "Almizcle", "Pachulí"]
    },
    size: "125ml",
  },
  {
    id: 5,
    name: "Miss Dior Blooming",
    brand: "Dior",
    price: 78000,
    image: "/images/perfume-floral.png",
    category: "mujer",
    description: "Un bouquet floral fresco y radiante que captura la esencia de la primavera. Delicada pero memorable, como un jardín de peonías en plena floración.",
    notes: {
      top: ["Mandarina", "Pomelo rosa"],
      heart: ["Peonía", "Rosa de Damasco", "Albaricoque"],
      base: ["Almizcle blanco", "Musgo de roble"]
    },
    size: "100ml",
    isNew: true,
  },
  {
    id: 6,
    name: "La Nuit de L'Homme",
    brand: "Yves Saint Laurent",
    price: 68000,
    originalPrice: 75000,
    image: "/images/perfume-noir.png",
    category: "hombre",
    description: "La fragancia nocturna por excelencia. Misteriosa, seductora y elegante, captura la tensión entre lo salvaje y lo refinado bajo la luz de la luna.",
    notes: {
      top: ["Cardamomo", "Bergamota", "Lavanda"],
      heart: ["Cedro", "Comino"],
      base: ["Vetiver", "Ámbar", "Tonka"]
    },
    size: "100ml",
    isBestSeller: true,
  },
  {
    id: 7,
    name: "La Vie Est Belle",
    brand: "Lancôme",
    price: 76000,
    image: "/images/perfume-rose.png",
    category: "mujer",
    description: "Un iris gourmand que celebra la felicidad y la libertad de elegir tu propio destino. Dulce, elegante y adictiva como la vida misma.",
    notes: {
      top: ["Grosellas negras", "Pera"],
      heart: ["Iris", "Jazmín", "Flor de azahar"],
      base: ["Praliné", "Vainilla", "Pachulí", "Tonka"]
    },
    size: "75ml",
    isNew: true,
  },
  {
    id: 8,
    name: "Bright Crystal",
    brand: "Versace",
    price: 55000,
    originalPrice: 62000,
    image: "/images/perfume-citrus.png",
    category: "mujer",
    description: "Una fragancia luminosa y vibrante que combina frescura frutal con elegancia floral. Como un cristal que atrapa la luz del sol y la transforma en color.",
    notes: {
      top: ["Granada", "Yuzu", "Loto helado"],
      heart: ["Magnolia", "Peonía", "Loto"],
      base: ["Almizcle", "Ámbar", "Caoba"]
    },
    size: "90ml",
  },
];

// Merge arab products into the main products array
export const allProducts: Product[] = [...products, ...arabProducts];

export const brands = [
  "Lattafa", "Armaff", "Al Haramain", "Al Wataniah",
  "Maison Alhambra", "Asdaff", "Ard al Zaafaran", "French Avenue",
  "Afnan", "Rasasi", "Paris Corner", "Rayhaan",
  "Orientica"
];
