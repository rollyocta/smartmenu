import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import './styles/navbar.css'
import './styles/product.css'
import './styles/cart.css'
import './styles/category.css'

import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'

import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </CartProvider>
  </BrowserRouter>
)
