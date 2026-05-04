import { businessInfo } from '../data/businessConfig';

/**
 * Formats a number as currency based on the business configuration.
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat(businessInfo.currency.locale, {
    style: 'currency',
    currency: businessInfo.currency.code,
    minimumFractionDigits: 0,
  }).format(price);
};

/**
 * Generates a WhatsApp URL with a pre-filled message.
 */
export const getWhatsAppUrl = (message: string): string => {
  const cleanNumber = businessInfo.contact.whatsapp.number.replace(/\D/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
};
