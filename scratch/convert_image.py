import os
from PIL import Image

src_path = r"C:\Users\Guille\Desktop\Parfum_SP\public\images\mockups"
generated_image = r"C:\Users\Guille\.gemini\antigravity\brain\0388c52f-c54a-44ec-b24d-bfbce96879fa\club_de_nuit_intense_man_recreated_1781833915350.png"
dest_image = os.path.join(src_path, "club_de_nuit_intense_man.webp")

try:
    img = Image.open(generated_image)
    # Convert to RGB before saving as WEBP
    img = img.convert("RGB")
    img.save(dest_image, "WEBP", quality=90)
    print(f"Successfully converted and saved to {dest_image}")
except Exception as e:
    print(f"Error: {e}")
