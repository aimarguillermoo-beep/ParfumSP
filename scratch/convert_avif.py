import os
from PIL import Image

try:
    # Try importing pillow_heif for HEIF/AVIF support
    try:
        import pillow_heif
        pillow_heif.register_heif_opener()
        print("pillow-heif registered successfully.")
    except ImportError:
        print("pillow-heif not installed, trying standard PIL...")
        
    src_path = r"C:\Users\Guille\Desktop\Páginas\autocentrar_imagenes\productos_crudos\ck-one-calvin-klein-unisex-200ml-$75.000.avif"
    dest_path = r"C:\Users\Guille\Desktop\Páginas\autocentrar_imagenes\productos_crudos\ck-one-calvin-klein-unisex-200ml-$75.000.png"
    
    img = Image.open(src_path)
    img.save(dest_path, "PNG")
    print(f"Successfully converted {src_path} to {dest_path}")
except Exception as e:
    print(f"Error during conversion: {e}")
