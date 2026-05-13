import type { Product } from './products';

export const arabProducts: Product[] = [
  {
    id: 100,
    name: "Ishq Al Shuyukh Gold",
    brand: "Lattafa",
    price: 50000,
    image: "/images/arabes/ishq-al-shuyukh-gold.webp",
    category: "unisex",
    description: "Una fragancia unisex oriental que combina la riqueza del oud con especias cálidas. Su frasco negro con daga dorada refleja la herencia árabe más pura.",
    size: "100ml",
    notes: {
      top: ["Caramelo", "Azafrán"],
      heart: ["Gamuza", "Cuero", "Haba Tonka"],
      base: ["Vainilla", "Ámbar", "Almizcle"]
    },
    isBestSeller: true,
  },
  {
    id: 101,
    name: "Opulent Red",
    brand: "Lattafa",
    price: 50000,
    image: "/images/arabes/opulent-red.webp",
    category: "unisex",
    description: "Opulencia en estado puro. Una fragancia femenina envuelta en un frasco rojo rubí con detalles dorados, que evoca pasión y lujo oriental.",
    size: "100ml",
    notes: {
      top: ["Naranja sanguina", "Coñac"],
      heart: ["Tuberosa", "Jazmín"],
      base: ["Oud", "Sándalo", "Haba Tonka", "Vainilla"]
    },
  },
  {
    id: 102,
    name: "Art of Arabia I",
    brand: "Lattafa",
    price: 60000,
    image: "/images/arabes/art-of-arabia-i.webp",
    category: "hombre",
    description: "Inspirada en la majestuosidad de Dubai, esta fragancia captura la esencia moderna del mundo árabe. Su frasco negro con el icónico Burj Khalifa es una pieza de colección.",
    size: "100ml",
    notes: {
      top: ["Bergamota", "Menta"],
      heart: ["Té negro", "Jengibre", "Lavanda"],
      base: ["Ambroxan", "Incienso", "Canela"]
    },
  },
  {
    id: 103,
    name: "Jean Lowe Vibe",
    brand: "Maison Alhambra",
    price: 60000,
    image: "/images/arabes/jean-lowe-vibe.webp",
    category: "hombre",
    description: "Fragancia cítrica y amaderada inspirada en L'Immensité. Un aroma fresco y sofisticado con una presencia magnética.",
    size: "100ml",
    notes: {
      top: ["Pomelo", "Jengibre"],
      heart: ["Ambroxan", "Ládano"],
      base: ["Pachulíí", "Notas amaderadas"]
    },
  },
  {
    id: 104,
    name: "Jean Lowe Fraîche",
    brand: "Maison Alhambra",
    price: 40000,
    image: "/images/arabes/jean-lowe-fraiche.webp",
    category: "hombre",
    description: "Frescura francesa con alma árabe. Una fragancia luminosa y elegante con líquido dorado que irradia sofisticación discreta.",
    size: "100ml",
    notes: {
      top: ["Limón", "Pomelo", "Bergamota", "Menta", "Pimienta rosa"],
      heart: ["Melón", "Jazmín", "Jengibre", "Nuez moscada"],
      base: ["Pachulíí", "Sándalo", "Ámbar", "Incienso", "Cedro"]
    },
  },
  {
    id: 105,
    name: "Hawas Ice",
    brand: "Rasasi",
    price: 80000,
    image: "/images/arabes/hawas-ice.webp",
    category: "hombre",
    description: "Versión fresca y acuática del clásico Hawas. Una fragancia masculina que combina frescura polar con calidez oriental.",
    size: "100ml",
    notes: {
      top: ["Bergamota", "Limón siciliano", "Menta helada"],
      heart: ["Notas florales", "Cardamomo"],
      base: ["Ámbar", "Sándalo"]
    },
  },
  {
    id: 106,
    name: "The Kingdom",
    brand: "Lattafa",
    price: 60000,
    image: "/images/arabes/the-kingdom.webp",
    category: "hombre",
    description: "Fragancia masculina lujosa con presencia dorada. Su frasco completamente bañado en oro con incrustaciones de cristal es un símbolo de realeza.",
    size: "100ml",
    notes: {
      top: ["Lavanda", "Menta", "Salvia"],
      heart: ["Vainilla", "Tabaco", "Azahar"],
      base: ["Haba Tonka", "Benjuí", "Ládano"]
    },
    isBestSeller: true,
  },
  {
    id: 107,
    name: "His Confession",
    brand: "Lattafa",
    price: 60000,
    image: "/images/arabes/his-confession.webp",
    category: "hombre",
    description: "Una obra de arte olfativa coronada con un busto escultórico. Fragancia masculina audaz que fusiona lo clásico con lo contemporáneo.",
    size: "100ml",
    notes: {
      top: ["Canela", "Lavanda", "Mandarina"],
      heart: ["Iris", "Benjuí", "Ciprés", "Mahonial"],
      base: ["Vainilla", "Haba Tonka", "Ámbar", "Cedro", "Incienso", "Pachulíí"]
    },
  },
  {
    id: 108,
    name: "9PM",
    brand: "Afnan",
    price: 60000,
    image: "/images/arabes/9pm.webp",
    category: "hombre",
    description: "La fragancia de la noche por excelencia. Dulce, magnética y adictiva, diseñada para dejar una estela inolvidable.",
    size: "100ml",
    notes: {
      top: ["Manzana", "Canela", "Lavanda", "Bergamota"],
      heart: ["Azahar", "Lirio de los valles"],
      base: ["Vainilla", "Haba Tonka", "Ámbar", "Pachulíí"]
    },
    isBestSeller: true,
  },
  {
    id: 109,
    name: "Hawas For Him",
    brand: "Rasasi",
    price: 55000,
    image: "/images/arabes/hawas-for-him.webp",
    category: "hombre",
    description: "Fragancia masculina acuática y fresca con un toque oriental. El clásico Hawas en su versión más intensa y seductora.",
    size: "100ml",
    notes: {
      top: ["Manzana", "Bergamota", "Limón", "Canela"],
      heart: ["Notas marinas", "Ciruela", "Azahar", "Cardamomo"],
      base: ["Ámbar gris", "Almizcle", "Pachulíí", "Madera a la deriva"]
    },
  },
  {
    id: 110,
    name: "Yara Candy",
    brand: "Lattafa",
    price: 50000,
    image: "/images/arabes/yara-candy.webp",
    category: "mujer",
    description: "Dulce, juguetona y femenina. Un frasco rosa vibrante con lazos dorados que encierra una fragancia gourmand irresistible.",
    size: "100ml",
    notes: {
      top: ["Mandarina verde", "Grosellas negras"],
      heart: ["Gardenia", "Caramelo de fresa"],
      base: ["Sándalo", "Jarabe de vainilla", "Almizcle", "Ámbar"]
    },
  },
  {
    id: 111,
    name: "Léonie Intense",
    brand: "Maison Alhambra",
    price: 50000,
    image: "/images/arabes/leonie-intense.webp",
    category: "mujer",
    description: "Fragancia intensa aÁmbarada con carácter art déco. Su líquido áÁmbar profundo y diseño geométrico reflejan elegancia atemporal.",
    size: "100ml",
    notes: {
      top: ["Mandarina", "Bergamota", "Lavanda"],
      heart: ["Azahar", "Jazmín"],
      base: ["Vainilla de Madagascar", "Haba Tonka"]
    },
  },
  {
    id: 112,
    name: "Milena",
    brand: "Ard Al Zaafaran",
    price: 33000,
    image: "/images/arabes/milena.webp",
    category: "mujer",
    description: "Fragancia sofisticada con diseño de panal dorado. Una pieza artística que combina miel, azafrán y maderas preciosas.",
    size: "100ml",
    notes: {
      top: ["Ruibarbo", "Lichi", "Bergamota"],
      heart: ["Rosa turca", "Peonía"],
      base: ["Vainilla", "Almizcle"]
    },
  },

  {
    id: 114,
    name: "Scandal Pour Homme",
    brand: "Jean Paul Gaultier",
    price: 55000,
    image: "/images/arabes/scandal.webp",
    category: "hombre",
    description: "Fragancia masculina audaz y coronada. Su aroma combina la frescura de la salvia con un corazón de caramelo y haba tonka sobre un fondo de vetiver.",
    size: "100ml",
    notes: {
      top: ["Salvia esclarea", "Mandarina"],
      heart: ["Caramelo", "Haba Tonka"],
      base: ["Vetiver"]
    },
  },
  {
    id: 115,
    name: "9 PM Elixir",
    brand: "Afnan",
    price: 60000,
    image: "/images/mockups/9_pm_elixir_100ml.webp",
    category: "hombre",
    description: "Versión concentrada con notas intensas de ámbar, maderas y especias picantes.",
    size: "100ml",
    notes: {
      top: ['Ámbar'],
      heart: ['Especias picantes'],
      base: ['Madera']
    },
  },
  {
    id: 116,
    name: "Al Nashama Caprice",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/al_nashama_caprice_100ml.webp",
    category: "unisex",
    description: "Una fragancia unisex fresca y especiada con un carácter moderno y versátil.",
    size: "100ml",
    notes: {
      top: ['Bergamota', 'Jengibre'],
      heart: ['Cardamomo', 'Lavanda'],
      base: ['Cedro']
    },
  },
  {
    id: 117,
    name: "Aqua Dubai",
    brand: "Lattafa",
    price: 100000,
    image: "/images/mockups/aqua_dubai_100ml.webp",
    category: "unisex",
    description: "Frescura marina y cítrica inspirada en las costas de Dubai.",
    size: "100ml",
    notes: {
      top: ['Mandarina', 'Notas marinas'],
      heart: ['Ámbar', 'Almizcle'],
      base: ['Maderas blancas']
    },
  },
  {
    id: 118,
    name: "Art Of Arabia III",
    brand: "Lattafa",
    price: 35000,
    image: "/images/mockups/art_of_arabia_ai_recreated.webp",
    category: "hombre",
    description: "Una pieza de arte olfativa con notas de té negro, jengibre y maderas preciosas.",
    size: "100ml",
    notes: {
      top: ['Bergamota', 'Té negro'],
      heart: ['Jengibre'],
      base: ['Maderas']
    },
  },
  {
    id: 119,
    name: "Art Of Nature II",
    brand: "Lattafa",
    price: 60000,
    image: "/images/mockups/Art_Of_Nature_II_100ml.webp",
    category: "unisex",
    description: "La naturaleza capturada en una mezcla de notas verdes y maderas exóticas.",
    size: "100ml",
    notes: {
      top: ['Notas verdes', 'Cítricos'],
      heart: ['Maderas exóticas'],
      base: ['Almizcle']
    },
  },
  {
    id: 120,
    name: "Essence De Blanc",
    brand: "Lattafa",
    price: 35000,
    image: "/images/mockups/essence_de_blanc_100ml.webp",
    category: "mujer",
    description: "Pureza y elegancia en una fragancia de flores blancas y notas empolvadas.",
    size: "100ml",
    notes: {
      top: ['Flores blancas', 'Bergamota'],
      heart: ['Notas empolvadas'],
      base: ['Almizcle']
    },
  },
  {
    id: 121,
    name: "Hayaati",
    brand: "Lattafa",
    price: 40000,
    image: "/images/mockups/hayaati_100ml.webp",
    category: "hombre",
    description: "Una fragancia fresca y dinámica con una salida frutal y un corazón especiado cálido.",
    size: "100ml",
    notes: {
      top: ['Manzana verde', 'Bergamota'],
      heart: ['Cardamomo', 'Canela'],
      base: ['Notas amaderadas']
    },
  },
  {
    id: 122,
    name: "Historic Olmeda",
    brand: "Lattafa",
    price: 65000,
    image: "/images/mockups/historic_olmeda_100ml.webp",
    category: "hombre",
    description: "Una fragancia clásica y sofisticada que combina cítricos, especias y maderas nobles.",
    size: "100ml",
    notes: {
      top: ['Pomelo', 'Enebro de Virginia', 'Pimienta rosa'],
      heart: ['Jazmín', 'Nuez moscada'],
      base: ['Ámbar', 'Cedro', 'Pachulí']
    },
  },
  {
    id: 123,
    name: "Khamrah",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/khamrah_100ml.webp",
    category: "unisex",
    description: "Un perfume gourmet cálido con notas de dátiles, canela y praliné dulce.",
    size: "100ml",
    notes: {
      top: ['Canela', 'Nuez moscada'],
      heart: ['Dátiles', 'Praliné'],
      base: ['Vainilla']
    },
  },
  {
    id: 124,
    name: "Khamrah Qahwa",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/khamrah_qahwa_100ml.webp",
    category: "unisex",
    description: "La versión más intensa de Khamrah con una nota distintiva de café tostado.",
    size: "100ml",
    notes: {
      top: ['Canela', 'Nuez moscada'],
      heart: ['Dátiles', 'Praliné', 'Café tostado'],
      base: ['Vainilla']
    },
  },
  {
    id: 125,
    name: "King Of Arabia",
    brand: "Lattafa",
    price: 60000,
    image: "/images/mockups/king_of_arabia_100ml.webp",
    category: "hombre",
    description: "La esencia de la realeza árabe capturada en una mezcla de notas marinas y cuero.",
    size: "100ml",
    notes: {
      top: ['Cítricos intensos', 'Notas marinas'],
      heart: ['Especias orientales'],
      base: ['Cuero']
    },
  },
  {
    id: 126,
    name: "La Yuqawam",
    brand: "Rasasi",
    price: 80000,
    image: "/images/mockups/la_yuqawam-100ml.webp",
    category: "hombre",
    description: "Una obra maestra de la perfumería que equilibra la dulzura de la frambuesa con la fuerza del cuero.",
    size: "100ml",
    notes: {
      top: ['Frambuesa', 'Azafrán', 'Tomillo'],
      heart: ['Olíbano', 'Jazmín'],
      base: ['Cuero', 'Gamuza', 'Notas amaderadas']
    },
  },
  {
    id: 127,
    name: "Nebras Elixir",
    brand: "Lattafa",
    price: 60000,
    image: "/images/mockups/nebras_elixir_100ml.webp",
    category: "unisex",
    description: "Dulzura intensa de cacao y vainilla con un toque vibrante de frutos rojos.",
    size: "100ml",
    notes: {
      top: ['Frutos rojos', 'Mandarina'],
      heart: ['Cacao', 'Vainilla'],
      base: ['Azúcar', 'Haba tonka']
    },
  },
  {
    id: 128,
    name: "Philos Pura",
    brand: "Maison Alhambra",
    price: 55000,
    image: "/images/mockups/philos_pura_100ml.webp",
    category: "unisex",
    description: "Una mezcla armoniosa de cítricos y frutas tropicales con un fondo avainillado.",
    size: "100ml",
    notes: {
      top: ['Cítricos sicilianos'],
      heart: ['Mezcla de frutas'],
      base: ['Vainilla', 'Almizcle blanco']
    },
  },
  {
    id: 129,
    name: "Mayar Cherry Intense",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/mayar_cherry_intense.webp",
    category: "mujer",
    description: "Una explosión de cereza negra intensa y sofisticada. Una fragancia audaz y magnética para quienes buscan destacar.",
    size: "100ml",
    notes: {
      top: ["Cereza", "Frambuesa", "Mandarina"],
      heart: ["Malvavisco", "Orquídea", "Rosa"],
      base: ["Vainilla", "Almizcle", "Sándalo"]
    },
  },
  {
    id: 130,
    name: "Ameerat Al Arab",
    brand: "Asdaaf",
    price: 32000,
    image: "/images/mockups/ameerat_al_arab.webp",
    category: "mujer",
    description: "Elegancia real en un frasco de terciopelo. Una fragancia floral blanca y afrutada que encarna la feminidad árabe moderna.",
    size: "100ml",
    notes: {
      top: ["Uva", "Naranja", "Manzana"],
      heart: ["Rosa", "Jazmín", "Almizcle blanco", "Ylang-Ylang"],
      base: ["Ámbar", "Haba Tonka", "Sándalo"]
    },
  },
  {
    id: 131,
    name: "Dalal",
    brand: "Lattafa",
    price: 85000,
    image: "/images/mockups/dalal.webp",
    category: "unisex",
    description: "Dulzura caramelizada con un toque cítrico. Una fragancia cálida y reconfortante que envuelve los sentidos.",
    size: "100ml",
    notes: {
      top: ["Naranja", "Notas amaderadas"],
      heart: ["Caramelo", "Vainilla"],
      base: ["Sándalo", "Almizcle"]
    },
  },
  {
    id: 132,
    name: "Beach Party",
    brand: "Armaf",
    price: 75000,
    image: "/images/mockups/armaf_beach_party.webp",
    category: "unisex",
    description: "Energía tropical y frescura costera. Ideal para momentos vibrantes y soleados.",
    size: "100ml",
    notes: {
      top: ["Bergamota", "Limón", "Notas frutales"],
      heart: ["Jazmín", "Lirio de los valles", "Notas florales"],
      base: ["Almizcle", "Ámbar", "Maderas claras"]
    },
  },
  {
    id: 133,
    name: "Haya",
    brand: "Lattafa",
    price: 55000,
    image: "/images/mockups/haya.webp",
    category: "mujer",
    description: "Delicadeza y lujo en un frasco rosa. Una fragancia floral y afrutada con un toque chispeante de champán.",
    size: "100ml",
    notes: {
      top: ["Champán", "Fresa", "Naranja tangerina", "Rosa"],
      heart: ["Gardenia", "Jazmín", "Orquídea de vainilla"],
      base: ["Castaña", "Ámbar", "Sándalo"]
    },
  },
  {
    id: 134,
    name: "Her Confession",
    brand: "Lattafa",
    price: 60000,
    image: "/images/mockups/her_confession.webp",
    category: "mujer",
    description: "Una declaración de estilo y misterio. Fragancia femenina sofisticada con una presentación artística única.",
    size: "100ml",
    notes: {
      top: ["Pera", "Bergamota"],
      heart: ["Jazmín", "Tuberosa", "Notas florales"],
      base: ["Vainilla", "Haba Tonka", "Almizcle"]
    },
  },
  {
    id: 135,
    name: "Musamam Black Intense",
    brand: "Lattafa",
    price: 90000,
    image: "/images/mockups/musamam_black_intense.webp",
    category: "hombre",
    description: "Intensidad oscura y seductora. Un frasco icónico envuelto en un misterio profundo para una presencia inolvidable.",
    size: "100ml",
    notes: {
      top: ["Azafrán", "Mandarina", "Bergamota"],
      heart: ["Geranio", "Incienso", "Ámbar"],
      base: ["Cuero", "Pachulíí", "Almizcle"]
    },
  },
  {
    id: 136,
    name: "Odyssey Mandarinsky Elixir",
    brand: "Armaf",
    price: 31000,
    image: "/images/mockups/odyssey_mandarinsky_elixir.webp",
    category: "hombre",
    description: "Un elixir cítrico vibrante con un corazón aÁmbarado. Frescura y calidez en perfecto equilibrio.",
    size: "100ml",
    notes: {
      top: ["Mandarina", "Naranja", "Azafrán"],
      heart: ["Caramelo", "Haba Tonka"],
      base: ["Ámbar", "Maderas", "Vetiver"]
    },
  },
  {
    id: 137,
    name: "Yum Yum",
    brand: "Armaf",
    price: 85000,
    image: "/images/mockups/yum_yum.webp",
    category: "mujer",
    description: "Una delicia gourmand en un frasco divertido. Notas dulces que evocan la alegría y el placer de los sentidos.",
    size: "100ml",
    notes: {
      top: ["Pistacho", "Helado", "Bergamota", "Cardamomo"],
      heart: ["Lirio de los valles", "Peonía", "Jazmín"],
      base: ["Crema batida", "Malvavisco", "Algodón de azúcar", "Haba Tonka"]
    },
  },
  {
    id: 138,
    name: "Opulent Dubai",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/opulent_dubai.webp",
    category: "unisex",
    description: "La esencia del lujo de Dubai capturada en un frasco. Una fragancia rica, aÁmbarada y majestuosa.",
    size: "100ml",
    notes: {
      top: ["Azafrán", "Cítricos"],
      heart: ["Rosa", "Notas especiadas"],
      base: ["Ámbar", "Oud", "Almizcle"]
    },
  },
  {
    id: 139,
    name: "Habik",
    brand: "Lattafa",
    price: 33000,
    image: "/images/mockups/habik.webp",
    category: "unisex",
    description: "Elegancia floral y amaderada envuelta en un diseño de intrincado metal plateado.",
    size: "100ml",
    notes: {
      top: ["Especias", "Notas cítricas"],
      heart: ["Notas florales", "Maderas suaves"],
      base: ["Ámbar", "Almizcle"]
    },
  },
  {
    id: 140,
    name: "Musamam",
    brand: "Lattafa",
    price: 56000,
    image: "/images/mockups/musamam.webp",
    category: "unisex",
    description: "La versión original y clásica de Musamam. Un aroma potente y especiado con una presentación legendaria.",
    size: "100ml",
    notes: {
      top: ["Mandarina de Italia", "Lavanda", "Azafrán"],
      heart: ["Geranio de Egipto", "Cedro de Virginia", "Madera de Ámbar"],
      base: ["Incienso de Somalia", "Madera de Akigala", "Ládano"]
    },
  },
  {
    id: 141,
    name: "La Voie",
    brand: "Maison Alhambra",
    price: 40000,
    image: "/images/mockups/la_voie.webp",
    category: "mujer",
    description: "Un viaje olfativo a través de flores blancas y notas frescas. Inspirada en el camino de la elegancia.",
    size: "100ml",
    notes: {
      top: ["Flor de azahar", "Bergamota"],
      heart: ["Tuberosa", "Jazmín de la India"],
      base: ["Vainilla de Madagascar", "Almizcle Blanco", "Cedro de Virginia"]
    },
  },
  {
    id: 142,
    name: "9 AM Dive",
    brand: "Afnan",
    price: 65000,
    image: "/images/mockups/9_am_dive.webp",
    category: "hombre",
    description: "Frescura matutina y energía acuática. La fragancia ideal para empezar el día con una actitud refrescante.",
    size: "100ml",
    notes: {
      top: ["Menta", "Grosellas negras", "Limón", "Pimienta rosa"],
      heart: ["Manzana", "Incienso", "Cedro"],
      base: ["Jengibre", "Sándalo", "Pachulíí", "Jazmín"]
    },
  },
  {
    id: 143,
    name: "Atlas",
    brand: "Lattafa",
    price: 55000,
    image: "/images/mockups/atlas.webp",
    category: "hombre",
    description: "La fuerza de los elementos en un frasco rústico. Una fragancia amaderada y marina que evoca la inmensidad del océano.",
    size: "100ml",
    notes: {
      top: ["Notas marinas", "Sal", "Limón"],
      heart: ["Davana", "Flor de azahar"],
      base: ["Ámbar gris", "Musgo de roble", "Sándalo"]
    },
  },
  {
    id: 144,
    name: "Khamrah Dukhan",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/khamrah_dukhan.webp",
    category: "unisex",
    description: "La versión más intensa y ahumada de Khamrah. Un lujo olfativo con notas de incienso y especias profundas.",
    size: "100ml",
    notes: {
      top: ["Canela", "Nuez moscada", "Bergamota"],
      heart: ["Dátiles", "Praliné", "Nardos", "Lirio de los valles"],
      base: ["Humo", "Incienso", "Vainilla", "Haba Tonka", "Ámbar", "Madera de Akigala"]
    },
  },
  {
    id: 145,
    name: "Club de Nuit Intense Man",
    brand: "Armaf",
    price: 60000,
    image: "/images/mockups/club_de_nuit_intense_man.webp",
    category: "hombre",
    description: "Un clásico moderno. Una fragancia amaderada y especiada conocida por su apertura cítrica vibrante y su fondo ahumado y varonil.",
    size: "105ml",
    notes: {
      top: ["Limón", "Piña", "Bergamota", "Grosella negra", "Manzana"],
      heart: ["Abedul", "Jazmín", "Rosa"],
      base: ["Almizcle", "Ámbar gris", "Pachulíí", "Vainilla"]
    },
  },
  {
    id: 146,
    name: "Sakeena",
    brand: "Lattafa",
    price: 34000,
    image: "/images/mockups/sakeena.webp",
    category: "mujer",
    description: "Una joya frutal y gourmet. Sakeena combina la dulzura del praliné y el toffee con notas frescas de maracuyá y frambuesa.",
    size: "100ml",
    notes: {
      top: ["Maracuyá", "Notas ozónicas", "Mandarina"],
      heart: ["Frambuesa", "Rosa", "Azahar", "Sal de mar"],
      base: ["Praliné", "Toffee", "Vainilla", "Almizcle"]
    },
  },
  {
    id: 147,
    name: "Pharaoh Ramesses I",
    brand: "Bharara",
    price: 165000,
    image: "/images/mockups/pharaoh_ramesses.webp",
    category: "hombre",
    description: "Una fragancia majestuosa y opulenta. Combina el carácter bohemio del ron con tabaco, áÁmbary un toque dulce de caramelo.",
    size: "100ml",
    notes: {
      top: ["Ron", "Cardamomo", "Pimienta rosa", "Bergamota"],
      heart: ["Tabaco", "Haba Tonka", "Ámbar", "Pachulíí"],
      base: ["Caramelo", "Vainilla", "Sándalo", "Cedro"]
    },
  },
  {
    id: 148,
    name: "Bade'e Al Oud Honor & Glory",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/badee_honor_glory.webp",
    category: "unisex",
    description: "La realeza de los perfumes gourmet. Una apertura única de piña y crème brûlée que evoluciona en un corazón cálido de especias.",
    size: "100ml",
    notes: {
      top: ["Piña", "Crème Brûlée"],
      heart: ["Canela", "Cúrcuma", "Pimienta negra", "Benzoin"],
      base: ["Vainilla", "Sándalo", "Cashmeran", "Musgo"]
    },
  },
  {
    id: 151,
    name: "Tiramisu Coco",
    brand: "Zimaya",
    price: 65000,
    image: "/images/mockups/zimaya_tiramisu.webp",
    category: "unisex",
    description: "Una fragancia acogedora y dulce como un postre. El caramelo y la miel se funden con un toque de whiskey para una experiencia única.",
    size: "100ml",
    notes: {
      top: ["Caramelo"],
      heart: ["Miel", "Cumarina", "Notas amaderadas"],
      base: ["Vainilla", "Whiskey", "Almizcle"]
    },
  },
  {
    id: 152,
    name: "Fakhar Gold Extrait",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/fakhar_gold.webp",
    category: "unisex",
    description: "Elegancia dorada en cada gota. Un perfume oriental especiado con un corazón solar y un fondo rico de cuero y áÁmbar.",
    size: "100ml",
    notes: {
      top: ["Toronja", "Pimienta rosa", "Cardamomo"],
      heart: ["Tuberosa", "Notas solares", "Artemisia"],
      base: ["Ámbar", "Cashmeran", "Ládano", "Cuero"]
    },
  },
  {
    id: 153,
    name: "Sabah Al Ward",
    brand: "Al Wataniah",
    price: 40000,
    image: "/images/mockups/sabah_al_ward.webp",
    category: "mujer",
    description: "La fragancia del amanecer oriental. Una composición floral sofisticada con toques de cacao y una base cremosa de vainilla.",
    size: "100ml",
    notes: {
      top: ["Pimienta rosa", "Mandarina"],
      heart: ["Cacao", "Azahar", "Jazmín Sambac"],
      base: ["Vainilla", "Haba Tonka", "Pachulíí"]
    },
  },
  {
    id: 154,
    name: "Amber Oud Dubai Night",
    brand: "Al Haramain",
    price: 95000,
    image: "/images/mockups/amber_oud_dubai_night.webp",
    category: "unisex",
    description: "El lujo de la noche en Dubai. Una fragancia opulenta que combina el azafrán con la profundidad del oud y la elegancia de la rosa búlgara.",
    size: "100ml",
    notes: {
      top: ["Azafrán", "Bergamota", "Elemi"],
      heart: ["Oud (Agarwood)", "Rosa Búlgara", "Lirio de los valles"],
      base: ["Haba Tonka", "Ámbar", "Almizcle blanco", "Musgo de roble"]
    },
  },
  {
    id: 155,
    name: "9PM Night Out",
    brand: "Afnan",
    price: 95000,
    image: "/images/mockups/9pm_nigth_out.webp",
    category: "hombre",
    description: "La fragancia definitiva para tus noches de fiesta. Una mezcla magnética y vibrante que asegura una presencia inolvidable en cada salida.",
    size: "100ml",
    notes: {
      top: ["Manzana", "Lavanda", "Bergamota"],
      heart: ["Azahar", "Canela"],
      base: ["Vainilla", "Haba Tonka", "Ámbar"]
    },
  },
  {
    id: 156,
    name: "Bharara King",
    brand: "Bharara",
    price: 100000,
    image: "/images/mockups/bharara_king_edp_100ml.webp",
    category: "hombre",
    description: "Una fragancia majestuosa y masculina con un perfil olfativo distintivo.",
    size: "100ml",
    notes: {
      top: ["Notas cítricas"],
      heart: ["Especias", "Ámbar"],
      base: ["Maderas", "Almizcle"]
    },
  },
  {
    id: 157,
    name: "Happy Time",
    brand: "Lattafa",
    price: 35000,
    image: "/images/mockups/Happy_time_75ml.webp",
    category: "mujer",
    description: "Una fragancia delicada y encantadora, perfecta para cualquier ocasión especial.",
    size: "75ml",
    notes: {
      top: ["Flores blancas"],
      heart: ["Vainilla", "Jazmín"],
      base: ["Sándalo", "Almizcle suave"]
    },
  },
  {
    id: 158,
    name: "Club de Nuit Imperiale",
    brand: "Lattafa",
    price: 80000,
    image: "/images/mockups/club_de_nuit_imperiale_105ml.webp",
    category: "mujer",
    description: "La versión más lujosa y floral de la línea Club de Nuit, con rosa turca e incienso.",
    size: "105ml",
        notes: {
      top: ['Lichi', 'Bergamota', 'Nuez moscada'],
      heart: ['Rosa turca'],
      base: ['Vainilla', 'Almizcle', 'Incienso']
    },
  },
  {
    id: 159,
    name: "Angham",
    brand: "Lattafa",
    price: 55000,
    image: "/images/mockups/angham_mockup.webp",
    category: "mujer",
    description: "Una melodía olfativa floral y ambarada con un toque picante de jengibre.",
    size: "100ml",
        notes: {
      top: ['Jengibre', 'Mandarina', 'Pimienta rosa'],
      heart: ['Jazmín', 'Rosa'],
      base: ['Ámbar', 'Vainilla']
    },
  },
  {
    id: 160,
    name: "Hayaati Gold Elixir",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/hayaati_gold_mockup.webp",
    category: "unisex",
    description: "Un elixir dorado de lichi y cactus con un fondo suave de almizcle blanco.",
    size: "100ml",
        notes: {
      top: ['Lichi', 'Cactus'],
      heart: ['Rosa de los valles', 'Cítricos'],
      base: ['Almizcle blanco']
    },
  },
  {
    id: 161,
    name: "Hayaati Al Maleky",
    brand: "Lattafa",
    price: 40000,
    image: "/images/mockups/hayaati_al_maleky_100ml.webp",
    category: "unisex",
    description: "Una nueva y exclusiva adición a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Notas cítricas"],
      heart: ["Especias", "Ámbar"],
      base: ["Maderas", "Almizcle"]
    },
  },
  {
    id: 162,
    name: "Celeste",
    brand: "Maison Alhambra",
    price: 50000,
    image: "/images/mockups/celeste_mockup.webp",
    category: "mujer",
    description: "Dulzura celestial de melocotón y caramelo sobre un fondo suave de sándalo.",
    size: "100ml",
        notes: {
      top: ['Melocotón', 'Mandarina'],
      heart: ['Notas florales blancas'],
      base: ['Caramelo', 'Sándalo']
    },
  },
  {
    id: 163,
    name: "Coconut Lagoon",
    brand: "Ministry of Gourmand",
    price: 50000,
    image: "/images/mockups/coconut_lagoon_mockup.webp",
    category: "unisex",
    description: "Un paraíso tropical de agua de coco y notas marinas refrescantes.",
    size: "100ml",
        notes: {
      top: ['Agua de coco', 'Bergamota'],
      heart: ['Jazmín'],
      base: ['Notas marinas', 'Almizcle blanco']
    },
  },
  {
    id: 164,
    name: "La Rouge Baroque Extreme",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/la_rouge_baroque_extreme_100ml.webp",
    category: "unisex",
    description: "Elegancia barroca con azafrán, jazmín y la profundidad del ámbar gris.",
    size: "100ml",
        notes: {
      top: ['Azafrán', 'Jazmín'],
      heart: ['Madera de ámbar'],
      base: ['Ámbar gris', 'Resina de abeto']
    },
  },
  {
    id: 165,
    name: "Erba Pura",
    brand: "Xerjoff",
    price: 350000,
    image: "/images/mockups/erba_pura_mockup.webp",
    category: "unisex",
    description: "Una explosión frutal cítrica con la cremosidad de la vainilla de Madagascar.",
    size: "100ml",
        notes: {
      top: ['Naranja siciliana', 'Limón siciliano', 'Bergamota de Calabria'],
      heart: ['Notas frutales mixtas'],
      base: ['Vainilla de Madagascar']
    },
  },
  {
    id: 166,
    name: "Liquid Brun",
    brand: "Lattafa",
    price: 90000,
    image: "/images/mockups/luquid_brun_100ml.webp",
    category: "hombre",
    description: "Un aroma cálido y envolvente de vainilla de Madagascar y especias finas.",
    size: "100ml",
        notes: {
      top: ['Canela', 'Cardamomo', 'Azahar'],
      heart: ['Vainilla de Madagascar'],
      base: ['Ámbar']
    },
  },
  {
    id: 167,
    name: "Qaed Al Fursan Unlimited",
    brand: "Lattafa",
    price: 40000,
    image: "/images/mockups/qaed_al_fursan_unlimited_90ml.webp",
    category: "unisex",
    description: "Dulzura tropical ilimitada con coco, piña y flores blancas.",
    size: "100ml",
        notes: {
      top: ['Coco', 'Cítricos', 'Piña'],
      heart: ['Ylang-ylang', 'Jazmín'],
      base: ['Vainilla']
    },
  },
  {
    id: 168,
    name: "Mayar EDP",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/mayar_mockup.webp",
    category: "mujer",
    description: "Una fragancia femenina vibrante de frambuesa y lichi con un corazón de rosas blancas.",
    size: "100ml",
        notes: {
      top: ['Frambuesa', 'Lichi'],
      heart: ['Rosa blanca', 'Peonía'],
      base: ['Almizcle']
    },
  },
  {
    id: 169,
    name: "Qimmah For Women",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/qimmah_for_women_100ml.webp",
    category: "mujer",
    description: "Sofisticación gourmet con notas de almendra, café y cacao.",
    size: "100ml",
        notes: {
      top: ['Almendra', 'Café'],
      heart: ['Jazmín'],
      base: ['Haba tonka', 'Cacao', 'Vainilla']
    },
  },
  {
    id: 170,
    name: "Sceptre Malachite",
    brand: "Lattafa",
    price: 55000,
    image: "/images/mockups/sceptre_malachite_100ml.webp",
    category: "hombre",
    description: "Una fragancia mineral y aromática con un carácter distintivo y elegante.",
    size: "100ml",
        notes: {
      top: ['Salvia esclarea', 'Mandarina'],
      heart: ['Notas minerales'],
      base: ['Gamuza', 'Ámbar']
    },
  },
  {
    id: 171,
    name: "Tiramisu Caramel",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/tiramisú_caramel_100ml.webp",
    category: "mujer",
    description: "Una delicia irresistible que combina el aroma del café y la leche con caramelo dulce.",
    size: "100ml",
        notes: {
      top: ['Café', 'Cacao', 'Leche'],
      heart: ['Caramelo'],
      base: ['Vainilla', 'Azúcar']
    },
  }
,  {
    id: 172,
    name: "9 PM Femme",
    brand: "Afnan",
    price: 50000,
    image: "/images/mockups/9_pm_femme_mockup.webp",
    category: "mujer",
    description: "Una fragancia femenina vibrante y seductora, ideal para momentos especiales.",
    size: "100ml",
        notes: {
      top: ['Frambuesa', 'Manzana', 'Naranja'],
      heart: ['Violeta', 'Jazmín', 'Iris'],
      base: ['Pino', 'Cedro', 'Ámbar']
    },
  },
  {
    id: 173,
    name: "Al Haramain Amber Oud",
    brand: "Al Haramain",
    price: 65000,
    image: "/images/mockups/amber_oud_mockup.webp",
    category: "unisex",
    description: "La esencia del lujo oriental en un frasco generoso. Una mezcla rica de áÁmbar y oud.",
    size: "120ml",
        notes: {
      top: ['Romero', 'Bergamota', 'Limón'],
      heart: ['Cedro', 'Especias'],
      base: ['Notas amaderadas', 'Ámbar', 'Almizcle']
    },
  },
  {
    id: 174,
    name: "Amethyst",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/amethyst_mockup.webp",
    category: "unisex",
    description: "Una interpretación floral y especiada del oud, inspirada en Initio Atomic Rose.",
    size: "100ml",
        notes: {
      top: ['Pimienta rosa', 'Bergamota'],
      heart: ['Rosa turca', 'Rosa de Bulgaria', 'Jazmín'],
      base: ['Madera de agar (Oud)', 'Ámbar', 'Vainilla']
    },
  },
  {
    id: 175,
    name: "Asad Bourbon",
    brand: "Lattafa",
    price: 55000,
    image: "/images/mockups/asad_zanzibar_mockup.webp",
    category: "hombre",
    description: "Una fragancia tropical y audaz que evoca la brisa del océano y especias exóticas.",
    size: "100ml",
        notes: {
      top: ['Pimienta negra', 'Piña'],
      heart: ['Café', 'Pachulíí', 'Iris'],
      base: ['Vainilla', 'Ámbar', 'Benjuí']
    },
  },
  {
    id: 176,
    name: "Club de Nuit Maleka",
    brand: "Armaf",
    price: 60000,
    image: "/images/mockups/maleka_mockup.webp",
    category: "unisex",
    description: "Elegancia y misterio en una fragancia floral ambarada para la mujer moderna.",
    size: "105ml",
        notes: {
      top: ['Limón', 'Piña', 'Bergamota', 'Grosellas negras'],
      heart: ['Abedul', 'Jazmín', 'Rosa'],
      base: ['Almizcle', 'Ámbar gris', 'Pachulí']
    },
  },
  {
    id: 177,
    name: "Confidential Private Gold",
    brand: "Lattafa",
    price: 45000,
    image: "/images/mockups/private_gold_mockup.webp",
    category: "unisex",
    description: "Un aroma frutal y almizclado que irradia lujo y sofisticación.",
    size: "100ml",
        notes: {
      top: ['Melocotón (durazno)', 'Frambuesa', 'Pera', 'Maracuyá'],
      heart: ['Lirio de los valles'],
      base: ['Sándalo', 'Vainilla', 'Almizcle']
    },
  },
  {
    id: 178,
    name: "Eclaire",
    brand: "Lattafa",
    price: 55000,
    image: "/images/mockups/eclaire_mockup.webp",
    category: "mujer",
    description: "Una delicia gourmand que combina caramelo y flores blancas de manera exquisita.",
    size: "100ml",
        notes: {
      top: ['Caramelo', 'Leche', 'Azúcar'],
      heart: ['Miel', 'Flores blancas'],
      base: ['Vainilla', 'Almizcle']
    },
  },
  {
    id: 179,
    name: "Emeer",
    brand: "Lattafa",
    price: 60000,
    image: "/images/mockups/emeer_mockup.webp",
    category: "unisex",
    description: "Una fragancia majestuosa con una presentación de lujo, perfecta para ocasiones reales.",
    size: "100ml",
        notes: {
      top: ['Limón', 'Bergamota', 'Bayas de enebro'],
      heart: ['Salvia', 'Cardamomo'],
      base: ['Sándalo', 'Incienso', 'Pachulíí']
    },
  },
  {
    id: 180,
    name: "Fakhar Black",
    brand: "Lattafa",
    price: 45000,
    image: "/images/mockups/fakhar_black_mockup.webp",
    category: "hombre",
    description: "Inspirada en YSL Y EDP, una fragancia fresca y aromática para el hombre dinámico.",
    size: "100ml",
        notes: {
      top: ['Manzana', 'Jengibre', 'Bergamota'],
      heart: ['Lavanda', 'Salvia', 'Bayas de enebro'],
      base: ['Haba tonka', 'Ámbar']
    },
  },
  {
    id: 181,
    name: "Fakhar Platinum",
    brand: "Lattafa",
    price: 45000,
    image: "/images/mockups/fakhar_platinum_mockup.webp",
    category: "hombre",
    description: "Una variante elegante y sofisticada con un perfil olfativo metálico y fresco.",
    size: "100ml",
        notes: {
      top: ['Toronja (pomelo)', 'Notas marinas'],
      heart: ['Especias', 'Ládano'],
      base: ['Notas amaderadas', 'Ámbar gris']
    },
  },
  {
    id: 182,
    name: "Ghost Spectre",
    brand: "Fragrance World",
    price: 50000,
    image: "/images/mockups/ghost_spectre_mockup.webp",
    category: "unisex",
    description: "Una fragancia misteriosa y envolvente con una estela inconfundible.",
    size: "100ml",
        notes: {
      top: ['Notas especiadas'],
      heart: ['Notas amaderadas'],
      base: ['Ámbar', 'Toque ahumado']
    },
  },
  {
    id: 183,
    name: "Happy Brush",
    brand: "Lattafa",
    price: 35000,
    image: "/images/mockups/happy_brush_mockup.webp",
    category: "mujer",
    description: "Una fragancia alegre y juvenil en un formato práctico de 75ml.",
    size: "75ml",
        notes: {
      top: ['Frutas dulces'],
      heart: ['Notas florales suaves'],
      base: ['Almizcle limpio']
    },
  },
  {
    id: 184,
    name: "La Vivacite Intensa",
    brand: "Maison Alhambra",
    price: 48000,
    image: "/images/mockups/vivacite_mockup.webp",
    category: "mujer",
    description: "Una explosión de vitalidad y elegancia floral para la mujer decidida.",
    size: "100ml",
        notes: {
      top: ['Bergamota', 'Pera'],
      heart: ['Nardos', 'Flor de azahar', 'Jazmín'],
      base: ['Pachulíí', 'Vainilla']
    },
  },
  {
    id: 185,
    name: "No. 2 Men",
    brand: "Fragrance World",
    price: 55000,
    image: "/images/mockups/no2_mockup.webp",
    category: "hombre",
    description: "Inspirada en Rosendo Mateu No. 2, una fragancia de cuero y flores de alta costura.",
    size: "100ml",
        notes: {
      top: ['Notas verdes', 'Especias', 'Bergamota'],
      heart: ['Lavanda', 'Gardenia', 'Jengibre'],
      base: ['Incienso', 'Sándalo']
    },
  },
  {
    id: 186,
    name: "Oud for Glory",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/oud_glory_mockup.webp",
    category: "unisex",
    description: "El icónico 'Oud for Glory', una fragancia potente y mística basada en el oud más puro.",
    size: "100ml",
        notes: {
      top: ['Azafrán', 'Nuez moscada', 'Lavanda'],
      heart: ['Madera de agar (Oud)'],
      base: ['Pachulíí', 'Almizcle']
    },
  },
  {
    id: 187,
    name: "Salvo Intense",
    brand: "Maison Alhambra",
    price: 45000,
    image: "/images/mockups/salvo_intense_mockup.webp",
    category: "hombre",
    description: "Inspirada en Sauvage Elixir, una fragancia extremadamente concentrada y especiada.",
    size: "100ml",
        notes: {
      top: ['Pimienta de Sichuan', 'Bergamota de Calabria'],
      heart: ['Lavanda', 'Pachulíí'],
      base: ['Ambroxan']
    },
  },
  {
    id: 188,
    name: "Sublime",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/sublime_mockup.webp",
    category: "unisex",
    description: "Una fragancia frutal y vibrante con notas de manzana roja y lichi.",
    size: "100ml",
        notes: {
      top: ['Manzana', 'Lichi'],
      heart: ['Rosa', 'Ciruela', 'Jazmín'],
      base: ['Vainilla', 'Musgo', 'Pachulíí']
    },
  },
  {
    id: 189,
    name: "Supremacy Pour Homme",
    brand: "Afnan",
    price: 55000,
    image: "/images/mockups/supremacy_mockup.webp",
    category: "hombre",
    description: "Una fragancia poderosa y elegante inspirada en el legendario Aventus.",
    size: "100ml",
    notes: {
      top: ["Piña", "Grosellas negras", "Bergamota", "Manzana"],
      heart: ["Abedul", "Jazmín"],
      base: ["Almizcle", "Ámbar gris"]
    },
  },
  {
    id: 190,
    name: "Viking Kashmir",
    brand: "Fragrance World",
    price: 50000,
    image: "/images/mockups/viking_kashmir_mockup.webp",
    category: "unisex",
    description: "Una mezcla fresca y especiada que evoca la fuerza y el espíritu de los exploradores.",
    size: "100ml",
    notes: {
      top: ["Pimienta rosa", "Menta", "Limón"],
      heart: ["Lavanda", "Clavo de olor", "Pimienta de Jamaica"],
      base: ["Sándalo", "Vetiver"]
    },
  },
  {
    id: 191,
    name: "Yara",
    brand: "Lattafa",
    price: 45000,
    image: "/images/mockups/yara_mockup.webp",
    category: "mujer",
    description: "El famoso 'perfume rosa', una fragancia tropical y cremosa que encanta a todos.",
    size: "100ml",
    notes: {
      top: ["Orquídea", "Heliotropo", "Mandarina"],
      heart: ["Notas tropicales"],
      base: ["Vainilla", "Almizcle", "Sándalo"]
    },
  },
  {
    id: 192,
    name: "9 PM Rebel",
    brand: "Afnan",
    price: 60000,
    image: "/images/mockups/9pm_rebel_mockup.webp",
    category: "hombre",
    description: "Una versión rebelde y audaz del clásico 9PM, con una apertura cítrica y un corazón dulce irresistible.",
    size: "100ml",
    notes: {
      top: ["Mandarina", "Manzana Granny Smith", "Caramelo"],
      heart: ["Cedro", "Vainilla"],
      base: ["Almizcle", "Ámbar"]
    },
  },
  {
    id: 193,
    name: "Asad Elixir",
    brand: "Lattafa",
    price: 75000,
    image: "/images/mockups/asad_elixir_mockup.webp",
    category: "hombre",
    description: "Una versión más intensa con notas de pimienta negra, café, vainilla y un fondo amaderado profundo.",
    size: "100ml",
    notes: {
      top: ["Pimienta negra"],
      heart: ["Café"],
      base: ["Vainilla", "Maderas profundas"]
    },
  },
  {
    id: 194,
    name: "Eternal Oud",
    brand: "Lattafa",
    price: 85000,
    image: "/images/mockups/eternal_oud_mockup.webp",
    category: "unisex",
    description: "Una fragancia mística y eterna que combina la ciruela y el oud en un frasco artístico.",
    size: "100ml",
    notes: {
      top: ["Ciruela", "Pomelo"],
      heart: ["Orquídea", "Heliotropo"],
      base: ["Oud", "Benjuí", "Ládano"]
    },
  },
  {
    id: 195,
    name: "Yara Elixir",
    brand: "Lattafa",
    price: 55000,
    image: "/images/mockups/yara_elixir_mockup.webp",
    category: "mujer",
    description: "Una versión más profunda y concentrada del famoso Yara rosa, con notas florales intensas.",
    size: "100ml",
    notes: {
      top: ["Notas frutales"],
      heart: ["Jazmín", "Gardenia"],
      base: ["Vainilla intensa"]
    },
  },
  {
    id: 196,
    name: "Yara Moi",
    brand: "Lattafa",
    price: 45000,
    image: "/images/mockups/yara_moi_mockup.webp",
    category: "mujer",
    description: "El Yara blanco, una fragancia cremosa de melocotón y jazmín con un toque de caramelo.",
    size: "100ml",
    notes: {
      top: ["Melocotón (durazno)", "Jazmín"],
      heart: ["Caramelo"],
      base: ["Ámbar"]
    },
  },
  {
    id: 197,
    name: "Yara Tous",
    brand: "Lattafa",
    price: 45000,
    image: "/images/mockups/yara_tous_mockup.webp",
    category: "mujer",
    description: "El Yara amarillo, una explosión tropical de mango y coco ideal para el verano.",
    size: "100ml",
    notes: {
      top: ["Mango", "Coco", "Maracuyá"],
      heart: ["Jazmín"],
      base: ["Almizcle"]
    },
  },
  {
    id: 198,
    name: "Asad",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/asad_mockup.webp",
    category: "hombre",
    description: "Inspirada en Sauvage Elixir, una fragancia potente de pimienta, piña y maderas.",
    size: "100ml",
    notes: {
      top: ["Pimienta negra", "Piña", "Tabaco"],
      heart: ["Café", "Pachulí", "Iris"],
      base: ["Ámbar", "Vainilla", "Maderas secas", "Benjuí", "Ládano"]
    },
  },
  {
    id: 199,
    name: "Club de Nuit Woman",
    brand: "Armaf",
    price: 45000,
    image: "/images/mockups/club_de_nuit_woman_mockup.webp",
    category: "mujer",
    description: "Una fragancia floral y frutal elegante, conocida por su parecido con Coco Mademoiselle.",
    size: "105ml",
    notes: {
      top: ["Bergamota", "Toronja (pomelo)", "Melocotón", "Naranja"],
      heart: ["Geranio", "Jazmín", "Lichi", "Rosa"],
      base: ["Almizcle", "Pachulí", "Vainilla", "Vetiver"]
    },
  },
  {
    id: 200,
    name: "Desirable Addiction",
    brand: "Lattafa",
    price: 45000,
    image: "/images/mockups/desirable_addiction_mockup.webp",
    category: "unisex",
    description: "Una adicción dulce con notas de chocolate y café que envuelven los sentidos.",
    size: "100ml",
    notes: {
      top: ["Chocolate", "Especias"],
      heart: ["Café"],
      base: ["Vainilla"]
    },
  },
  {
    id: 201,
    name: "Khalid",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/khalid_mockup.webp",
    category: "hombre",
    description: "Una fragancia masculina potente con notas de azafrán, cuero y oud, presentada en un frasco escultórico.",
    size: "80ml",
    notes: {
      top: ["Azafrán"],
      heart: ["Cuero"],
      base: ["Oud", "Sándalo"]
    },
  },
  {
    id: 202,
    name: "L'Intrude",
    brand: "Maison Alhambra",
    price: 40000,
    image: "/images/mockups/lintrude_mockup.webp",
    category: "mujer",
    description: "Inspirada en L'Interdit, una fragancia floral blanca sofisticada con nardos y azahar.",
    size: "100ml",
    notes: {
      top: ["Bergamota", "Pera"],
      heart: ["Nardos", "Azahar", "Jazmín"],
      base: ["Vainilla", "Pachulí"]
    },
  },
  {
    id: 203,
    name: "Leuer d'Espoir Serene Grove",
    brand: "Lattafa",
    price: 45000,
    image: "/images/mockups/leuer_despoir_mockup.webp",
    category: "unisex",
    description: "Una fragancia fresca y verde que evoca la serenidad de un bosque cítrico.",
    size: "100ml",
    notes: {
      top: ["Notas verdes", "Cítricos frescos"],
      heart: ["Maderas ligeras"],
      base: ["Almizcle"]
    },
  },
  {
    id: 204,
    name: "Mohra Silky Rose",
    brand: "Lattafa",
    price: 45000,
    image: "/images/mockups/mohra_silky_rose_mockup.webp",
    category: "mujer",
    description: "Una rosa sedosa y afrutada combinada con lichi y pimienta rosa para una elegancia moderna.",
    size: "100ml",
    notes: {
      top: ["Rosa", "Lichi"],
      heart: ["Pimienta rosa"],
      base: ["Almizcle", "Sándalo"]
    },
  },
  {
    id: 205,
    name: "Nebras",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/nebras_mockup.webp",
    category: "unisex",
    description: "Una delicia gourmand de cacao y vainilla con toques de frutos rojos y azúcar.",
    size: "100ml",
    notes: {
      top: ["Frutos rojos", "Mandarina"],
      heart: ["Cacao", "Vainilla"],
      base: ["Azúcar", "Haba tonka"]
    },
  },
  {
    id: 206,
    name: "Badee Al Oud Noble Blush",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/noble_blush.webp",
    category: "mujer",
    description: "Una fragancia femenina y dulce que combina la cremosidad del merengue con la delicadeza de la rosa.",
    size: "100ml",
    notes: {
      top: ["Notas florales suaves"],
      heart: ["Bayas"],
      base: ["Almizcle blanco"]
    },
  },
  {
    id: 207,
    name: "Odyssey Aqua",
    brand: "Armaf",
    price: 60000,
    image: "/images/mockups/odyssey_aqua.webp",
    category: "hombre",
    description: "Frescura acuática y aromática con un toque cítrico vibrante, ideal para el hombre moderno.",
    size: "100ml",
    notes: {
      top: ["Notas marinas", "Pomelo (toronja)"],
      heart: ["Laurel"],
      base: ["Ámbar gris"]
    },
  },
  {
    id: 208,
    name: "Odyssey Mandarin Sky",
    brand: "Armaf",
    price: 60000,
    image: "/images/mockups/odyssey_mandarin_sky.webp",
    category: "hombre",
    description: "Un equilibrio perfecto entre cítricos dulces y notas amaderadas cálidas, con un corazón de caramelo.",
    size: "100ml",
    notes: {
      top: ["Mandarina", "Naranja", "Azafrán"],
      heart: ["Caramelo"],
      base: ["Toque dulce"]
    },
  },
  {
    id: 209,
    name: "Pisa",
    brand: "Lattafa Pride",
    price: 55000,
    image: "/images/mockups/pisa.webp",
    category: "unisex",
    description: "Inspirada en la elegancia italiana, esta fragancia cítrica y amaderada evoca la frescura del Mediterráneo.",
    size: "100ml",
    notes: {
      top: ["Notas cítricas"],
      heart: ["Notas herbales"],
      base: ["Almizcle limpio"]
    },
  },
  {
    id: 210,
    name: "Play",
    brand: "Lattafa Pride",
    price: 55000,
    image: "/images/mockups/play.webp",
    category: "mujer",
    description: "Una fragancia juguetona y dinámica que combina frutas jugosas con un fondo amaderado sofisticado.",
    size: "100ml",
    notes: {
      top: ["Notas frutales dulces"],
      heart: ["Flores blancas"],
      base: ["Vainilla"]
    },
  },
  {
    id: 211,
    name: "Club de Nuit Precieux",
    brand: "Armaf",
    price: 85000,
    image: "/images/mockups/precieux.webp",
    category: "hombre",
    description: "Un extracto de perfume de alta gama, potente y lujoso, con una estela inconfundible de cuero y ámbar.",
    size: "55ml",
    notes: {
      top: ["Notas cítricas"],
      heart: ["Especias picantes"],
      base: ["Almizcle", "Madera"]
    },
  },
  {
    id: 212,
    name: "Qaed Al Fursan Untamed",
    brand: "Lattafa",
    price: 45000,
    image: "/images/mockups/untamed.webp",
    category: "hombre",
    description: "Una versión audaz y salvaje de Qaed Al Fursan, con especias cálidas y un fondo ambarado profundo.",
    size: "90ml",
    notes: {
      top: ["Piña", "Azafrán"],
      heart: ["Notas amaderadas"],
      base: ["Ámbar"]
    },
  },
  {
    id: 213,
    name: "Sehr",
    brand: "Lattafa",
    price: 65000,
    image: "/images/mockups/sehr.webp",
    category: "unisex",
    description: "Una fragancia oriental cautivadora con la calidez de la canela y la profundidad de la vainilla absoluta.",
    size: "100ml",
    notes: {
      top: ["Canela"],
      heart: ["Praliné", "Dátiles"],
      base: ["Vainilla", "Incienso"]
    },
  },
];
