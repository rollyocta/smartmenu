export const products = [
  // PREMIUM COFFEE (ICED | HOT)
  { id: 1, name: "Cafe Latte", category: "coffee", sizes: [{ size: "Medium", price: 69 }, { size: "Large", price: 79 }], image: "/images/products/cafe-latte.jpg" },
  { id: 2, name: "Spanish Latte", category: "coffee", sizes: [{ size: "Medium", price: 79 }, { size: "Large", price: 99 }], image: "/images/products/spanish-latte.jpg" },
  { id: 3, name: "Caramel Latte", category: "coffee", sizes: [{ size: "Medium", price: 89 }, { size: "Large", price: 109 }], image: "/images/products/caramel-latte.jpg" },
  { id: 4, name: "Sea Salt Latte", category: "coffee", sizes: [{ size: "Medium", price: 89 }, { size: "Large", price: 109 }], image: "/images/products/sea-salt-latte.jpg" },
  { id: 5, name: "Dark Mocha Latte", category: "coffee", sizes: [{ size: "Medium", price: 89 }, { size: "Large", price: 109 }], image: "/images/products/dark-mocha-latte.jpg" },
  { id: 6, name: "White Mocha Latte", category: "coffee", sizes: [{ size: "Medium", price: 89 }, { size: "Large", price: 109 }], image: "/images/products/white-mocha-latte.jpg" },
  { id: 7, name: "Almond Latte", category: "coffee", sizes: [{ size: "Medium", price: 89 }, { size: "Large", price: 109 }], image: "/images/products/almond-latte.jpg" },
  { id: 8, name: "Biscoff Latte", category: "coffee", sizes: [{ size: "Medium", price: 119 }, { size: "Large", price: 139 }], image: "/images/products/biscoff-latte.jpg" },

  // WAFFLE
  { id: 9, name: "Plain w/ Sugar Waffle", category: "waffle", sizes: [{ size: "Regular", price: 45 }, { size: "With Cream", price: 55 }], image: "/images/products/plain-waffle.jpg" },
  { id: 10, name: "Caramel Waffle", category: "waffle", sizes: [{ size: "Regular", price: 55 }, { size: "With Cream", price: 65 }], image: "/images/products/caramel-waffle.jpg" },
  { id: 11, name: "Chocolate Waffle", category: "waffle", sizes: [{ size: "Regular", price: 55 }, { size: "With Cream", price: 65 }], image: "/images/products/chocolate-waffle.jpg" },
  { id: 12, name: "Yema Waffle", category: "waffle", sizes: [{ size: "Regular", price: 55 }, { size: "With Cream", price: 65 }], image: "/images/products/yema-waffle.jpg" },
  { id: 13, name: "Strawberry Waffle", category: "waffle", sizes: [{ size: "Regular", price: 55 }, { size: "With Cream", price: 65 }], image: "/images/products/strawberry-waffle.jpg" },
  { id: 14, name: "Ube Waffle", category: "waffle", sizes: [{ size: "Regular", price: 55 }, { size: "With Cream", price: 65 }], image: "/images/products/ube-waffle.jpg" },
  { id: 15, name: "Oreo Chocolate Waffle", category: "waffle", sizes: [{ size: "With Cream", price: 75 }], image: "/images/products/oreo-chocolate-waffle.jpg" },
  { id: 16, name: "Almond Nutella Waffle", category: "waffle", sizes: [{ size: "With Cream", price: 75 }], image: "/images/products/almond-nutella-waffle.jpg" },
  { id: 17, name: "Tiramisu Waffle", category: "waffle", sizes: [{ size: "With Cream", price: 75 }], image: "/images/products/tiramisu-waffle.jpg" },
  { id: 18, name: "Biscoff Waffle", category: "waffle", sizes: [{ size: "With Cream", price: 80 }], image: "/images/products/biscoff-waffle.jpg" },

  // FRAPPE (Coffee-Based & Non-Coffee)
  { id: 19, name: "Java Chip Frappe", category: "frappe", sizes: [{ size: "Medium", price: 109 }, { size: "Large", price: 139 }], image: "/images/products/java-chip-frappe.jpg" },
  { id: 20, name: "Caramel Frappe", category: "frappe", sizes: [{ size: "Medium", price: 109 }, { size: "Large", price: 139 }], image: "/images/products/caramel-frappe.jpg" },
  { id: 21, name: "Dark Mocha Frappe", category: "frappe", sizes: [{ size: "Medium", price: 109 }, { size: "Large", price: 139 }], image: "/images/products/dark-mocha-frappe.jpg" },
  { id: 22, name: "Biscoff Frappe", category: "frappe", sizes: [{ size: "Medium", price: 129 }, { size: "Large", price: 159 }], image: "/images/products/biscoff-frappe.jpg" },
  { id: 23, name: "Chocolate Chip Frappe", category: "frappe", sizes: [{ size: "Medium", price: 99 }, { size: "Large", price: 129 }], image: "/images/products/chocolate-chip-frappe.jpg" },
  { id: 24, name: "Matcha Frappe", category: "frappe", sizes: [{ size: "Medium", price: 99 }, { size: "Large", price: 129 }], image: "/images/products/matcha-frappe.jpg" },
  { id: 25, name: "Strawberry Frappe", category: "frappe", sizes: [{ size: "Medium", price: 99 }, { size: "Large", price: 129 }], image: "/images/products/strawberry-frappe.jpg" },
  { id: 26, name: "Ube Frappe", category: "frappe", sizes: [{ size: "Medium", price: 99 }, { size: "Large", price: 129 }], image: "/images/products/ube-frappe.jpg" },

  // BONELESS CHICKEN
  { id: 27, name: "Plain Chicken", category: "chicken", sizes: [{ size: "Bites", price: 60 }, { size: "3pcs with Rice", price: 110 }], image: "/images/products/plain-chicken.jpg" },
  { id: 28, name: "BBQ Chicken", category: "chicken", sizes: [{ size: "Bites", price: 70 }, { size: "3pcs with Rice", price: 120 }], image: "/images/products/bbq-chicken.jpg" },
  { id: 29, name: "Spicy BBQ Chicken", category: "chicken", sizes: [{ size: "Bites", price: 70 }, { size: "3pcs with Rice", price: 120 }], image: "/images/products/spicy-bbq-chicken.jpg" },
  { id: 30, name: "Yangnyeom Chicken", category: "chicken", sizes: [{ size: "Bites", price: 70 }, { size: "3pcs with Rice", price: 120 }], image: "/images/products/yangnyeom-chicken.jpg" },
  { id: 31, name: "Honey Butter Chicken", category: "chicken", sizes: [{ size: "Bites", price: 70 }, { size: "3pcs with Rice", price: 120 }], image: "/images/products/honey-butter-chicken.jpg" },
  { id: 32, name: "Cheese Chicken", category: "chicken", sizes: [{ size: "Bites", price: 70 }, { size: "3pcs with Rice", price: 120 }], image: "/images/products/cheese-chicken.jpg" },
  { id: 33, name: "Snow Cheese Chicken", category: "chicken", sizes: [{ size: "Bites", price: 70 }, { size: "3pcs with Rice", price: 120 }], image: "/images/products/snow-cheese-chicken.jpg" },
  { id: 34, name: "Garlic Parmesan Chicken", category: "chicken", sizes: [{ size: "Bites", price: 70 }, { size: "3pcs with Rice", price: 120 }], image: "/images/products/garlic-parmesan-chicken.jpg" },
  { id: 35, name: "Bang Bang Chicken", category: "chicken", sizes: [{ size: "Bites", price: 70 }, { size: "3pcs with Rice", price: 120 }], image: "/images/products/bang-bang-chicken.jpg" },
];