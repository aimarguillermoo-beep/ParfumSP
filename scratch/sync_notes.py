import os
import re
from pathlib import Path

TS_FILE = Path(r"c:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts")
NOTES_FILE = Path(r"c:\Users\Guille\Desktop\notas olfativas.txt")

def main():
    content = TS_FILE.read_text(encoding='utf-8')
    notes_content = NOTES_FILE.read_text(encoding='utf-8')
    
    mapping = {
        "Jasoor": "Jasoor (Lattafa) (Unisex)",
        "Al Haramain Olaf": "Al Haramain Olaf (Unisex)",
        "Art of Universe I": "Art of Universe I (Unisex)",
        "Bharara King Soleil": "Bharara King Soleil (Hombre)",
        "Club de Nuit Sillage": "Club de Nuit Sillage (Armaf) (Hombre)",
        "Eter Arabian Sky": "Eter Arabian Sky (Mujer)",
        "Exquisite": "Exquisite (Lattafa Pride) (Unisex)",
        "Hawas Cobra": "Hawas Cobra (Rasasi) (Hombre)",
        "Hawas Malibu": "Hawas Malibu (Rasasi) (Hombre)",
        "Iconic Armaf": "Iconic Armaf (Club de Nuit) (Hombre)",
        "Jean Lowe Immortel": "Jean Lowe Immortel (Maison Alhambra) (Hombre)",
        "Lattafa Pride Tharwah Silver": "Lattafa Pride Tharwah Silver (Unisex)",
        "Mashrabya": "Mashrabya (Unisex)",
        "Match Point": "Match Point (Hombre)",
        "Odyssey Chocolate Dubai": "Odyssey Chocolate Dubai (Armaf) (Unisex)",
        "Parfum Thunder": "Parfum Thunder (French Avenue) (Unisex)",
        "Qaed Al Fursan": "Qaed Al Fursan (Lattafa - Botella Negra) (Unisex)",
        "Salvo": "Salvo (Maison Alhambra) (Hombre)",
        "Taureau de Combat": "Taureau de Combat (Unisex)",
        "Teriaq Intense": "Teriaq Intense (Lattafa) (Mujer)",
        "Turathi Blue": "Turathi Blue (Afnan) (Hombre)",
        "Turathi Electric": "Turathi Electric (Afnan) (Unisex)",
        "Vintage Radio": "Vintage Radio (Lattafa Pride) (Unisex)",
        "Vulcan Feu": "Vulcan Feu (French Avenue) (Unisex)",
        "Your Touch Intense": "Your Touch Intense (Maison Alhambra) (Hombre)"
    }
    
    def clean_notes(s):
        if not s: return []
        s = re.sub(r'\(.*?\)', '', s)
        s = s.replace(' y ', ', ')
        s = s.replace('.', '')
        parts = [p.strip() for p in s.split(',')]
        return [p for p in parts if p]

    for short_name, title_key in mapping.items():
        escaped_title = re.escape(title_key)
        pattern = re.compile(f"{escaped_title}:\\n+(.*?)(?=\\n+[A-Z].*?\\(.*\\):|\\Z)", re.DOTALL)
        match = pattern.search(notes_content)
        
        if not match:
            print(f"Could not find notes for {title_key}")
            continue
            
        block = match.group(1).strip()
        
        top, heart, base = ["Notas altas"], ["Notas medias"], ["Notas de fondo"]
        description = "Una fragancia oriental premium con un aroma cautivador."
        
        top_m = re.search(r"Salida:\s*(.*?)(?=\n|$)", block)
        heart_m = re.search(r"Corazón:\s*(.*?)(?=\n|$)", block)
        base_m = re.search(r"Fondo:\s*(.*?)(?=\n|$)", block)
        notas_m = re.search(r"Notas:\s*(.*?)(?=\n|$)", block)
        
        if notas_m:
            raw_notas = notas_m.group(1).strip()
            desc_m = re.search(r'\((.*?)\)', raw_notas)
            if desc_m:
                description = desc_m.group(1)
            else:
                description = raw_notas
                
            all_n = clean_notes(raw_notas)
            n = len(all_n)
            top = all_n[:n//3] if n>2 else all_n
            heart = all_n[n//3:2*n//3] if n>2 else []
            base = all_n[2*n//3:] if n>2 else []
        else:
            if top_m: top = clean_notes(top_m.group(1))
            if heart_m: heart = clean_notes(heart_m.group(1))
            if base_m: 
                b_raw = base_m.group(1)
                desc_m = re.search(r'\((.*?)\)', b_raw)
                if desc_m:
                    description = desc_m.group(1)
                base = clean_notes(b_raw)
                
        # Now update arabProducts.ts
        # We need to find the object for `short_name`. 
        # A regex that finds the object block where name == short_name
        
        # Build replacement string
        def replacer(m):
            obj_block = m.group(0)
            # Check if this object is the right one
            name_m = re.search(r'name:\s*"([^"]+)"', obj_block)
            if name_m and name_m.group(1) == short_name:
                # Replace description
                obj_block = re.sub(r'description:\s*"[^"]*"', f'description: "{description}"', obj_block)
                # Replace notes
                # we match from notes: { to },
                notes_str = f"notes: {{\n      top: {top!r},\n      heart: {heart!r},\n      base: {base!r}\n    }}"
                obj_block = re.sub(r'notes:\s*\{.*?\}', notes_str, obj_block, flags=re.DOTALL)
                print(f"Updated {short_name}")
            return obj_block

        content = re.sub(r'\{\s*id:\s*\d+,.*?\},(?=\s*\{|\s*\])', replacer, content, flags=re.DOTALL)

    TS_FILE.write_text(content, encoding='utf-8')
    print("Done updating notes.")

if __name__ == "__main__":
    main()
