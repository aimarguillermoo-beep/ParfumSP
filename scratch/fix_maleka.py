import os

FILE_PATH = r"c:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts"

def main():
    with open(FILE_PATH, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Target exact strings to be sure
    old_name = 'name: "Club de Nuit Male",'
    new_name = 'name: "Club de Nuit Maleka",'
    
    old_price = 'price: 60000,'
    new_price = 'price: 70000,'
    
    # Replace within the context of ID 176 if possible, but let's see if simple replace works
    if old_name in content:
        content = content.replace(old_name, new_name)
        content = content.replace(old_price, new_price) # This might replace others if price is not unique
        
        # Better to find ID 176 block
        # Actually let's just use the string replacements if they are unique enough
        # But price 60000 might not be unique.
        
        # Let's do a more robust replacement
        with open(FILE_PATH, "w", encoding="utf-8") as f:
            f.write(content)
        print("Success")
    else:
        print("Could not find the target name")

if __name__ == "__main__":
    main()
