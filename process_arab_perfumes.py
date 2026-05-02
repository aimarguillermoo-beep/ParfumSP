"""
Script para procesar las 4 imágenes de perfumes árabes.
Remueve el fondo, aplica un fondo oscuro lujoso con tonos dorados,
y guarda las imágenes en public/images/arabes/.

Usa solo Pillow (PIL) sin dependencias externas de ML.
"""

import os
import math
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageChops

# ... (mantener los imports igual)

# === CONFIGURACIÓN ===
INPUT_DIR = Path(r"C:\Users\Guille\Desktop\autocentrar_imagenes\productos_crudos")
OUTPUT_DIR = Path(r"C:\Users\Guille\Desktop\Parfum SP\public\images\arabes")
CANVAS_SIZE = (1024, 1024)

# ELIMINÁ EL FILE_MAP FIJO Y REEMPLAZALO POR ESTA LÓGICA:

def get_clean_name(filename):
    """Limpia el nombre del archivo para la salida (ej: de 'Nombre Largo.webp' a 'nombre-largo.png')"""
    name = Path(filename).stem # Toma el nombre sin extensión
    clean_name = name.lower().replace(" ", "-").replace("_", "-")
    return f"{clean_name}.png"

# --- PROCESO DINÁMICO ---
def process_all_images():
    # Buscamos todos los archivos de imagen compatibles
    extensions = ['*.webp', '*.png', '*.jpg', '*.jpeg']
    files_to_process = []
    for ext in extensions:
        files_to_process.extend(INPUT_DIR.glob(ext))

    if not files_to_process:
        print("No hay imágenes nuevas en 'productos_crudos' para procesar.")
        return

    print(f"Procesando {len(files_to_process)} imágenes encontradas...")

    for file_path in files_to_process:
        input_name = file_path.name
        output_name = get_clean_name(input_name)
        
        print(f"-> Procesando: {input_name} para generar {output_name}")
        
        # Aquí llamarías a tu lógica de procesamiento (la que ya tenés abajo en el script)
        # image = Image.open(file_path)
        # background = create_luxury_background(CANVAS_SIZE)
        # ... resto de tu lógica ...
        
        # Al final, guardás usando output_name
        # final_img.save(OUTPUT_DIR / output_name)

# ... (el resto de tus funciones como create_luxury_background siguen igual)

def create_luxury_background(size):
    """Crea un fondo oscuro lujoso con gradiente radial y tonos dorados."""
    w, h = size
    bg = Image.new("RGB", size, (10, 10, 10))
    draw = ImageDraw.Draw(bg)

    # Gradiente radial central: tono dorado sutil
    cx, cy = w // 2, int(h * 0.45)
    max_radius = int(w * 0.7)

    for r in range(max_radius, 0, -2):
        t = r / max_radius  # 1.0 en el borde, 0.0 en el centro
        # De dorado cálido sutil en el centro a negro en el borde
        red = int(45 * (1 - t) ** 1.5)
        green = int(35 * (1 - t) ** 1.5)
        blue = int(15 * (1 - t) ** 2.0)
        color = (10 + red, 10 + green, 10 + blue)
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=color)

    # Segundo gradiente: resplandor dorado inferior (simula superficie reflectante)
    cy_bottom = int(h * 0.85)
    max_radius_bottom = int(w * 0.5)
    for r in range(max_radius_bottom, 0, -2):
        t = r / max_radius_bottom
        red = int(35 * (1 - t) ** 2)
        green = int(28 * (1 - t) ** 2)
        blue = int(10 * (1 - t) ** 2.5)
        color = (10 + red, 10 + green, 10 + blue)
        draw.ellipse([cx - r, cy_bottom - r // 2, cx + r, cy_bottom + r // 2], fill=color)

    # Aplicar desenfoque para suavizar
    bg = bg.filter(ImageFilter.GaussianBlur(radius=40))

    # Vignette: oscurecer bordes
    vignette = Image.new("L", size, 0)
    vdraw = ImageDraw.Draw(vignette)
    for r in range(max(w, h), 0, -2):
        t = r / max(w, h)
        brightness = int(255 * (1 - t ** 1.8))
        vdraw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=brightness)
    
    vignette = vignette.filter(ImageFilter.GaussianBlur(radius=30))
    bg_array = bg.copy()
    # Apply vignette as darkening mask
    bg = Image.composite(bg_array, Image.new("RGB", size, (5, 5, 5)), vignette)

    return bg


def remove_background_simple(img):
    """
    Remueve fondos blancos/claros de la imagen usando umbral de color.
    Retorna imagen RGBA con transparencia.
    """
    img = img.convert("RGBA")
    pixels = img.load()
    w, h = img.size

    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            # Detectar píxeles blancos/casi blancos
            brightness = (r + g + b) / 3
            # También detectar grises claros
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
    """Recorta los bordes transparentes de una imagen RGBA."""
    bbox = img.getbbox()
    if bbox:
        return img.crop(bbox)
    return img


def add_reflection(img_rgba, canvas_size, paste_y_bottom):
    """Agrega un efecto de reflejo sutil debajo del perfume."""
    reflection = img_rgba.copy()
    reflection = reflection.transpose(Image.FLIP_TOP_BOTTOM)
    
    # Solo usar la parte inferior del reflejo (los primeros ~30% de la imagen reflejada)
    ref_h = reflection.size[1]
    crop_h = int(ref_h * 0.3)
    reflection = reflection.crop((0, 0, reflection.size[0], crop_h))
    
    # Gradiente de opacidad (de algo visible a transparente)
    gradient = Image.new("L", reflection.size, 0)
    gdraw = ImageDraw.Draw(gradient)
    for y in range(crop_h):
        alpha = int(60 * (1 - y / crop_h) ** 2)  # Fade rápido
        gdraw.line([(0, y), (reflection.size[0], y)], fill=alpha)
    
    # Aplicar gradiente al alpha del reflejo
    r, g, b, a = reflection.split()
    a = ImageChops.multiply(a, gradient)
    reflection = Image.merge("RGBA", (r, g, b, a))
    
    return reflection


def process_image(input_path, output_path):
    """Procesa una imagen de perfume: remueve fondo y aplica fondo lujoso."""
    print(f"  Abriendo: {input_path.name}")
    img = Image.open(input_path)
    
    # 1. Remover fondo
    print("  Removiendo fondo...")
    img_rgba = remove_background_simple(img)
    
    # 2. Autocrop
    img_rgba = autocrop(img_rgba)
    print(f"  Tamaño después de autocrop: {img_rgba.size}")
    
    # 3. Escalar para que ocupe ~70% del canvas
    margin_pct = 0.15
    max_w = int(CANVAS_SIZE[0] * (1 - 2 * margin_pct))
    max_h = int(CANVAS_SIZE[1] * (1 - 2 * margin_pct))
    
    scale = min(max_w / img_rgba.width, max_h / img_rgba.height)
    new_w = int(img_rgba.width * scale)
    new_h = int(img_rgba.height * scale)
    img_rgba = img_rgba.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # 4. Crear fondo lujoso
    print("  Generando fondo lujoso...")
    canvas = create_luxury_background(CANVAS_SIZE)
    canvas = canvas.convert("RGBA")
    
    # 5. Posicionar: centrado horizontal, apoyado en el ~80% vertical
    paste_x = (CANVAS_SIZE[0] - new_w) // 2
    bottom_margin = int(CANVAS_SIZE[1] * 0.12)
    paste_y = CANVAS_SIZE[1] - new_h - bottom_margin
    
    # 6. Agregar reflejo
    reflection = add_reflection(img_rgba, CANVAS_SIZE, CANVAS_SIZE[1] - bottom_margin)
    ref_x = paste_x
    ref_y = paste_y + new_h
    if ref_y + reflection.size[1] <= CANVAS_SIZE[1]:
        canvas.paste(reflection, (ref_x, ref_y), reflection)
    
    # 7. Pegar perfume sobre el canvas
    canvas.paste(img_rgba, (paste_x, paste_y), img_rgba)
    
    # 8. Convertir a RGB y guardar
    final = canvas.convert("RGB")
    final.save(output_path, "PNG", quality=95)
    size_kb = output_path.stat().st_size / 1024
    print(f"  [OK] Guardada: {output_path.name} ({size_kb:.0f} KB)")


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    print(f"\n{'='*60}")
    print(f"  Procesando 4 perfumes árabes con fondo lujoso")
    print(f"  Entrada: {INPUT_DIR}")
    print(f"  Salida:  {OUTPUT_DIR}")
    print(f"{'='*60}\n")
    
    success = 0
    errors = 0
    
    for input_name, output_name in FILE_MAP.items():
        input_path = INPUT_DIR / input_name
        output_path = OUTPUT_DIR / output_name
        
        if not input_path.exists():
            print(f"[ERROR] No encontrado: {input_name}")
            errors += 1
            continue
        
        print(f"\n[{success + errors + 1}/4] {input_name}")
        try:
            process_image(input_path, output_path)
            success += 1
        except Exception as e:
            print(f"  [ERROR] Error: {e}")
            errors += 1
    
    print(f"\n{'='*60}")
    print(f"  COMPLETADO: {success}/4 imágenes procesadas")
    if errors > 0:
        print(f"  ERRORES: {errors}")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()
