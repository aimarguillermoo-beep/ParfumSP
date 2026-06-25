import os

file_path = r"C:\Users\Guille\Desktop\Parfum_SP\src\data\arabProducts.ts"

new_entries = """  {
    id: 273,
    name: "B.A.D Homme",
    brand: "Maison Alhambra",
    price: 40000,
    image: "/images/mockups/bad_homme_100ml.webp",
    category: "hombre",
    description: "Una fragancia audaz y magnética con un contraste perfecto de notas dulces, cacao y especias, que evoca una masculinidad moderna y sofisticada.",
    size: "100ml",
    notes: {
      top: ["Cacao", "Pimienta negra", "Bergamota"],
      heart: ["Salvia", "Cedro"],
      base: ["Haba tonka", "Ámbar", "Madera de cacao"]
    },
  },
  {
    id: 274,
    name: "CK One",
    brand: "Calvin Klein",
    price: 75000,
    image: "/images/mockups/ck_one_200ml.webp",
    category: "unisex",
    description: "Un clásico eterno y revolucionario. Una fragancia limpia, pura y refrescante que combina notas cítricas, florales y verdes sobre un fondo almizclado sumamente versátil.",
    size: "200ml",
    notes: {
      top: ["Limón", "Notas verdes", "Bergamota", "Piña", "Mandarina"],
      heart: ["Jazmín", "Lirio de los valles", "Rosa", "Flor de violeta", "Cardamomo"],
      base: ["Almizcle limpio", "Ámbar", "Sándalo", "Cedro"]
    },
  },
  {
    id: 275,
    name: "Delilah",
    brand: "Maison Alhambra",
    price: 50000,
    image: "/images/mockups/delilah_100ml.webp",
    category: "mujer",
    description: "Inspirada en Delina, es una obra de arte floral y afrutada, dominada por la rosa y el ruibarbo, con un fondo cremoso y almizclado que irradia romanticismo y alta costura.",
    size: "100ml",
    notes: {
      top: ["Ruibarbo", "Lichi", "Bergamota", "Nuez moscada"],
      heart: ["Rosa turca", "Peonía", "Petalia", "Vainilla"],
      base: ["Cashmeran", "Almizcle", "Cedro", "Incienso"]
    },
  },
  {
    id: 276,
    name: "Durrat Al Aroos",
    brand: "Al Wataniah",
    price: 40000,
    image: "/images/mockups/durrat_al_aroos_100ml.webp",
    category: "mujer",
    description: "Una joya de la perfumería árabe que significa 'Perla de la Novia'. Una fragancia dulce, cremosa y sutilmente almizclada que despliega flores delicadas y acordes de vainilla.",
    size: "100ml",
    notes: {
      top: ["Almizcle blanco", "Cipriol"],
      heart: ["Vainilla", "Cardamomo", "Azafrán"],
      base: ["Madera de gaiac", "Oud", "Haba tonka"]
    },
  },
  {
    id: 277,
    name: "Dynasty",
    brand: "Lattafa",
    price: 40000,
    image: "/images/mockups/dynasty_100ml.webp",
    category: "hombre",
    description: "Una fragancia señorial y distinguida con una salida cítrica refrescante que evoluciona hacia un corazón especiado y un fondo amaderado potente y masculino.",
    size: "100ml",
    notes: {
      top: ["Cítricos", "Bergamota", "Notas verdes"],
      heart: ["Especias", "Pimienta", "Lavanda"],
      base: ["Notas amaderadas", "Pachulí", "Ámbar gris"]
    },
  },
  {
    id: 278,
    name: "Firestorm",
    brand: "French Avenue",
    price: 85000,
    image: "/images/mockups/firestorm_100ml.webp",
    category: "unisex",
    description: "Una explosión olfativa ardiente y magnética de la colección premium de French Avenue. Una fragancia unisex que equilibra especias cálidas y un fondo denso amaderado.",
    size: "100ml",
    notes: {
      top: ["Pimienta", "Especias cálidas"],
      heart: ["Madera de cedro", "Cuero"],
      base: ["Ámbar", "Vetiver", "Almizcle"]
    },
  },
  {
    id: 279,
    name: "Kingsman",
    brand: "Maison Alhambra",
    price: 40000,
    image: "/images/mockups/kingsman_100ml.webp",
    category: "hombre",
    description: "Inspirada en K de Dolce & Gabbana, es una fragancia fresca e imponente que corona a quien la lleva con una mezcla cítrica, especiada y un fondo noble de maderas y vetiver.",
    size: "100ml",
    notes: {
      top: ["Cítricos", "Naranja roja", "Limón siciliano", "Bayas de enebro"],
      heart: ["Pimiento dulce", "Lavanda", "Salvia", "Geranio"],
      base: ["Cedro", "Vetiver", "Pachulí"]
    },
  },
  {
    id: 280,
    name: "Odyssey Go Mango",
    brand: "Armaf",
    price: 65000,
    image: "/images/mockups/odyssey_go_mango_100ml.webp",
    category: "unisex",
    description: "Una fragancia tropical hiper realista que celebra el aroma jugoso y vibrante del mango maduro con toques verdes y un fondo cálido y ambarado sumamente adictivo.",
    size: "100ml",
    notes: {
      top: ["Mango maduro", "Notas tropicales", "Toques verdes"],
      heart: ["Flor de mango", "Jazmín", "Durazno"],
      base: ["Ámbar", "Vainilla", "Almizcle"]
    },
  },
  {
    id: 281,
    name: "Odyssey Marshmallow",
    brand: "Armaf",
    price: 55000,
    image: "/images/mockups/odyssey_marshmallow_100ml.webp",
    category: "unisex",
    description: "Una creación dulce y reconfortante. Evoca la suavidad y el dulzor de los malvaviscos esponjosos combinados con notas florales suaves y un fondo cremoso de vainilla.",
    size: "100ml",
    notes: {
      top: ["Malvavisco", "Notas dulces", "Cítricos suaves"],
      heart: ["Jazmín", "Flor de azahar", "Caramelo"],
      base: ["Vainilla", "Almizcle", "Sándalo"]
    },
  },
  {
    id: 282,
    name: "Peace & Love",
    brand: "Lattafa Pride",
    price: 70000,
    image: "/images/mockups/peace_and_love_100ml.webp",
    category: "mujer",
    description: "Una fragancia poética y encantadora presentada en un frasco único. Combina la frescura de flores blancas con la calidez del ámbar y notas balsámicas suaves.",
    size: "100ml",
    notes: {
      top: ["Notas florales frescas", "Cítricos"],
      heart: ["Jazmín", "Rosa", "Notas balsámicas"],
      base: ["Ámbar", "Almizcle", "Vainilla"]
    },
  },
  {
    id: 283,
    name: "Wolf",
    brand: "Rayhaan",
    price: 65000,
    image: "/images/mockups/wolf_rayhaan_100ml.webp",
    category: "hombre",
    description: "Una fragancia poderosa y salvaje para el hombre decidido. Combina notas especiadas, maderas nobles y un aura misteriosa que deja una huella inolvidable.",
    size: "100ml",
    notes: {
      top: ["Especias frescas", "Pimienta", "Bergamota"],
      heart: ["Maderas nobles", "Pachulí"],
      base: ["Cuero", "Ámbar", "Almizcle"]
    },
  },
"""

try:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Find the last closing square bracket of the main array export
    # Usually the file ends with:
    #   },
    # ];
    
    # We find the rfind of "];"
    idx = content.rfind("];")
    if idx != -1:
        new_content = content[:idx] + new_entries + content[idx:]
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print("Successfully appended 11 new products to arabProducts.ts.")
    else:
        print("Could not find the closing '];' of the array.")
except Exception as e:
    print(f"Error appending products: {e}")
