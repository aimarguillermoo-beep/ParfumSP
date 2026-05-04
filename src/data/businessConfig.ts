export const businessInfo = {
  name: 'PARFUMSP',
  logo: '/logo.png',
  tagline: 'Perfumería Premium',
  description: 'Tu destino premium de fragancias en Las Heras. Las mejores marcas internacionales con garantía de autenticidad.',
  
  contact: {
    whatsapp: {
      number: import.meta.env.VITE_WHATSAPP_NUMBER || '5411258250',
      defaultMessage: '¡Hola! Me gustaría consultar sobre sus perfumes.',
      orderMessagePrefix: '¡Hola! Me gustaría hacer un pedido:',
      productInquiryPrefix: '¡Hola! Me interesa el perfume ',
    },
    instagram: {
      handle: 'parfumsp025',
      url: 'https://www.instagram.com/parfumsp025?igsh=MWs0c3M4bDRsZ3QxZg==',
    },
    facebook: {
      url: '#',
    },
    email: 'contacto@parfumsp.com',
  },
  
  location: {
    address: 'Calle 4 entre 3 y 5 del Centro',
    city: 'Las Heras',
    zipCode: '166',
    googleMapsUrl: '#',
  },
  
  hours: {
    weekdays: 'Lun - Vie: 9:00 - 20:00',
    saturdays: 'Sáb: 9:00 - 14:00',
    sundays: 'Cerrado',
  },
  
  currency: {
    code: 'ARS',
    symbol: '$',
    locale: 'es-AR',
  },

  stats: {
    fragrances: '500+',
    brands: '50+',
    originality: '100%',
  },

  hero: {
    title: {
      line1: 'Fragancias',
      line2: 'que Definen',
      line3: 'tu Estilo',
    },
    subtitle: 'Descubrí nuestra colección exclusiva de las mejores marcas internacionales. Elegancia, sofisticación y personalidad en cada gota.',
  }
};
