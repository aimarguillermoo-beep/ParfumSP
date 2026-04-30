import json
import os

with open('src/data/arabProducts.ts', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

if 'id: 115' in text:
    part1 = text.split('id: 115')[0]
    part1 = part1.rsplit('{', 1)[0]
else:
    part1 = text

files = os.listdir('public/images/mockups')
png_files = [f for f in files if f.endswith('.png')]

start_id = 115
new_products = ''

for f in png_files:
    name = f.replace('_ai_recreated.png', '').replace('_', ' ').replace('.png', '')
    if 'al nashama' in name.lower(): name = 'Al Nashama Caprice'
    elif 'art of arabia' in name.lower(): name = 'Art of Arabia III'
    elif 'hayaati' in name.lower(): name = 'Hayaati'
    elif 'art of nature' in name.lower(): name = 'Art of Nature II'
    else: name = f'Colección Premium {start_id}'

    new_products += f'''  {{
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
'''
    start_id += 1

final_content = part1 + new_products + '];\n'

final_content = final_content.replace('Coleccin', 'Colección')
final_content = final_content.replace('mǭs', 'más')
final_content = final_content.replace('ǭrabe', 'árabe')
final_content = final_content.replace('Sǭndalo', 'Sándalo')
final_content = final_content.replace('?mbar', 'Ámbar')

with open('src/data/arabProducts.ts', 'w', encoding='utf-8') as f:
    f.write(final_content)

print('Fixed products list')
