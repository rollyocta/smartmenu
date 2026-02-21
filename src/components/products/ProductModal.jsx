// src/components/products/ProductModal.jsx
import React, { useState, useEffect } from "react";

const ProductModal = ({ product, isOpen, onClose, addToCart }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false); // State para sa toast

  useEffect(() => {
    if (product?.sizes) setSelectedSize(product.sizes[0]);
    else setSelectedSize(null);
    setQuantity(1);
    setShowSuccess(false); // Reset success kapag nagpalit ng product
  }, [product, isOpen]);

  if (!isOpen || !product) return null;

  const handleConfirm = () => {
    addToCart(product, selectedSize, quantity);
    
    // Ipakita ang success message
    setShowSuccess(true);

    // Magsasara ang modal pagkatapos ng maikling delay para makita ang feedback
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Toast Notification sa loob ng Modal Overlay */}
      <div className={`success-toast-floating ${showSuccess ? "show" : ""}`}>
        {/* <span className="check-icon">✓</span> */}
         Added {quantity} {product.name} to cart!
      </div>

      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-x" onClick={onClose}>✕</button>

        <div className="modal-header">
          <img src={product.image} alt={product.name} className="modal-image" />
          <h2 className="modal-title">{product.name}</h2>
        </div>

        <div className="modal-body">
          {product.sizes && (
            <div className="size-group">
              <p className="section-label">Select Size:</p>
              <div className="size-options">
                {product.sizes.map((sizeObj) => (
                  <button
                    key={sizeObj.size}
                    onClick={() => setSelectedSize(sizeObj)}
                    className={`modal-size-btn ${selectedSize?.size === sizeObj.size ? "active" : ""}`}
                  >
                    <span className="s-name">{sizeObj.size}</span>
                    <span className="s-price">₱{sizeObj.price}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="quantity-group">
            <span className="section-label">Quantity:</span>
            <div className="qty-controls">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <input type="number" value={quantity} readOnly />
              <button onClick={() => setQuantity(Math.min(20, quantity + 1))}>+</button>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button
            disabled={(product.sizes && !selectedSize) || showSuccess}
            onClick={handleConfirm}
            className={`confirm-btn ${showSuccess ? "btn-success" : ""}`}
          >
            {showSuccess ? "Adding..." : "Confirm Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;