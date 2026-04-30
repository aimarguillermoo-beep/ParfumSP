import GoldParticles from './GoldParticles';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black-deep pt-36"
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.08)_0%,_transparent_70%)]" />

      {/* Gold Particles */}
      <GoldParticles />

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fadeInUp">
          <img
            src="/logo.png"
            alt="ParfumSP"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full gold-glow animate-float object-cover mx-auto"
          />
        </div>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-primary/60" />
          <div className="w-2 h-2 rotate-45 border border-gold-primary/60" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-primary/60" />
        </div>

        {/* Tagline */}
        <p
          className="font-elegant text-gold-light text-lg sm:text-xl md:text-2xl tracking-[0.3em] uppercase mb-4 animate-fadeInUp"
          style={{ animationDelay: '0.3s' }}
        >
          Perfumería Premium
        </p>

        {/* Main Heading */}
        <h1
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInUp leading-tight"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="gold-gradient-text">Fragancias</span>
          <br />
          <span className="text-white-soft">que Definen</span>
          <br />
          <span className="gold-gradient-text italic">tu Estilo</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-cream/60 text-base sm:text-lg max-w-xl mx-auto mb-10 font-light animate-fadeInUp"
          style={{ animationDelay: '0.5s' }}
        >
          Descubrí nuestra colección exclusiva de las mejores marcas internacionales.
          Elegancia, sofisticación y personalidad en cada gota.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp"
          style={{ animationDelay: '0.6s' }}
        >
          <a
            href="#catalogo"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-dark via-gold-primary to-gold-light text-black-deep font-semibold text-sm uppercase tracking-wider rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,110,0.4)]"
            id="cta-explore"
          >
            <span className="relative z-10">Explorar Colección</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold-primary to-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 border border-gold-primary/40 text-gold-primary text-sm uppercase tracking-wider rounded-sm hover:bg-gold-primary/10 hover:border-gold-primary transition-all duration-300"
            id="cta-contact"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            Contactanos
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <a href="#catalogo" className="inline-flex flex-col items-center text-gold-primary/40 hover:text-gold-primary transition-colors">
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black-deep to-transparent z-10" />
    </section>
  );
}
