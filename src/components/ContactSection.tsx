import { businessInfo } from '../data/businessConfig';
import { getWhatsAppUrl } from '../utils/formatters';

export default function ContactSection() {
  const whatsappUrl = getWhatsAppUrl(businessInfo.contact.whatsapp.defaultMessage);

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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24">
                <path d="M8.88595 7.16985C9.06891 7.17475 9.27175 7.18465 9.46474 7.61303C9.59271 7.89821 9.80829 8.42321 9.9839 8.85087C10.1206 9.18366 10.233 9.45751 10.2611 9.51356C10.3254 9.64156 10.365 9.78926 10.2809 9.96156C10.271 9.98188 10.2617 10.0013 10.2526 10.02C10.1852 10.16 10.1372 10.2597 10.0237 10.3899C9.97709 10.4435 9.9285 10.5022 9.88008 10.5607C9.79494 10.6636 9.71035 10.7658 9.63785 10.838C9.50924 10.9659 9.37563 11.1039 9.52402 11.3599C9.6725 11.6159 10.1919 12.4579 10.9587 13.1373C11.783 13.8712 12.4998 14.1805 12.8622 14.3368C12.9325 14.3672 12.9895 14.3918 13.0313 14.4126C13.2886 14.5406 13.4419 14.5209 13.5903 14.3486C13.7388 14.1762 14.2334 13.6001 14.4066 13.3441C14.5748 13.0881 14.7479 13.1275 14.9854 13.2161C15.2228 13.3047 16.4892 13.9251 16.7464 14.0531C16.7972 14.0784 16.8448 14.1012 16.8889 14.1224C17.0678 14.2082 17.1895 14.2665 17.2411 14.3535C17.3054 14.4618 17.3054 14.9739 17.0927 15.5746C16.8751 16.1752 15.8263 16.7513 15.3514 16.7956C15.3064 16.7999 15.2617 16.8053 15.2156 16.8108C14.7804 16.8635 14.228 16.9303 12.2596 16.1555C9.83424 15.2018 8.23322 12.8354 7.90953 12.357C7.88398 12.3192 7.86638 12.2932 7.85698 12.2806L7.8515 12.2733C7.70423 12.0762 6.80328 10.8707 6.80328 9.62685C6.80328 8.43682 7.38951 7.81726 7.65689 7.53467C7.67384 7.51676 7.6895 7.50021 7.70366 7.48494C7.94107 7.22895 8.21814 7.16495 8.39125 7.16495C8.56445 7.16495 8.73756 7.16495 8.88595 7.16985Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M2.18418 21.3314C2.10236 21.6284 2.37285 21.9025 2.6709 21.8247L7.27824 20.6213C8.7326 21.409 10.37 21.8275 12.0371 21.8275H12.0421C17.5281 21.8275 22 17.3815 22 11.9163C22 9.26735 20.966 6.77594 19.0863 4.90491C17.2065 3.03397 14.7084 2 12.042 2C6.55607 2 2.08411 6.44605 2.08411 11.9114C2.08348 13.65 2.5424 15.3582 3.41479 16.8645L2.18418 21.3314ZM4.86092 17.2629C4.96774 16.8752 4.91437 16.4608 4.71281 16.1127C3.97266 14.8348 3.58358 13.3855 3.58411 11.9114C3.58411 7.28158 7.37738 3.5 12.042 3.5C14.3119 3.5 16.4526 4.36449 18.0463 5.95825C19.6401 7.55201 20.5046 9.69268 20.5046 11.9624C20.5046 16.5923 16.7113 20.3739 12.0421 20.3739C10.5312 20.3739 9.06674 19.9793 7.7844 19.231L7.54593 19.0917L4.99269 19.7547L4.86092 17.2629Z" fill="currentColor"/>
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
            <p className="text-cream/50 text-sm">{businessInfo.location.address}</p>
            <p className="text-cream/50 text-sm">{businessInfo.location.city} {businessInfo.location.zipCode}</p>
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
              <p>Lunes a Viernes: <span className="text-cream/70">{businessInfo.hours.weekdays.split(': ')[1]}</span></p>
              <p>Sábados: <span className="text-cream/70">{businessInfo.hours.saturdays.split(': ')[1]}</span></p>
              <p>Domingos: <span className="text-cream/70">{businessInfo.hours.sundays}</span></p>
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
              <path d="M8.88595 7.16985C9.06891 7.17475 9.27175 7.18465 9.46474 7.61303C9.59271 7.89821 9.80829 8.42321 9.9839 8.85087C10.1206 9.18366 10.233 9.45751 10.2611 9.51356C10.3254 9.64156 10.365 9.78926 10.2809 9.96156C10.271 9.98188 10.2617 10.0013 10.2526 10.02C10.1852 10.16 10.1372 10.2597 10.0237 10.3899C9.97709 10.4435 9.9285 10.5022 9.88008 10.5607C9.79494 10.6636 9.71035 10.7658 9.63785 10.838C9.50924 10.9659 9.37563 11.1039 9.52402 11.3599C9.6725 11.6159 10.1919 12.4579 10.9587 13.1373C11.783 13.8712 12.4998 14.1805 12.8622 14.3368C12.9325 14.3672 12.9895 14.3918 13.0313 14.4126C13.2886 14.5406 13.4419 14.5209 13.5903 14.3486C13.7388 14.1762 14.2334 13.6001 14.4066 13.3441C14.5748 13.0881 14.7479 13.1275 14.9854 13.2161C15.2228 13.3047 16.4892 13.9251 16.7464 14.0531C16.7972 14.0784 16.8448 14.1012 16.8889 14.1224C17.0678 14.2082 17.1895 14.2665 17.2411 14.3535C17.3054 14.4618 17.3054 14.9739 17.0927 15.5746C16.8751 16.1752 15.8263 16.7513 15.3514 16.7956C15.3064 16.7999 15.2617 16.8053 15.2156 16.8108C14.7804 16.8635 14.228 16.9303 12.2596 16.1555C9.83424 15.2018 8.23322 12.8354 7.90953 12.357C7.88398 12.3192 7.86638 12.2932 7.85698 12.2806L7.8515 12.2733C7.70423 12.0762 6.80328 10.8707 6.80328 9.62685C6.80328 8.43682 7.38951 7.81726 7.65689 7.53467C7.67384 7.51676 7.6895 7.50021 7.70366 7.48494C7.94107 7.22895 8.21814 7.16495 8.39125 7.16495C8.56445 7.16495 8.73756 7.16495 8.88595 7.16985Z" fill="currentColor"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M2.18418 21.3314C2.10236 21.6284 2.37285 21.9025 2.6709 21.8247L7.27824 20.6213C8.7326 21.409 10.37 21.8275 12.0371 21.8275H12.0421C17.5281 21.8275 22 17.3815 22 11.9163C22 9.26735 20.966 6.77594 19.0863 4.90491C17.2065 3.03397 14.7084 2 12.042 2C6.55607 2 2.08411 6.44605 2.08411 11.9114C2.08348 13.65 2.5424 15.3582 3.41479 16.8645L2.18418 21.3314ZM4.86092 17.2629C4.96774 16.8752 4.91437 16.4608 4.71281 16.1127C3.97266 14.8348 3.58358 13.3855 3.58411 11.9114C3.58411 7.28158 7.37738 3.5 12.042 3.5C14.3119 3.5 16.4526 4.36449 18.0463 5.95825C19.6401 7.55201 20.5046 9.69268 20.5046 11.9624C20.5046 16.5923 16.7113 20.3739 12.0421 20.3739C10.5312 20.3739 9.06674 19.9793 7.7844 19.231L7.54593 19.0917L4.99269 19.7547L4.86092 17.2629Z" fill="currentColor"/>
            </svg>
            Hacé tu consulta ahora
          </a>
        </div>
      </div>
    </section>
  );
}
