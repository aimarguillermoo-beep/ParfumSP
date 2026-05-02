import shutil
import os

# Source directory (brain folder)
src_dir = r"C:\Users\Guille\.gemini\antigravity\brain\e4953b49-d54a-433b-bc2d-e10e6b4001ac"
# Destination directory
dest_dir = r"C:\Users\Guille\Desktop\Parfum SP\public\images\mockups"

# Mapping of generated files to final names
mapping = {
    "mayar_cherry_intense_mockup_1777646811953.png": "mayar_cherry_intense.png",
    "ameerat_al_arab_mockup_1777646836366.png": "ameerat_al_arab.png",
    "dalal_mockup_1777646862863.png": "dalal.png",
    "armaf_beach_party_mockup_1777646905638.png": "armaf_beach_party.png",
    "haya_mockup_1777646945914.png": "haya.png",
    "her_confession_mockup_1777646991063.png": "her_confession.png",
    "musamam_black_intense_mockup_1777647035093.png": "musamam_black_intense.png",
    "odyssey_mandarinsky_elixir_mockup_1777647084037.png": "odyssey_mandarinsky_elixir.png",
    "yum_yum_mockup_1777647135584.png": "yum_yum.png",
    "opulent_dubai_mockup_1777647186122.png": "opulent_dubai.png",
    "habik_mockup_1777647236448.png": "habik.png",
    "musamam_mockup_1777647290370.png": "musamam.png",
    "la_voie_mockup_1777647343185.png": "la_voie.png",
    "9_am_dive_mockup_1777647632919.png": "9_am_dive.png",
    "atlas_mockup_1777647691819.png": "atlas.png",
    "khamrah_dukhan_mockup_1777647753900.png": "khamrah_dukhan.png"
}

os.makedirs(dest_dir, exist_ok=True)

for src_name, dest_name in mapping.items():
    src_path = os.path.join(src_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dest_path)
        print(f"Copied: {src_name} -> {dest_name}")
    else:
        print(f"Warning: {src_name} not found in {src_dir}")
