import re

file_path = r"C:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts"

new_products = """  {
    id: 189,
    name: "Supremacy Pour Homme",
    brand: "Afnan",
    price: 55000,
    image: "/images/mockups/supremacy_mockup.webp",
    category: "hombre",
    description: "Una fragancia poderosa y elegante inspirada en el legendario Aventus.",
    size: "100ml",
    notes: {
      top: ["Piña", "Grosellas negras", "Bergamota", "Manzana"],
      heart: ["Abedul", "Jazmín"],
      base: ["Almizcle", "Ámbar gris"]
    },
  },
  {
    id: 190,
    name: "Viking Kashmir",
    brand: "Fragrance World",
    price: 50000,
    image: "/images/mockups/viking_kashmir_mockup.webp",
    category: "unisex",
    description: "Una mezcla fresca y especiada que evoca la fuerza y el espíritu de los exploradores.",
    size: "100ml",
    notes: {
      top: ["Pimienta rosa", "Menta", "Limón"],
      heart: ["Lavanda", "Clavo de olor", "Pimienta de Jamaica"],
      base: ["Sándalo", "Vetiver"]
    },
  },
  {
    id: 191,
    name: "Yara",
    brand: "Lattafa",
    price: 45000,
    image: "/images/mockups/yara_mockup.webp",
    category: "mujer",
    description: "El famoso 'perfume rosa', una fragancia tropical y cremosa que encanta a todos.",
    size: "100ml",
    notes: {
      top: ["Orquídea", "Heliotropo", "Mandarina"],
      heart: ["Notas tropicales"],
      base: ["Vainilla", "Almizcle", "Sándalo"]
    },
  },
];"""

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

if "];" in content:
    parts = content.rsplit("];", 1)
    new_content = parts[0] + "," + new_products
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Added the 3 missing products successfully.")
else:
    print("Could not find ];")
