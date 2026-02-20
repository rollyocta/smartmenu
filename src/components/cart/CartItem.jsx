// src/components/cart/CartItem.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link
import { CartContext } from "../../context/CartContext.jsx";

const CartItem = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return null; 
  }

  return (
    <div className="cart-items-container">
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item-row">
          <div className="cart-item-image">
            <img src={item.product.image} alt={item.product.name} />
          </div>

          <div className="cart-item-details">
            <h4 className="item-name">{item.product.name}</h4>
            {item.selectedSize && (
              <span className="item-size-tag">Size: {item.selectedSize.size}</span>
            )}
            <p className="item-qty">Quantity: {item.quantity}</p>
          </div>

          <div className="cart-item-actions">
            <p className="item-subtotal">
              ₱{item.selectedSize
                ? item.selectedSize.price * item.quantity
                : item.product.price * item.quantity}
            </p>
            <button
              onClick={() => removeFromCart(index)}
              className="remove-btn"
              title="Remove item"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* NEW: Add More Items Button */}
      <div className="add-more-container">
        <Link to="/" className="add-more-link">
          <span className="plus-icon">+</span> Add More Items
        </Link>
      </div>
    </div>
  );
};

export default CartItem;