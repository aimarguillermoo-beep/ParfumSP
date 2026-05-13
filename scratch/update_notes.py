import os

FILE_PATH = r"c:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts"

NEW_PRODUCTS = """  {
    id: 206,
    name: "Badee Al Oud Noble Blush",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/noble_blush.webp",
    category: "mujer",
    description: "Una fragancia femenina y dulce que combina la cremosidad del merengue con la delicadeza de la rosa.",
    size: "100ml",
    notes: {
      top: ["Notas florales suaves"],
      heart: ["Bayas"],
      base: ["Almizcle blanco"]
    },
  },
  {
    id: 207,
    name: "Odyssey Aqua",
    brand: "Armaf",
    price: 60000,
    image: "/images/mockups/odyssey_aqua.webp",
    category: "hombre",
    description: "Frescura acuática y aromática con un toque cítrico vibrante, ideal para el hombre moderno.",
    size: "100ml",
    notes: {
      top: ["Notas marinas", "Pomelo (toronja)"],
      heart: ["Laurel"],
      base: ["Ámbar gris"]
    },
  },
  {
    id: 208,
    name: "Odyssey Mandarin Sky",
    brand: "Armaf",
    price: 60000,
    image: "/images/mockups/odyssey_mandarin_sky.webp",
    category: "hombre",
    description: "Un equilibrio perfecto entre cítricos dulces y notas amaderadas cálidas, con un corazón de caramelo.",
    size: "100ml",
    notes: {
      top: ["Mandarina", "Naranja", "Azafrán"],
      heart: ["Caramelo"],
      base: ["Toque dulce"]
    },
  },
  {
    id: 209,
    name: "Pisa",
    brand: "Lattafa Pride",
    price: 55000,
    image: "/images/mockups/pisa.webp",
    category: "unisex",
    description: "Inspirada en la elegancia italiana, esta fragancia cítrica y amaderada evoca la frescura del Mediterráneo.",
    size: "100ml",
    notes: {
      top: ["Notas cítricas"],
      heart: ["Notas herbales"],
      base: ["Almizcle limpio"]
    },
  },
  {
    id: 210,
    name: "Play",
    brand: "Lattafa Pride",
    price: 55000,
    image: "/images/mockups/play.webp",
    category: "mujer",
    description: "Una fragancia juguetona y dinámica que combina frutas jugosas con un fondo amaderado sofisticado.",
    size: "100ml",
    notes: {
      top: ["Notas frutales dulces"],
      heart: ["Flores blancas"],
      base: ["Vainilla"]
    },
  },
  {
    id: 211,
    name: "Club de Nuit Precieux",
    brand: "Armaf",
    price: 85000,
    image: "/images/mockups/precieux.webp",
    category: "hombre",
    description: "Un extracto de perfume de alta gama, potente y lujoso, con una estela inconfundible de cuero y ámbar.",
    size: "55ml",
    notes: {
      top: ["Notas cítricas"],
      heart: ["Especias picantes"],
      base: ["Almizcle", "Madera"]
    },
  },
  {
    id: 212,
    name: "Qaed Al Fursan Untamed",
    brand: "Lattafa",
    price: 45000,
    image: "/images/mockups/untamed.webp",
    category: "hombre",
    description: "Una versión audaz y salvaje de Qaed Al Fursan, con especias cálidas y un fondo ambarado profundo.",
    size: "90ml",
    notes: {
      top: ["Piña", "Azafrán"],
      heart: ["Notas amaderadas"],
      base: ["Ámbar"]
    },
  },
  {
    id: 213,
    name: "Sehr",
    brand: "Lattafa",
    price: 65000,
    image: "/images/mockups/sehr.webp",
    category: "unisex",
    description: "Una fragancia oriental cautivadora con la calidez de la canela y la profundidad de la vainilla absoluta.",
    size: "100ml",
    notes: {
      top: ["Canela"],
      heart: ["Praliné", "Dátiles"],
      base: ["Vainilla", "Incienso"]
    },
  },
];"""

def main():
    with open(FILE_PATH, "r", encoding="utf-8") as f:
        lines = f.readlines()
        
    start_idx = -1
    for i, line in enumerate(lines):
        if "id: 206," in line:
            start_idx = i - 1  # Get the "  {"
            break
            
    if start_idx != -1:
        # End index is where ]; is
        end_idx = len(lines) - 1
        while "];" not in lines[end_idx] and end_idx > start_idx:
            end_idx -= 1
            
        new_lines = lines[:start_idx]
        new_lines.append(NEW_PRODUCTS + "\n")
        
        with open(FILE_PATH, "w", encoding="utf-8") as f:
            f.writelines(new_lines)
            
        print("Notes updated successfully.")
    else:
        print("Could not find id: 206")

if __name__ == "__main__":
    main()
