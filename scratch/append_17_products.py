import re

file_path = r"C:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts"

new_products = """  {
    id: 172,
    name: "9 PM Femme",
    brand: "Afnan",
    price: 50000,
    image: "/images/mockups/9_pm_femme_mockup.webp",
    category: "mujer",
    description: "Una fragancia femenina vibrante y seductora, ideal para momentos especiales.",
    size: "100ml",
    notes: {
      top: ["Frambuesa", "Manzana"],
      heart: ["Rosa", "Jazmín"],
      base: ["Vainilla", "Ámbar"]
    },
  },
  {
    id: 173,
    name: "Amber Oud",
    brand: "Al Haramain",
    price: 65000,
    image: "/images/mockups/amber_oud_mockup.webp",
    category: "unisex",
    description: "La esencia del lujo oriental en un frasco generoso. Una mezcla rica de ámbar y oud.",
    size: "120ml",
    notes: {
      top: ["Bergamota", "Notas verdes"],
      heart: ["Ámbar", "Melón", "Piña"],
      base: ["Almizcle", "Vainilla", "Notas amaderadas"]
    },
  },
  {
    id: 174,
    name: "Bade'e Al Oud Amethyst",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/amethyst_mockup.webp",
    category: "unisex",
    description: "Una interpretación floral y especiada del oud, inspirada en Initio Atomic Rose.",
    size: "100ml",
    notes: {
      top: ["Pimienta rosa", "Bergamota"],
      heart: ["Rosa turca", "Rosa búlgara", "Jazmín"],
      base: ["Oud", "Ámbar", "Vainilla"]
    },
  },
  {
    id: 175,
    name: "Asad Zanzibar",
    brand: "Lattafa",
    price: 55000,
    image: "/images/mockups/asad_zanzibar_mockup.webp",
    category: "hombre",
    description: "Una fragancia tropical y audaz que evoca la brisa del océano y especias exóticas.",
    size: "100ml",
    notes: {
      top: ["Pimienta negra", "Piña"],
      heart: ["Agua de coco", "Iris"],
      base: ["Pachulí", "Vainilla"]
    },
  },
  {
    id: 176,
    name: "Club de Nuit Maleka",
    brand: "Armaf",
    price: 60000,
    image: "/images/mockups/maleka_mockup.webp",
    category: "mujer",
    description: "Elegancia y misterio en una fragancia floral ambarada para la mujer moderna.",
    size: "105ml",
    notes: {
      top: ["Notas florales"],
      heart: ["Especias", "Ámbar"],
      base: ["Maderas", "Almizcle"]
    },
  },
  {
    id: 177,
    name: "Confidential Private Gold",
    brand: "Lattafa",
    price: 45000,
    image: "/images/mockups/private_gold_mockup.webp",
    category: "unisex",
    description: "Un aroma frutal y almizclado que irradia lujo y sofisticación.",
    size: "100ml",
    notes: {
      top: ["Melocotón", "Pera", "Grosella negra"],
      heart: ["Lirio de los valles"],
      base: ["Almizcle", "Sándalo", "Vainilla"]
    },
  },
  {
    id: 178,
    name: "Eclaire",
    brand: "Lattafa",
    price: 55000,
    image: "/images/mockups/eclaire_mockup.webp",
    category: "mujer",
    description: "Una delicia gourmand que combina caramelo y flores blancas de manera exquisita.",
    size: "100ml",
    notes: {
      top: ["Caramelo", "Leche"],
      heart: ["Flores blancas", "Miel"],
      base: ["Vainilla", "Praliné"]
    },
  },
  {
    id: 179,
    name: "Emeer",
    brand: "Lattafa",
    price: 70000,
    image: "/images/mockups/emeer_mockup.webp",
    category: "unisex",
    description: "Una fragancia majestuosa con una presentación de lujo, perfecta para ocasiones reales.",
    size: "100ml",
    notes: {
      top: ["Limón", "Bergamota", "Enebro"],
      heart: ["Cardamomo", "Té blanco", "Sándalo"],
      base: ["Ámbar gris", "Pachulí", "Cedro"]
    },
  },
  {
    id: 180,
    name: "Fakhar Black",
    brand: "Lattafa",
    price: 45000,
    image: "/images/mockups/fakhar_black_mockup.webp",
    category: "hombre",
    description: "Inspirada en YSL Y EDP, una fragancia fresca y aromática para el hombre dinámico.",
    size: "100ml",
    notes: {
      top: ["Manzana", "Bergamota", "Jengibre"],
      heart: ["Salvia", "Lavanda", "Enebro"],
      base: ["Ámbar", "Haba Tonka", "Cedro"]
    },
  },
  {
    id: 181,
    name: "Fakhar Platinum",
    brand: "Lattafa",
    price: 45000,
    image: "/images/mockups/fakhar_platinum_mockup.webp",
    category: "hombre",
    description: "Una variante elegante y sofisticada con un perfil olfativo metálico y fresco.",
    size: "100ml",
    notes: {
      top: ["Notas cítricas"],
      heart: ["Especias frías"],
      base: ["Maderas", "Almizcle"]
    },
  },
  {
    id: 182,
    name: "Ghost Spectre",
    brand: "Fragrance World",
    price: 50000,
    image: "/images/mockups/ghost_spectre_mockup.webp",
    category: "hombre",
    description: "Una fragancia misteriosa y envolvente con una estela inconfundible.",
    size: "100ml",
    notes: {
      top: ["Especias"],
      heart: ["Notas oscuras"],
      base: ["Maderas preciosas"]
    },
  },
  {
    id: 183,
    name: "Happy Brush",
    brand: "Lattafa",
    price: 35000,
    image: "/images/mockups/happy_brush_mockup.webp",
    category: "mujer",
    description: "Una fragancia alegre y juvenil en un formato práctico de 75ml.",
    size: "75ml",
    notes: {
      top: ["Frutos rojos"],
      heart: ["Notas florales"],
      base: ["Vainilla suave"]
    },
  },
  {
    id: 184,
    name: "La Vivacite Intensa",
    brand: "Maison Alhambra",
    price: 48000,
    image: "/images/mockups/vivacite_mockup.webp",
    category: "mujer",
    description: "Una explosión de vitalidad y elegancia floral para la mujer decidida.",
    size: "100ml",
    notes: {
      top: ["Bergamota", "Pera"],
      heart: ["Flor de azahar", "Jazmín"],
      base: ["Vainilla", "Pachulí"]
    },
  },
  {
    id: 185,
    name: "No. 2",
    brand: "Fragrance World",
    price: 55000,
    image: "/images/mockups/no2_mockup.webp",
    category: "unisex",
    description: "Inspirada en Rosendo Mateu No. 2, una fragancia de cuero y flores de alta costura.",
    size: "100ml",
    notes: {
      top: ["Cítricos", "Lavanda"],
      heart: ["Cuero", "Especias"],
      base: ["Sándalo", "Almizcle"]
    },
  },
  {
    id: 186,
    name: "Bade'e Al Oud - Oud for Glory",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/oud_glory_mockup.webp",
    category: "unisex",
    description: "El icónico 'Oud for Glory', una fragancia potente y mística basada en el oud más puro.",
    size: "100ml",
    notes: {
      top: ["Azafrán", "Nuez moscada", "Lavanda"],
      heart: ["Oud", "Pachulí"],
      base: ["Oud", "Almizcle"]
    },
  },
  {
    id: 187,
    name: "Salvo Intense",
    brand: "Maison Alhambra",
    price: 45000,
    image: "/images/mockups/salvo_intense_mockup.webp",
    category: "hombre",
    description: "Inspirada en Sauvage Elixir, una fragancia extremadamente concentrada y especiada.",
    size: "100ml",
    notes: {
      top: ["Canela", "Nuez moscada", "Cardamomo"],
      heart: ["Lavanda"],
      base: ["Sándalo", "Regaliz", "Ámbar"]
    },
  },
  {
    id: 188,
    name: "Bade'e Al Oud Sublime",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/sublime_mockup.webp",
    category: "mujer",
    description: "Una fragancia frutal y vibrante con notas de manzana roja y lichi.",
    size: "100ml",
    notes: {
      top: ["Manzana roja", "Lichi"],
      heart: ["Rosa", "Jazmín"],
      base: ["Vainilla", "Musgo"]
    },
  },
];"""

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the closing "];" with the new products and the closing "];"
if "];" in content:
    # Ensure we only replace the LAST instance of ];
    parts = content.rsplit("];", 1)
    new_content = parts[0] + "," + new_products + "];"
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("17 Products successfully added to arabProducts.ts")
else:
    print("Could not find the end of the array '];'")
