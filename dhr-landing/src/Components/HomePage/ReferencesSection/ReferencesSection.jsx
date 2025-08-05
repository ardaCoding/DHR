import React, { useState, useEffect, useRef } from 'react';
import './ReferencesSection.css';

const ReferencesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const companies = [
    { name: 'Microsoft', logo: '🏢' },
    { name: 'Google', logo: '🔍' },
    { name: 'Amazon', logo: '📦' },
   
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="references" className="references" ref={sectionRef}>
      <div className="references-container">
        <div className={`references-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="references-title">Referanslarımız</h2>
          <p className="references-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </p>
        </div>

        <div className={`companies-grid ${isVisible ? 'visible' : ''}`}>
          {companies.map((company, index) => (
            <div 
              key={company.name} 
              className="company-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="company-logo">
                {company.logo}
              </div>
              <span className="company-name">{company.name}</span>
            </div>
          ))}
        </div>

        <div className={`references-stats ${isVisible ? 'visible' : ''}`}>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Başarılı Proje</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Mutlu Müşteri</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Yıl Deneyim</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99%</div>
            <div className="stat-label">Müşteri Memnuniyeti</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;