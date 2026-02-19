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

    // 1. Maayos na format para sa Messenger Inbox
    let message = `New Order\n\n`;
    message += `Name: ${customerName}\n`;
    message += `Phone: ${phone}\n`;

    if (notes) {
      message += `Notes: ${notes}\n`;
    }

    message += `\nOrder Details:\n`;

    cartItems.forEach((item) => {
      const size = item.selectedSize?.size || "";
      const price = item.selectedSize?.price || item.product.price;
      message += `• ${item.product.name} ${size ? `(${size})` : ""} x${item.quantity} = ₱${price * item.quantity}\n`;
    });

    message += `\nTotal: ₱${total}`;

    // 2. CONFIGURATION
    const pageUsername = "smartmenu0"; // ✅ change to your page username
    const encodedMessage = encodeURIComponent(message);
    
    // 3. SMART LINK LOGIC
    // Sa mobile, ang m.me link ang pinaka-stable na paraan para i-trigger ang app convo na may pre-filled text.
    const messengerURL = `https://m.me/${pageUsername}?text=${encodedMessage}`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Sa mobile, 'window.location.href' ang mas effective kaysa 'window.open' 
      // para piliting bumukas ang Messenger App imbes na bagong tab sa browser.
      window.location.href = messengerURL;
    } else {
      // Desktop: Bukas sa bagong tab gaya ng dati.
      window.open(messengerURL, "_blank");
    }

    // Clear cart after redirect
    setTimeout(() => {
        clearCart();
    }, 2000);
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