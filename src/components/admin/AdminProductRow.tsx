import { useState } from 'react';
import type { Product } from '../../data/products';
import type { ProductOverride } from '../../context/ProductOverridesContext';
import { formatPrice } from '../../utils/formatters';

interface AdminProductRowProps {
  product: Product;
  override?: ProductOverride;
  onUpdatePrice: (id: number, price: number) => void;
  onSetOffer: (id: number, price: number) => void;
  onRemoveOffer: (id: number) => void;
  onUpdateStock: (id: number, stock: number) => void;
  onToggleAvailability: (id: number) => void;
  onResetProduct: (id: number) => void;
}

export default function AdminProductRow({
  product,
  override,
  onUpdatePrice,
  onSetOffer,
  onRemoveOffer,
  onUpdateStock,
  onToggleAvailability,
  onResetProduct,
}: AdminProductRowProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [priceInput, setPriceInput] = useState('');
  const [offerInput, setOfferInput] = useState('');
  const [stockInput, setStockInput] = useState('');
  const [savedField, setSavedField] = useState<string | null>(null);

  const isAvailable = override?.isAvailable ?? true;
  const hasOffer = override?.hasOffer ?? false;
  const hasChanges = override !== undefined;

  const showSaved = (field: string) => {
    setSavedField(field);
    setTimeout(() => setSavedField(null), 1500);
  };

  const handlePriceSave = () => {
    const newPrice = parseInt(priceInput);
    if (!isNaN(newPrice) && newPrice > 0) {
      onUpdatePrice(product.id, newPrice);
      setPriceInput('');
      showSaved('price');
    }
  };

  const handleOfferSave = () => {
    const offerPrice = parseInt(offerInput);
    if (!isNaN(offerPrice) && offerPrice > 0 && offerPrice < product.price) {
      onSetOffer(product.id, offerPrice);
      setOfferInput('');
      showSaved('offer');
    }
  };

  const handleStockSave = () => {
    const newStock = parseInt(stockInput);
    if (!isNaN(newStock) && newStock >= 0) {
      onUpdateStock(product.id, newStock);
      setStockInput('');
      showSaved('stock');
    }
  };

  return (
    <div className={`border-b border-white/5 last:border-b-0 transition-colors ${!isAvailable ? 'opacity-50' : ''}`}>
      {/* Main row */}
      <div
        className="flex items-center gap-3 py-3 px-3 hover:bg-white/[0.02] cursor-pointer transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Product image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-10 h-10 rounded-sm object-cover flex-shrink-0 bg-black-light"
        />

        {/* Product info */}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-white-soft font-medium truncate">
            {product.name}
          </p>
          <p className="text-[11px] text-cream/40">
            {product.brand} · {product.size}
          </p>
        </div>

        {/* Price */}
        <div className="text-right flex-shrink-0">
          <p className={`text-sm font-semibold ${hasOffer ? 'text-green-400' : 'text-gold-primary'}`}>
            {formatPrice(product.price)}
          </p>
          {hasOffer && override?.originalPrice && (
            <p className="text-[11px] text-cream/30 line-through">
              {formatPrice(override.originalPrice)}
            </p>
          )}
        </div>

        {/* Status indicators */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {hasChanges && (
            <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" title="Modificado" />
          )}
          {hasOffer && (
            <span className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-sm font-medium">
              OFERTA
            </span>
          )}
          {!isAvailable && (
            <span className="text-[10px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded-sm font-medium">
              SIN STOCK
            </span>
          )}
        </div>

        {/* Expand arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 text-cream/30 transition-transform duration-200 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Expanded controls */}
      {isExpanded && (
        <div className="px-3 pb-4 pt-1 space-y-3 bg-white/[0.01] animate-fadeIn">
          {/* Price edit */}
          <div className="flex items-center gap-2">
            <label className="text-[11px] text-cream/40 uppercase tracking-wider w-16 flex-shrink-0">Precio</label>
            <input
              type="number"
              placeholder={product.price.toString()}
              value={priceInput}
              onChange={(e) => setPriceInput(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              className="flex-1 bg-black-light border border-white/10 rounded-sm py-1.5 px-3 text-sm text-cream placeholder-cream/20 focus:border-gold-primary/50 focus:outline-none transition-colors"
            />
            <button
              onClick={(e) => { e.stopPropagation(); handlePriceSave(); }}
              className="bg-gold-primary/20 hover:bg-gold-primary/30 text-gold-primary px-3 py-1.5 rounded-sm text-xs font-medium transition-colors"
            >
              {savedField === 'price' ? '✓' : 'Guardar'}
            </button>
          </div>

          {/* Offer */}
          <div className="flex items-center gap-2">
            <label className="text-[11px] text-cream/40 uppercase tracking-wider w-16 flex-shrink-0">Oferta</label>
            {hasOffer ? (
              <button
                onClick={(e) => { e.stopPropagation(); onRemoveOffer(product.id); }}
                className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-3 py-1.5 rounded-sm text-xs font-medium transition-colors"
              >
                Quitar oferta
              </button>
            ) : (
              <>
                <input
                  type="number"
                  placeholder="Precio con descuento"
                  value={offerInput}
                  onChange={(e) => setOfferInput(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 bg-black-light border border-white/10 rounded-sm py-1.5 px-3 text-sm text-cream placeholder-cream/20 focus:border-gold-primary/50 focus:outline-none transition-colors"
                />
                <button
                  onClick={(e) => { e.stopPropagation(); handleOfferSave(); }}
                  className="bg-green-500/20 hover:bg-green-500/30 text-green-400 px-3 py-1.5 rounded-sm text-xs font-medium transition-colors"
                >
                  {savedField === 'offer' ? '✓' : 'Aplicar'}
                </button>
              </>
            )}
          </div>

          {/* Stock */}
          <div className="flex items-center gap-2">
            <label className="text-[11px] text-cream/40 uppercase tracking-wider w-16 flex-shrink-0">Stock</label>
            <input
              type="number"
              placeholder={override?.stock?.toString() ?? '∞'}
              value={stockInput}
              onChange={(e) => setStockInput(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              className="flex-1 bg-black-light border border-white/10 rounded-sm py-1.5 px-3 text-sm text-cream placeholder-cream/20 focus:border-gold-primary/50 focus:outline-none transition-colors"
            />
            <button
              onClick={(e) => { e.stopPropagation(); handleStockSave(); }}
              className="bg-gold-primary/20 hover:bg-gold-primary/30 text-gold-primary px-3 py-1.5 rounded-sm text-xs font-medium transition-colors"
            >
              {savedField === 'stock' ? '✓' : 'Guardar'}
            </button>
          </div>

          {/* Actions row */}
          <div className="flex items-center justify-between pt-2 border-t border-white/5">
            {/* Availability toggle */}
            <button
              onClick={(e) => { e.stopPropagation(); onToggleAvailability(product.id); }}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-medium transition-colors ${
                isAvailable
                  ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20'
                  : 'bg-red-500/10 text-red-400 hover:bg-red-500/20'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-green-400' : 'bg-red-400'}`} />
              {isAvailable ? 'Disponible' : 'Sin stock'}
            </button>

            {/* Reset */}
            {hasChanges && (
              <button
                onClick={(e) => { e.stopPropagation(); onResetProduct(product.id); }}
                className="text-cream/30 hover:text-cream/60 text-[11px] uppercase tracking-wider transition-colors"
              >
                Resetear
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
