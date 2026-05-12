import re

file_path = r"c:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

updates = {
    "9 PM Elixir": {
        "description": "Versión concentrada con notas intensas de ámbar, maderas y especias picantes.",
        "notes": {"top": ["Ámbar"], "heart": ["Especias picantes"], "base": ["Madera"]}
    },
    "Hayaati": {
        "description": "Una fragancia fresca y dinámica con una salida frutal y un corazón especiado cálido.",
        "notes": {"top": ["Manzana verde", "Bergamota"], "heart": ["Cardamomo", "Canela"], "base": ["Notas amaderadas"]}
    },
    "Historic Olmeda": {
        "description": "Una fragancia clásica y sofisticada que combina cítricos, especias y maderas nobles.",
        "notes": {"top": ["Pomelo", "Enebro de Virginia", "Pimienta rosa"], "heart": ["Jazmín", "Nuez moscada"], "base": ["Ámbar", "Cedro", "Pachulí"]}
    },
    "King Of Arabia": {
        "description": "La esencia de la realeza árabe capturada en una mezcla de notas marinas y cuero.",
        "notes": {"top": ["Cítricos intensos", "Notas marinas"], "heart": ["Especias orientales"], "base": ["Cuero"]}
    },
    "La Yuqawam": {
        "description": "Una obra maestra de la perfumería que equilibra la dulzura de la frambuesa con la fuerza del cuero.",
        "notes": {"top": ["Frambuesa", "Azafrán", "Tomillo"], "heart": ["Olíbano", "Jazmín"], "base": ["Cuero", "Gamuza", "Notas amaderadas"]}
    },
    "Liquid Brun": {
        "description": "Un aroma cálido y envolvente de vainilla de Madagascar y especias finas.",
        "notes": {"top": ["Canela", "Cardamomo", "Azahar"], "heart": ["Vainilla de Madagascar"], "base": ["Ámbar"]}
    },
    "Sceptre Malachite": {
        "description": "Una fragancia mineral y aromática con un carácter distintivo y elegante.",
        "notes": {"top": ["Salvia esclarea", "Mandarina"], "heart": ["Notas minerales"], "base": ["Gamuza", "Ámbar"]}
    },
    "Angham": {
        "description": "Una melodía olfativa floral y ambarada con un toque picante de jengibre.",
        "notes": {"top": ["Jengibre", "Mandarina", "Pimienta rosa"], "heart": ["Jazmín", "Rosa"], "base": ["Ámbar", "Vainilla"]}
    },
    "Celeste": {
        "description": "Dulzura celestial de melocotón y caramelo sobre un fondo suave de sándalo.",
        "notes": {"top": ["Melocotón", "Mandarina"], "heart": ["Notas florales blancas"], "base": ["Caramelo", "Sándalo"]}
    },
    "Club de Nuit Imperiale": {
        "description": "La versión más lujosa y floral de la línea Club de Nuit, con rosa turca e incienso.",
        "notes": {"top": ["Lichi", "Bergamota", "Nuez moscada"], "heart": ["Rosa turca"], "base": ["Vainilla", "Almizcle", "Incienso"]}
    },
    "Essence De Blanc": {
        "description": "Pureza y elegancia en una fragancia de flores blancas y notas empolvadas.",
        "notes": {"top": ["Flores blancas", "Bergamota"], "heart": ["Notas empolvadas"], "base": ["Almizcle"]}
    },
    "Mayar EDP": {
        "description": "Una fragancia femenina vibrante de frambuesa y lichi con un corazón de rosas blancas.",
        "notes": {"top": ["Frambuesa", "Lichi"], "heart": ["Rosa blanca", "Peonía"], "base": ["Almizcle"]}
    },
    "Qimmah For Women": {
        "description": "Sofisticación gourmet con notas de almendra, café y cacao.",
        "notes": {"top": ["Almendra", "Café"], "heart": ["Jazmín"], "base": ["Haba tonka", "Cacao", "Vainilla"]}
    },
    "Tiramisu Caramel": {
        "description": "Una delicia irresistible que combina el aroma del café y la leche con caramelo dulce.",
        "notes": {"top": ["Café", "Cacao", "Leche"], "heart": ["Caramelo"], "base": ["Vainilla", "Azúcar"]}
    },
    "Al Nashama Caprice": {
        "description": "Una fragancia unisex fresca y especiada con un carácter moderno y versátil.",
        "notes": {"top": ["Bergamota", "Jengibre"], "heart": ["Cardamomo", "Lavanda"], "base": ["Cedro"]}
    },
    "Aqua Dubai": {
        "description": "Frescura marina y cítrica inspirada en las costas de Dubai.",
        "notes": {"top": ["Mandarina", "Notas marinas"], "heart": ["Ámbar", "Almizcle"], "base": ["Maderas blancas"]}
    },
    "Art Of Arabia III": {
        "description": "Una pieza de arte olfativa con notas de té negro, jengibre y maderas preciosas.",
        "notes": {"top": ["Bergamota", "Té negro"], "heart": ["Jengibre"], "base": ["Maderas"]}
    },
    "Art Of Nature II": {
        "description": "La naturaleza capturada en una mezcla de notas verdes y maderas exóticas.",
        "notes": {"top": ["Notas verdes", "Cítricos"], "heart": ["Maderas exóticas"], "base": ["Almizcle"]}
    },
    "Coconut Lagoon": {
        "description": "Un paraíso tropical de agua de coco y notas marinas refrescantes.",
        "notes": {"top": ["Agua de coco", "Bergamota"], "heart": ["Jazmín"], "base": ["Notas marinas", "Almizcle blanco"]}
    },
    "Erba Pura": {
        "description": "Una explosión frutal cítrica con la cremosidad de la vainilla de Madagascar.",
        "notes": {"top": ["Naranja siciliana", "Limón siciliano", "Bergamota de Calabria"], "heart": ["Notas frutales mixtas"], "base": ["Vainilla de Madagascar"]}
    },
    "Hayaati Gold Elixir": {
        "description": "Un elixir dorado de lichi y cactus con un fondo suave de almizcle blanco.",
        "notes": {"top": ["Lichi", "Cactus"], "heart": ["Rosa de los valles", "Cítricos"], "base": ["Almizcle blanco"]}
    },
    "Khamrah": {
        "description": "Un perfume gourmet cálido con notas de dátiles, canela y praliné dulce.",
        "notes": {"top": ["Canela", "Nuez moscada"], "heart": ["Dátiles", "Praliné"], "base": ["Vainilla"]}
    },
    "Khamrah Qahwa": {
        "description": "La versión más intensa de Khamrah con una nota distintiva de café tostado.",
        "notes": {"top": ["Canela", "Nuez moscada"], "heart": ["Dátiles", "Praliné", "Café tostado"], "base": ["Vainilla"]}
    },
    "La Rouge Baroque Extreme": {
        "description": "Elegancia barroca con azafrán, jazmín y la profundidad del ámbar gris.",
        "notes": {"top": ["Azafrán", "Jazmín"], "heart": ["Madera de ámbar"], "base": ["Ámbar gris", "Resina de abeto"]}
    },
    "Nebras Elixir": {
        "description": "Dulzura intensa de cacao y vainilla con un toque vibrante de frutos rojos.",
        "notes": {"top": ["Frutos rojos", "Mandarina"], "heart": ["Cacao", "Vainilla"], "base": ["Azúcar", "Haba tonka"]}
    },
    "Philos Pura": {
        "description": "Una mezcla armoniosa de cítricos y frutas tropicales con un fondo avainillado.",
        "notes": {"top": ["Cítricos sicilianos"], "heart": ["Mezcla de frutas"], "base": ["Vainilla", "Almizcle blanco"]}
    },
    "Qaed Al Fursan Unlimited": {
        "description": "Dulzura tropical ilimitada con coco, piña y flores blancas.",
        "notes": {"top": ["Coco", "Cítricos", "Piña"], "heart": ["Ylang-ylang", "Jazmín"], "base": ["Vainilla"]}
    }
}

def update_product(match):
    block = match.group(0)
    name_match = re.search(r'name:\s*["\']([^"\']+)["\']', block)
    if not name_match:
        return block
    
    name = name_match.group(1)
    if name not in updates:
        return block
    
    u = updates[name]
    
    # Update description
    block = re.sub(r'description:\s*["\'][^"\']+["\']', f'description: "{u["description"]}"', block)
    
    # Update notes
    notes_str = f"""notes: {{
      top: {u['notes']['top']},
      heart: {u['notes']['heart']},
      base: {u['notes']['base']}
    }}"""
    block = re.sub(r'notes:\s*\{[^}]*top:[^}]*heart:[^}]*base:[^}]*\}', notes_str, block, flags=re.DOTALL)
    
    return block

# Find all product blocks and update them
new_content = re.sub(r'\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}', update_product, content, flags=re.DOTALL)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Update complete.")
