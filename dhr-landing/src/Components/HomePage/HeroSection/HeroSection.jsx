import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDemoRequest = () => {
    // Demo talep etme fonksiyonu - burada modal açabilir veya form sayfasına yönlendirebilirsiniz
    alert('Demo talep formu açılacak!');
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            <span className="hero-highlight">DHR</span>
            <br />
            İş Süreçlerinizi Dijitalleştirin
          </h1>
          
          <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Morbi pellentesque congue leo, id dictum purus. Ut consectetur tempus dapibus. Integer eget consequat dolor
             eu fermentum dui. Nam venenatis.
          </p>
          
          <button 
            className="demo-button"
            onClick={handleDemoRequest}
          >
            <span>Demo Talep Et</span>
            <div className="button-animation"></div>
          </button>
        </div>
        
        <div className={`hero-visual ${isVisible ? 'visible' : ''}`}>
          <div className="floating-card card-1">
            <div className="card-content">
              <div className="card-icon">📊</div>
              <span>Analytics</span>
            </div>
          </div>
          
          <div className="floating-card card-2">
            <div className="card-content">
              <div className="card-icon">⚡</div>
              <span>Fast</span>
            </div>
          </div>
          
          <div className="floating-card card-3">
            <div className="card-content">
              <div className="card-icon">🔒</div>
              <span>Secure</span>
            </div>
          </div>
          
          <div className="hero-circle"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;