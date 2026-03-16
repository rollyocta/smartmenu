import React from "react";
import { useNavigate } from "react-router-dom"; // Kung gamit mo ay React Router

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="hero-banner">
        <div className="hero-content">
          {/* Friendly Greeting */}
          <p className="hero-hi">Hi! Coffee is calling. ☕</p>
          
          <h1 className="hero-main-title">
            Your <span>Favorite Sips</span>, <br /> 
            Just a Tap Away.
          </h1>
          
          <p className="hero-desc">
            Basta kape, dapat mabilis at masarap. Gamitin ang aming smart menu para i-order ang iyong daily dose of caffeine.
          </p>

          {/* MAIN CTA */}
          <button className="order-now-btn" onClick={() => navigate("/menu")}>
            Order Now <span>→</span>
          </button>
        </div>

        {/* Decorative Element - Pwedeng palitan ng image ng kape */}
        <div className="hero-visual">
          <div className="orange-blob"></div>
          <span className="floating-emoji">☕</span>
        </div>
      </section>
    </div>
  );
};

export default Home;