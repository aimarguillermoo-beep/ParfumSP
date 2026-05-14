import os
from pathlib import Path
from PIL import Image

def process():
    brain_dir = Path(r"C:\Users\Guille\.gemini\antigravity\brain\f681ade5-8844-4b99-8d52-54e3fc16a09d")
    output_dir = Path(r"C:\Users\Guille\Desktop\Parfum SP\public\images\mockups")
    
    file_map = {
        "atlantis_test_1778780080569.png": "atlantis_extrait_100ml.webp",
        "club_de_nuit_urban_man_elixir_100ml_1778780309305.png": "club_de_nuit_urban_man_elixir_100ml.webp",
        "dolce_y_gabbana_the_one_edp_100ml_1778780328628.png": "dolce_y_gabbana_the_one_edp_100ml.webp",
        "la_collection_dantiquites_1910_100ml_1778780342722.png": "la_collection_d_antiquites_1910_100ml.webp",
        "moschino_toy_boy_edp_100ml_1778780373753.png": "moschino_toy_boy_edp_100ml.webp",
        "polo_ralph_lauren_black_125ml_1778780399341.png": "polo_ralph_lauren_black_125ml.webp",
        "royal_blend_100ml_1778780425503.png": "royal_blend_100ml.webp",
        "stronger_whit_you_100ml_1778780446501.png": "stronger_whit_you_100ml.webp"
    }

    for input_name, output_name in file_map.items():
        input_path = brain_dir / input_name
        output_path = output_dir / output_name
        
        if input_path.exists():
            img = Image.open(input_path).convert("RGB")
            img.save(output_path, "WEBP", quality=90)
            print(f"Guardado: {output_name}")
        else:
            print(f"Archivo no encontrado: {input_name}")

if __name__ == "__main__":
    process()
