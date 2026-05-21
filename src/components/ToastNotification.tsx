import type { Product } from '../data/products';
import { formatPrice } from '../utils/formatters';

interface ToastNotificationProps {
  toast: {
    id: string;
    product: Product;
    isExiting: boolean;
  } | null;
  onClose: () => void;
}

export default function ToastNotification({ toast, onClose }: ToastNotificationProps) {
  if (!toast) return null;

  return (
    <div
      className={`fixed top-20 right-4 z-[9999] max-w-sm w-full bg-black-light border border-gold-primary/30 rounded-sm shadow-[0_4px_30px_rgba(201,169,110,0.15)] backdrop-blur-md p-4 flex items-center gap-3 transition-all duration-300 ${
        toast.isExiting ? 'animate-slideOutRight' : 'animate-slideInRight'
      }`}
      role="alert"
      id="toast-notification"
    >
      {/* Product Image */}
      <div className="w-12 h-12 bg-black-base rounded-sm overflow-hidden flex-shrink-0 border border-white/5">
        <img
          src={toast.product.image}
          alt={toast.product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-grow min-w-0">
        <p className="text-[10px] text-gold-primary uppercase tracking-wider font-semibold mb-0.5">
          ¡Agregado al carrito!
        </p>
        <h4 className="text-white-soft text-sm font-semibold truncate leading-tight">
          {toast.product.name}
        </h4>
        <p className="text-cream/40 text-[10px] truncate">
          {toast.product.brand} · {formatPrice(toast.product.price)}
        </p>
      </div>

      {/* Action buttons (Close / Check) */}
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <span className="text-gold-primary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </span>
        <button
          onClick={onClose}
          className="text-cream/40 hover:text-gold-primary p-1 transition-colors"
          aria-label="Cerrar notificación"
          id="toast-close-button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
