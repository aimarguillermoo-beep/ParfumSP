import re

file_path = r"C:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts"

new_products = """  {
    id: 158,
    name: "Perfume 1",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/mockup_1.webp",
    category: "unisex",
    description: "Una nueva y exclusiva adición a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Notas cítricas"],
      heart: ["Especias", "Ámbar"],
      base: ["Maderas", "Almizcle"]
    },
  },
  {
    id: 159,
    name: "Angham",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/angham_mockup.webp",
    category: "unisex",
    description: "Una nueva y exclusiva adición a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Notas cítricas"],
      heart: ["Especias", "Ámbar"],
      base: ["Maderas", "Almizcle"]
    },
  },
  {
    id: 160,
    name: "Hayaati Gold Elixir",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/hayaati_gold_mockup.webp",
    category: "unisex",
    description: "Una nueva y exclusiva adición a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Notas cítricas"],
      heart: ["Especias", "Ámbar"],
      base: ["Maderas", "Almizcle"]
    },
  },
  {
    id: 161,
    name: "Perfume 2",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/mockup_2.webp",
    category: "unisex",
    description: "Una nueva y exclusiva adición a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Notas cítricas"],
      heart: ["Especias", "Ámbar"],
      base: ["Maderas", "Almizcle"]
    },
  },
  {
    id: 162,
    name: "Celeste",
    brand: "Maison Alhambra",
    price: 50000,
    image: "/images/mockups/celeste_mockup.webp",
    category: "mujer",
    description: "Una nueva y exclusiva adición a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Notas cítricas"],
      heart: ["Especias", "Ámbar"],
      base: ["Maderas", "Almizcle"]
    },
  },
  {
    id: 163,
    name: "Coconut Lagoon",
    brand: "Ministry of Gourmand",
    price: 50000,
    image: "/images/mockups/coconut_lagoon_mockup.webp",
    category: "unisex",
    description: "Una nueva y exclusiva adición a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Notas cítricas"],
      heart: ["Especias", "Ámbar"],
      base: ["Maderas", "Almizcle"]
    },
  },
  {
    id: 164,
    name: "Perfume 3",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/mockup_3.webp",
    category: "unisex",
    description: "Una nueva y exclusiva adición a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Notas cítricas"],
      heart: ["Especias", "Ámbar"],
      base: ["Maderas", "Almizcle"]
    },
  },
  {
    id: 165,
    name: "Erba Pura",
    brand: "Xerjoff",
    price: 50000,
    image: "/images/mockups/erba_pura_mockup.webp",
    category: "unisex",
    description: "Una nueva y exclusiva adición a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Notas cítricas"],
      heart: ["Especias", "Ámbar"],
      base: ["Maderas", "Almizcle"]
    },
  },
  {
    id: 166,
    name: "Perfume 4",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/mockup_4.webp",
    category: "unisex",
    description: "Una nueva y exclusiva adición a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Notas cítricas"],
      heart: ["Especias", "Ámbar"],
      base: ["Maderas", "Almizcle"]
    },
  },
  {
    id: 167,
    name: "Perfume 5",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/mockup_5.webp",
    category: "unisex",
    description: "Una nueva y exclusiva adición a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Notas cítricas"],
      heart: ["Especias", "Ámbar"],
      base: ["Maderas", "Almizcle"]
    },
  },
  {
    id: 168,
    name: "Mayar",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/mayar_mockup.webp",
    category: "mujer",
    description: "Una nueva y exclusiva adición a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Notas cítricas"],
      heart: ["Especias", "Ámbar"],
      base: ["Maderas", "Almizcle"]
    },
  },
  {
    id: 169,
    name: "Perfume 6",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/mockup_6.webp",
    category: "unisex",
    description: "Una nueva y exclusiva adición a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Notas cítricas"],
      heart: ["Especias", "Ámbar"],
      base: ["Maderas", "Almizcle"]
    },
  },
  {
    id: 170,
    name: "Perfume 7",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/mockup_7.webp",
    category: "unisex",
    description: "Una nueva y exclusiva adición a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Notas cítricas"],
      heart: ["Especias", "Ámbar"],
      base: ["Maderas", "Almizcle"]
    },
  },
  {
    id: 171,
    name: "Perfume 8",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/mockup_8.webp",
    category: "unisex",
    description: "Una nueva y exclusiva adición a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Notas cítricas"],
      heart: ["Especias", "Ámbar"],
      base: ["Maderas", "Almizcle"]
    },
  }
];"""

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the closing "];" with the new products and the closing "];"
if "];" in content:
    content = content.replace("];", new_products)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Products successfully added to arabProducts.ts")
else:
    print("Could not find the end of the array '];'")
