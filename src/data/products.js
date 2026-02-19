export const products = [
  // PREMIUM COFFEE (ICED | HOT)
  { id: 1, name: "Cafe Latte", category: "coffee", sizes: [{ size: "Medium", price: 69 }, { size: "Large", price: 79 }], image: "/images/products/cafe-latte.png" },
  { id: 2, name: "Spanish Latte", category: "coffee", sizes: [{ size: "Medium", price: 79 }, { size: "Large", price: 99 }], image: "/images/products/spanish-latte.png" },
  { id: 3, name: "Caramel Latte", category: "coffee", sizes: [{ size: "Medium", price: 89 }, { size: "Large", price: 109 }], image: "/images/products/caramel-latte.png" },
  { id: 4, name: "Sea Salt Latte", category: "coffee", sizes: [{ size: "Medium", price: 89 }, { size: "Large", price: 109 }], image: "/images/products/sea-salt-latte.png" },
  { id: 5, name: "Dark Mocha Latte", category: "coffee", sizes: [{ size: "Medium", price: 89 }, { size: "Large", price: 109 }], image: "/images/products/dark-mocha-latte.png" },
  { id: 6, name: "White Mocha Latte", category: "coffee", sizes: [{ size: "Medium", price: 89 }, { size: "Large", price: 109 }], image: "/images/products/white-mocha-latte.png" },
  { id: 7, name: "Almond Latte", category: "coffee", sizes: [{ size: "Medium", price: 89 }, { size: "Large", price: 109 }], image: "/images/products/almond-latte.png" },
  { id: 8, name: "Biscoff Latte", category: "coffee", sizes: [{ size: "Medium", price: 119 }, { size: "Large", price: 139 }], image: "/images/products/biscoff-latte.png" },

  // WAFFLE
  { id: 9, name: "Plain w/ Sugar Waffle", category: "waffle", sizes: [{ size: "Regular", price: 45 }, { size: "With Cream", price: 55 }], image: "/images/products/plain-waffle.png" },
  { id: 10, name: "Caramel Waffle", category: "waffle", sizes: [{ size: "Regular", price: 55 }, { size: "With Cream", price: 65 }], image: "/images/products/caramel-waffle.png" },
  { id: 11, name: "Chocolate Waffle", category: "waffle", sizes: [{ size: "Regular", price: 55 }, { size: "With Cream", price: 65 }], image: "/images/products/chocolate-waffle.png" },
  { id: 12, name: "Yema Waffle", category: "waffle", sizes: [{ size: "Regular", price: 55 }, { size: "With Cream", price: 65 }], image: "/images/products/yema-waffle.png" },
  { id: 13, name: "Strawberry Waffle", category: "waffle", sizes: [{ size: "Regular", price: 55 }, { size: "With Cream", price: 65 }], image: "/images/products/strawberry-waffle.png" },
  { id: 14, name: "Ube Waffle", category: "waffle", sizes: [{ size: "Regular", price: 55 }, { size: "With Cream", price: 65 }], image: "/images/products/ube-waffle.png" },
  { id: 15, name: "Oreo Chocolate Waffle", category: "waffle", sizes: [{ size: "With Cream", price: 75 }], image: "/images/products/oreo-chocolate-waffle.png" },
  { id: 16, name: "Almond Nutella Waffle", category: "waffle", sizes: [{ size: "With Cream", price: 75 }], image: "/images/products/almond-nutella-waffle.png" },
  { id: 17, name: "Tiramisu Waffle", category: "waffle", sizes: [{ size: "With Cream", price: 75 }], image: "/images/products/tiramisu-waffle.png" },
  { id: 18, name: "Biscoff Waffle", category: "waffle", sizes: [{ size: "With Cream", price: 80 }], image: "/images/products/biscoff-waffle.png" },

  // FRAPPE (Coffee-Based & Non-Coffee)
  { id: 19, name: "Java Chip Frappe", category: "frappe", sizes: [{ size: "Medium", price: 109 }, { size: "Large", price: 139 }], image: "/images/products/java-chip-frappe.png" },
  { id: 20, name: "Caramel Frappe", category: "frappe", sizes: [{ size: "Medium", price: 109 }, { size: "Large", price: 139 }], image: "/images/products/caramel-frappe.png" },
  { id: 21, name: "Dark Mocha Frappe", category: "frappe", sizes: [{ size: "Medium", price: 109 }, { size: "Large", price: 139 }], image: "/images/products/dark-mocha-frappe.png" },
  { id: 22, name: "Biscoff Frappe", category: "frappe", sizes: [{ size: "Medium", price: 129 }, { size: "Large", price: 159 }], image: "/images/products/biscoff-frappe.png" },
  { id: 23, name: "Chocolate Chip Frappe", category: "frappe", sizes: [{ size: "Medium", price: 99 }, { size: "Large", price: 129 }], image: "/images/products/chocolate-chip-frappe.png" },
  { id: 24, name: "Matcha Frappe", category: "frappe", sizes: [{ size: "Medium", price: 99 }, { size: "Large", price: 129 }], image: "/images/products/matcha-frappe.png" },
  { id: 25, name: "Strawberry Frappe", category: "frappe", sizes: [{ size: "Medium", price: 99 }, { size: "Large", price: 129 }], image: "/images/products/strawberry-frappe.png" },
  { id: 26, name: "Ube Frappe", category: "frappe", sizes: [{ size: "Medium", price: 99 }, { size: "Large", price: 129 }], image: "/images/products/ube-frappe.png" },

  // BONELESS CHICKEN
  { id: 27, name: "Plain Chicken", category: "chicken", sizes: [{ size: "Bites", price: 60 }, { size: "3pcs with Rice", price: 110 }], image: "/images/products/plain-chicken.png" },
  { id: 28, name: "BBQ Chicken", category: "chicken", sizes: [{ size: "Bites", price: 70 }, { size: "3pcs with Rice", price: 120 }], image: "/images/products/bbq-chicken.png" },
  { id: 29, name: "Spicy BBQ Chicken", category: "chicken", sizes: [{ size: "Bites", price: 70 }, { size: "3pcs with Rice", price: 120 }], image: "/images/products/spicy-bbq-chicken.png" },
  { id: 30, name: "Yangnyeom Chicken", category: "chicken", sizes: [{ size: "Bites", price: 70 }, { size: "3pcs with Rice", price: 120 }], image: "/images/products/yangnyeom-chicken.png" },
  { id: 31, name: "Honey Butter Chicken", category: "chicken", sizes: [{ size: "Bites", price: 70 }, { size: "3pcs with Rice", price: 120 }], image: "/images/products/honey-butter-chicken.png" },
  { id: 32, name: "Cheese Chicken", category: "chicken", sizes: [{ size: "Bites", price: 70 }, { size: "3pcs with Rice", price: 120 }], image: "/images/products/cheeese-chicken.png" },
  { id: 33, name: "Snow Cheese Chicken", category: "chicken", sizes: [{ size: "Bites", price: 70 }, { size: "3pcs with Rice", price: 120 }], image: "/images/products/snow-cheese-chicken.png" },
  { id: 34, name: "Garlic Parmesan Chicken", category: "chicken", sizes: [{ size: "Bites", price: 70 }, { size: "3pcs with Rice", price: 120 }], image: "/images/products/garlic-parmesan-chicken.png" },
  { id: 35, name: "Bang Bang Chicken", category: "chicken", sizes: [{ size: "Bites", price: 70 }, { size: "3pcs with Rice", price: 120 }], image: "/images/products/bang-bang-chicken.png" },
];