import os

FILE_PATH = r"c:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts"

def main():
    with open(FILE_PATH, "r", encoding="utf-8") as f:
        lines = f.readlines()
    
    new_lines = []
    in_maleka = False
    for line in lines:
        if 'id: 176,' in line:
            in_maleka = True
        
        if in_maleka:
            if 'price: 70000,' in line:
                line = '    price: 60000,\n'
                in_maleka = False # Only one price per object
        
        new_lines.append(line)
        
    with open(FILE_PATH, "w", encoding="utf-8") as f:
        f.writelines(new_lines)
    print("Success")

if __name__ == "__main__":
    main()
