import re

new_text = """  {
    id: 221,
    name: "Afeef",
    brand: "Lattafa",
    price: 35000,
    image: "/images/mockups/afeef_100ml.webp",
    category: "arabe",
    description: "Muy equilibrado, ideal si te gustan los aromas limpios pero con fondo oriental.",
    size: "100ml",
    notes: {
      top: ["Notas cítricas frescas", "Menta", "Pimienta rosa"],
      heart: ["Especias orientales suaves", "Jazmín"],
      base: ["Ámbar gris", "Madera de sándalo", "Pachulí"]
    },
  },
  {
    id: 222,
    name: "Amnia",
    brand: "Lattafa",
    price: 36000,
    image: "/images/mockups/amnia_100ml.webp",
    category: "arabe",
    description: "Una fragancia con un aire místico y bastante elegante.",
    size: "100ml",
    notes: {
      top: ["Pimienta rosa", "Jengibre", "Cítricos"],
      heart: ["Incienso", "Resinas", "Notas amaderadas"],
      base: ["Cedro", "Ámbar", "Toque de almizcle"]
    },
  },
  {
    id: 223,
    name: "Ange ou Démon",
    brand: "Givenchy",
    price: 38000,
    image: "/images/mockups/ange_ou_demon_100ml.webp",
    category: "arabe",
    description: "Un clásico de diseñador ultra misterioso, denso y sensual.",
    size: "100ml",
    notes: {
      top: ["Mandarina", "Azafrán", "Tomillo blanco"],
      heart: ["Azucena", "Orquídea Maxillaria", "Flor de ylang-ylang"],
      base: ["Palo de rosa de Brasil", "Absoluto de madera de roble", "Vainilla", "Haba tonka"]
    },
  },
  {
    id: 224,
    name: "Ansaam Gold",
    brand: "Lattafa Pride",
    price: 42000,
    image: "/images/mockups/ansaam_gold_100ml.webp",
    category: "arabe",
    description: "Muy cremoso y dulce, en la línea de perfumes como Oriana o Love Don't Be Shy.",
    size: "100ml",
    notes: {
      top: ["Mandarina", "Pera"],
      heart: ["Jazmín", "Flor de azahar del naranjo", "Toque dulce de gominola/caramelo"],
      base: ["Vainilla", "Frambuesa", "Almizcle"]
    },
  },
  {
    id: 225,
    name: "Club de Nuit Untold",
    brand: "Armaf",
    price: 45000,
    image: "/images/mockups/club_de_nuit_untold_105ml.webp",
    category: "arabe",
    description: "La aclamada interpretación de Armaf inspirada en Baccarat Rouge 540, súper dulce, metálica y con una proyección tremenda.",
    size: "105ml",
    notes: {
      top: ["Azafrán", "Jazmín"],
      heart: ["Amberwood (madera de ámbar)", "Ámbar gris"],
      base: ["Resina de abeto", "Cedro"]
    },
  },
  {
    id: 226,
    name: "Emaan",
    brand: "Lattafa",
    price: 34000,
    image: "/images/mockups/emaan_100ml.webp",
    category: "arabe",
    description: "Un floral blanco elegante, limpio y con mucha presencia.",
    size: "100ml",
    notes: {
      top: ["Flor de azahar del naranjo", "Bergamota", "Grosellas negras"],
      heart: ["Tuberosa (nardos)", "Jazmín", "Caléndula"],
      base: ["Vainilla", "Almizcle blanco", "Cedro", "Pachulí"]
    },
  },
  {
    id: 227,
    name: "Fakhar Rose Gold",
    brand: "Lattafa",
    price: 36000,
    image: "/images/mockups/fakhar_rose_gold_100ml.webp",
    category: "arabe",
    description: "El famosísimo clon floral y cremoso de L'Interdit.",
    size: "100ml",
    notes: {
      top: ["Frutas de la pasión (maracuyá)", "Granada", "Lirio", "Aldehídos"],
      heart: ["Tuberosa", "Jazmín", "Gardenia", "Rosa", "Madreselva", "Peonía"],
      base: ["Vainilla", "Sándalo", "Almizcle blanco", "Ambroxan"]
    },
  },
  {
    id: 228,
    name: "Tharwah Gold",
    brand: "Lattafa Pride",
    price: 42000,
    image: "/images/mockups/tarhwah_gold_100ml.webp",
    category: "arabe",
    description: "Una propuesta equilibrada que cruza frescura limpia con un fondo dulce y resinoso.",
    size: "100ml",
    notes: {
      top: ["Lavanda", "Bergamota"],
      heart: ["Flor de azahar del naranjo", "Jazmín"],
      base: ["Vainilla", "Ámbar", "Madera de cedro"]
    },
  },
  {
    id: 229,
    name: "The Kingdom for Her",
    brand: "Lattafa",
    price: 38000,
    image: "/images/mockups/the_kingdom_for_her_100ml.webp",
    category: "arabe",
    description: "La contraparte femenina de la línea The Kingdom.",
    size: "100ml",
    notes: {
      top: ["Grosella negra", "Pera", "Mandarina"],
      heart: ["Jazmín", "Flor de azahar", "Notas florales suaves"],
      base: ["Vainilla", "Ámbar", "Maderas finas", "Haba tonka"]
    },
  },
  {
    id: 230,
    name: "Victoria",
    brand: "Maison Alhambra",
    price: 32000,
    image: "/images/mockups/victoria_100ml.webp",
    category: "arabe",
    description: "Un aroma muy fino, floral-frutal sutilmente dulce.",
    size: "100ml",
    notes: {
      top: ["Frutos rojos", "Lichi", "Bergamota"],
      heart: ["Rosa turca", "Peonía", "Lirio de los valles"],
      base: ["Vainilla", "Maderas suaves", "Almizcle blanco"]
    },
  }
];"""

with open('src/data/arabProducts.ts', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('  {\n    id: 221')
if idx == -1:
    idx = text.find('  {\n    id: 221,')
if idx == -1:
    idx = text.find('id: 221')
    if idx != -1:
        idx = text.rfind('{', 0, idx)

if idx != -1:
    new_content = text[:idx] + new_text + '\n'
    with open('src/data/arabProducts.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Reemplazados correctamente')
else:
    print('No se encontro el id 221')
