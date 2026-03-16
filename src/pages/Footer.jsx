import React from 'react';
import { Clock, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top-wave"></div> {/* Decorative wave */}
      
      <div className="footer-content">
        <div className="footer-brand-section">
          <Coffee className="footer-logo-icon" />
          <p className="footer-brand">Cafe<span>Menu</span></p>
          <p className="footer-tagline">Ang paboritong tambayan ng iyong mga pangarap.</p>
        </div>
        
        <div className="schedule-container">
          <h3 className="schedule-title">Store Hours</h3>
          <div className="schedule-grid">
            <div className="schedule-item">
              <div className="schedule-icon-bg">
                <Clock size={18} />
              </div>
              <div className="schedule-text">
                <span className="days">Monday - Friday</span>
                <span className="hours">11:00 AM – 08:00 PM</span>
              </div>
            </div>
            
            <div className="schedule-item">
              <div className="schedule-icon-bg">
                <Clock size={18} />
              </div>
              <div className="schedule-text">
                <span className="days">Saturday - Sunday</span>
                <span className="hours">12:00 PM – 08:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} <strong>Cafe Menu</strong>. All Rights Reserved.</p>
          <p className="developer-tag">Powered by <span>Smart Menu</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;