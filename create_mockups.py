import os
import io
from pathlib import Path
from PIL import Image, ImageFilter, ImageEnhance
from rembg import remove

# Paths
INPUT_DIR = Path(r"c:\Users\Guille\Desktop\Parfum SP\temp_raw")
OUTPUT_DIR = Path(r"c:\Users\Guille\Desktop\Parfum SP\output_mockups")
BG_PATH = Path(r"C:\Users\Guille\.gemini\antigravity\brain\3bdcc86d-78f5-465d-81e5-9748a9e28a08\luxury_perfume_bg_1777481460456.png")

SUPPORTED_EXTENSIONS = {'.jpg', '.jpeg', '.png', '.webp'}

def create_reflection(img, reflection_height=None):
    if reflection_height is None:
        reflection_height = img.height // 2
        
    reflection = img.transpose(Image.FLIP_TOP_BOTTOM)
    reflection = reflection.crop((0, 0, img.width, reflection_height))
    
    # Create an alpha gradient
    alpha = Image.new('L', (img.width, reflection_height))
    for y in range(reflection_height):
        # Opacity goes from 100 at top (near bottle) to 0 at bottom
        opacity = int(255 * (1 - y / reflection_height) * 0.4) # Max 40% opacity
        for x in range(img.width):
            alpha.putpixel((x, y), opacity)
            
    # Apply alpha to reflection based on existing alpha
    r, g, b, a = reflection.split()
    # Combine the gradient alpha with the existing alpha
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
        print(f"Processing {input_path.name}...")
        with open(input_path, 'rb') as f:
            input_data = f.read()
            
        # Remove background
        output_data = remove(input_data)
        bottle = Image.open(io.BytesIO(output_data)).convert("RGBA")
        
        # Crop to visible bounding box
        bbox = bottle.getbbox()
        if bbox:
            bottle = bottle.crop(bbox)
            
        # Resize bottle to fit well on the table
        target_height = int(bg_img.height * 0.6)
        aspect_ratio = bottle.width / bottle.height
        target_width = int(target_height * aspect_ratio)
        bottle = bottle.resize((target_width, target_height), Image.Resampling.LANCZOS)
        
        # Enhance colors/contrast slightly to match luxury aesthetic
        enhancer = ImageEnhance.Contrast(bottle)
        bottle = enhancer.enhance(1.1)
        
        # Create reflection
        reflection = create_reflection(bottle, int(target_height * 0.4))
        
        # Positions
        # Put the bottle in the center, resting on the table (around y=60%)
        bottle_x = (bg_img.width - target_width) // 2
        bottle_y = int(bg_img.height * 0.65) - target_height
        
        reflection_y = bottle_y + target_height
        
        # Create a copy of the background to paste on
        composite = bg_img.copy()
        
        # Paste reflection
        composite.paste(reflection, (bottle_x, reflection_y), reflection)
        
        # Paste bottle
        composite.paste(bottle, (bottle_x, bottle_y), bottle)
        
        # Convert to RGB to save as JPEG
        composite = composite.convert("RGB")
        composite.save(output_path, format="JPEG", quality=95)
        return True
    except Exception as e:
        print(f"Error processing {input_path.name}: {e}")
        import traceback
        traceback.print_exc()
        return False

def main():
    OUTPUT_DIR.mkdir(exist_ok=True)
    
    if not BG_PATH.exists():
        print("Background image not found.")
        return
        
    bg_img = Image.open(BG_PATH).convert("RGBA")
    
    images = [f for f in INPUT_DIR.iterdir() if f.is_file() and f.suffix.lower() in SUPPORTED_EXTENSIONS]
    
    # Process only the first 3
    for i, img_path in enumerate(images[:3]):
        output_name = img_path.stem + "_mockup.jpg"
        output_path = OUTPUT_DIR / output_name
        process_image(img_path, output_path, bg_img)
        
    print("Done!")

if __name__ == "__main__":
    main()
