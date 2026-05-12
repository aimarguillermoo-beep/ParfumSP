import os

new_products = [
    {
        "name": "9 PM Rebel",
        "brand": "Afnan",
        "price": 60000,
        "image": "/images/mockups/9pm_rebel_mockup.webp",
        "category": "hombre",
        "description": "Una versión rebelde y audaz del clásico 9PM, con una apertura cítrica y un corazón dulce irresistible.",
        "size": "100ml",
        "notes": {
            "top": ["Mandarina", "Manzana Granny Smith", "Caramelo"],
            "heart": ["Cedro", "Vainilla"],
            "base": ["Almizcle", "Ámbar"]
        }
    },
    {
        "name": "Asad Elixir",
        "brand": "Lattafa",
        "price": 75000,
        "image": "/images/mockups/asad_elixir_mockup.webp",
        "category": "hombre",
        "description": "Una versión más intensa con notas de pimienta negra, café, vainilla y un fondo amaderado profundo.",
        "size": "100ml",
        "notes": {
            "top": ["Pimienta negra", "Piña", "Tabaco"],
            "heart": ["Café", "Pachulí", "Iris"],
            "base": ["Ámbar", "Vainilla", "Maderas secas", "Benjuí", "Ládano"]
        }
    },
    {
        "name": "Eternal Oud",
        "brand": "Lattafa",
        "price": 85000,
        "image": "/images/mockups/eternal_oud_mockup.webp",
        "category": "unisex",
        "description": "Una fragancia mística y eterna que combina la ciruela y el oud en un frasco artístico.",
        "size": "100ml",
        "notes": {
            "top": ["Ciruela", "Pomelo"],
            "heart": ["Orquídea", "Heliotropo"],
            "base": ["Oud", "Benjuí", "Ládano"]
        }
    },
    {
        "name": "Yara Elixir",
        "brand": "Lattafa",
        "price": 55000,
        "image": "/images/mockups/yara_elixir_mockup.webp",
        "category": "mujer",
        "description": "Una versión más profunda y concentrada del famoso Yara rosa, con notas florales intensas.",
        "size": "100ml",
        "notes": {
            "top": ["Notas frutales"],
            "heart": ["Jazmín", "Gardenia"],
            "base": ["Vainilla intensa"]
        }
    },
    {
        "name": "Yara Moi",
        "brand": "Lattafa",
        "price": 45000,
        "image": "/images/mockups/yara_moi_mockup.webp",
        "category": "mujer",
        "description": "El Yara blanco, una fragancia cremosa de melocotón y jazmín con un toque de caramelo.",
        "size": "100ml",
        "notes": {
            "top": ["Melocotón (durazno)", "Jazmín"],
            "heart": ["Caramelo"],
            "base": ["Ámbar"]
        }
    },
    {
        "name": "Yara Tous",
        "brand": "Lattafa",
        "price": 45000,
        "image": "/images/mockups/yara_tous_mockup.webp",
        "category": "mujer",
        "description": "El Yara amarillo, una explosión tropical de mango y coco ideal para el verano.",
        "size": "100ml",
        "notes": {
            "top": ["Mango", "Coco", "Maracuyá"],
            "heart": ["Jazmín"],
            "base": ["Almizcle"]
        }
    },
    {
        "name": "Asad",
        "brand": "Lattafa",
        "price": 50000,
        "image": "/images/mockups/asad_mockup.webp",
        "category": "hombre",
        "description": "Inspirada en Sauvage Elixir, una fragancia potente de pimienta, piña y maderas.",
        "size": "100ml",
        "notes": {
            "top": ["Pimienta negra", "Piña", "Tabaco"],
            "heart": ["Café", "Pachulí", "Iris"],
            "base": ["Ámbar", "Vainilla", "Maderas secas"]
        }
    },
    {
        "name": "Club de Nuit Woman",
        "brand": "Armaf",
        "price": 45000,
        "image": "/images/mockups/club_de_nuit_woman_mockup.webp",
        "category": "mujer",
        "description": "Una fragancia floral y frutal elegante, conocida por su parecido con Coco Mademoiselle.",
        "size": "105ml",
        "notes": {
            "top": ["Bergamota", "Toronja (pomelo)", "Melocotón", "Naranja"],
            "heart": ["Geranio", "Jazmín", "Lichi", "Rosa"],
            "base": ["Almizcle", "Pachulí", "Vainilla", "Vetiver"]
        }
    },
    {
        "name": "Desirable Addiction",
        "brand": "Lattafa",
        "price": 45000,
        "image": "/images/mockups/desirable_addiction_mockup.webp",
        "category": "unisex",
        "description": "Una adicción dulce con notas de chocolate y café que envuelven los sentidos.",
        "size": "100ml",
        "notes": {
            "top": ["Chocolate", "Especias"],
            "heart": ["Café"],
            "base": ["Vainilla"]
        }
    }
]

start_id = 192
ts_blocks = []

for i, p in enumerate(new_products):
    block = f"""  {{
    id: {start_id + i},
    name: "{p['name']}",
    brand: "{p['brand']}",
    price: {p['price']},
    image: "{p['image']}",
    category: "{p['category']}",
    description: "{p['description']}",
    size: "{p['size']}",
    notes: {{
      top: {p['notes']['top']},
      heart: {p['notes']['heart']},
      base: {p['notes']['base']}
    }},
  }},"""
    ts_blocks.append(block)

print("\n".join(ts_blocks))
