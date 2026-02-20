import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [orderType, setOrderType] = useState("pickup");
  const [address, setAddress] = useState("");

  const DELIVERY_FEE = 15;
  const grandTotal = orderType === "delivery" ? total + DELIVERY_FEE : total;

  // Redirect to menu if cart is empty
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

    if (orderType === "delivery" && !address) {
      alert("Please enter delivery address");
      return;
    }

    // Build Messenger message
    let message = `🛎️ NEW ORDER RECEIVED\n\n`;
    message += `━━━━━━━━━━━━━━━━━━━\n`;
    message += `👤 CUSTOMER DETAILS\n`;
    message += `━━━━━━━━━━━━━━━━━━━\n`;
    message += `Name: ${customerName}\n`;
    message += `Phone: ${phone}\n`;
    message += `Order Type: ${orderType === "pickup" ? "🏪 Pick up" : "🚚 Delivery"}\n`;
    if (orderType === "delivery") message += `Address: ${address}\n`;
    if (notes) message += `Notes: ${notes}\n`;

    message += `\n━━━━━━━━━━━━━━━━━━━\n`;
    message += `🧾 ORDER SUMMARY\n`;
    message += `━━━━━━━━━━━━━━━━━━━\n`;

    cartItems.forEach((item) => {
      const size = item.selectedSize?.size || "";
      const price = item.selectedSize?.price || item.product.price;
      const subtotal = price * item.quantity;

      message += `• ${item.product.name} ${size ? `(${size})` : ""}\n`;
      message += `   Qty: ${item.quantity}\n`;
      message += `   Subtotal: ₱${subtotal}\n\n`;
    });

    message += `━━━━━━━━━━━━━━━━━━━\n`;
    message += `Subtotal: ₱${total}\n`;
    if (orderType === "delivery") message += `Delivery Fee: ₱${DELIVERY_FEE}\n`;
    message += `💰 TOTAL AMOUNT: ₱${grandTotal}\n`;
    message += `━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `📅 Please confirm this order.\nThank you!`;

    const pageUsername = "smartmenu0";
    const encodedMessage = encodeURIComponent(message);
    const messengerURL = `https://m.me/${pageUsername}?text=${encodedMessage}`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) window.location.href = messengerURL;
    else window.open(messengerURL, "_blank");

    // Clear cart from context AND localStorage
    clearCart();
    if (typeof window !== "undefined") localStorage.removeItem("cartItems");
  };

  return (
    <div className="checkout-container">

      {/* Back to Menu */}
      <button
        onClick={() => navigate("/")}
        className="back-to-menu-btn"
      >
        ← Back to Menu
      </button>

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
            <label>Order Type *</label>
            <div className="radio-group">
              <label className={orderType === "pickup" ? "active" : ""}>
                <input
                  type="radio"
                  value="pickup"
                  checked={orderType === "pickup"}
                  onChange={(e) => setOrderType(e.target.value)}
                />
                🛍️ Pick up
              </label>
              <label className={orderType === "delivery" ? "active" : ""}>
                <input
                  type="radio"
                  value="delivery"
                  checked={orderType === "delivery"}
                  onChange={(e) => setOrderType(e.target.value)}
                />
                🛵 Delivery
              </label>
            </div>
          </div>

          {orderType === "delivery" && (
            <div className="input-group">
              <label>Delivery Address *</label>
              <textarea
                placeholder="House number, street, barangay..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          )}

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
                  {item.product.name}<br />
                  <small>
                    {item.selectedSize?.size} x {item.quantity}
                  </small>
                </div>
                <div>
                  ₱{(item.selectedSize?.price || item.product.price) * item.quantity}
                </div>
              </div>
            ))}

            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>₱{total}</span>
              </div>
              {orderType === "delivery" && (
                <div className="summary-row fee">
                  <span>Delivery Fee:</span>
                  <span>₱{DELIVERY_FEE}</span>
                </div>
              )}
            </div>

            <div className="total-row">
              <strong>Grand Total:</strong>
              <strong className="total-price">₱{grandTotal}</strong>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="place-order-btn"
            >
              Place Order (via Messenger)
            </button>

          </div>
        </section>

      </div>
    </div>
  );
};

export default Checkout;