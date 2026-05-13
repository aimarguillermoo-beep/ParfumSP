import os
from PIL import Image
from pathlib import Path

DIRECTORY = Path(r"c:\Users\Guille\Desktop\Parfum SP\public\images\mockups")
FILES_TO_CONVERT = [
    "noble_blush.png",
    "odyssey_aqua.png",
    "odyssey_mandarin_sky.png",
    "pisa.png",
    "play.png",
    "precieux.png",
    "untamed.png",
    "sehr.png"
]

def main():
    for filename in FILES_TO_CONVERT:
        input_path = DIRECTORY / filename
        if not input_path.exists():
            print(f"File not found: {input_path}")
            continue
            
        output_filename = input_path.stem + ".webp"
        output_path = DIRECTORY / output_filename
        
        print(f"Converting {filename} to {output_filename}...")
        img = Image.open(input_path).convert("RGBA")
        img.save(output_path, "WEBP", quality=85)
        
        # Remove the original PNG
        os.remove(input_path)
        print(f"Deleted {filename}")

if __name__ == "__main__":
    main()
