import os
import io
import math
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageChops
from rembg import remove

INPUT_DIR = Path(r"C:\Users\Guille\Desktop\autocentrar_imagenes\productos_crudos")
OUTPUT_DIR = Path(r"c:\Users\Guille\Desktop\Parfum SP\public\images\mockups")
CANVAS_SIZE = (1024, 1024)

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

def create_luxury_background(size):
    """Crea un fondo oscuro lujoso con gradiente radial y tonos dorados."""
    w, h = size
    bg = Image.new("RGB", size, (10, 10, 10))
    draw = ImageDraw.Draw(bg)

    cx, cy = w // 2, int(h * 0.45)
    max_radius = int(w * 0.7)

    for r in range(max_radius, 0, -2):
        t = r / max_radius  
        red = int(45 * (1 - t) ** 1.5)
        green = int(35 * (1 - t) ** 1.5)
        blue = int(15 * (1 - t) ** 2.0)
        color = (10 + red, 10 + green, 10 + blue)
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=color)

    cy_bottom = int(h * 0.85)
    max_radius_bottom = int(w * 0.5)
    for r in range(max_radius_bottom, 0, -2):
        t = r / max_radius_bottom
        red = int(35 * (1 - t) ** 2)
        green = int(28 * (1 - t) ** 2)
        blue = int(10 * (1 - t) ** 2.5)
        color = (10 + red, 10 + green, 10 + blue)
        draw.ellipse([cx - r, cy_bottom - r // 2, cx + r, cy_bottom + r // 2], fill=color)

    bg = bg.filter(ImageFilter.GaussianBlur(radius=40))

    vignette = Image.new("L", size, 0)
    vdraw = ImageDraw.Draw(vignette)
    for r in range(max(w, h), 0, -2):
        t = r / max(w, h)
        brightness = int(255 * (1 - t ** 1.8))
        vdraw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=brightness)
    
    vignette = vignette.filter(ImageFilter.GaussianBlur(radius=30))
    bg_array = bg.copy()
    bg = Image.composite(bg_array, Image.new("RGB", size, (5, 5, 5)), vignette)

    return bg

def autocrop(img):
    bbox = img.getbbox()
    if bbox:
        return img.crop(bbox)
    return img

def add_reflection(img_rgba, canvas_size, paste_y_bottom):
    reflection = img_rgba.copy()
    reflection = reflection.transpose(Image.FLIP_TOP_BOTTOM)
    
    ref_h = reflection.size[1]
    crop_h = int(ref_h * 0.3)
    reflection = reflection.crop((0, 0, reflection.size[0], crop_h))
    
    gradient = Image.new("L", reflection.size, 0)
    gdraw = ImageDraw.Draw(gradient)
    for y in range(crop_h):
        alpha = int(60 * (1 - y / crop_h) ** 2) 
        gdraw.line([(0, y), (reflection.size[0], y)], fill=alpha)
    
    r, g, b, a = reflection.split()
    a = ImageChops.multiply(a, gradient)
    reflection = Image.merge("RGBA", (r, g, b, a))
    
    return reflection

def process_image(input_path, output_path):
    print(f"  Abriendo: {input_path.name}")
    with open(input_path, 'rb') as f:
        input_data = f.read()
    
    # Usar rembg que es mejor
    print("  Removiendo fondo...")
    output_data = remove(input_data)
    img_rgba = Image.open(io.BytesIO(output_data)).convert("RGBA")
    
    img_rgba = autocrop(img_rgba)
    
    margin_pct = 0.15
    max_w = int(CANVAS_SIZE[0] * (1 - 2 * margin_pct))
    max_h = int(CANVAS_SIZE[1] * (1 - 2 * margin_pct))
    
    scale = min(max_w / img_rgba.width, max_h / img_rgba.height)
    new_w = int(img_rgba.width * scale)
    new_h = int(img_rgba.height * scale)
    img_rgba = img_rgba.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    print("  Generando fondo lujoso...")
    canvas = create_luxury_background(CANVAS_SIZE)
    canvas = canvas.convert("RGBA")
    
    paste_x = (CANVAS_SIZE[0] - new_w) // 2
    bottom_margin = int(CANVAS_SIZE[1] * 0.12)
    paste_y = CANVAS_SIZE[1] - new_h - bottom_margin
    
    reflection = add_reflection(img_rgba, CANVAS_SIZE, CANVAS_SIZE[1] - bottom_margin)
    ref_x = paste_x
    ref_y = paste_y + new_h
    if ref_y + reflection.size[1] <= CANVAS_SIZE[1]:
        canvas.paste(reflection, (ref_x, ref_y), reflection)
    
    canvas.paste(img_rgba, (paste_x, paste_y), img_rgba)
    
    final = canvas.convert("RGB")
    final.save(output_path, "WEBP", quality=90)
    size_kb = output_path.stat().st_size / 1024
    print(f"  [OK] Guardada: {output_path.name} ({size_kb:.0f} KB)")

def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    success = 0
    errors = 0
    
    for input_name, output_name in MAPPING.items():
        input_path = INPUT_DIR / input_name
        output_path = OUTPUT_DIR / output_name
        
        if not input_path.exists():
            print(f"[ERROR] No encontrado: {input_name}")
            errors += 1
            continue
        
        try:
            process_image(input_path, output_path)
            success += 1
        except Exception as e:
            print(f"  [ERROR] Error: {e}")
            errors += 1
            
    print(f"Completado: {success} exitos, {errors} errores.")

if __name__ == "__main__":
    main()
