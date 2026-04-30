import os

mockups_dir = 'public/images/mockups'
if not os.path.exists(mockups_dir):
    print("Mockups dir not found")
    exit()

files = os.listdir(mockups_dir)
png_files = [f for f in files if f.endswith('.png')]

start_id = 115
new_products = ""

for f in png_files:
    name = f.replace('_ai_recreated.png', '').replace('_', ' ')
    if f == 'al_nashama_ai_recreated.png': name = 'Al Nashama Caprice'
    elif f == 'art_of_arabia_ai_recreated.png': name = 'Art of Arabia III'
    elif f == 'hayaati_ai_recreated.png': name = 'Hayaati'
    elif f == 'Art_Of_Nature_II_ai_recreated.png': name = 'Art of Nature II'
    else: name = f"Colección Premium {start_id}"

    new_products += f"""  {{
    id: {start_id},
    name: "{name}",
    brand: "Lattafa",
    price: 35000,
    image: "/images/mockups/{f}",
    category: "arabe",
    description: "Una de nuestras adiciones más exclusivas a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {{
      top: ["Bergamota", "Azafrán"],
      heart: ["Rosa de Damasco", "Oud"],
      base: ["Sándalo", "Ámbar gris"]
    }},
  }},
"""
    start_id += 1

with open('src/data/arabProducts.ts', 'r', encoding='utf-8') as file:
    content = file.read()

# Insert before the last ];
if '];' in content:
    content = content.replace('];', new_products + '];')

with open('src/data/arabProducts.ts', 'w', encoding='utf-8') as file:
    file.write(content)

print(f"Added {len(png_files)} products to arabProducts.ts")
