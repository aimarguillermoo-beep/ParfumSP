import re

file_path = r"C:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts"

updates = {
    172: { "name": "9 PM Femme", "category": "mujer", "notes": { "top": ["Frambuesa", "Manzana", "Naranja"], "heart": ["Violeta", "Jazmín", "Iris"], "base": ["Pino", "Cedro", "Ámbar"] } },
    173: { "name": "Al Haramain Amber Oud", "category": "unisex", "notes": { "top": ["Romero", "Bergamota", "Limón"], "heart": ["Cedro", "Especias"], "base": ["Notas amaderadas", "Ámbar", "Almizcle"] } },
    174: { "name": "Amethyst", "category": "unisex", "notes": { "top": ["Pimienta rosa", "Bergamota"], "heart": ["Rosa turca", "Rosa de Bulgaria", "Jazmín"], "base": ["Madera de agar (Oud)", "Ámbar", "Vainilla"] } },
    175: { "name": "Asad Bourbon", "category": "hombre", "notes": { "top": ["Pimienta negra", "Piña"], "heart": ["Café", "Pachulí", "Iris"], "base": ["Vainilla", "Ámbar", "Benjuí"] } },
    176: { "name": "Club de Nuit Male", "category": "unisex", "notes": { "top": ["Limón", "Piña", "Bergamota", "Grosellas negras"], "heart": ["Abedul", "Jazmín", "Rosa"], "base": ["Almizcle", "Ámbar gris", "Pachulí"] } },
    177: { "name": "Confidential Private Gold", "category": "unisex", "notes": { "top": ["Melocotón (durazno)", "Frambuesa", "Pera", "Maracuyá"], "heart": ["Lirio de los valles"], "base": ["Sándalo", "Vainilla", "Almizcle"] } },
    178: { "name": "Eclaire", "category": "mujer", "notes": { "top": ["Caramelo", "Leche", "Azúcar"], "heart": ["Miel", "Flores blancas"], "base": ["Vainilla", "Almizcle"] } },
    179: { "name": "Emeer", "category": "unisex", "notes": { "top": ["Limón", "Bergamota", "Bayas de enebro"], "heart": ["Salvia", "Cardamomo"], "base": ["Sándalo", "Incienso", "Pachulí"] } },
    180: { "name": "Fakhar Black", "category": "hombre", "notes": { "top": ["Manzana", "Jengibre", "Bergamota"], "heart": ["Lavanda", "Salvia", "Bayas de enebro"], "base": ["Haba tonka", "Ámbar"] } },
    181: { "name": "Fakhar Platinum", "category": "hombre", "notes": { "top": ["Toronja (pomelo)", "Notas marinas"], "heart": ["Especias", "Ládano"], "base": ["Notas amaderadas", "Ámbar gris"] } },
    182: { "name": "Ghost Spectre", "category": "unisex", "notes": { "top": ["Notas especiadas"], "heart": ["Notas amaderadas"], "base": ["Ámbar", "Toque ahumado"] } },
    183: { "name": "Happy Brush", "category": "mujer", "notes": { "top": ["Frutas dulces"], "heart": ["Notas florales suaves"], "base": ["Almizcle limpio"] } },
    184: { "name": "La Vivacite Intensa", "category": "mujer", "notes": { "top": ["Bergamota", "Pera"], "heart": ["Nardos", "Flor de azahar", "Jazmín"], "base": ["Pachulí", "Vainilla"] } },
    185: { "name": "No. 2 Men", "category": "hombre", "notes": { "top": ["Notas verdes", "Especias", "Bergamota"], "heart": ["Lavanda", "Gardenia", "Jengibre"], "base": ["Incienso", "Sándalo"] } },
    186: { "name": "Oud for Glory", "category": "unisex", "notes": { "top": ["Azafrán", "Nuez moscada", "Lavanda"], "heart": ["Madera de agar (Oud)"], "base": ["Pachulí", "Almizcle"] } },
    187: { "name": "Salvo Intense", "category": "hombre", "notes": { "top": ["Pimienta de Sichuan", "Bergamota de Calabria"], "heart": ["Lavanda", "Pachulí"], "base": ["Ambroxan"] } },
    188: { "name": "Sublime", "category": "unisex", "notes": { "top": ["Manzana", "Lichi"], "heart": ["Rosa", "Ciruela", "Jazmín"], "base": ["Vainilla", "Musgo", "Pachulí"] } }
}

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

for id, data in updates.items():
    # Update Name
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

print("Updated 17 products successfully.")
