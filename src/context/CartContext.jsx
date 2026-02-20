// src/context/CartContext.jsx
import { createContext, useState, useEffect, useContext } from "react";

// 1️⃣ Create context
export const CartContext = createContext();

// 2️⃣ Cart provider
export const CartProvider = ({ children }) => {
  // Lazy init with localStorage (check if window exists)
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cartItems");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Save to localStorage whenever cartItems change (only in browser)
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Add item to cart
  const addToCart = (product, selectedSize, quantity) => {
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
      setCartItems([...cartItems, { product, selectedSize, quantity }]);
    }
  };

  // Remove item by index
  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  // Clear all items
  const clearCart = () => setCartItems([]);

  // Calculate total
  const total = cartItems.reduce(
    (acc, item) =>
      acc + (item.selectedSize?.price || item.product.price) * item.quantity,
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

// 3️⃣ Custom hook para magamit sa kahit anong component
export const useCart = () => useContext(CartContext);