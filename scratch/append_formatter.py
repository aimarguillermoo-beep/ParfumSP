import os

FILE_PATH = r"c:\Users\Guille\Desktop\Parfum SP\src\utils\formatters.ts"

NEW_FUNC = """
/**
 * Normalizes a string by converting it to lowercase and removing accents.
 */
export const normalizeString = (str: string): string => {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '');
};
"""

def main():
    with open(FILE_PATH, "a", encoding="utf-8") as f:
        f.write(NEW_FUNC)
    print("Success")

if __name__ == "__main__":
    main()
