import React, { useState, useEffect, useRef } from 'react';
import './ServiceSection.css';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      icon: '🚀',
      title: 'İş Süreci Optimizasyonu',
      description: 'Mevcut iş süreçlerinizi analiz ederek verimliliği artıran çözümler sunuyoruz.',
      features: ['Süreç Analizi', 'Otomasyön', 'Performans İyileştirme']
    },
    {
      id: 2,
      icon: '🔒',
      title: 'Güvenlik & Compliance',
      description: 'Sistem güvenliğinizi sağlayarak uyumluluk gereksinimlerinizi karşılıyoruz.',
      features: ['Veri Güvenliği', 'KVKK Uyumluluğu', 'Güvenlik Denetimi']
    }
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
    <section id="services" className="services" ref={sectionRef}>
      <div className="services-container">
        <div className={`services-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="services-title">Hizmetlerimiz</h2>
          <p className="services-subtitle">
            İşletmenizin dijital dönüşüm yolculuğunda ihtiyaç duyduğu 
            tüm teknoloji çözümlerini sunuyoruz.
          </p>
        </div>

        <div className={`services-grid ${isVisible ? 'visible' : ''}`}>
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              
              <p className="service-description">
                {service.description}
              </p>
              
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="service-feature">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="service-button">
                Detayları Gör
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;