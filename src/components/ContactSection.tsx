export default function ContactSection() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5411258250';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('¡Hola! Me gustaría consultar sobre sus perfumes.')}`;

  return (
    <section id="contacto" className="section-padding bg-black-base relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-primary/3 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-gold-primary/60 text-xs uppercase tracking-[0.4em] font-medium mb-3">
            Estamos Para Vos
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-gradient-text">Contacto</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-12 bg-gold-primary/30" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold-primary/50" />
            <div className="h-px w-12 bg-gold-primary/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* WhatsApp Card */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-black-light rounded-sm border border-white/5 hover:border-green-500/30 transition-all duration-500 text-center"
            id="contact-whatsapp"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
            </div>
            <h3 className="font-heading text-lg font-semibold text-white-soft mb-2 group-hover:text-green-400 transition-colors">
              WhatsApp
            </h3>
            <p className="text-cream/40 text-sm mb-3">Escribinos para consultas y pedidos</p>
            <span className="inline-flex items-center gap-1 text-green-400 text-sm font-medium group-hover:gap-2 transition-all">
              Enviar mensaje
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          {/* Location Card */}
          <div className="group p-8 bg-black-light rounded-sm border border-white/5 hover:border-gold-primary/30 transition-all duration-500 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-primary/10 flex items-center justify-center group-hover:bg-gold-primary/20 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-heading text-lg font-semibold text-white-soft mb-2 group-hover:text-gold-primary transition-colors">
              Ubicación
            </h3>
            <p className="text-cream/50 text-sm">Calle 4 entre 3 y 5 del Centro</p>
            <p className="text-cream/50 text-sm">Las Heras 166</p>
          </div>

          {/* Hours Card */}
          <div className="group p-8 bg-black-light rounded-sm border border-white/5 hover:border-gold-primary/30 transition-all duration-500 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-primary/10 flex items-center justify-center group-hover:bg-gold-primary/20 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-heading text-lg font-semibold text-white-soft mb-2 group-hover:text-gold-primary transition-colors">
              Horarios
            </h3>
            <div className="text-cream/50 text-sm space-y-1">
              <p>Lunes a Viernes: <span className="text-cream/70">9:00 - 20:00</span></p>
              <p>Sábados: <span className="text-cream/70">9:00 - 14:00</span></p>
              <p>Domingos: <span className="text-cream/70">Cerrado</span></p>
            </div>
          </div>
        </div>

        {/* WhatsApp floating CTA */}
        <div className="mt-12 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-dark via-gold-primary to-gold-light text-black-deep font-semibold text-sm uppercase tracking-wider rounded-sm hover:shadow-[0_0_30px_rgba(201,169,110,0.4)] transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            Hacé tu consulta ahora
          </a>
        </div>
      </div>
    </section>
  );
}
