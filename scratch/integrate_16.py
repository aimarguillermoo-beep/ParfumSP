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
    for f in MOCKUPS_DIR.glob("*.png"):
        try:
            img = Image.open(f)
            webp_path = f.with_suffix(".webp")
            img.save(webp_path, "WEBP", quality=95)
            f.unlink()  # delete png
            processed_files.append(webp_path.name)
            print(f"Converted {f.name} to {webp_path.name}")
        except Exception as e:
            print(f"Error converting {f.name}: {e}")

    # Read existing content
    content = TS_FILE.read_text(encoding='utf-8')
    
    # Read olfactive notes
    notes_content = NOTES_FILE.read_text(encoding='utf-8')
    
    # Find max ID
    id_matches = re.findall(r'id:\s*(\d+)', content)
    next_id = max([int(x) for x in id_matches]) + 1 if id_matches else 1
    
    # Define mapping between files and notes text
    mapping = {
        "jasoor_100ml.webp": "Jasoor (Lattafa) (Unisex)",
        "al_haramain_olaf_100ml.webp": "Al Haramain Olaf (Unisex)",
        "art_of_universe_100ml.webp": "Art of Universe I (Unisex)",
        "bharara_king_soleil_100ml.webp": "Bharara King Soleil (Hombre)",
        "club_de_nuit_sillage_100ml.webp": "Club de Nuit Sillage (Armaf) (Hombre)",
        "eter_arabian_sky_100ml.webp": "Eter Arabian Sky (Mujer)",
        "exquisite_100ml.webp": "Exquisite (Lattafa Pride) (Unisex)",
        "hawas_cobra_100ml.webp": "Hawas Cobra (Rasasi) (Hombre)",
        "hawas_malibu_100ml.webp": "Hawas Malibu (Rasasi) (Hombre)",
        "iconic-armaf_105_ml.webp": "Iconic Armaf (Club de Nuit) (Hombre)",
        "jean_lowe_immortel_100ml.webp": "Jean Lowe Immortel (Maison Alhambra) (Hombre)",
        "lattafa-pride-tharwah-silver-100ml.webp": "Lattafa Pride Tharwah Silver (Unisex)",
        "mashrabya_100ml.webp": "Mashrabya (Unisex)",
        "match_point_100ml.webp": "Match Point (Hombre)",
        "odyssey_chocolate_dubai_100ml.webp": "Odyssey Chocolate Dubai (Armaf) (Unisex)",
        "parfum-thunder-french-avenue-100ml.webp": "Parfum Thunder (French Avenue) (Unisex)"
    }
    
    new_entries = []
    
    for filename, title_key in mapping.items():
        if filename not in processed_files and not (MOCKUPS_DIR / filename).exists():
            print(f"File {filename} not found, skipping...")
            continue
            
        # Parse notes text for this title
        # It looks like:
        # Jasoor (Lattafa) (Unisex):
        # 
        # Salida: Manzana, bergamota y cardamomo.
        # ...
        
        # Regex to find the block
        escaped_title = re.escape(title_key)
        pattern = re.compile(f"{escaped_title}:\\n+(.*?)(?=\\n+[A-Z].*?\\(.*\\):|\\Z)", re.DOTALL)
        match = pattern.search(notes_content)
        
        description = "Una fragancia oriental premium con un aroma cautivador."
        top, heart, base = ["Notas altas"], ["Notas medias"], ["Notas de fondo"]
        
        if match:
            block = match.group(1).strip()
            
            # Extract notes
            top_m = re.search(r"Salida:\s*(.*?)(?=\\n|$)", block)
            heart_m = re.search(r"Corazón:\s*(.*?)(?=\\n|$)", block)
            base_m = re.search(r"Fondo:\s*(.*?)(?=\\n|$)", block)
            notas_m = re.search(r"Notas:\s*(.*?)(?=\\n|$)", block)
            
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
                    # Extract desc if inside parens
                    desc_m = re.search(r'\((.*?)\)', b_raw)
                    if desc_m:
                        description = desc_m.group(1)
                    base = clean_notes(b_raw)
        
        # Extract brand and category
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
        
        # Generate TS object
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
        # Insert before the last ];
        idx = content.rfind(']')
        if idx != -1:
            new_content = content[:idx] + '\n' + '\n'.join(new_entries) + '\n' + content[idx:]
            TS_FILE.write_text(new_content, encoding='utf-8')
            print(f"Successfully added {len(new_entries)} new products to arabProducts.ts")
        else:
            print("Could not find end of array in arabProducts.ts")

if __name__ == "__main__":
    main()
