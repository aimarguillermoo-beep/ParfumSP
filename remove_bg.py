"""
Script para remover el fondo de todas las imagenes de perfumes arabes.
Genera imagenes PNG con fondo transparente en la carpeta de salida.
"""

import os
import sys
import io
from pathlib import Path
from PIL import Image
from rembg import remove

# Carpetas
INPUT_DIR = Path(r"C:\Users\Guille\Desktop\perfumes arabes")
OUTPUT_DIR = Path(r"C:\Users\Guille\Desktop\perfumes arabes\sin_fondo")

# Extensiones soportadas
SUPPORTED_EXTENSIONS = {'.jpg', '.jpeg', '.png', '.webp', '.jfif', '.bmp'}

def process_image(input_path: Path, output_path: Path) -> bool:
    """Procesa una imagen: remueve el fondo y guarda como PNG transparente."""
    try:
        with open(input_path, 'rb') as f:
            input_data = f.read()
        
        # Remover fondo
        output_data = remove(input_data)
        
        # Guardar como PNG (soporta transparencia)
        img = Image.open(io.BytesIO(output_data))
        img = img.convert("RGBA")
        img.save(output_path, "PNG")
        
        return True
    except Exception as e:
        print(f"  [ERROR] {e}")
        return False

def main():
    # Crear carpeta de salida
    OUTPUT_DIR.mkdir(exist_ok=True)
    
    # Listar imágenes
    images = [
        f for f in INPUT_DIR.iterdir()
        if f.is_file() and f.suffix.lower() in SUPPORTED_EXTENSIONS
    ]
    
    total = len(images)
    print(f"\n{'='*60}")
    print(f"  Removiendo fondos de {total} imagenes")
    print(f"  Entrada: {INPUT_DIR}")
    print(f"  Salida:  {OUTPUT_DIR}")
    print(f"{'='*60}\n")
    
    success = 0
    errors = 0
    
    for i, img_path in enumerate(images, 1):
        # Nombre de salida: siempre .png
        output_name = img_path.stem + ".png"
        output_path = OUTPUT_DIR / output_name
        
        print(f"[{i}/{total}] Procesando: {img_path.name} ... ", end="", flush=True)
        
        if process_image(img_path, output_path):
            size_kb = output_path.stat().st_size / 1024
            print(f"OK ({size_kb:.0f} KB)")
            success += 1
        else:
            errors += 1
    
    print(f"\n{'='*60}")
    print(f"  COMPLETADO: {success}/{total} imagenes procesadas")
    if errors > 0:
        print(f"  ERRORES: {errors}")
    print(f"  Resultados en: {OUTPUT_DIR}")
    print(f"{'='*60}\n")

if __name__ == "__main__":
    main()
