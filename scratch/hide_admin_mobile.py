import os

FILE_PATH = r"c:\Users\Guille\Desktop\Parfum SP\src\components\Navbar.tsx"

def main():
    with open(FILE_PATH, "r", encoding="utf-8") as f:
        content = f.read()
    
    old_class = 'className="sm:hidden p-2 opacity-30 hover:opacity-100 transition-all duration-300"'
    new_class = 'className="sm:hidden p-2 opacity-0 transition-all duration-300 cursor-default"'
    
    if old_class in content:
        new_content = content.replace(old_class, new_class)
        with open(FILE_PATH, "w", encoding="utf-8") as f:
            f.writelines(new_content)
        print("Success")
    else:
        print("Could not find the target class")

if __name__ == "__main__":
    main()
