import re

file_path = r"C:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts"

with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

# Fix common corrupted characters
replacements = {
    "?mbar": "Ámbar",
    "Sǭndalo": "Sándalo",
    "Pia": "Piña",
    "Limn": "Limón",
    "Jazmn": "Jazmín",
    "espritu": "espíritu",
    "Orqudea": "Orquídea",
    "mbar": "Ámbar",
    "Pachul": "Pachulí",
}

for old, new in replacements.items():
    content = content.replace(old, new)

# Also fix the double closing braces if any remain
content = content.replace("];];", "];")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Fixed encoding and characters in arabProducts.ts")
