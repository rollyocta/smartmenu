// src/components/products/ProductCard.jsx
import React from "react";

const ProductCard = ({ product, onAddClick }) => {
  // Kunin ang price ng unang size para sa display
  const displayPrice = product.sizes && product.sizes.length > 0 
    ? product.sizes[0].price 
    : product.price;

  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </div>
      
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-footer">
          <p className="product-price">₱{displayPrice}</p>
          <button
            onClick={() => onAddClick(product)}
            className="add-button"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;