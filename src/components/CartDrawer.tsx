import { useCart } from '../context/CartContext';
import { useEffect } from 'react';
import { businessInfo } from '../data/businessConfig';
import { formatPrice, getWhatsAppUrl } from '../utils/formatters';

export default function CartDrawer() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  const handleWhatsAppOrder = () => {
    const itemsList = items
      .map(item => `• ${item.product.brand} ${item.product.name} (x${item.quantity}) - ${formatPrice(item.product.price * item.quantity)}`)
      .join('\n');

    const message = `${businessInfo.contact.whatsapp.orderMessagePrefix}\n\n${itemsList}\n\n*Total: ${formatPrice(totalPrice)}*\n\n¿Está disponible?`;

    window.open(getWhatsAppUrl(message), '_blank');
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]" id="cart-drawer">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black-deep/80 backdrop-blur-sm animate-fadeIn"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-black-light border-l border-gold-primary/20 flex flex-col"
        style={{ animation: 'slideInRight 0.3s ease-out' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/5">
          <div>
            <h2 className="font-heading text-xl font-bold text-white-soft">Tu Carrito</h2>
            <p className="text-cream/40 text-xs mt-0.5">
              {totalItems} {totalItems === 1 ? 'producto' : 'productos'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-red-400/60 hover:text-red-400 text-xs uppercase tracking-wider transition-colors"
                id="clear-cart"
              >
                Vaciar
              </button>
            )}
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-cream/40 hover:text-gold-primary transition-colors p-1"
              id="close-cart"
              aria-label="Cerrar carrito"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cream/10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-cream/30 text-sm">Tu carrito está vacío</p>
              <p className="text-cream/20 text-xs mt-1">Explorá nuestro catálogo</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-6 py-2 border border-gold-primary/30 text-gold-primary text-xs uppercase tracking-wider rounded-sm hover:bg-gold-primary/10 transition-all"
              >
                Ver productos
              </button>
            </div>
          ) : (
            items.map(item => (
              <div
                key={item.product.id}
                className="flex gap-4 bg-black-base/50 rounded-sm border border-white/5 p-3 group"
                id={`cart-item-${item.product.id}`}
              >
                {/* Image */}
                <div className="w-20 h-20 flex-shrink-0 rounded-sm overflow-hidden bg-black-base">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <p className="text-gold-primary/50 text-[10px] uppercase tracking-wider">
                    {item.product.brand}
                  </p>
                  <h4 className="text-white-soft text-sm font-heading font-semibold truncate">
                    {item.product.name}
                  </h4>
                  <p className="text-cream/30 text-[10px] mt-0.5">{item.product.size}</p>

                  <div className="flex items-center justify-between mt-2">
                    {/* Quantity */}
                    <div className="flex items-center border border-white/10 rounded-sm">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-2 py-1 text-cream/50 hover:text-gold-primary transition-colors text-sm"
                        aria-label="Reducir cantidad"
                      >
                        −
                      </button>
                      <span className="px-2 py-1 text-white-soft text-xs min-w-[24px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-2 py-1 text-cream/50 hover:text-gold-primary transition-colors text-sm"
                        aria-label="Aumentar cantidad"
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <span className="text-gold-primary font-semibold text-sm">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="text-cream/20 hover:text-red-400 transition-colors self-start p-1"
                  aria-label={`Eliminar ${item.product.name}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-white/5 p-5 space-y-4">
            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-cream/60 text-sm">Total</span>
              <span className="text-gold-primary font-bold text-2xl font-heading">
                {formatPrice(totalPrice)}
              </span>
            </div>

            {/* WhatsApp Order Button */}
            <button
              onClick={handleWhatsAppOrder}
              className="w-full py-3.5 bg-green-600 hover:bg-green-500 text-white font-semibold text-sm uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              id="whatsapp-order"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              Pedir por WhatsApp
            </button>

            <p className="text-cream/20 text-[10px] text-center">
              Te redirigiremos a WhatsApp para completar tu pedido
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
