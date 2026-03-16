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

  // 1. DAGDAG: State para sa search input
  const [searchQuery, setSearchQuery] = useState("");

  // 2. MODIFIED: Filter logic (Category + Search)
  const filteredProducts = products.filter((product) => {
    // Check sa category
    const matchesCategory = 
      selectedCategory === "all" || product.category === selectedCategory;
    
    // Check sa search text (ginawang lowercase para hindi case-sensitive)
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleAddClick = (product) => {
    setModalProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* 3. DAGDAG: Ipasa ang search states sa CategoryTabs */}
      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* 4. OPTIONAL: No results message */}
      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} onAddClick={handleAddClick} />
      ) : (
        <div style={{ textAlign: "center", padding: "80px 20px", color: "#666" }}>
          <p style={{ fontSize: "1.2rem" }}>Walang kape na <b>"{searchQuery}"</b> sa menu. ☕</p>
        </div>
      )}

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