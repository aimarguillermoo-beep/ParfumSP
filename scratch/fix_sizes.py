import re

file_path = r"c:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts"
content = open(file_path, "r", encoding="utf-8").read()

def replacer(match):
    block = match.group(0)
    name_match = re.search(r'name:\s*"([^"]+)"', block)
    if not name_match:
        return block
        
    name = name_match.group(1).lower()
    new_size = None
    
    if name == "khalid":
        new_size = "80ml"
    elif "qaed al fursan" in name:
        new_size = "90ml"
    elif name == "no. 2 men":
        new_size = "80ml"
    elif "club de nuit" in name:
        new_size = "105ml"
    elif "al haramain amber oud" in name:
        new_size = "120ml"
        
    if new_size:
        block = re.sub(r'size:\s*"[^"]+"', f'size: "{new_size}"', block)
        
    return block

new_content = re.sub(r'\{\s*id:\s*\d+,.*?\},(?=\s*\{|\s*\])', replacer, content, flags=re.DOTALL)

open(file_path, "w", encoding="utf-8").write(new_content)
print("Updated sizes successfully.")
