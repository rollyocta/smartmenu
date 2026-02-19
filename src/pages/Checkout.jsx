import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  // Redirect to Menu page kung walang laman ang cart
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
    }
  }, [cartItems, navigate]);

  const handlePlaceOrder = () => {
    // 1. Validation: Siguraduhing may pangalan at number
    if (!customerName || !phone) {
      alert("Paki-fill up ang lahat ng required fields (Name at Phone).");
      return;
    }

    // 2. Format the Message (Maayos na listahan para sa Messenger inbox)
    let messageText = `🛒 *NEW ORDER ALERT!*%0A%0A`;
    messageText += `*Customer Details:*%0A`;
    messageText += `👤 Name: ${customerName}%0A`;
    messageText += `📞 Phone: ${phone}%0A`;
    if (notes) messageText += `📝 Notes: ${notes}%0A`;

    messageText += `%0A*Order Summary:*%0A`;

    cartItems.forEach((item) => {
      const size = item.selectedSize?.size || "";
      const price = item.selectedSize?.price || item.product.price;
      messageText += `• ${item.product.name} ${size ? `(${size})` : ""} x${item.quantity} = ₱${price * item.quantity}%0A`;
    });

    messageText += `%0A💰 *Total Amount: ₱${total}*`;

    // 3. Configuration (Ilagay ang Username mo dito)
    const pageUsername = "smartmenu0"; 
    
    // 4. Smart Redirect Logic
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // MOBILE: Tinatawag ang FB Messenger App Protocol
      // Ginagamit natin ang 'share' method dahil ito ang pinaka-stable sa pag-pasa ng pre-filled text
      const messengerAppUrl = `fb-messenger://share/?link=${encodeURIComponent("https://m.me/" + pageUsername)}&text=${messageText}`;
      
      // Subukang buksan ang App
      window.location.href = messengerAppUrl;

      // Fallback: Kung walang app o mabagal, bubuksan ang browser version pagkatapos ng 1.5 seconds
      setTimeout(() => {
        if (!document.hidden) {
          window.location.href = `https://m.me/${pageUsername}?text=${messageText}`;
        }
      }, 1500);

    } else {
      // DESKTOP: Standard m.me link sa bagong tab
      const desktopUrl = `https://m.me/${pageUsername}?text=${messageText}`;
      window.open(desktopUrl, "_blank");
    }

    // 5. Clear Cart (May kaunting delay para hindi mag-error ang redirect)
    setTimeout(() => {
      clearCart();
    }, 3000);
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-main-title">Complete Your Order</h1>

      <div className="checkout-grid">
        {/* Customer Info Section */}
        <section className="info-section">
          <h2 className="section-title">Customer Information</h2>

          <div className="input-group">
            <label>Full Name *</label>
            <input
              type="text"
              placeholder="Juan Dela Cruz"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Phone Number *</label>
            <input
              type="text"
              placeholder="09123456789"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Special Notes</label>
            <textarea
              placeholder="Less sugar, extra ice, etc..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </section>

        {/* Order Summary Section */}
        <section className="summary-section">
          <h2 className="section-title">Order Summary</h2>

          <div className="receipt-box">
            {cartItems.map((item, index) => (
              <div key={index} className="summary-item">
                <div>
                  <span className="item-name">{item.product.name}</span>
                  <br />
                  <small className="item-meta">
                    {item.selectedSize?.size} x {item.quantity}
                  </small>
                </div>
                <div className="item-price">
                  ₱{(item.selectedSize?.price || item.product.price) * item.quantity}
                </div>
              </div>
            ))}

            <hr className="divider" />

            <div className="total-row">
              <strong>Total Amount:</strong>
              <strong className="total-price">₱{total}</strong>
            </div>

            <button onClick={handlePlaceOrder} className="place-order-btn">
              Confirm & Order via Messenger 💬
            </button>
            
            <p className="helper-text">
              *You will be redirected to Facebook Messenger to send your order details.
            </p>
          </div>
        </section>
      </div>

      {/* Basic Internal CSS (Optional: Move this to your CSS file) */}
      <style>{`
        .checkout-container { padding: 20px; max-width: 1000px; margin: auto; }
        .checkout-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
        @media (max-width: 768px) { .checkout-grid { grid-template-columns: 1fr; } }
        .input-group { margin-bottom: 15px; display: flex; flex-direction: column; }
        .input-group input, .input-group textarea { padding: 10px; border: 1px solid #ccc; border-radius: 5px; margin-top: 5px; }
        .receipt-box { border: 1px solid #eee; padding: 20px; border-radius: 10px; background: #f9f9f9; }
        .summary-item { display: flex; justify-content: space-between; margin-bottom: 10px; }
        .total-row { display: flex; justify-content: space-between; font-size: 1.2rem; margin-top: 15px; }
        .place-order-btn { width: 100%; padding: 15px; background: #0084ff; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold; margin-top: 20px; transition: 0.3s; }
        .place-order-btn:hover { background: #0066cc; }
        .helper-text { font-size: 0.8rem; color: #666; text-align: center; margin-top: 10px; }
      `}</style>
    </div>
  );
};

export default Checkout;