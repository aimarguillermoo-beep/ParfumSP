import os

FILE_PATH = r"c:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts"

def main():
    with open(FILE_PATH, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Revert all global changes I might have made
    content = content.replace('price: 70000,', 'price: 60000,')
    
    with open(FILE_PATH, "w", encoding="utf-8") as f:
        f.write(content)
    print("Success")

if __name__ == "__main__":
    main()
