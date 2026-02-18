// src/components/products/ProductGrid.jsx
import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onAddClick }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddClick={onAddClick}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
