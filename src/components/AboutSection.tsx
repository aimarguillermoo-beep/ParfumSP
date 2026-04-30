export default function AboutSection() {
  return (
    <section id="nosotros" className="section-padding bg-black-deep relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-primary/3 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-gold-primary/60 text-xs uppercase tracking-[0.4em] font-medium mb-3">
            Nuestra Historia
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-gradient-text">Sobre</span>
            <span className="text-white-soft"> Nosotros</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-12 bg-gold-primary/30" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold-primary/50" />
            <div className="h-px w-12 bg-gold-primary/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-sm overflow-hidden gold-border group">
              <img
                src="/logo.png"
                alt="ParfumSP Perfumería"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-deep/60 to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-gold-primary/30 rounded-tl-sm" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-gold-primary/30 rounded-br-sm" />
          </div>

          {/* Content */}
          <div>
            <h3 className="font-elegant text-gold-light text-2xl md:text-3xl italic mb-6">
              "Donde cada fragancia cuenta una historia"
            </h3>

            <div className="space-y-4 text-cream/60 text-sm leading-relaxed">
              <p>
                En <span className="text-gold-primary font-semibold">ParfumSP</span> creemos que un perfume
                es mucho más que un aroma — es una extensión de tu personalidad, un sello invisible que deja
                huella en cada lugar y en cada persona que te rodea.
              </p>
              <p>
                Nuestra perfumería nació con la pasión de acercar las mejores fragancias internacionales a
                nuestra comunidad. Trabajamos con las marcas más prestigiosas del mundo para ofrecerte una
                experiencia de compra única, con asesoramiento personalizado y los mejores precios del mercado.
              </p>
              <p>
                Cada fragancia que ves en nuestra colección fue cuidadosamente seleccionada
                por nuestro equipo de expertos, garantizando autenticidad y calidad en cada producto.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-black-light/50 rounded-sm border border-white/5">
                <p className="text-gold-primary font-heading text-3xl font-bold">500+</p>
                <p className="text-cream/40 text-xs uppercase tracking-wider mt-1">Fragancias</p>
              </div>
              <div className="text-center p-4 bg-black-light/50 rounded-sm border border-white/5">
                <p className="text-gold-primary font-heading text-3xl font-bold">50+</p>
                <p className="text-cream/40 text-xs uppercase tracking-wider mt-1">Marcas</p>
              </div>
              <div className="text-center p-4 bg-black-light/50 rounded-sm border border-white/5">
                <p className="text-gold-primary font-heading text-3xl font-bold">100%</p>
                <p className="text-cream/40 text-xs uppercase tracking-wider mt-1">Originales</p>
              </div>
            </div>

            {/* Location info */}
            <div className="mt-8 p-5 bg-black-light rounded-sm border border-gold-primary/10">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-gold-primary font-semibold text-sm mb-1">Visitanos en nuestra tienda</p>
                  <p className="text-cream/50 text-sm">Calle 4 entre 3 y 5 del Centro</p>
                  <p className="text-cream/50 text-sm">Las Heras 166</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
