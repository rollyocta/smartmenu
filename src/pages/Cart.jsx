import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const { cartItems, total } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <div className="cart-page-container">
      <h1 className="cart-title">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty. Time for some coffee? ☕</p>
          <a href="/" className="continue-shopping">Continue Shopping</a>
        </div>
      ) : (
        <div className="cart-content">
          {/* Main List of Items */}
          <div className="cart-items-list">
            <CartItem />
          </div>

          {/* Order Summary Sidebar */}
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₱{total}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span className="free-tag">FREE</span>
            </div>
            <hr />
            <div className="summary-row total">
              <span>Total</span>
              <span>₱{total}</span>
            </div>
            <button
             onClick={() => navigate("/checkout")}
             className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;