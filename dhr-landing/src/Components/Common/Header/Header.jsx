import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            DHR
          </Link>
        </div>
        
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <button 
                onClick={() => scrollToSection('services')}
                className="nav-link"
              >
                Hizmetler
              </button>
            </li>
            <li className="nav-item">
              <button 
                onClick={() => scrollToSection('references')}
                className="nav-link"
              >
                Referanslar
              </button>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Bize Ulaşın
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;