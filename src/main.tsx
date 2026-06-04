import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { inject } from '@vercel/analytics'
import './index.css'
import App from './App'
import { CartProvider } from './context/CartContext'
import { AdminProvider } from './context/AdminContext'
import { ProductOverridesProvider } from './context/ProductOverridesProvider'

inject()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AdminProvider>
      <ProductOverridesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductOverridesProvider>
    </AdminProvider>
  </StrictMode>,
)
