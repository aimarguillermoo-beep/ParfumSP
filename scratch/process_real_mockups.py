import os
import io
from pathlib import Path
from PIL import Image, ImageFilter, ImageEnhance
from rembg import remove

# Paths
INPUT_DIR = Path(r"C:\Users\Guille\Desktop\autocentrar_imagenes\productos_crudos")
OUTPUT_DIR = Path(r"c:\Users\Guille\Desktop\Parfum SP\public\images\mockups")
BG_PATH = Path(r"C:\Users\Guille\.gemini\antigravity\brain\3bdcc86d-78f5-465d-81e5-9748a9e28a08\luxury_perfume_bg_1777481460456.png")

MAPPING = {
    "noble_bush_100ml.jpg": "noble_blush.webp",
    "oddysey_aqua.jpg": "odyssey_aqua.webp",
    "odyssey_mandarin_sky_100ml.webp": "odyssey_mandarin_sky.webp",
    "pisa_100ml.webp": "pisa.webp",
    "play_75ml.webp": "play.webp",
    "precieux_55ml.webp": "precieux.webp",
    "qaed_al_fursan_untamed_90ml.jpg": "untamed.webp",
    "sehr_100ml.webp": "sehr.webp"
}

def create_reflection(img, reflection_height=None):
    if reflection_height is None:
        reflection_height = img.height // 2
        
    reflection = img.transpose(Image.FLIP_TOP_BOTTOM)
    reflection = reflection.crop((0, 0, img.width, reflection_height))
    
    alpha = Image.new('L', (img.width, reflection_height))
    for y in range(reflection_height):
        opacity = int(255 * (1 - y / reflection_height) * 0.4)
        for x in range(img.width):
            alpha.putpixel((x, y), opacity)
            
    r, g, b, a = reflection.split()
    new_a = Image.new('L', alpha.size)
    for y in range(reflection_height):
        for x in range(alpha.width):
            orig_alpha = a.getpixel((x, y))
            grad_alpha = alpha.getpixel((x, y))
            new_a.putpixel((x, y), int(orig_alpha * (grad_alpha / 255.0)))
            
    reflection.putalpha(new_a)
    return reflection

def process_image(input_path, output_path, bg_img):
    try:
        print(f"Processing {input_path.name} -> {output_path.name}...")
        with open(input_path, 'rb') as f:
            input_data = f.read()
            
        output_data = remove(input_data)
        bottle = Image.open(io.BytesIO(output_data)).convert("RGBA")
        
        bbox = bottle.getbbox()
        if bbox:
            bottle = bottle.crop(bbox)
            
        target_height = int(bg_img.height * 0.55) # Slightly smaller than before
        aspect_ratio = bottle.width / bottle.height
        target_width = int(target_height * aspect_ratio)
        bottle = bottle.resize((target_width, target_height), Image.Resampling.LANCZOS)
        
        enhancer = ImageEnhance.Contrast(bottle)
        bottle = enhancer.enhance(1.05)
        
        reflection = create_reflection(bottle, int(target_height * 0.35))
        
        bottle_x = (bg_img.width - target_width) // 2
        bottle_y = int(bg_img.height * 0.65) - target_height
        
        reflection_y = bottle_y + target_height
        
        composite = bg_img.copy()
        composite.paste(reflection, (bottle_x, reflection_y), reflection)
        composite.paste(bottle, (bottle_x, bottle_y), bottle)
        
        # Save as WebP
        composite.save(output_path, "WEBP", quality=90)
        return True
    except Exception as e:
        print(f"Error processing {input_path.name}: {e}")
        return False

def main():
    if not BG_PATH.exists():
        print("Background image not found.")
        return
        
    bg_img = Image.open(BG_PATH).convert("RGBA")
    
    for input_name, output_name in MAPPING.items():
        input_path = INPUT_DIR / input_name
        output_path = OUTPUT_DIR / output_name
        
        if input_path.exists():
            process_image(input_path, output_path, bg_img)
        else:
            print(f"Input file not found: {input_path}")
            
    print("Done!")

if __name__ == "__main__":
    main()
