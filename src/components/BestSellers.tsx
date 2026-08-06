import { useState } from 'react';
import type { Product } from '../data/products';
import { useProductOverrides } from '../context/ProductOverridesContext';
import { useCart } from '../context/CartContext';
import { formatPrice, formatPriceNumber } from '../utils/formatters';
import ProductModal from './ProductModal';

export default function BestSellers() {
  const { mergedProducts } = useProductOverrides();
  const bestSellers = mergedProducts.filter(p => p.isBestSeller);
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="bestsellers" className="section-padding bg-black-base">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold-primary/60 text-xs uppercase tracking-[0.4em] font-medium mb-3">
            Los Más Elegidos
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-gradient-text">Best</span>
            <span className="text-white-soft"> Sellers</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-12 bg-gold-primary/30" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold-primary/50" />
            <div className="h-px w-12 bg-gold-primary/30" />
          </div>
        </div>

        {/* Best Sellers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bestSellers.map((product, i) => (
            <div
              key={product.id}
              className="group relative bg-black-light rounded-sm border border-white/5 hover:border-gold-primary/30 transition-all duration-500 overflow-hidden cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${i * 0.15}s` }}
              onClick={() => setSelectedProduct(product)}
              id={`bestseller-${product.id}`}
            >
              <div className="flex flex-col sm:flex-row sm:h-80">
                {/* Image */}
                <div className="relative w-full sm:w-64 h-64 sm:h-80 flex-shrink-0 overflow-hidden bg-black-base">
                  <img
                    src={product.image}
                    alt={`${product.brand} ${product.name}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Best Seller Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-gold-primary text-black-deep text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      Best Seller
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-gold-primary/60 text-[11px] uppercase tracking-[0.25em] font-medium mb-2">
                      {product.brand}
                    </p>
                    <h3 className="font-heading text-2xl font-bold text-white-soft mb-1 group-hover:text-gold-primary transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-cream/40 text-xs mb-3">{product.size} · {product.category === 'hombre' ? 'Masculino' : product.category === 'mujer' ? 'Femenino' : product.category === 'arabe' ? 'Árabe' : 'Unisex'}</p>
                    <p className="text-cream/50 text-sm leading-relaxed mb-4 line-clamp-3">
                      {product.description}
                    </p>

                    {/* Notes preview */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {product.notes.top.slice(0, 3).map(note => (
                        <span key={note} className="text-[10px] text-gold-light/70 bg-gold-primary/5 border border-gold-primary/10 px-2 py-0.5 rounded-full">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-gold-primary font-bold text-2xl font-heading">
                        <span className="font-elegant text-[0.9em] mr-1">$</span>
                        {formatPriceNumber(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-cream/30 text-sm line-through">
                          <span className="font-elegant text-[0.9em] mr-1">$</span>
                          {formatPriceNumber(product.originalPrice)}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="px-4 py-2 bg-gold-primary/10 border border-gold-primary/30 text-gold-primary text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-gold-primary hover:text-black-deep transition-all duration-300"
                      id={`bestseller-add-${product.id}`}
                    >
                      Agregar
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom gold accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}
