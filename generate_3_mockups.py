import os
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageChops

INPUT_DIR = Path(r"C:\Users\Guille\Desktop\autocentrar_imagenes\productos_crudos")
OUTPUT_DIR = Path(r"C:\Users\Guille\Desktop\Parfum SP\public\images\mockups")
BG_PATH = Path(r"C:\Users\Guille\.gemini\antigravity\brain\3bdcc86d-78f5-465d-81e5-9748a9e28a08\luxury_perfume_bg_1777481460456.png")

def remove_background_simple(img):
    img = img.convert("RGBA")
    pixels = img.load()
    w, h = img.size

    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            # Detectar píxeles blancos/casi blancos
            brightness = (r + g + b) / 3
            is_white = brightness > 235 and max(abs(r - g), abs(g - b), abs(r - b)) < 30
            is_light_gray = brightness > 220 and max(abs(r - g), abs(g - b), abs(r - b)) < 20
            
            if is_white or is_light_gray:
                pixels[x, y] = (r, g, b, 0)
            elif brightness > 200 and max(abs(r - g), abs(g - b), abs(r - b)) < 35:
                # Semi-transparencia para bordes suaves
                alpha = int((255 - brightness) * 3)
                alpha = min(255, max(0, alpha))
                pixels[x, y] = (r, g, b, alpha)

    return img

def autocrop(img):
    bbox = img.getbbox()
    if bbox:
        return img.crop(bbox)
    return img

def add_reflection(img_rgba, crop_height):
    reflection = img_rgba.copy()
    reflection = reflection.transpose(Image.FLIP_TOP_BOTTOM)
    
    reflection = reflection.crop((0, 0, reflection.size[0], crop_height))
    
    # Gradiente de opacidad
    gradient = Image.new("L", reflection.size, 0)
    gdraw = ImageDraw.Draw(gradient)
    for y in range(crop_height):
        alpha = int(120 * (1 - y / crop_height) ** 2)
        gdraw.line([(0, y), (reflection.size[0], y)], fill=alpha)
    
    r, g, b, a = reflection.split()
    a = ImageChops.multiply(a, gradient)
    reflection = Image.merge("RGBA", (r, g, b, a))
    
    return reflection

def process_image(input_path, output_path, bg_img):
    print(f"Procesando: {input_path.name}")
    img = Image.open(input_path)
    
    # Remover fondo
    img_rgba = remove_background_simple(img)
    img_rgba = autocrop(img_rgba)
    
    # Escalar para que el perfume quede bien en la mesa
    # Target height = 55% of the background image
    target_h = int(bg_img.size[1] * 0.55)
    scale = target_h / img_rgba.size[1]
    target_w = int(img_rgba.size[0] * scale)
    
    img_rgba = img_rgba.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # El centro de la mesa en mi imagen generada parece estar alrededor de y=65%
    # Asumimos que la base del perfume va ahi.
    paste_y = int(bg_img.size[1] * 0.70) - target_h
    paste_x = (bg_img.size[0] - target_w) // 2
    
    # Reflejo
    reflection_h = int(target_h * 0.35)
    reflection = add_reflection(img_rgba, reflection_h)
    ref_x = paste_x
    ref_y = paste_y + target_h
    
    # Composición
    composite = bg_img.copy()
    
    # Pegar reflejo
    composite.paste(reflection, (ref_x, ref_y), reflection)
    
    # Pegar perfume
    composite.paste(img_rgba, (paste_x, paste_y), img_rgba)
    
    # Guardar
    composite = composite.convert("RGB")
    composite.save(output_path, "JPEG", quality=95)

def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    if not BG_PATH.exists():
        print(f"Error: No se encontro el fondo en {BG_PATH}")
        return
        
    bg_img = Image.open(BG_PATH).convert("RGBA")
    
    # Obtener 3 imagenes
    supported = {'.jpg', '.jpeg', '.png', '.webp'}
    images = [f for f in INPUT_DIR.iterdir() if f.is_file() and f.suffix.lower() in supported]
    
    for input_path in images[:3]:
        output_name = input_path.stem + "_mockup.jpg"
        output_path = OUTPUT_DIR / output_name
        process_image(input_path, output_path, bg_img)
        
    print(f"Completado! Revisa la carpeta {OUTPUT_DIR}")

if __name__ == "__main__":
    main()
