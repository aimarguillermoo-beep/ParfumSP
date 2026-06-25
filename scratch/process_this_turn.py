import os
import glob
from pathlib import Path
from PIL import Image

src_dir = r"C:\Users\Guille\.gemini\antigravity\brain\3965969d-0b0e-4f8e-b4d3-a4eacfad639d"
dest_dir = r"C:\Users\Guille\Desktop\Parfum_SP\public\images\mockups"

# Map of prefix or image name to final clean filename
file_mapping = {
    "bad_homme_mockup": "bad_homme_100ml.webp",
    "ck_one_mockup": "ck_one_200ml.webp",
    "delilah_mockup": "delilah_100ml.webp",
    "durrat_aroos_mockup": "durrat_al_aroos_100ml.webp",
    "dynasty_mockup": "dynasty_100ml.webp",
    "firestorm_mockup": "firestorm_100ml.webp",
    "kingsman_mockup": "kingsman_100ml.webp",
    "go_mango_mockup": "odyssey_go_mango_100ml.webp",
    "marshmallow_mockup": "odyssey_marshmallow_100ml.webp",
    "peace_love_mockup": "peace_and_love_100ml.webp",
    "wolf_rayhaan_mockup": "wolf_rayhaan_100ml.webp"
}

def main():
    Path(dest_dir).mkdir(parents=True, exist_ok=True)
    png_files = glob.glob(os.path.join(src_dir, "*.png"))
    
    success = 0
    for file_path in png_files:
        filename = os.path.basename(file_path)
        
        # Match the base pattern (e.g. bad_homme_mockup from bad_homme_mockup_1782430004860.png)
        matched_clean_name = None
        for prefix, clean_name in file_mapping.items():
            if filename.startswith(prefix):
                matched_clean_name = clean_name
                break
                
        if not matched_clean_name:
            # Fallback name if prefix doesn't match exactly
            name_parts = filename.rsplit('_', 1)
            if len(name_parts) == 2 and name_parts[1].split('.')[0].isdigit():
                matched_clean_name = name_parts[0] + ".webp"
            else:
                matched_clean_name = filename.rsplit('.', 1)[0] + ".webp"
                
        dest_path = os.path.join(dest_dir, matched_clean_name)
        
        try:
            with Image.open(file_path) as img:
                # Convert to RGB before saving as WebP
                img_rgb = img.convert("RGB")
                img_rgb.save(dest_path, "WEBP", quality=95)
            print(f"Processed and converted: {filename} -> {matched_clean_name}")
            success += 1
        except Exception as e:
            print(f"Error processing {filename}: {e}")
            
    print(f"Successfully processed {success} of {len(png_files)} files.")

if __name__ == "__main__":
    main()
