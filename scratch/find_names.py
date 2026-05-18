import re

file_path = r"c:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts"
content = open(file_path, "r", encoding="utf-8").read()
names = re.findall(r'name:\s*"([^"]+)"', content)

open(r"c:\Users\Guille\Desktop\Parfum SP\scratch\all_names.txt", "w", encoding="utf-8").write('\n'.join(names))
