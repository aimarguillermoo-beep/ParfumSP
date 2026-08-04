import os
from PIL import Image

images = [
    (r"C:\Users\guill\.gemini\antigravity\brain\a267e1e2-56a5-478c-b38c-95863b106f01\aquilo_lights_bg_1785836931145.jpg", "aquilo-pour-homme-maison-alhambra-masculino-100ml.webp"),
    (r"C:\Users\guill\.gemini\antigravity\brain\a267e1e2-56a5-478c-b38c-95863b106f01\cheekmate_king_bg_1785836985011.jpg", "cheekmate-king-armaf-masculino-100ml.webp"),
    (r"C:\Users\guill\.gemini\antigravity\brain\a267e1e2-56a5-478c-b38c-95863b106f01\cheekmate_queen_bg_1785836999267.jpg", "cheekmate-queen-armaf-100ml-femenino.webp"),
    (r"C:\Users\guill\.gemini\antigravity\brain\a267e1e2-56a5-478c-b38c-95863b106f01\emotion_bg_1785837012346.jpg", "emotion-le-chameau-femenino-100ml.webp"),
    (r"C:\Users\guill\.gemini\antigravity\brain\a267e1e2-56a5-478c-b38c-95863b106f01\exquisite_bg_1785837025331.jpg", "exquisite-pour-homme-club-maison-alhambra-masculino-100ml.webp"),
    (r"C:\Users\guill\.gemini\antigravity\brain\a267e1e2-56a5-478c-b38c-95863b106f01\khair_confection_bg_1785837037025.jpg", "khair-confection-paris-corner-femenino-100ml.webp"),
    (r"C:\Users\guill\.gemini\antigravity\brain\a267e1e2-56a5-478c-b38c-95863b106f01\phantom_my_hero_bg_1785837060069.jpg", "phantom-my-hero-amper-masculino-100ml.webp"),
    (r"C:\Users\guill\.gemini\antigravity\brain\a267e1e2-56a5-478c-b38c-95863b106f01\pure_crystal_bg_1785837078453.jpg", "pure-crystal-lattafa-unisex-100ml.webp")
]

output_dir = r"C:\Users\guill\OneDrive\Desktop\Parfum_SP\public\images\arabes"
os.makedirs(output_dir, exist_ok=True)

for src, dest_name in images:
    if os.path.exists(src):
        img = Image.open(src)
        dest_path = os.path.join(output_dir, dest_name)
        img.save(dest_path, "WEBP", quality=90)
        print(f"Saved {dest_path}")
    else:
        print(f"Error: {src} not found!")
