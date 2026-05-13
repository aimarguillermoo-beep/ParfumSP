import os

FILE_PATH = r"c:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts"

def main():
    with open(FILE_PATH, "r", encoding="utf-8") as f:
        lines = f.readlines()
    
    # Find where id: 206 starts
    start_line = -1
    for i, line in enumerate(lines):
        if 'id: 206' in line:
            # We want to remove from the previous '{' or similar
            # But more simply, we know we added them at the end.
            # Let's find the first occurrence of id: 206 and remove everything from there to the end,
            # except the closing "];"
            start_line = i
            break
    
    if start_line != -1:
        # Search backwards for the opening '{' of that block
        for j in range(start_line, 0, -1):
            if '{' in lines[j]:
                start_line = j
                break
        
        # New lines will be lines up to start_line, then the closing "];"
        new_lines = lines[:start_line]
        # Make sure the last line before removal has a trailing comma if needed? 
        # Actually, the last one before 206 (id 205) should end with "  },"
        # And we need a closing "];"
        
        # Let's check the last line of new_lines
        if new_lines:
            last = new_lines[-1].strip()
            if not last.endswith('},') and last.endswith('}'):
                new_lines[-1] = new_lines[-1].replace('}', '},')
        
        new_lines.append("];\n")
        
        with open(FILE_PATH, "w", encoding="utf-8") as f:
            f.writelines(new_lines)
        print("Catalog reverted successfully")
    else:
        print("Could not find id: 206")

if __name__ == "__main__":
    main()
