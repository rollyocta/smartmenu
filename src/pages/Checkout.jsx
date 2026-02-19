import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

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

    // 1. I-format ang message (Clean version)
    let messageText = `New Order\n\n`;
    messageText += `Name: ${customerName}\n`;
    messageText += `Phone: ${phone}\n`;
    if (notes) messageText += `Notes: ${notes}\n`;
    messageText += `\nOrder Details:\n`;

    cartItems.forEach((item) => {
      const size = item.selectedSize?.size || "";
      const price = item.selectedSize?.price || item.product.price;
      messageText += `• ${item.product.name} ${size ? `(${size})` : ""} x${item.quantity} = ₱${price * item.quantity}\n`;
    });

    messageText += `\nTotal: ₱${total}`;

    // 2. I-encode ang message para sa URL
    const encodedMessage = encodeURIComponent(messageText);
    const pageUsername = "smartmenu0"; 
    
    // 3. Platform Detection Logic
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      /**
       * MOBILE STRATEGY: 
       * Sinusubukan nating i-trigger ang Messenger App gamit ang custom protocol.
       * Ang 'share' feature ang pinaka-stable para mag-pasa ng text sa mobile.
       */
      const messengerAppUrl = `fb-messenger://share/?link=${encodeURIComponent("https://m.me/" + pageUsername)}&text=${encodedMessage}`;
      const fallbackUrl = `https://m.me/${pageUsername}?text=${encodedMessage}`;

      // Subukang buksan ang App
      window.location.href = messengerAppUrl;

      // Kung walang Messenger app o hindi nag-load, fallback sa browser link after 1 second
      setTimeout(() => {
          if (!document.hidden) {
              window.location.href = fallbackUrl;
          }
      }, 1000);

    } else {
      /**
       * DESKTOP STRATEGY:
       * Standard m.me link sa bagong tab.
       */
      const desktopUrl = `https://m.me/${pageUsername}?text=${encodedMessage}`;
      window.open(desktopUrl, "_blank");
    }

    // Clear cart after a delay to ensure the redirect starts first
    setTimeout(() => {
        clearCart();
    }, 2000);
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-main-title">Complete Your Order</h1>

      <div className="checkout-grid">
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

        <section className="summary-section">
          <h2 className="section-title">Order Summary</h2>
          <div className="receipt-box">
            {cartItems.map((item, index) => (
              <div key={index} className="summary-item">
                <div>
                  {item.product.name}
                  <br />
                  <small>{item.selectedSize?.size} x {item.quantity}</small>
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
              Confirm & Place Order (via Messenger)
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Checkout;