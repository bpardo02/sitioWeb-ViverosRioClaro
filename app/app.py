from PIL import Image
import os

# Función para convertir imágenes a WebP y optimizarlas
def convert_to_webp(image_path, output_folder, quality=80):
    try:
        # Abre la imagen
        with Image.open(image_path) as img:
            # Obtiene el nombre del archivo sin extensión
            filename = os.path.splitext(os.path.basename(image_path))[0]
            output_path = os.path.join(output_folder, f"{filename}.webp")
            
            # Convierte y guarda la imagen en formato WebP con la calidad especificada
            img.save(output_path, "WEBP", quality=quality)
            print(f"Imagen optimizada guardada en: {output_path}")
    except Exception as e:
        print(f"Error al procesar la imagen {image_path}: {e}")

# Función principal para convertir todas las imágenes en un directorio
def batch_convert_images(input_folder, output_folder, quality=80):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    # Itera sobre todos los archivos en el directorio de entrada
    for filename in os.listdir(input_folder):
        input_path = os.path.join(input_folder, filename)
        
        # Solo procesa archivos de imagen
        if os.path.isfile(input_path) and filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            convert_to_webp(input_path, output_folder, quality)

# Ruta de la carpeta con las imágenes a convertir
input_folder = "img"
# Ruta de la carpeta donde guardarás las imágenes WebP
output_folder = "imgoutput"
# Calidad de la imagen (de 0 a 100, siendo 100 la mejor calidad)
quality = 50

# Llamada a la función para convertir todas las imágenes
batch_convert_images(input_folder, output_folder, quality)
