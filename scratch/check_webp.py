import re

file_path = r"c:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

images = re.findall(r'image:\s*["\']([^"\']+)["\']', content)
non_webp = [img for img in images if not img.lower().endswith('.webp')]

if non_webp:
    print("Found non-webp images:")
    for img in non_webp:
        print(f"- {img}")
else:
    print("All product images are using .webp format.")
