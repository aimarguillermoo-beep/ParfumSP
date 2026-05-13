import os

FILE_PATH = r"c:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts"

def main():
    with open(FILE_PATH, "r", encoding="utf-8") as f:
        lines = f.readlines()
    
    found = []
    current_id = None
    for line in lines:
        if 'id: ' in line:
            current_id = line.strip()
        if 'price: 70000,' in line:
            found.append(current_id)
            
    print(f"Products with price 70000: {found}")

if __name__ == "__main__":
    main()
