import re

file_path = r"c:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Split the file into product objects
# Each product starts with { and ends with },
# We can use a simple regex for objects if they are formatted consistently
products = re.findall(r'\{[^}]*id:\s*(\d+)[^}]*\}', content, re.DOTALL)

# Re-match the whole objects to extract info
product_blocks = re.findall(r'\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}', content, re.DOTALL)

placeholder_desc = "Una de nuestras adiciones más exclusivas"
placeholder_desc_2 = "Una nueva y exclusiva adición"
generic_top = '["Notas cítricas"]'
generic_top_2 = "['Notas cítricas']"
generic_heart = '["Especias", "Ámbar"]'
generic_base = '["Maderas", "Almizcle"]'

results = []

for block in product_blocks:
    id_match = re.search(r'id:\s*(\d+)', block)
    name_match = re.search(r'name:\s*["\']([^"\']+)["\']', block)
    
    if not id_match or not name_match:
        continue
        
    pid = id_match.group(1)
    pname = name_match.group(1)
    
    is_placeholder = False
    reasons = []
    
    if placeholder_desc in block or placeholder_desc_2 in block:
        is_placeholder = True
        reasons.append("Descripción genérica")
        
    if generic_top in block or generic_top_2 in block:
        is_placeholder = True
        reasons.append("Notas de salida genéricas")
        
    if generic_heart in block:
        is_placeholder = True
        reasons.append("Notas de corazón genéricas")
        
    if generic_base in block:
        is_placeholder = True
        reasons.append("Notas de fondo genéricas")
        
    if is_placeholder:
        results.append((pid, pname, ", ".join(reasons)))

print(f"{'ID':<5} | {'Nombre':<30} | {'Motivo'}")
print("-" * 60)
for r in results:
    print(f"{r[0]:<5} | {r[1]:<30} | {r[2]}")
