import { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';

export default function AdminLoginModal() {
  const { isLoginModalOpen, setIsLoginModalOpen, login } = useAdmin();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  if (!isLoginModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(password);
    if (!success) {
      setError(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      setTimeout(() => setError(false), 3000);
    } else {
      setPassword('');
      setError(false);
    }
  };

  const handleClose = () => {
    setIsLoginModalOpen(false);
    setPassword('');
    setError(false);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn" />

      {/* Modal */}
      <div
        className={`relative bg-black-base border border-gold-primary/30 rounded-sm p-8 w-full max-w-sm animate-scaleIn ${isShaking ? 'admin-shake' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-cream/30 hover:text-cream transition-colors"
          aria-label="Cerrar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
            </svg>
          </div>
          <h3 className="font-heading text-xl text-white-soft font-semibold">
            Modo Administrador
          </h3>
          <p className="text-cream/40 text-sm mt-1">
            Ingresá la contraseña para acceder
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="relative mb-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              className={`w-full bg-black-light border ${
                error ? 'border-red-500/50' : 'border-white/10 focus:border-gold-primary/50'
              } rounded-sm py-3 px-4 text-cream placeholder-cream/30 focus:outline-none transition-colors text-sm`}
              autoFocus
              id="admin-password-input"
            />
            {error && (
              <p className="absolute -bottom-5 left-0 text-red-400 text-xs animate-fadeIn">
                Contraseña incorrecta
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gold-primary hover:bg-gold-light text-black-deep font-semibold py-3 rounded-sm text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,169,110,0.3)]"
            id="admin-login-submit"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
