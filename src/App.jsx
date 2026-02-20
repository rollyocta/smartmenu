import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar.jsx";
import Checkout from "./pages/Checkout.jsx";
import Footer from "./pages/footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
