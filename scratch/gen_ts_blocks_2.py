new_products = [
    {
        "name": "Khalid",
        "brand": "Lattafa",
        "price": 50000,
        "image": "/images/mockups/khalid_mockup.webp",
        "category": "hombre",
        "description": "Una fragancia masculina potente con notas de azafrán, cuero y oud, presentada en un frasco escultórico.",
        "size": "80ml",
        "notes": {
            "top": ["Azafrán"],
            "heart": ["Cuero"],
            "base": ["Oud", "Sándalo"]
        }
    },
    {
        "name": "L'Intrude",
        "brand": "Maison Alhambra",
        "price": 40000,
        "image": "/images/mockups/lintrude_mockup.webp",
        "category": "mujer",
        "description": "Inspirada en L'Interdit, una fragancia floral blanca sofisticada con nardos y azahar.",
        "size": "100ml",
        "notes": {
            "top": ["Bergamota", "Pera"],
            "heart": ["Nardos", "Azahar", "Jazmín"],
            "base": ["Vainilla", "Pachulí"]
        }
    },
    {
        "name": "Leuer d'Espoir Serene Grove",
        "brand": "Lattafa",
        "price": 45000,
        "image": "/images/mockups/leuer_despoir_mockup.webp",
        "category": "unisex",
        "description": "Una fragancia fresca y verde que evoca la serenidad de un bosque cítrico.",
        "size": "100ml",
        "notes": {
            "top": ["Notas verdes", "Cítricos frescos"],
            "heart": ["Maderas ligeras"],
            "base": ["Almizcle"]
        }
    },
    {
        "name": "Mohra Silky Rose",
        "brand": "Lattafa",
        "price": 45000,
        "image": "/images/mockups/mohra_silky_rose_mockup.webp",
        "category": "mujer",
        "description": "Una rosa sedosa y afrutada combinada con lichi y pimienta rosa para una elegancia moderna.",
        "size": "100ml",
        "notes": {
            "top": ["Rosa", "Lichi"],
            "heart": ["Pimienta rosa"],
            "base": ["Almizcle", "Sándalo"]
        }
    },
    {
        "name": "Nebras",
        "brand": "Lattafa",
        "price": 50000,
        "image": "/images/mockups/nebras_mockup.webp",
        "category": "unisex",
        "description": "Una delicia gourmand de cacao y vainilla con toques de frutos rojos y azúcar.",
        "size": "100ml",
        "notes": {
            "top": ["Frutos rojos", "Mandarina"],
            "heart": ["Cacao", "Vainilla"],
            "base": ["Azúcar", "Haba tonka"]
        }
    }
]

start_id = 201
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
