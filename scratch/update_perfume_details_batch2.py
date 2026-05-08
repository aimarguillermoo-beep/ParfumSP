import re

file_path = r"C:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts"

updates = {
    158: { # Club de Nuit Imperiale
        "category": "mujer",
        "notes": { "top": ["Lichi", "Bergamota", "Nuez moscada"], "heart": ["Rosa turca"], "base": ["Vainilla", "Almizcle", "Incienso", "Cachemira"] }
    },
    159: { # Angham
        "category": "mujer",
        "notes": { "top": ["Jengibre", "Mandarina", "Pimienta rosa"], "heart": ["Jazmín", "Rosa"], "base": ["Ámbar", "Vainilla"] }
    },
    160: { # Hayaati Gold Elixir
        "category": "unisex",
        "notes": { "top": ["Lichi", "Cactus"], "heart": ["Rosa de los valles", "Cítricos"], "base": ["Almizcle blanco"] }
    },
    162: { # Celeste
        "category": "mujer",
        "notes": { "top": ["Melocotón (durazno)", "Mandarina"], "heart": ["Notas florales blancas"], "base": ["Caramelo", "Sándalo"] }
    },
    163: { # Coconut Lagoon
        "category": "unisex",
        "notes": { "top": ["Agua de coco", "Bergamota"], "heart": ["Jazmín"], "base": ["Notas marinas", "Almizcle blanco"] }
    },
    164: { # La Rouge Baroque Extreme
        "category": "unisex",
        "notes": { "top": ["Azafrán", "Jazmín"], "heart": ["Madera de ámbar"], "base": ["Ámbar gris", "Resina de abeto"] }
    },
    165: { # Erba Pura
        "category": "unisex",
        "notes": { "top": ["Naranja siciliana", "Limón siciliano", "Bergamota de Calabria"], "heart": ["Notas frutales mixtas"], "base": ["Vainilla de Madagascar", "Almizcle blanco"] }
    },
    166: { # Liquid Brun
        "category": "hombre",
        "notes": { "top": ["Canela", "Cardamomo", "Azahar"], "heart": ["Vainilla de Madagascar"], "base": ["Ámbar", "Notas amaderadas"] }
    },
    167: { # Qaed Al Fursan Unlimited
        "category": "unisex",
        "notes": { "top": ["Coco", "Cítricos", "Piña"], "heart": ["Ylang-ylang", "Jazmín"], "base": ["Vainilla", "Almizcle"] }
    },
    168: { # Mayar
        "category": "mujer",
        "name": "Mayar EDP",
        "notes": { "top": ["Frambuesa", "Lichi"], "heart": ["Rosa blanca", "Peonía"], "base": ["Almizcle"] }
    },
    169: { # Qimmah For Women
        "category": "mujer",
        "notes": { "top": ["Almendra", "Café"], "heart": ["Jazmín", "Haba tonka", "Cacao"], "base": ["Sándalo", "Vainilla"] }
    },
    170: { # Sceptre Malachite
        "category": "hombre",
        "notes": { "top": ["Salvia esclarea", "Mandarina"], "heart": ["Notas minerales"], "base": ["Gamuza", "Ámbar"] }
    },
    171: { # Tiramisu Caramel
        "category": "mujer",
        "name": "Tiramisu Caramel",
        "notes": { "top": ["Café", "Cacao", "Leche"], "heart": ["Caramelo"], "base": ["Vainilla", "Azúcar"] }
    }
}

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Pre-clean "ÁÁmbar" to "Ámbar"
content = content.replace("ÁÁmbar", "Ámbar")

for id, data in updates.items():
    # Update Name if provided
    if "name" in data:
        content = re.sub(rf'id: {id},\s+name: ".*?"', f'id: {id},\n    name: "{data["name"]}"', content)
    
    # Update Category
    def replace_cat(match):
        block = match.group(0)
        return re.sub(r'category: ".*?"', f'category: "{data["category"]}"', block)
    content = re.sub(rf'id: {id},[\s\S]*?category: ".*?"', replace_cat, content)
    
    # Update Notes
    new_notes = f"""    notes: {{
      top: {data['notes']['top']},
      heart: {data['notes']['heart']},
      base: {data['notes']['base']}
    }}"""
    
    pattern = rf'(id: {id},[\s\S]*?)notes: \{{[\s\S]*?\}}'
    content = re.sub(pattern, rf'\1{new_notes}', content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated 13 products successfully.")
