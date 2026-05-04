import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatters';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  index?: number;
}

export default function ProductCard({ product, onSelect, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart();

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const preloadImage = () => {
    const img = new Image();
    img.src = product.image;
  };

  return (
    <div
      className="group relative bg-black-light rounded-sm border border-white/5 hover:border-gold-primary/30 transition-all duration-500 overflow-hidden cursor-pointer animate-fadeInUp"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => onSelect(product)}
      onMouseEnter={preloadImage}
      id={`product-card-${product.id}`}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.isBestSeller && (
          <span className="bg-gold-primary text-black-deep text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
            Best Seller
          </span>
        )}
        {product.isNew && (
          <span className="bg-white/90 text-black-deep text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
            Nuevo
          </span>
        )}
        {discount > 0 && (
          <span className="bg-red-500/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
            -{discount}%
          </span>
        )}
      </div>

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-black-base">
        <img
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${product.isAvailable === false ? 'grayscale opacity-50' : ''}`}
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Sin Stock overlay */}
        {product.isAvailable === false && (
          <div className="absolute inset-0 flex items-center justify-center bg-black-deep/40">
            <span className="bg-red-500/90 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-sm">
              Sin Stock
            </span>
          </div>
        )}

        {/* Quick add button */}
        {product.isAvailable !== false && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gold-primary text-black-deep px-6 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 hover:bg-gold-light"
            id={`add-to-cart-${product.id}`}
            aria-label={`Agregar ${product.name} al carrito`}
          >
            Agregar al Carrito
          </button>
        )}
      </div>

      {/* Info */}
      <div className="p-3 sm:p-4 flex flex-col">
        <p className="text-gold-primary/60 text-[9px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium mb-0.5 line-clamp-1">
          {product.brand}
        </p>
        <h3 className="text-white-soft font-heading text-sm sm:text-lg font-semibold mb-0.5 group-hover:text-gold-primary transition-colors duration-300 line-clamp-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-cream/40 text-[10px] sm:text-xs mb-1.5">
          {product.size} · {product.category === 'hombre' ? '♂ Hombre' : product.category === 'mujer' ? '♀ Mujer' : product.category === 'arabe' ? '☪ Árabe' : '⚥ Unisex'}
        </p>
        <div className="flex flex-wrap items-center gap-1 sm:gap-2">
          <span className="text-gold-primary font-semibold text-sm sm:text-lg">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-cream/30 text-[10px] sm:text-sm line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>

      {/* Gold shimmer line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
