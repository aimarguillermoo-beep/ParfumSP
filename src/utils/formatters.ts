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
 * Formats a number as a decimal string without the currency symbol.
 * Useful for styling the currency symbol separately in the UI.
 */
export const formatPriceNumber = (price: number): string => {
  return new Intl.NumberFormat(businessInfo.currency.locale, {
    style: 'decimal',
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

/**
 * Normalizes a string by converting it to lowercase and removing accents.
 */
export const normalizeString = (str: string): string => {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};
