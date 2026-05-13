import json

FILE_PATH = r"c:\Users\Guille\Desktop\Parfum SP\src\data\arabProducts.ts"

def main():
    with open(FILE_PATH, "r", encoding="utf-8") as f:
        lines = f.readlines()

    # Find the second occurrence of "    id: 206,"
    occurrences = [i for i, line in enumerate(lines) if "id: 206," in line]
    
    if len(occurrences) > 1:
        # The second occurrence is at occurrences[1].
        # The object starts at occurrences[1] - 1 (which is "  {")
        start_delete = occurrences[1] - 1
        
        # We delete everything from start_delete to the line before "];"
        # Let's find the "];"
        end_idx = len(lines) - 1
        while "];" not in lines[end_idx] and end_idx > start_delete:
            end_idx -= 1
            
        # The new lines should be up to start_delete, and then "];\n"
        new_lines = lines[:start_delete]
        new_lines.append("];\n")
        
        with open(FILE_PATH, "w", encoding="utf-8") as f:
            f.writelines(new_lines)
            
        print("Duplicates removed successfully.")
    else:
        print("No duplicates found.")

if __name__ == "__main__":
    main()
