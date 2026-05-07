import os
import glob
from pathlib import Path
from PIL import Image

src_dir = r"C:\Users\Guille\.gemini\antigravity\brain\e466f149-2105-448e-b34d-1f3f3314be7b"
dest_dir = r"c:\Users\Guille\Desktop\Parfum SP\public\images\mockups"

def main():
    Path(dest_dir).mkdir(parents=True, exist_ok=True)
    
    # Find all generated pngs in the source directory
    png_files = glob.glob(os.path.join(src_dir, "*.png"))
    
    success = 0
    for file_path in png_files:
        try:
            filename = os.path.basename(file_path)
            
            # The tool appends a timestamp like _1778168069815.png
            # Let's clean it up: remove the timestamp and change to .webp
            name_parts = filename.rsplit('_', 1)
            if len(name_parts) == 2 and name_parts[1].split('.')[0].isdigit():
                clean_name = name_parts[0] + ".webp"
            else:
                clean_name = filename.rsplit('.', 1)[0] + ".webp"
                
            dest_path = os.path.join(dest_dir, clean_name)
            
            # Convert to webp and save
            with Image.open(file_path) as img:
                img.save(dest_path, "WEBP", quality=95)
                
            print(f"Processed: {clean_name}")
            success += 1
            
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
            
    print(f"Successfully processed {success} images out of {len(png_files)}.")

if __name__ == "__main__":
    main()
