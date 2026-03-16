import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../../context/CartContext.jsx";

const CategoryTabs = ({ 
  categories, 
  selectedCategory, 
  setSelectedCategory, 
  searchQuery, 
  setSearchQuery 
}) => {
  // 1. Kunin ang cart logic galing sa Navbar
  const { cartItems } = useContext(CartContext);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0) return;
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [cartItems.length]);

  return (
    <div className="sticky-header-container">
      <div className="header-content-wrapper">
        
        {/* Search at Cart Row */}
        <div className="top-row-wrapper">
          <div className="search-section">
            <div className="search-input-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                className="search-input"
                placeholder="Search your coffee..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* 2. DITO ANG CART BUTTON */}
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

        {/* Categories Section */}
        <div className="tabs-wrapper">
          <div className="tabs-container">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`tab-item ${selectedCategory === category.id ? "active" : ""}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;