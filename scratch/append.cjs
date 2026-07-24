const fs = require('fs');
const path = 'C:/Users/guill/OneDrive/Desktop/Parfum_SP/src/data/arabProducts.ts';
let content = fs.readFileSync(path, 'utf8');

const newProducts = `  {
    id: 299,
    name: "Asad Zanzibar Clásico",
    brand: "Lattafa",
    price: 50000,
    image: "/images/arabes/asad-zanzibar.webp",
    category: "hombre",
    description: "La versión original de la línea Zanzibar. Cruza una salida especiada y lavandosa con un corazón dulce-salado de coco muy veraniego y distintivo.",
    size: "100ml",
    notes: {
      top: ["Pimienta negra", "Lavanda"],
      heart: ["Sal", "Agua de coco", "Iris"],
      base: ["Vainilla", "Incienso"]
    }
  },
  {
    id: 300,
    name: "Donna Intense",
    brand: "By Stallion 53",
    price: 50000,
    image: "/images/arabes/donna-intense.webp",
    category: "mujer",
    description: "Inspirado en el estilo de Born In Roma Intense. Un aroma floral sensual, dulce y cremoso con presencia elegante.",
    size: "100ml",
    notes: {
      top: ["Grosella negra", "Bergamota", "Pimienta rosa"],
      heart: ["Jazmín de la India", "Té de jazmín", "Flor de azahar del naranjo"],
      base: ["Vainilla de Bourbon", "Maderas de cachemira", "Sándalo"]
    }
  },
  {
    id: 301,
    name: "Al Daiem",
    brand: "Al Wataniah",
    price: 50000,
    image: "/images/arabes/al-daiem.webp",
    category: "unisex",
    description: "Una propuesta oriental clásica muy limpia y equilibrada, perfecta para el uso diario por su frescura versátil.",
    size: "75ml",
    notes: {
      top: ["Bergamota", "Lavanda", "Notas cítricas chispeantes"],
      heart: ["Geranio", "Azafrán", "Toques florales limpios"],
      base: ["Ámbar gris", "Sándalo", "Almizcle blanco"]
    }
  },
  {
    id: 302,
    name: "Creative Art",
    brand: "Lattafa",
    price: 50000,
    image: "/images/arabes/creative-art.webp",
    category: "unisex",
    description: "Una fragancia artística con un perfil frutal-floral vibrante sobre un fondo cálido, dulce y resinoso.",
    size: "100ml",
    notes: {
      top: ["Pera", "Bergamota", "Pimienta rosa"],
      heart: ["Tuberosa (nardos)", "Ylang-ylang", "Jazmín"],
      base: ["Vainilla", "Ámbar", "Sándalo", "Pachulí"]
    }
  },
  {
    id: 303,
    name: "London The City Of Contrast",
    brand: "Lattafa",
    price: 50000,
    image: "/images/arabes/london.webp",
    category: "unisex",
    description: "Una fragancia urbana y sofisticada que evoca notas de cuero elegante con el contraste dulce y ácido de la frambuesa.",
    size: "100ml",
    notes: {
      top: ["Frambuesa", "Azafrán", "Tomillo"],
      heart: ["Olíbano (incienso)", "Jazmín"],
      base: ["Cuero", "Gamuza", "Notas amaderadas", "Ámbar"]
    }
  },
  {
    id: 304,
    name: "Love In Paris",
    brand: "Lattafa",
    price: 50000,
    image: "/images/arabes/love-in-paris.webp",
    category: "unisex",
    description: "Inspirado en la sofisticación romántica floral-frutal, con un perfil de rosas cremosas, frescas y acarameladas.",
    size: "100ml",
    notes: {
      top: ["Lichi", "Ruibarbo", "Bergamota", "Nuez moscada"],
      heart: ["Rosa turca", "Peonía", "Petalia", "Almizcle"],
      base: ["Vainilla de Madagascar", "Pino", "Cedro", "Incienso"]
    }
  },
  {
    id: 305,
    name: "New York The City Of Dreams",
    brand: "Lattafa",
    price: 50000,
    image: "/images/arabes/new-york.webp",
    category: "unisex",
    description: "Una interpretación moderna y cosmopolita con salida fresca de manzana que evoluciona hacia una vainilla especiada muy atractiva.",
    size: "100ml",
    notes: {
      top: ["Manzana", "Lavanda", "Bergamota", "Pimienta rosa"],
      heart: ["Cardamomo", "Geranio", "Notas florales"],
      base: ["Vainilla", "Haba tonka", "Sándalo", "Madera de pachulí"]
    }
  },
  {
    id: 306,
    name: "Uomo Intense",
    brand: "By Stallion 53",
    price: 50000,
    image: "/images/arabes/uomo-intense.webp",
    category: "unisex",
    description: "Inspirado en el perfil elegante de los perfumes de iris y cuero. Muy cremoso, masculino, oscuro y sofisticado.",
    size: "100ml",
    notes: {
      top: ["Mandarina", "Salvia esclarea"],
      heart: ["Iris", "Haba tonka", "Notas empolvadas"],
      base: ["Cuero", "Vainilla", "Madera de sándalo"]
    }
  }
];`;

content = content.replace(/\];\s*$/, newProducts);
fs.writeFileSync(path, content, 'utf8');
console.log('Products appended successfully!');
