import os
from PIL import Image
import shutil

brain_dir = r"C:\Users\Guille\\.gemini\antigravity\brain\e6a5023a-bc87-40df-97a3-229d41f4d39d"
output_dir = r"c:\Users\Guille\Desktop\Parfum SP\public\images\mockups"

# Mapping of generated files to their final names
file_mapping = {
    "supremacy_mockup_1778597345982.png": "supremacy_mockup.webp",
    "viking_kashmir_mockup_1778597369566.png": "viking_kashmir_mockup.webp",
    "yara_mockup_new_1778597394065.png": "yara_mockup.webp",
    "9pm_rebel_mockup_1778597418968.png": "9pm_rebel_mockup.webp",
    "asad_elixir_mockup_1778597433042.png": "asad_elixir_mockup.webp",
    "eternal_oud_mockup_1778597448040.png": "eternal_oud_mockup.webp",
    "yara_elixir_mockup_1778597466503.png": "yara_elixir_mockup.webp",
    "yara_moi_mockup_1778597481853.png": "yara_moi_mockup.webp",
    "yara_tous_mockup_1778597500182.png": "yara_tous_mockup.webp",
    "asad_mockup_1778597520674.png": "asad_mockup.webp",
    "club_de_nuit_woman_mockup_1778597535322.png": "club_de_nuit_woman_mockup.webp",
    "desirable_addiction_mockup_1778597550368.png": "desirable_addiction_mockup.webp"
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
