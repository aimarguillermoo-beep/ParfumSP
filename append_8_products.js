import fs from 'fs';

const filePath = 'src/data/arabProducts.ts';
let content = fs.readFileSync(filePath, 'utf8');

const lastBracketIndex = content.lastIndexOf('];');
if (lastBracketIndex === -1) {
    console.error("Could not find closing ];");
    process.exit(1);
}

// Find max ID
let maxId = 0;
const idRegex = /id:\s*(\d+)/g;
let match;
while ((match = idRegex.exec(content)) !== null) {
    const id = parseInt(match[1]);
    if (id > maxId) maxId = id;
}

console.log(`Max ID found: ${maxId}`);

const newProducts = [
  {
    name: "Aquilo Pour Homme",
    brand: "Maison Alhambra",
    price: 35000,
    image: "/images/arabes/aquilo-pour-homme-maison-alhambra-masculino-100ml.webp",
    category: "hombre",
    description: "Inspirado en Aqva Pour Homme de Bvlgari. Un aroma acuático, cítrico y salado ultra fresco y masculino.",
    size: "100ml",
    notes: {
      top: ["Mandarina", "naranja", "grano de petigrain"],
      heart: ["Santolina", "algas marinas", "flor de algodón"],
      base: ["Ámbar mineral", "maderas de cedro de Virginia", "notas amaderadas saladas"]
    }
  },
  {
    name: "Cheekmate King",
    brand: "Armaf",
    price: 35000,
    image: "/images/arabes/cheekmate-king-armaf-masculino-100ml.webp",
    category: "hombre",
    description: "Presentación en forma de pieza de ajedrez negra. Un perfil gourmand-especiado elegante con un toque dulce de caramelo muy atractivo.",
    size: "100ml",
    notes: {
      top: ["Salvia esclarea", "mandarina"],
      heart: ["Caramelo dulce", "haba tonka"],
      base: ["Vetiver seco", "notas amaderadas"]
    }
  },
  {
    name: "Exquisite Pour Homme",
    brand: "Maison Alhambra",
    price: 35000,
    image: "/images/arabes/exquisite-pour-homme-club-maison-alhambra-masculino-100ml.webp",
    category: "hombre",
    description: "Mantiene la línea refinada de frutal ahumado de alta fijación, limpia y versátil.",
    size: "100ml",
    notes: {
      top: ["Piña", "grosella negra", "bergamota", "manzana"],
      heart: ["Abedul ahumado", "pachulí", "jazmín"],
      base: ["Ámbar gris", "almizcle", "musgo de roble"]
    }
  },
  {
    name: "Phantom My Hero",
    brand: "Amper",
    price: 35000,
    image: "/images/arabes/phantom-my-hero-amper-masculino-100ml.webp",
    category: "hombre",
    description: "Inspirado en Phantom de Paco Rabanne. Una mezcla moderna, cítrica, cremosa y aromática con toque de lavanda y vainilla.",
    size: "100ml",
    notes: {
      top: ["Lavanda", "cáscara de limón", "limón de Amalfi"],
      heart: ["Manzana verde", "lavanda", "humo", "notas terrosas", "pachulí"],
      base: ["Vainilla de Madagascar", "lavanda", "vetiver"]
    }
  },
  {
    name: "Cheekmate Queen",
    brand: "Armaf",
    price: 35000,
    image: "/images/arabes/cheekmate-queen-armaf-100ml-femenino.webp",
    category: "mujer",
    description: "Frasco con forma de reina de ajedrez blanca. Un floral-frutal cremoso, dulce y súper femenino.",
    size: "100ml",
    notes: {
      top: ["Frambuesa", "bergamota", "naranja sanguina"],
      heart: ["Tuberosa (nardos)", "azahar del naranjo", "jazmín"],
      base: ["Leche", "caramelo", "vainilla de Madagascar", "sándalo"]
    }
  },
  {
    name: "Emotion",
    brand: "Le Chameau",
    price: 35000,
    image: "/images/arabes/emotion-le-chameau-femenino-100ml.webp",
    category: "mujer",
    description: "Una propuesta coqueta, frutal, dulce y fresca ideal para el día a día.",
    size: "100ml",
    notes: {
      top: ["Frutos rojos", "bergamota", "mandarina"],
      heart: ["Rosa", "jazmín", "toques florales suaves"],
      base: ["Vainilla", "almizcle blanco", "sándalo"]
    }
  },
  {
    name: "Khair Confection",
    brand: "Paris Corner",
    price: 35000,
    image: "/images/arabes/khair-confection-paris-corner-femenino-100ml.webp",
    category: "mujer",
    description: "Una auténtica bomba gourmand. Huele literal a postre, malvavisco dulce y crema de vainilla.",
    size: "100ml",
    notes: {
      top: ["Crema batida", "malvavisco (marshmallow)", "pera", "bergamota"],
      heart: ["Ylang-ylang", "jazmín", "frangipani"],
      base: ["Vainilla", "cacao", "haba tonka", "sándalo"]
    }
  },
  {
    name: "Pure Crystal",
    brand: "Lattafa",
    price: 35000,
    image: "/images/arabes/pure-crystal-lattafa-unisex-100ml.webp",
    category: "unisex",
    description: "Fragancia limpia, cristalina, floral-cítrica y brillante. Aporta una sensación de frescura recién duchado muy pulcra.",
    size: "100ml",
    notes: {
      top: ["Yuzu", "granada", "acordes helados/frescos"],
      heart: ["Peonía", "flor de loto", "magnolia"],
      base: ["Almizcle", "caoba", "ámbar"]
    }
  }
];

let addedString = "";
for (const prod of newProducts) {
    maxId++;
    addedString += `  {
    id: ${maxId},
    name: "${prod.name}",
    brand: "${prod.brand}",
    price: ${prod.price},
    image: "${prod.image}",
    category: "${prod.category}",
    description: "${prod.description}",
    size: "${prod.size}",
    notes: {
      top: ${JSON.stringify(prod.notes.top)},
      heart: ${JSON.stringify(prod.notes.heart)},
      base: ${JSON.stringify(prod.notes.base)}
    }
  },\n`;
}

content = content.substring(0, lastBracketIndex) + addedString + '];\n';
fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully appended 8 new products.");
