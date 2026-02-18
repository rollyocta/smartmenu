// src/context/CartContext.jsx
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, selectedSize, quantity) => {
    // Check if same product & size already exists
    const existingIndex = cartItems.findIndex(
      (item) =>
        item.product.id === product.id &&
        item.selectedSize?.size === selectedSize?.size
    );

    if (existingIndex >= 0) {
      // Update quantity if exists
      const updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += quantity;
      setCartItems(updatedCart);
    } else {
      // Add new item
      setCartItems([
        ...cartItems,
        { product, selectedSize, quantity }
      ]);
    }
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const clearCart = () => setCartItems([]);

  const total = cartItems.reduce(
    (acc, item) =>
      acc + (item.selectedSize ? item.selectedSize.price : item.product.price) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
