import os
import re
from pathlib import Path
from PIL import Image

def main():
    MOCKUPS_DIR = Path(r"c:\Users\Guille\Desktop\Parfum SP\public\images\mockups")
    TS_FILE = Path(r"c:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts")
    NOTES_FILE = Path(r"c:\Users\Guille\Desktop\notas olfativas.txt")
    
    # 1. Convert PNG to WEBP and delete PNG
    processed_files = []
    # We only want to process the specific 9 pngs just copied
    target_pngs = [
        "qaed_al_fursan_100ml.png",
        "salvo_100ml.png",
        "taureau_de_combat_100ml.png",
        "teriaq_intense__100ml.png",
        "turathi_blue_100ml.png",
        "turathi_electric_100ml.png",
        "vintage_radio_100ml.png",
        "vulcan_feu_french_avenue_100ml.png",
        "your_touch_intense_100ml.png"
    ]
    
    for filename in target_pngs:
        f = MOCKUPS_DIR / filename
        if f.exists():
            try:
                img = Image.open(f)
                webp_path = f.with_suffix(".webp")
                img.save(webp_path, "WEBP", quality=95)
                f.unlink()  # delete png
                processed_files.append(webp_path.name)
                print(f"Converted {f.name} to {webp_path.name}")
            except Exception as e:
                print(f"Error converting {f.name}: {e}")
        else:
            print(f"File {filename} not found.")

    # Read existing content
    content = TS_FILE.read_text(encoding='utf-8')
    
    # Read olfactive notes
    notes_content = NOTES_FILE.read_text(encoding='utf-8')
    
    # Find max ID
    id_matches = re.findall(r'id:\s*(\d+)', content)
    next_id = max([int(x) for x in id_matches]) + 1 if id_matches else 1
    
    # Define mapping between files and notes text
    mapping = {
        "qaed_al_fursan_100ml.webp": "Qaed Al Fursan (Lattafa - Botella Negra) (Unisex)",
        "salvo_100ml.webp": "Salvo (Maison Alhambra) (Hombre)",
        "taureau_de_combat_100ml.webp": "Taureau de Combat (Unisex)",
        "teriaq_intense__100ml.webp": "Teriaq Intense (Lattafa) (Mujer)",
        "turathi_blue_100ml.webp": "Turathi Blue (Afnan) (Hombre)",
        "turathi_electric_100ml.webp": "Turathi Electric (Afnan) (Unisex)",
        "vintage_radio_100ml.webp": "Vintage Radio (Lattafa Pride) (Unisex)",
        "vulcan_feu_french_avenue_100ml.webp": "Vulcan Feu (French Avenue) (Unisex)",
        "your_touch_intense_100ml.webp": "Your Touch Intense (Maison Alhambra) (Hombre)"
    }
    
    new_entries = []
    
    for filename, title_key in mapping.items():
        if filename not in processed_files and not (MOCKUPS_DIR / filename).exists():
            print(f"File {filename} not found, skipping integration...")
            continue
            
        escaped_title = re.escape(title_key)
        pattern = re.compile(f"{escaped_title}:\\n+(.*?)(?=\\n+[A-Z].*?\\(.*\\):|\\Z)", re.DOTALL)
        match = pattern.search(notes_content)
        
        description = "Una fragancia oriental premium con un aroma cautivador."
        top, heart, base = ["Notas altas"], ["Notas medias"], ["Notas de fondo"]
        
        if match:
            block = match.group(1).strip()
            
            top_m = re.search(r"Salida:\s*(.*?)(?=\n|$)", block)
            heart_m = re.search(r"Corazón:\s*(.*?)(?=\n|$)", block)
            base_m = re.search(r"Fondo:\s*(.*?)(?=\n|$)", block)
            notas_m = re.search(r"Notas:\s*(.*?)(?=\n|$)", block)
            
            def clean_notes(s):
                if not s: return []
                s = re.sub(r'\(.*?\)', '', s)
                s = s.replace(' y ', ', ')
                s = s.replace('.', '')
                parts = [p.strip() for p in s.split(',')]
                return [p for p in parts if p]
                
            if notas_m:
                all_n = clean_notes(notas_m.group(1))
                n = len(all_n)
                top = all_n[:n//3] if n>2 else all_n
                heart = all_n[n//3:2*n//3] if n>2 else []
                base = all_n[2*n//3:] if n>2 else []
                description = notas_m.group(1).strip()
            else:
                if top_m: top = clean_notes(top_m.group(1))
                if heart_m: heart = clean_notes(heart_m.group(1))
                if base_m: 
                    b_raw = base_m.group(1)
                    desc_m = re.search(r'\((.*?)\)', b_raw)
                    if desc_m:
                        description = desc_m.group(1)
                    base = clean_notes(b_raw)
        
        cat = "unisex"
        if "(Hombre)" in title_key: cat = "hombre"
        elif "(Mujer)" in title_key: cat = "mujer"
        
        brand = "Lattafa"
        if "(Armaf)" in title_key: brand = "Armaf"
        elif "(Rasasi)" in title_key: brand = "Rasasi"
        elif "(Maison Alhambra)" in title_key: brand = "Maison Alhambra"
        elif "(Afnan)" in title_key: brand = "Afnan"
        elif "(French Avenue)" in title_key: brand = "French Avenue"
        elif "(Al Haramain)" in title_key: brand = "Al Haramain"
        
        clean_name = re.sub(r'\s*\(.*?\)', '', title_key).strip()
        
        ts_obj = f"""  {{
    id: {next_id},
    name: "{clean_name}",
    brand: "{brand}",
    price: 48000,
    image: "/images/mockups/{filename}",
    category: "{cat}",
    description: "{description}",
    size: "100ml",
    notes: {{
      top: {top!r},
      heart: {heart!r},
      base: {base!r}
    }},
  }},"""
        new_entries.append(ts_obj)
        next_id += 1
        
    if new_entries:
        idx = content.rfind(']')
        if idx != -1:
            new_content = content[:idx] + '\n' + '\n'.join(new_entries) + '\n' + content[idx:]
            TS_FILE.write_text(new_content, encoding='utf-8')
            print(f"Successfully added {len(new_entries)} new products to arabProducts.ts")
        else:
            print("Could not find end of array in arabProducts.ts")

if __name__ == "__main__":
    main()
