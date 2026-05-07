import re

file_path = r"C:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

updates = {
    "Bharara King": {"price": 100000},
    "Happy Time": {"price": 35000},
    "Club de Nuit Imperiale": {"price": 80000, "size": "105ml"},
    "Angham": {"price": 55000},
    "Hayaati Al Maleky": {"price": 40000},
    "Erba Pura": {"price": 350000},
    "Liquid Brun": {"price": 90000},
    "Sceptre Malachite": {"price": 55000},
    "Qaed Al Fursan Unlimited": {"price": 40000}
}

for name, data in updates.items():
    # Regex to match the object with the specific name
    # We look for: name: "Name", followed by anything (non-greedy), up to price: \d+
    # and size: "\w+" if size needs to be updated.
    
    # Update price
    if "price" in data:
        pattern_price = r'(name:\s*"' + re.escape(name) + r'".*?price:\s*)(\d+)'
        content = re.sub(pattern_price, rf'\g<1>{data["price"]}', content, flags=re.DOTALL)
        
    # Update size
    if "size" in data:
        pattern_size = r'(name:\s*"' + re.escape(name) + r'".*?size:\s*")([^"]+)(")'
        content = re.sub(pattern_size, rf'\g<1>{data["size"]}\g<3>', content, flags=re.DOTALL)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Precios y tamaños actualizados correctamente.")
