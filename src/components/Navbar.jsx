// src/components/Navbar.jsx
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../context/CartContext.jsx";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [isAnimating, setIsAnimating] = useState(false);

  // Animation trigger kapag nagbago ang dami ng items sa cart
  useEffect(() => {
    if (cartItems.length === 0) return;
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [cartItems.length]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-logo">
          <h1>Cafe<span>Menu</span></h1>
        </Link>

        <Link to="/cart" className={`nav-cart-link ${isAnimating ? "bump" : ""}`}>
          <div className="cart-icon-wrapper">
            <ShoppingCart className="cart-icon" />
            {cartItems.length > 0 && (
              <span className="cart-badge">
                {cartItems.length}
              </span>
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;