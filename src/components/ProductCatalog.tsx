import { useState } from 'react';
import { ARAB_BRANDS } from '../data/products';
import type { Product } from '../data/products';
import { useProductOverrides } from '../context/ProductOverridesContext';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

type FilterCategory = 'todos' | 'hombre' | 'mujer' | 'unisex' | 'arabe';

export default function ProductCatalog() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { mergedProducts } = useProductOverrides();

  const filters: { key: FilterCategory; label: string }[] = [
    { key: 'todos', label: 'Todos' },
    { key: 'hombre', label: 'Hombre' },
    { key: 'mujer', label: 'Mujer' },
    { key: 'unisex', label: 'Unisex' },
    { key: 'arabe', label: 'Árabes' },
  ];

  const filteredProducts = mergedProducts.filter(product => {
    // A product matches the category if:
    // 1. We are showing 'todos'
    // 2. The product's specific category matches the filter (hombre, mujer, unisex)
    // 3. The filter is 'arabe' and the brand is one of the known Arab brands
    const isArabBrand = ARAB_BRANDS.includes(product.brand);
    const matchesCategory = 
      activeFilter === 'todos' || 
      product.category === activeFilter || 
      (activeFilter === 'arabe' && isArabBrand);

    const matchesSearch =
      searchTerm === '' ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalogo" className="section-padding bg-black-deep">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold-primary/60 text-xs uppercase tracking-[0.4em] font-medium mb-3">
            Nuestra Colección
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-gradient-text">Catálogo</span>
            <span className="text-white-soft"> de Fragancias</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-12 bg-gold-primary/30" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold-primary/50" />
            <div className="h-px w-12 bg-gold-primary/30" />
          </div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 w-full">
          {/* Category Filters */}
          <div className="flex items-center gap-1 bg-black-light rounded-sm p-1 border border-white/5 w-full sm:w-auto overflow-x-auto no-scrollbar">
            {filters.map(filter => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2.5 text-xs uppercase tracking-wider font-medium rounded-sm transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activeFilter === filter.key
                    ? 'bg-gold-primary text-black-deep'
                    : 'text-cream/50 hover:text-cream'
                }`}
                id={`filter-${filter.key}`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-cream/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar perfume o marca..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-black-light border border-white/5 rounded-sm py-2.5 pl-10 pr-4 text-sm text-cream placeholder-cream/30 focus:border-gold-primary/30 focus:outline-none transition-colors w-full sm:w-64"
              id="search-input"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
            {filteredProducts.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={setSelectedProduct}
                index={i}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-cream/30 text-lg">No se encontraron fragancias</p>
            <p className="text-cream/20 text-sm mt-2">Intentá con otro filtro o búsqueda</p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}
