import { ARAB_BRANDS } from '../data/products';

export default function BrandsSection() {
  const allBrands = [...ARAB_BRANDS, ...ARAB_BRANDS];

  return (
    <section className="py-16 bg-black-base border-y border-gold-primary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <p className="text-center text-gold-primary/50 text-xs uppercase tracking-[0.4em] font-medium">
          Las mejores marcas del mundo
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black-base to-transparent z-10" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black-base to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap">
          {allBrands.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="inline-flex items-center mx-8 sm:mx-12"
            >
              <span className="text-cream/25 hover:text-gold-primary/70 transition-colors duration-500 text-xl sm:text-2xl font-heading font-semibold tracking-wider cursor-default whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
