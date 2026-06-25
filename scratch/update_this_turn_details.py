import os

file_path = r"C:\Users\Guille\Desktop\Parfum_SP\src\data\arabProducts.ts"

new_entries = """  {
    id: 273,
    name: "B.A.D. Homme",
    brand: "Maison Alhambra",
    price: 40000,
    image: "/images/mockups/bad_homme_100ml.webp",
    category: "hombre",
    description: "Una alternativa directa a Bad Boy de Carolina Herrera. Cruza una salida especiada y chispeante con un fondo oscuro y dulce de cacao bien nocturno.",
    size: "100ml",
    notes: {
      top: ["Pimienta negra", "Pimienta blanca", "Bergamota de Calabria"],
      heart: ["Salvia", "Cedro"],
      base: ["Haba tonka", "Cacao", "Madera de ámbar"]
    },
  },
  {
    id: 274,
    name: "CK One",
    brand: "Calvin Klein",
    price: 75000,
    image: "/images/mockups/ck_one_200ml.webp",
    category: "unisex",
    description: "El clásico de diseñador indiscutido de los 90s en su versión gigante de 200ml. Cítrico, hiper fresco, limpio y totalmente neutro.",
    size: "200ml",
    notes: {
      top: ["Limón", "Notas verdes", "Bergamota", "Piña", "Mandarina", "Cardamomo", "Papaya"],
      heart: ["Lirio de los valles", "Jazmín", "Violeta", "Nuez moscada", "Rosa", "Freesia"],
      base: ["Acorde verde", "Almizcle", "Cedro", "Sándalo", "Musgo de roble", "Ámbar"]
    },
  },
  {
    id: 275,
    name: "Delilah",
    brand: "Maison Alhambra",
    price: 50000,
    image: "/images/mockups/delilah_100ml.webp",
    category: "mujer",
    description: "Otra excelente interpretación inspirada en Delina de Parfums de Marly. Un floral rosáceo, fresco y ligeramente ácido que se vende un montón.",
    size: "100ml",
    notes: {
      top: ["Ruibarbo", "Lichi", "Bergamota", "Nuez moscada"],
      heart: ["Rosa turca", "Peonía", "Almizcle"],
      base: ["Vainilla", "Cachemira", "Cedro", "Incienso"]
    },
  },
  {
    id: 276,
    name: "Durrat Al Aroos",
    brand: "Al Wataniah",
    price: 40000,
    image: "/images/mockups/durrat_al_aroos_100ml.webp",
    category: "mujer",
    description: "Una fragancia cremosa, empolvada y exótica. Se siente limpia por el almizcle blanco, pero con una calidez oriental muy fina.",
    size: "100ml",
    notes: {
      top: ["Almizcle blanco", "Cipriol (nagarmota)", "Notas cítricas ligeras"],
      heart: ["Vainilla", "Azafrán", "Cardamomo"],
      base: ["Madera de sándalo", "Haba tonka", "Madera de gaiac"]
    },
  },
  {
    id: 277,
    name: "Dynasty",
    brand: "Lattafa",
    price: 40000,
    image: "/images/mockups/dynasty_100ml.webp",
    category: "hombre",
    description: "Un aroma masculino elegante y con presencia, excelente para uso diario formal o de oficina.",
    size: "100ml",
    notes: {
      top: ["Mandarina", "Bergamota", "Notas verdes aromáticas"],
      heart: ["Lavanda", "Azafrán", "Nuez moscada"],
      base: ["Cuero", "Madera de sándalo", "Ámbar", "Cedro"]
    },
  },
  {
    id: 278,
    name: "Firestorm",
    brand: "French Avenue",
    price: 85000,
    image: "/images/mockups/firestorm_100ml.webp",
    category: "unisex",
    description: "Fragancia densa, oscura y con mucha personalidad, ideal para climas fríos o salidas nocturnas.",
    size: "100ml",
    notes: {
      top: ["Pimienta negra", "Canela en rama", "Madera de oud ligera"],
      heart: ["Cuero", "Tabaco", "Notas resinosas de ámbar"],
      base: ["Vainilla", "Pachulí", "Notas ahumadas"]
    },
  },
  {
    id: 279,
    name: "Kingsman",
    brand: "Maison Alhambra",
    price: 40000,
    image: "/images/mockups/kingsman_100ml.webp",
    category: "hombre",
    description: "Inspirado en K de Dolce & Gabbana. Es un aroma herbal, cítrico y amaderado muy mediterráneo, pulcro y sumamente versátil.",
    size: "100ml",
    notes: {
      top: ["Cítricos", "Naranja sanguina", "Limón siciliano", "Bayas de enebro"],
      heart: ["Pimiento", "Esclarea", "Geranio", "Lavanda"],
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
    description: "Una explosión tropical ultra veraniega. Huele literal a un licuado cremoso de mango y coco, súper adictivo.",
    size: "100ml",
    notes: {
      top: ["Mango maduro", "Maracuyá (fruta de la pasión)", "Mandarina"],
      heart: ["Notas florales exóticas", "Jazmín", "Jengibre"],
      base: ["Leche de coco", "Vainilla", "Sándalo", "Almizcle blanco"]
    },
  },
  {
    id: 281,
    name: "Odyssey Marshmallow",
    brand: "Armaf",
    price: 55000,
    image: "/images/mockups/odyssey_marshmallow_100ml.webp",
    category: "unisex",
    description: "Una fragancia puramente gourmand. Si a tus clientes les gustan los aromas hiper dulces que huelen a confitería o postre, este vuela.",
    size: "100ml",
    notes: {
      top: ["Malvavisco (marshmallow)", "Azúcar glas", "Frutos rojos"],
      heart: ["Crema batida", "Vainilla", "Flor de azahar"],
      base: ["Haba tonka", "Almizcle suave", "Ámbar"]
    },
  },
  {
    id: 282,
    name: "Peace & Love",
    brand: "Lattafa",
    price: 70000,
    image: "/images/mockups/peace_and_love_100ml.webp",
    category: "mujer",
    description: "Una propuesta floral-frutal muy jovial, alegre y fácil de usar en el día a día.",
    size: "100ml",
    notes: {
      top: ["Notas de frutas jugosas", "Mandarina", "Durazno"],
      heart: ["Flores blancas", "Jazmín", "Un toque de rosa"],
      base: ["Vainilla dulce", "Almizcle blanco", "Maderas suaves"]
    },
  },
  {
    id: 283,
    name: "Wolf",
    brand: "Rayhaan",
    price: 65000,
    image: "/images/mockups/wolf_rayhaan_100ml.webp",
    category: "hombre",
    description: "Sigue el popular ADN frutal y ahumado (estilo Aventus/Club de Nuit). La botella con el relieve del lobo destaca muchísimo a la vista.",
    size: "100ml",
    notes: {
      top: ["Piña", "Bergamota", "Notas frutales frescas"],
      heart: ["Jazmín", "Abedul", "Pachulí"],
      base: ["Almizcle", "Musgo de roble", "Ámbar gris"]
    },
  },
"""

try:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # We find where id: 273 starts in the file
    idx = content.find("id: 273,")
    if idx != -1:
        # Find the opening brace of this object, which is before "id: 273"
        # We search backwards for "{" from idx
        brace_idx = content.rfind("{", 0, idx)
        if brace_idx != -1:
            # We replace everything from brace_idx to the ending ]; of the file
            closing_idx = content.rfind("];")
            if closing_idx != -1:
                new_content = content[:brace_idx] + new_entries + "];\n"
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print("Successfully updated the 11 new products with your exact descriptions and notes.")
            else:
                print("Error: Could not find the closing '];'")
        else:
            print("Error: Could not find the opening '{' of product 273")
    else:
        print("Error: Could not find 'id: 273' in the catalog file.")
except Exception as e:
    print(f"Error during catalog update: {e}")
