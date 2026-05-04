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
    price: 70000,
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
    price: 70000,
    image: "/images/arabes/jean-lowe-vibe.webp",
    category: "hombre",
    description: "Fragancia cítrica y amaderada inspirada en L'Immensité. Un aroma fresco y sofisticado con una presencia magnética.",
    size: "100ml",
    notes: {
      top: ["Pomelo", "Jengibre"],
      heart: ["Ambroxan", "Ládano"],
      base: ["Pachulí", "Notas amaderadas"]
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
      base: ["Pachulí", "Sándalo", "Ámbar", "Incienso", "Cedro"]
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
      base: ["Vainilla", "Haba Tonka", "Ámbar", "Cedro", "Incienso", "Pachulí"]
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
      base: ["Vainilla", "Haba Tonka", "Ámbar", "Pachulí"]
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
      base: ["Ámbar gris", "Almizcle", "Pachulí", "Madera a la deriva"]
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
    description: "Fragancia intensa ambarada con carácter art déco. Su líquido ámbar profundo y diseño geométrico reflejan elegancia atemporal.",
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
    id: 113,
    name: "Al Nashama",
    brand: "Lattafa",
    price: 31000,
    image: "/images/arabes/al-nashama.webp",
    category: "unisex",
    description: "Un frasco azul zafiro con detalles dorados que captura la elegancia nocturna del medio oriente. Fragancia profunda y envolvente.",
    size: "100ml",
    notes: {
      top: ["Pimienta rosa", "Bergamota", "Salvia"],
      heart: ["Ciruela", "Pimienta negra", "Jazmín"],
      base: ["Ámbar", "Pachulí", "Musgo"]
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
    price: 70000,
    image: "/images/mockups/9_pm_elixir_100ml.webp",
    category: "hombre",
    description: "Versión más concentrada del 9PM. Una de nuestras adiciones más exclusivas a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Vainilla", "Ámbar"],
      heart: ["Especias picantes"],
      base: ["Madera"]
    },
  },
  {
    id: 116,
    name: "Al Nashama Caprice",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/al_nashama_caprice_100ml.webp",
    category: "unisex",
    description: "Una de nuestras adiciones más exclusivas a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Bergamota", "Jengibre"],
      heart: ["Cardamomo", "Lavanda"],
      base: ["Cedro"]
    },
  },
  {
    id: 117,
    name: "Aqua Dubai",
    brand: "Lattafa",
    price: 100000,
    image: "/images/mockups/aqua_dubai_100ml.webp",
    category: "unisex",
    description: "Una de nuestras adiciones más exclusivas a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Mandarina", "Notas marinas"],
      heart: ["Ámbar", "Almizcle"],
      base: ["Maderas blancas"]
    },
  },
  {
    id: 118,
    name: "Art Of Arabia III",
    brand: "Lattafa",
    price: 35000,
    image: "/images/mockups/art_of_arabia_ai_recreated.webp",
    category: "hombre",
    description: "Una de nuestras adiciones más exclusivas a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Incienso de olíbano", "Davana", "Bergamota"],
      heart: ["Dátiles", "Tabaco", "Sándalo", "Nardos"],
      base: ["Haba tonka", "Mirra", "Vainilla", "Ládano", "Pachulí"]
    },
  },
  {
    id: 119,
    name: "Art Of Nature II",
    brand: "Lattafa",
    price: 70000,
    image: "/images/mockups/Art_Of_Nature_II_100ml.webp",
    category: "unisex",
    description: "Una de nuestras adiciones más exclusivas a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Notas verdes", "Cítricos"],
      heart: ["Maderas exóticas"],
      base: ["Fondo terroso"]
    },
  },
  {
    id: 120,
    name: "Essence De Blanc",
    brand: "Lattafa",
    price: 35000,
    image: "/images/mockups/essence_de_blanc_100ml.webp",
    category: "mujer",
    description: "Una de nuestras adiciones más exclusivas a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Flores blancas", "Bergamota"],
      heart: ["Notas empolvadas"],
      base: ["Almizcle"]
    },
  },
  {
    id: 121,
    name: "Hayaati",
    brand: "Lattafa",
    price: 40000,
    image: "/images/mockups/hayaati_100ml.webp",
    category: "hombre",
    description: "Una de nuestras adiciones más exclusivas a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Manzana verde", "Bergamota"],
      heart: ["Cardamomo", "Canela"],
      base: ["Notas amaderadas"]
    },
  },
  {
    id: 122,
    name: "Historic Olmeda",
    brand: "Lattafa",
    price: 65000,
    image: "/images/mockups/historic_olmeda_100ml.webp",
    category: "hombre",
    description: "Una de nuestras adiciones más exclusivas a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Pomelo", "Enebro"],
      heart: ["Pimienta rosa", "Jazmín"],
      base: ["Cedro"]
    },
  },
  {
    id: 123,
    name: "Khamrah",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/khamrah_100ml.webp",
    category: "unisex",
    description: "Una de nuestras adiciones más exclusivas a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Canela", "Nuez moscada"],
      heart: ["Dátiles", "Praliné"],
      base: ["Vainilla"]
    },
  },
  {
    id: 124,
    name: "Khamrah Qahwa",
    brand: "Lattafa",
    price: 50000,
    image: "/images/mockups/khamrah_qahwa_100ml.webp",
    category: "unisex",
    description: "Una de nuestras adiciones más exclusivas a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Canela", "Nuez moscada"],
      heart: ["Dátiles", "Praliné", "Café tostado"],
      base: ["Vainilla"]
    },
  },
  {
    id: 125,
    name: "King Of Arabia",
    brand: "Lattafa",
    price: 70000,
    image: "/images/mockups/king_of_arabia_100ml.webp",
    category: "hombre",
    description: "Una de nuestras adiciones más exclusivas a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Cítricos intensos", "Notas marinas"],
      heart: ["Especias orientales"],
      base: ["Cuero"]
    },
  },
  {
    id: 126,
    name: "La Yuqawam",
    brand: "Rasasi",
    price: 80000,
    image: "/images/mockups/la_yuqawam-100ml.webp",
    category: "hombre",
    description: "Una de nuestras adiciones más exclusivas a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Frambuesa", "Azafrán"],
      heart: ["Tomillo"],
      base: ["Gamuza", "Cuero"]
    },
  },
  {
    id: 127,
    name: "Nebras Elixir",
    brand: "Lattafa",
    price: 70000,
    image: "/images/mockups/nebras_elixir_100ml.webp",
    category: "unisex",
    description: "Una de nuestras adiciones más exclusivas a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Frutos rojos", "Mandarina"],
      heart: ["Cacao", "Azúcar"],
      base: ["Vainilla", "Haba Tonka"]
    },
  },
  {
    id: 128,
    name: "Philos Pura",
    brand: "Maison Alhambra",
    price: 55000,
    image: "/images/mockups/philos_pura_100ml.webp",
    category: "unisex",
    description: "Una de nuestras adiciones más exclusivas a la colección premium de perfumería árabe.",
    size: "100ml",
    notes: {
      top: ["Cítricos sicilianos"],
      heart: ["Mezcla de frutas"],
      base: ["Vainilla", "Almizcle blanco"]
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
      base: ["Cuero", "Pachulí", "Almizcle"]
    },
  },
  {
    id: 136,
    name: "Odyssey Mandarinsky Elixir",
    brand: "Armaf",
    price: 31000,
    image: "/images/mockups/odyssey_mandarinsky_elixir.webp",
    category: "hombre",
    description: "Un elixir cítrico vibrante con un corazón ambarado. Frescura y calidez en perfecto equilibrio.",
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
    description: "La esencia del lujo de Dubai capturada en un frasco. Una fragancia rica, ambarada y majestuosa.",
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
      base: ["Jengibre", "Sándalo", "Pachulí", "Jazmín"]
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
    price: 70000,
    image: "/images/mockups/club_de_nuit_intense_man.webp",
    category: "hombre",
    description: "Un clásico moderno. Una fragancia amaderada y especiada conocida por su apertura cítrica vibrante y su fondo ahumado y varonil.",
    size: "105ml",
    notes: {
      top: ["Limón", "Piña", "Bergamota", "Grosella negra", "Manzana"],
      heart: ["Abedul", "Jazmín", "Rosa"],
      base: ["Almizcle", "Ámbar gris", "Pachulí", "Vainilla"]
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
    description: "Una fragancia majestuosa y opulenta. Combina el carácter bohemio del ron con tabaco, ámbary un toque dulce de caramelo.",
    size: "100ml",
    notes: {
      top: ["Ron", "Cardamomo", "Pimienta rosa", "Bergamota"],
      heart: ["Tabaco", "Haba Tonka", "Ámbar", "Pachulí"],
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
    id: 149,
    name: "Qaed Al Fursan Unlimited",
    brand: "Lattafa",
    price: 40000,
    image: "/images/mockups/qaed_al_fursan_unlimited.webp",
    category: "unisex",
    description: "Frescura tropical ilimitada. Una mezcla cremosa de coco y piña con flores blancas, ideal para un aroma limpio y veraniego.",
    size: "100ml",
    notes: {
      top: ["Coco", "Piña", "Cítricos"],
      heart: ["Ylang-Ylang", "Frangipani", "Jazmín"],
      base: ["Vainilla", "Almizcle", "Sándalo"]
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
    description: "Elegancia dorada en cada gota. Un perfume oriental especiado con un corazón solar y un fondo rico de cuero y ámbar.",
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
      base: ["Vainilla", "Haba Tonka", "Pachulí"]
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
];
