import json
import os
import re

with open('src/data/arabProducts.ts', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

if 'id: 115' in text:
    part1 = text.split('id: 115')[0]
    part1 = part1.rsplit('{', 1)[0]
else:
    part1 = text

files = os.listdir('public/images/mockups')
webp_files = [f for f in files if f.endswith('.webp')]

start_id = 115
new_products = ''

for f in webp_files:
    # Build clean name from filename
    raw_name = f.replace('.webp', '')
    raw_name = raw_name.replace('_ai_recreated', '')
    raw_name = raw_name.replace('100ml', '')
    raw_name = raw_name.replace('-', ' ')
    raw_name = raw_name.replace('_', ' ')
    raw_name = re.sub(' +', ' ', raw_name).strip()
    
    # Capitalize title case
    words = raw_name.split(' ')
    name = ' '.join(word.capitalize() for word in words)

    # Some manual overrides if needed
    if 'Al Nashama' in name: name = 'Al Nashama Caprice'
    elif 'Art Of Arabia' in name: name = 'Art Of Arabia III'

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

with open('src/data/arabProducts.ts', 'w', encoding='utf-8') as f:
    f.write(final_content)

print('Synchronized products list with new filenames')
