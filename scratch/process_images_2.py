import os
from PIL import Image
import shutil

brain_dir = r"C:\Users\Guille\\.gemini\antigravity\brain\e6a5023a-bc87-40df-97a3-229d41f4d39d"
output_dir = r"c:\Users\Guille\Desktop\Parfum SP\public\images\mockups"

# Mapping of NEW generated files to their final names
file_mapping = {
    "khalid_mockup_1778597727267.png": "khalid_mockup.webp",
    "leuer_despoir_mockup_1778597775870.png": "leuer_despoir_mockup.webp",
    "lintrude_mockup_1778597748345.png": "lintrude_mockup.webp",
    "mohra_silky_rose_mockup_1778597792277.png": "mohra_silky_rose_mockup.webp",
    "nebras_mockup_new_1778597812108.png": "nebras_mockup.webp"
}

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

for src_name, dst_name in file_mapping.items():
    src_path = os.path.join(brain_dir, src_name)
    dst_path = os.path.join(output_dir, dst_name)
    
    if os.path.exists(src_path):
        print(f"Processing {src_name} -> {dst_name}")
        with Image.open(src_path) as img:
            img.save(dst_path, "WEBP", quality=90)
        print(f"Saved to {dst_path}")
    else:
        print(f"Warning: {src_path} not found")
