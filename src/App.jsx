import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";


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
    </div>
  );
}

export default App;
