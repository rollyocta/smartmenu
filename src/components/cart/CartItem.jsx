// src/components/cart/CartItem.jsx
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return null; // Ang Cart.jsx na ang bahala sa empty state message
  }

  return (
    <div className="cart-items-container">
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item-row">
          {/* Product Image */}
          <div className="cart-item-image">
            <img src={item.product.image} alt={item.product.name} />
          </div>

          {/* Product Info */}
          <div className="cart-item-details">
            <h4 className="item-name">{item.product.name}</h4>
            {item.selectedSize && (
              <span className="item-size-tag">Size: {item.selectedSize.size}</span>
            )}
            <p className="item-qty">Quantity: {item.quantity}</p>
          </div>

          {/* Price and Action */}
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
    </div>
  );
};

export default CartItem;