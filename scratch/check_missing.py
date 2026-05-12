import os
import re

arab_products_path = r"c:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts"
crudos_dir = r"C:\Users\Guille\Desktop\autocentrar_imagenes\productos_crudos"

with open(arab_products_path, "r", encoding="utf-8") as f:
    content = f.read()

# Extract names from arabProducts.ts
# Simplified regex to find name: "..." or name: '...'
names_in_catalog = re.findall(r'name:\s*["\']([^"\']+)["\']', content)
images_in_catalog = re.findall(r'image:\s*["\']([^"\']+)["\']', content)

print(f"Products in catalog: {len(names_in_catalog)}")

crudos_files = os.listdir(crudos_dir)
print(f"Files in productos_crudos: {len(crudos_files)}")

missing_images = []
for file in crudos_files:
    # Check if the filename (without extension and cleaned) matches any image path in the catalog
    # or if the product name matches.
    stem = os.path.splitext(file)[0].lower()
    
    found = False
    for img_path in images_in_catalog:
        if stem in img_path.lower():
            found = True
            break
    
    if not found:
        missing_images.append(file)

print("\nFiles in crudos NOT explicitly linked in arabProducts (by filename):")
for f in missing_images:
    print(f"- {f}")

# Check the specific three
specific = ["supremacy_pour_homme_100ml.jpg", "viking_kashmir_+_1_100ml.webp", "yara_100ml.jpg"]
print("\nStatus of specific products:")
for s in specific:
    found = False
    for img_path in images_in_catalog:
        # Check if the specific name is in the image path
        # In the catalog it was: /images/mockups/supremacy_mockup.webp
        # The file is: supremacy_pour_homme_100ml.jpg
        # Let's check for "supremacy"
        short_name = s.split('_')[0].lower()
        if short_name in img_path.lower():
            found = True
            print(f"- {s}: Found in catalog as {img_path}")
            break
    if not found:
        print(f"- {s}: NOT found in catalog")
