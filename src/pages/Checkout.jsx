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
      alert("Paki-fill up ang Name at Phone Number.");
      return;
    }

    // 1. Format ng Message (Clean & Readable)
    let orderSummary = `ORDER FORM\n`;
    orderSummary += `Name: ${customerName}\n`;
    orderSummary += `Phone: ${phone}\n`;
    if (notes) orderSummary += `Notes: ${notes}\n\n`;
    
    orderSummary += `ITEMS:\n`;
    cartItems.forEach((item) => {
      const size = item.selectedSize?.size || "";
      const price = item.selectedSize?.price || item.product.price;
      orderSummary += `- ${item.product.name} ${size ? `(${size})` : ""} x${item.quantity} = ₱${price * item.quantity}\n`;
    });

    orderSummary += `\nTOTAL: ₱${total}`;

    // 2. CONFIGURATION
    const pageUsername = "smartmenu0"; 
    const encodedMessage = encodeURIComponent(orderSummary);

    // 3. SMART REDIRECT LOGIC
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      /**
       * MOBILE STRATEGY: 
       * Imbes na 'share', gagamit tayo ng simplified 'm.me' link.
       * Sa Android/iOS, ito ang pinaka-reliable para mag-prompt na buksan ang App.
       */
      const mobileUrl = `https://m.me/${pageUsername}?text=${encodedMessage}`;
      
      // I-trigger ang redirect
      window.location.href = mobileUrl;
    } else {
      /**
       * DESKTOP STRATEGY:
       * Sa desktop, gumagana ang ?text= parameter nang walang problema.
       */
      const desktopUrl = `https://www.messenger.com/t/${pageUsername}/?text=${encodedMessage}`;
      window.open(desktopUrl, "_blank");
    }

    // Clear cart after a few seconds
    setTimeout(() => {
      clearCart();
    }, 3000);
  };

  return (
    <div className="checkout-container" style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Complete Your Order</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          placeholder="Full Name" 
          style={{ padding: '12px' }} 
          value={customerName} 
          onChange={(e) => setCustomerName(e.target.value)} 
        />
        <input 
          placeholder="Phone Number" 
          style={{ padding: '12px' }} 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
        />
        <textarea 
          placeholder="Notes" 
          style={{ padding: '12px', height: '80px' }} 
          value={notes} 
          onChange={(e) => setNotes(e.target.value)} 
        />

        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', background: '#f9f9f9' }}>
          <h4>Total: ₱{total}</h4>
          <button 
            onClick={handlePlaceOrder}
            style={{
              width: '100%',
              padding: '15px',
              backgroundColor: '#0084ff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold'
            }}
          >
            Confirm via Messenger
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;