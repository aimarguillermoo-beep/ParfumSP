import { useEffect } from 'react';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { businessInfo } from '../data/businessConfig';
import { formatPrice, getWhatsAppUrl } from '../utils/formatters';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { addToCart } = useCart();

  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [product]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!product) return null;

  const whatsappMessage = `${businessInfo.contact.whatsapp.productInquiryPrefix}*${product.brand} ${product.name}* (${product.size}) - ${formatPrice(product.price)}. ¿Está disponible?`;
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" id="product-modal">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black-deep/90 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-black-light border border-gold-primary/20 rounded-sm animate-scaleIn">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-cream/50 hover:text-gold-primary transition-colors p-2"
          id="modal-close"
          aria-label="Cerrar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-72 md:h-auto bg-black-base overflow-hidden">
            <img
              src={product.image}
              alt={`${product.brand} ${product.name}`}
              className="w-full h-full object-cover"
              decoding="async"
              loading="eager"
            />
            {/* Subtle gradient overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black-base/40 to-transparent md:hidden" />
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isBestSeller && (
                <span className="bg-gold-primary text-black-deep text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                  Best Seller
                </span>
              )}
              {product.isNew && (
                <span className="bg-white/90 text-black-deep text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                  Nuevo
                </span>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              {/* Brand & Category */}
              <p className="text-gold-primary/60 text-xs uppercase tracking-[0.3em] font-medium mb-2">
                {product.brand} · {product.category === 'hombre' ? 'Masculino' : product.category === 'mujer' ? 'Femenino' : 'Unisex'}
              </p>

              {/* Name */}
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white-soft mb-2">
                {product.name}
              </h2>

              {/* Size */}
              <p className="text-cream/40 text-sm mb-4">{product.size}</p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-gold-primary text-3xl font-bold font-heading">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-cream/30 text-lg line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-cream/60 text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Separator */}
              <div className="h-px bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent mb-6" />

              {/* Olfactory Notes */}
              <div className="space-y-4 mb-6">
                <h3 className="text-gold-primary text-xs uppercase tracking-[0.3em] font-semibold">
                  Notas Olfativas
                </h3>

                <div className="space-y-3">
                  <div>
                    <p className="text-cream/40 text-[11px] uppercase tracking-wider mb-1.5">△ Salida</p>
                    <div className="flex flex-wrap gap-2">
                      {product.notes.top.map(note => (
                        <span key={note} className="text-xs bg-gold-primary/10 text-gold-light border border-gold-primary/20 px-3 py-1 rounded-full">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-cream/40 text-[11px] uppercase tracking-wider mb-1.5">◇ Corazón</p>
                    <div className="flex flex-wrap gap-2">
                      {product.notes.heart.map(note => (
                        <span key={note} className="text-xs bg-gold-primary/10 text-gold-light border border-gold-primary/20 px-3 py-1 rounded-full">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-cream/40 text-[11px] uppercase tracking-wider mb-1.5">▽ Fondo</p>
                    <div className="flex flex-wrap gap-2">
                      {product.notes.base.map(note => (
                        <span key={note} className="text-xs bg-gold-primary/10 text-gold-light border border-gold-primary/20 px-3 py-1 rounded-full">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                className="w-full py-3.5 bg-gradient-to-r from-gold-dark via-gold-primary to-gold-light text-black-deep font-semibold text-sm uppercase tracking-wider rounded-sm hover:shadow-[0_0_25px_rgba(201,169,110,0.3)] transition-all duration-300"
                id="modal-add-to-cart"
              >
                Agregar al Carrito
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 border border-green-500/50 text-green-400 font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-green-500/10 hover:border-green-500 transition-all duration-300 flex items-center justify-center gap-2"
                id="modal-whatsapp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
