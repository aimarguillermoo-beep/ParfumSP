import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface AdminContextType {
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (open: boolean) => void;
  isPanelOpen: boolean;
  setIsPanelOpen: (open: boolean) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const ADMIN_SESSION_KEY = 'parfumsp_admin_session';

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(() => {
    return sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true';
  });
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(() => {
    // If already logged in from session, open the panel
    return sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true';
  });

  const login = useCallback((password: string): boolean => {
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;
    if (!adminPassword || password !== adminPassword) {
      return false;
    }
    setIsAdmin(true);
    sessionStorage.setItem(ADMIN_SESSION_KEY, 'true');
    setIsLoginModalOpen(false);
    setIsPanelOpen(true);
    return true;
  }, []);

  const logout = useCallback(() => {
    setIsAdmin(false);
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    setIsPanelOpen(false);
  }, []);

  return (
    <AdminContext.Provider
      value={{
        isAdmin,
        login,
        logout,
        isLoginModalOpen,
        setIsLoginModalOpen,
        isPanelOpen,
        setIsPanelOpen,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
