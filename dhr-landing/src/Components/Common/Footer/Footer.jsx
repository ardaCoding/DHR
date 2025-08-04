import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>DHR</h3>
              <p>İş süreçlerinizi dijitalleştiren güvenilir teknoloji partneri</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Hızlı Linkler</h4>
            <ul className="footer-links">
              <li>
                <button 
                  onClick={scrollToTop}
                  className="footer-link"
                >
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="footer-link"
                >
                  Hizmetler
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('references');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="footer-link"
                >
                  Referanslar
                </button>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Bize Ulaşın
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Hizmetlerimiz</h4>
            <ul className="footer-links">
              <li><span className="footer-link">İş Süreci Optimizasyonu</span></li>
              <li><span className="footer-link">Güvenlik & Compliance</span></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>İletişim</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>info@dhr.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+90 212 XXX XX XX</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} DHR. Tüm hakları saklıdır.</p>
            <div className="social-links">
              <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
                💼
              </a>
              <a href="https://linkedin.com" className="social-link" aria-label="Twitter">
                🐦
              </a>
              <a href="https://linkedin.com" className="social-link" aria-label="GitHub">
                👨‍💻
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;