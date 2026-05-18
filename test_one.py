import io
from pathlib import Path
from PIL import Image, ImageDraw, ImageChops, ImageEnhance
from rembg import remove

def add_reflection(img_rgba, crop_height):
    reflection = img_rgba.copy()
    reflection = reflection.transpose(Image.FLIP_TOP_BOTTOM)
    reflection = reflection.crop((0, 0, reflection.size[0], crop_height))
    
    gradient = Image.new("L", reflection.size, 0)
    gdraw = ImageDraw.Draw(gradient)
    for y in range(crop_height):
        alpha = int(140 * ((1 - y / crop_height) ** 2))
        gdraw.line([(0, y), (reflection.size[0], y)], fill=alpha)
    
    r, g, b, a = reflection.split()
    a = ImageChops.multiply(a, gradient)
    reflection = Image.merge("RGBA", (r, g, b, a))
    return reflection

def process_one():
    input_path = Path(r"C:\Users\Guille\Desktop\autocentrar_imagenes\productos_crudos\jasoor_100ml.jpg")
    bg_path = Path(r"C:\Users\Guille\.gemini\antigravity\brain\3bdcc86d-78f5-465d-81e5-9748a9e28a08\luxury_perfume_bg_1777481460456.png")
    output_path = Path(r"C:\Users\Guille\Desktop\Parfum SP\public\images\mockups\test_jasoor.webp")
    
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    bg_img = Image.open(bg_path).convert("RGBA")
    
    with open(input_path, 'rb') as f:
        input_data = f.read()
        
    output_data = remove(input_data)
    bottle = Image.open(io.BytesIO(output_data)).convert("RGBA")
    
    bbox = bottle.getbbox()
    if bbox:
        bottle = bottle.crop(bbox)
        
    target_h = int(bg_img.size[1] * 0.65)
    scale = target_h / bottle.size[1]
    target_w = int(bottle.size[0] * scale)
    
    bottle = bottle.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    enhancer = ImageEnhance.Contrast(bottle)
    bottle = enhancer.enhance(1.02)
    
    paste_y = int(bg_img.size[1] * 0.75) - target_h
    paste_x = (bg_img.size[0] - target_w) // 2
    
    reflection_h = int(target_h * 0.4)
    reflection = add_reflection(bottle, reflection_h)
    
    canvas = bg_img.copy()
    canvas.paste(reflection, (paste_x, paste_y + target_h), reflection)
    canvas.paste(bottle, (paste_x, paste_y), bottle)
    
    final = canvas.convert("RGB")
    final.save(output_path, "WEBP", quality=95)
    print(f"Test 2 guardado en {output_path}")

if __name__ == "__main__":
    process_one()
