// src/pages/Menu.jsx
import { useState, useContext } from "react";
import { categories } from "../data/categories.js";
import { products } from "../data/products.js";
import CategoryTabs from "../components/products/CategoryTabs.jsx";
import ProductGrid from "../components/products/ProductGrid.jsx";
import ProductModal from "../components/products/ProductModal.jsx";
import { CartContext } from "../context/CartContext.jsx";

const Menu = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [modalProduct, setModalProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleAddClick = (product) => {
    setModalProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div>
      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <ProductGrid products={filteredProducts} onAddClick={handleAddClick} />

      <ProductModal
        product={modalProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addToCart={addToCart}
      />
    </div>
  );
};

export default Menu;
