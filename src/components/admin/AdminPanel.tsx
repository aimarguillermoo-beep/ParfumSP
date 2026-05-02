import { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { useProductOverrides } from '../../context/ProductOverridesContext';
import AdminProductRow from './AdminProductRow';

export default function AdminPanel() {
  const { isAdmin, isPanelOpen, setIsPanelOpen, logout } = useAdmin();
  const {
    overrides,
    mergedProducts,
    updatePrice,
    setOffer,
    removeOffer,
    updateStock,
    toggleAvailability,
    resetAll,
    resetProduct,
  } = useProductOverrides();

  const [searchTerm, setSearchTerm] = useState('');
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  if (!isAdmin || !isPanelOpen) return null;

  const filteredProducts = mergedProducts.filter(
    (p) =>
      searchTerm === '' ||
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const modifiedCount = Object.keys(overrides).length;

  const handleResetAll = () => {
    resetAll();
    setShowResetConfirm(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm animate-fadeIn"
        onClick={() => setIsPanelOpen(false)}
      />

      {/* Panel */}
      <div className="fixed top-0 right-0 bottom-0 z-[95] w-full sm:w-[440px] bg-black-base border-l border-gold-primary/20 flex flex-col admin-slide-in shadow-[-20px_0_60px_rgba(0,0,0,0.5)]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/5 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
            </div>
            <div>
              <h2 className="font-heading text-lg text-white-soft font-semibold">Admin Panel</h2>
              <p className="text-[11px] text-cream/40">
                {mergedProducts.length} productos · {modifiedCount} modificados
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsPanelOpen(false)}
            className="text-cream/30 hover:text-cream transition-colors p-1"
            aria-label="Cerrar panel"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Search */}
        <div className="p-3 border-b border-white/5 flex-shrink-0">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-cream/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar producto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black-light border border-white/5 rounded-sm py-2 pl-9 pr-3 text-sm text-cream placeholder-cream/30 focus:border-gold-primary/30 focus:outline-none transition-colors"
              id="admin-search"
            />
          </div>
        </div>

        {/* Product list */}
        <div className="flex-1 overflow-y-auto">
          {filteredProducts.map((product) => (
            <AdminProductRow
              key={product.id}
              product={product}
              override={overrides[product.id]}
              onUpdatePrice={updatePrice}
              onSetOffer={setOffer}
              onRemoveOffer={removeOffer}
              onUpdateStock={updateStock}
              onToggleAvailability={toggleAvailability}
              onResetProduct={resetProduct}
            />
          ))}

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-cream/30 text-sm">No se encontraron productos</p>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-white/5 flex-shrink-0 space-y-2">
          {/* Reset all */}
          {modifiedCount > 0 && (
            showResetConfirm ? (
              <div className="flex items-center gap-2 animate-fadeIn">
                <p className="text-xs text-red-400 flex-1">¿Resetear {modifiedCount} cambios?</p>
                <button
                  onClick={handleResetAll}
                  className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-3 py-1.5 rounded-sm text-xs font-medium transition-colors"
                >
                  Confirmar
                </button>
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="text-cream/30 hover:text-cream/60 px-3 py-1.5 text-xs transition-colors"
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowResetConfirm(true)}
                className="w-full text-center text-cream/30 hover:text-red-400 text-xs uppercase tracking-wider py-2 transition-colors"
              >
                Resetear todos los cambios ({modifiedCount})
              </button>
            )
          )}

          {/* Logout */}
          <button
            onClick={logout}
            className="w-full bg-black-light hover:bg-black-lighter border border-white/5 hover:border-white/10 text-cream/60 hover:text-cream py-2.5 rounded-sm text-xs uppercase tracking-wider font-medium transition-all duration-300"
            id="admin-logout"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </>
  );
}
