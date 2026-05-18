from PIL import Image
import os

source_path = r"C:\Users\Guille\.gemini\antigravity\brain\0cc2a385-8424-4dd9-8e47-45f854e55a20\match_point_mockup_new_1779136042374.png"
target_path = r"c:\Users\Guille\Desktop\Parfum SP\public\images\mockups\match_point_100ml.webp"

try:
    img = Image.open(source_path)
    img.save(target_path, "WEBP", quality=95)
    print(f"Successfully replaced {target_path}")
except Exception as e:
    print(f"Error: {e}")
