import os

new_products = """
  {
    id: 221,
    name: "Afeef",
    brand: "Lattafa Pride",
    price: 35000,
    image: "/images/mockups/afeef_100ml.webp",
    category: "arabe",
    description: "Una fragancia que combina la frescura de las frutas con un fondo profundo y amaderado. Ideal para quienes buscan una estela elegante y persistente.",
    size: "100ml",
    notes: {
      top: ["Bergamota", "Manzana"],
      heart: ["Madera de Cedro", "Ámbar"],
      base: ["Almizcle", "Vainilla", "Sándalo"]
    },
  },
  {
    id: 222,
    name: "Amnia",
    brand: "Al Wataniah",
    price: 36000,
    image: "/images/mockups/amnia_100ml.webp",
    category: "arabe",
    description: "Un aroma delicado y envolvente que destaca por sus notas florales y un corazón cálido. Perfecto para uso diario o eventos especiales.",
    size: "100ml",
    notes: {
      top: ["Notas Florales", "Cítricos"],
      heart: ["Jazmín", "Rosa"],
      base: ["Almizcle", "Notas Amaderadas"]
    },
  },
  {
    id: 223,
    name: "Ange ou Demon",
    brand: "Premium Edition",
    price: 38000,
    image: "/images/mockups/ange_ou_demon_100ml.webp",
    category: "arabe",
    description: "Una composición dual y misteriosa. Un contraste perfecto entre la luminosidad floral y la profundidad de las maderas oscuras.",
    size: "100ml",
    notes: {
      top: ["Mandarina", "Azafrán"],
      heart: ["Azucena", "Orquídea", "Ylang-Ylang"],
      base: ["Haba Tonka", "Vainilla", "Palo Santo"]
    },
  },
  {
    id: 224,
    name: "Ansaam Gold",
    brand: "Lattafa Pride",
    price: 42000,
    image: "/images/mockups/ansaam_gold_100ml.webp",
    category: "arabe",
    description: "Una fragancia exuberante y dulce que evoca lujo y sofisticación. Una explosión de notas afrutadas que se asienta en una vainilla irresistible.",
    size: "100ml",
    notes: {
      top: ["Pera", "Mandarina"],
      heart: ["Rosa", "Jazmín", "Notas Dulces"],
      base: ["Vainilla", "Almizcle", "Frambuesa"]
    },
  },
  {
    id: 225,
    name: "Club de Nuit Untold",
    brand: "Armaf",
    price: 45000,
    image: "/images/mockups/club_de_nuit_untold_105ml.webp",
    category: "arabe",
    description: "Una obra maestra olfativa de Armaf. Un aroma dulce, ambarino y amaderado que deja una estela magnética y lujosa en el aire.",
    size: "105ml",
    notes: {
      top: ["Azafrán", "Jazmín"],
      heart: ["Amberwood", "Ámbar Gris"],
      base: ["Resina de Abeto", "Cedro"]
    },
  },
  {
    id: 226,
    name: "Emaan",
    brand: "Lattafa",
    price: 34000,
    image: "/images/mockups/emaan_100ml.webp",
    category: "arabe",
    description: "Emaan es una fragancia vibrante y floral. Una apertura cítrica brillante que florece en un bouquet blanco exquisito.",
    size: "100ml",
    notes: {
      top: ["Flor de Naranja", "Bergamota", "Grosella Negra"],
      heart: ["Jazmín", "Caléndula", "Nardo"],
      base: ["Vainilla", "Madera de Cedro", "Almizcle"]
    },
  },
  {
    id: 227,
    name: "Fakhar Rose Gold",
    brand: "Lattafa",
    price: 36000,
    image: "/images/mockups/fakhar_rose_gold_100ml.webp",
    category: "arabe",
    description: "Conocido también como Fakhar Lattafa Women, es una fragancia encantadora y femenina que combina notas florales cremosas y un fondo cálido.",
    size: "100ml",
    notes: {
      top: ["Frutas Ligeras", "Granada", "Lirio"],
      heart: ["Nardo", "Jazmín", "Gardenia"],
      base: ["Vainilla", "Sándalo", "Ambroxan"]
    },
  },
  {
    id: 228,
    name: "Tharwah Gold",
    brand: "Lattafa Pride",
    price: 42000,
    image: "/images/mockups/tarhwah_gold_100ml.webp",
    category: "arabe",
    description: "Tharwah Gold es puro lujo embotellado. Una mezcla sofisticada de lavanda fresca y flores blancas sobre una base dulce y elegante.",
    size: "100ml",
    notes: {
      top: ["Lavanda", "Bergamota"],
      heart: ["Flor de Naranjo", "Jazmín Egyptio"],
      base: ["Vainilla", "Vetiver", "Ámbar"]
    },
  },
  {
    id: 229,
    name: "The Kingdom for Her",
    brand: "Lattafa",
    price: 38000,
    image: "/images/mockups/the_kingdom_for_her_100ml.webp",
    category: "arabe",
    description: "Una fragancia majestuosa para ella. Mezcla notas opulentas y florales para crear un aura digna de la realeza.",
    size: "100ml",
    notes: {
      top: ["Notas Afrutadas", "Cassis"],
      heart: ["Peonía", "Rosa Salvaje"],
      base: ["Almizcle Blanco", "Praliné"]
    },
  },
  {
    id: 230,
    name: "Victoria",
    brand: "Premium Edition",
    price: 32000,
    image: "/images/mockups/victoria_100ml.webp",
    category: "arabe",
    description: "Una esencia fresca, juguetona y cautivadora. Combina la frescura de los cítricos con la dulzura de los pétalos de flores.",
    size: "100ml",
    notes: {
      top: ["Mandarina", "Pera"],
      heart: ["Orquídea", "Jazmín"],
      base: ["Sándalo", "Vainilla", "Almizcle"]
    },
  }
"""

file_path = 'src/data/arabProducts.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Buscamos el final de la lista exportada
# Normalmente termina en `];`
if '];' in content:
    content = content.replace('];', new_products + '];')
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print('10 productos agregados correctamente a arabProducts.ts')
else:
    print('No se encontró el final del array ];')
