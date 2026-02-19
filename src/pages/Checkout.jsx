import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  // Redirect to Menu page if cart is empty
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
    }
  }, [cartItems, navigate]);

  const handlePlaceOrder = () => {
    if (!customerName || !phone) {
      alert("Please fill required fields");
      return;
    }

    let message = `New Order%0A%0A`;
    message += `Name: ${customerName}%0A`;
    message += `Phone: ${phone}%0A`;

    if (notes) {
      message += `Notes: ${notes}%0A`;
    }

    message += `%0AOrder Details:%0A`;

    cartItems.forEach((item) => {
      const size = item.selectedSize?.size || "";
      const price = item.selectedSize?.price || item.product.price;
      message += `• ${item.product.name} (${size}) x${item.quantity} = ₱${price * item.quantity}%0A`;
    });

    message += `%0ATotal: ₱${total}`;

    // Messenger Page Username
    const pageUsername = "smartmenu0"; // ✅ change to your page username
    const messengerURL = `https://m.me/${pageUsername}?text=${message}`;

    window.open(messengerURL, "_blank");
    clearCart();
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-main-title">Complete Your Order</h1>

      <div className="checkout-grid">
        {/* Customer Info */}
        <section className="info-section">
          <h2 className="section-title">Customer Information</h2>

          <div className="input-group">
            <label>Full Name *</label>
            <input
              type="text"
              placeholder="Juan Dela Cruz"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Phone Number *</label>
            <input
              type="text"
              placeholder="09123456789"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Special Notes</label>
            <textarea
              placeholder="Less sugar, extra ice..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </section>

        {/* Order Summary */}
        <section className="summary-section">
          <h2 className="section-title">Order Summary</h2>

          <div className="receipt-box">
            {cartItems.map((item, index) => (
              <div key={index} className="summary-item">
                <div>
                  {item.product.name}
                  <br />
                  {item.selectedSize?.size} x {item.quantity}
                </div>
                <div>
                  ₱{(item.selectedSize?.price || item.product.price) * item.quantity}
                </div>
              </div>
            ))}

            <div className="total-row">
              <strong>Total:</strong>
              <strong>₱{total}</strong>
            </div>

            <button onClick={handlePlaceOrder} className="place-order-btn">
              Confirm & Place Order
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Checkout;
