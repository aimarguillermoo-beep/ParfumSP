import { businessInfo } from './data/businessConfig';
import { getWhatsAppUrl } from './utils/formatters';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BrandsSection from './components/BrandsSection';
import ProductCatalog from './components/ProductCatalog';
import BestSellers from './components/BestSellers';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import AdminLoginModal from './components/admin/AdminLoginModal';
import AdminPanel from './components/admin/AdminPanel';
import { useAdmin } from './context/AdminContext';
import { useCart } from './context/CartContext';

export default function App() {
  const whatsappUrl = getWhatsAppUrl(businessInfo.contact.whatsapp.defaultMessage);
  const { isAdmin, setIsLoginModalOpen, setIsPanelOpen } = useAdmin();
  const { setIsCartOpen, totalItems } = useCart();

  return (
    <div className="min-h-screen bg-black-deep">
      <Navbar />
      <main>
        <HeroSection />
        <BrandsSection />
        <ProductCatalog />
        <BestSellers />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <CartDrawer />

      {/* Floating Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-24 right-6 z-[65] w-14 h-14 bg-gold-primary text-black-deep rounded-full hidden md:flex items-center justify-center shadow-[0_4px_20px_rgba(201,169,110,0.4)] hover:bg-gold-light hover:scale-110 transition-all duration-300 group cursor-pointer"
        id="floating-cart"
        aria-label="Ver Carrito de compras"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-scaleIn">
            {totalItems}
          </span>
        )}
      </button>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:bg-green-400 hover:scale-110 transition-all duration-300 group"
        id="floating-whatsapp"
        aria-label="Contactar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24">
          <path d="M8.88595 7.16985C9.06891 7.17475 9.27175 7.18465 9.46474 7.61303C9.59271 7.89821 9.80829 8.42321 9.9839 8.85087C10.1206 9.18366 10.233 9.45751 10.2611 9.51356C10.3254 9.64156 10.365 9.78926 10.2809 9.96156C10.271 9.98188 10.2617 10.0013 10.2526 10.02C10.1852 10.16 10.1372 10.2597 10.0237 10.3899C9.97709 10.4435 9.9285 10.5022 9.88008 10.5607C9.79494 10.6636 9.71035 10.7658 9.63785 10.838C9.50924 10.9659 9.37563 11.1039 9.52402 11.3599C9.6725 11.6159 10.1919 12.4579 10.9587 13.1373C11.783 13.8712 12.4998 14.1805 12.8622 14.3368C12.9325 14.3672 12.9895 14.3918 13.0313 14.4126C13.2886 14.5406 13.4419 14.5209 13.5903 14.3486C13.7388 14.1762 14.2334 13.6001 14.4066 13.3441C14.5748 13.0881 14.7479 13.1275 14.9854 13.2161C15.2228 13.3047 16.4892 13.9251 16.7464 14.0531C16.7972 14.0784 16.8448 14.1012 16.8889 14.1224C17.0678 14.2082 17.1895 14.2665 17.2411 14.3535C17.3054 14.4618 17.3054 14.9739 17.0927 15.5746C16.8751 16.1752 15.8263 16.7513 15.3514 16.7956C15.3064 16.7999 15.2617 16.8053 15.2156 16.8108C14.7804 16.8635 14.228 16.9303 12.2596 16.1555C9.83424 15.2018 8.23322 12.8354 7.90953 12.357C7.88398 12.3192 7.86638 12.2932 7.85698 12.2806L7.8515 12.2733C7.70423 12.0762 6.80328 10.8707 6.80328 9.62685C6.80328 8.43682 7.38951 7.81726 7.65689 7.53467C7.67384 7.51676 7.6895 7.50021 7.70366 7.48494C7.94107 7.22895 8.21814 7.16495 8.39125 7.16495C8.56445 7.16495 8.73756 7.16495 8.88595 7.16985Z" fill="currentColor"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M2.18418 21.3314C2.10236 21.6284 2.37285 21.9025 2.6709 21.8247L7.27824 20.6213C8.7326 21.409 10.37 21.8275 12.0371 21.8275H12.0421C17.5281 21.8275 22 17.3815 22 11.9163C22 9.26735 20.966 6.77594 19.0863 4.90491C17.2065 3.03397 14.7084 2 12.042 2C6.55607 2 2.08411 6.44605 2.08411 11.9114C2.08348 13.65 2.5424 15.3582 3.41479 16.8645L2.18418 21.3314ZM4.86092 17.2629C4.96774 16.8752 4.91437 16.4608 4.71281 16.1127C3.97266 14.8348 3.58358 13.3855 3.58411 11.9114C3.58411 7.28158 7.37738 3.5 12.042 3.5C14.3119 3.5 16.4526 4.36449 18.0463 5.95825C19.6401 7.55201 20.5046 9.69268 20.5046 11.9624C20.5046 16.5923 16.7113 20.3739 12.0421 20.3739C10.5312 20.3739 9.06674 19.9793 7.7844 19.231L7.54593 19.0917L4.99269 19.7547L4.86092 17.2629Z" fill="currentColor"/>
        </svg>
        {/* Pulse animation ring */}
        <span className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-30" />
      </a>
      {/* Floating Instagram Button */}
      <a
        href={businessInfo.contact.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(236,72,153,0.4)] hover:scale-110 transition-all duration-300 group"
        id="floating-instagram"
        aria-label="Seguinos en Instagram"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
        {/* Pulse animation ring */}
        <span className="absolute inset-0 rounded-full border-2 border-pink-400 animate-ping opacity-30" />
      </a>

      {/* Admin access button - fixed top-right corner */}
      <button
        onClick={() => isAdmin ? setIsPanelOpen(true) : setIsLoginModalOpen(true)}
        className="fixed top-5 right-4 z-50 p-2 transition-all duration-300 opacity-0 hidden sm:block cursor-default"
        id="admin-access-button"
        aria-label="Acceso administrador"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
        </svg>
      </button>

      {/* Admin modals */}
      <AdminLoginModal />
      <AdminPanel />
    </div>
  );
}
