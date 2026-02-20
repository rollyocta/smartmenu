import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
        <div className="footer-content">
            <p className="footer-brand">Cafe Menu</p>
            
            <div className="schedule-grid">
                <div className="schedule-item">
                    <span className="days">🕒 Monday - Friday</span>
                    <span className="hours">11:00 AM – 08:00 PM</span>
                </div>
                <div className="schedule-item">
                    <span className="days">🕒 Saturday - Sunday</span>
                    <span className="hours">12:00 PM – 08:00 PM</span>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <p>&copy; {currentYear} <strong>Cafe Menu</strong>. All Rights Reserved.</p>
            <p className="developer-tag">Powered by <span>Smart Menu</span></p>
        </div>
    </footer>
  )
}

export default Footer