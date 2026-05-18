with open(r"c:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts", "r", encoding="utf-8") as f:
    for i, line in enumerate(f, 1):
        if "Musamam" in line:
            print(f"Found on line {i}: {line.strip()}")
