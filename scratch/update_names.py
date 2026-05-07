import re

file_path = r"C:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

replacements = [
    ('name: "Perfume 1"', 'name: "Club de Nuit Imperiale"'),
    ('image: "/images/mockups/mockup_1.webp"', 'image: "/images/mockups/club_de_nuit_imperiale_105ml.webp"'),
    
    ('name: "Perfume 2"', 'name: "Hayaati Al Maleky"'),
    ('image: "/images/mockups/mockup_2.webp"', 'image: "/images/mockups/hayaati_al_maleky_100ml.webp"'),
    
    ('name: "Perfume 3"', 'name: "La Rouge Baroque Extreme"'),
    ('image: "/images/mockups/mockup_3.webp"', 'image: "/images/mockups/la_rouge_baroque_extreme_100ml.webp"'),
    
    ('name: "Perfume 4"', 'name: "Liquid Brun"'),
    ('image: "/images/mockups/mockup_4.webp"', 'image: "/images/mockups/luquid_brun_100ml.webp"'),
    
    ('name: "Perfume 5"', 'name: "Qaed Al Fursan Unlimited"'),
    ('image: "/images/mockups/mockup_5.webp"', 'image: "/images/mockups/qaed_al_fursan_unlimited_90ml.webp"'),
    
    ('name: "Perfume 6"', 'name: "Qimmah For Women"'),
    ('image: "/images/mockups/mockup_6.webp"', 'image: "/images/mockups/qimmah_for_women_100ml.webp"'),
    
    ('name: "Perfume 7"', 'name: "Sceptre Malachite"'),
    ('image: "/images/mockups/mockup_7.webp"', 'image: "/images/mockups/sceptre_malachite_100ml.webp"'),
    
    ('name: "Perfume 8"', 'name: "Tiramisú Caramel"'),
    ('image: "/images/mockups/mockup_8.webp"', 'image: "/images/mockups/tiramisú_caramel_100ml.webp"')
]

for old, new in replacements:
    content = content.replace(old, new)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Nombres e imágenes actualizados exitosamente en arabProducts.ts")
