// src/components/categories/CategoryTabs.jsx
import React from "react";

const CategoryTabs = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="tabs-wrapper">
      <div className="tabs-container">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`tab-item ${
              selectedCategory === category.id ? "active" : ""
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;