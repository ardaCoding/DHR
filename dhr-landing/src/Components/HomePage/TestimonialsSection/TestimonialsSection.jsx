import React, { useState, useEffect, useRef } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      company: 'Microsoft',
      companyLogo: '🏢',
      reviewer: 'Ahmet Yılmaz',
      position: 'CTO',
      rating: 5,
      comment: 'DHR ile çalışmak gerçekten harika bir deneyim oldu. İş süreçlerimizi tamamen dijitalleştirdiler ve verimliliğimiz %40 arttı. Profesyonel ekip ve kaliteli hizmet!',
      color: '#0078d4'
    },
    {
      id: 2,
      company: 'Google',
      companyLogo: '🔍',
      reviewer: 'Elif Kaya',
      position: 'Product Manager',
      rating: 5,
      comment: 'Müthiş bir ekip! Karmaşık iş gereksinimlerimizi anlayıp, özel çözümler geliştirdiler. Proje zamanında ve bütçe içinde teslim edildi. Kesinlikle tavsiye ederim.',
      color: '#4285f4'
    },
    {
      id: 3,
      company: 'Amazon',
      companyLogo: '📦',
      reviewer: 'Mehmet Özkan',
      position: 'Operations Director',
      rating: 5,
      comment: 'DHR sayesinde lojistik süreçlerimiz çok daha verimli hale geldi. Gerçek zamanlı raporlama sistemi işimizi kolaylaştırdı. İnovasyoncu yaklaşımları ile fark yaratıyorlar.',
      color: '#ff9900'
    },
    {
      id: 4,
      company: 'Apple',
      companyLogo: '🍎',
      reviewer: 'Zeynep Demir',
      position: 'Technical Lead',
      rating: 5,
      comment: 'Güvenlik ve kullanıcı deneyimi konusunda mükemmel bir hizmet aldık. Mobil uygulamalarımızın performansı DHR çözümleri ile önemli ölçüde iyileşti.',
      color: '#007aff'
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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`star ${index < rating ? 'filled' : ''}`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section className="testimonials" ref={sectionRef}>
      <div className="testimonials-container">
        <div className={`testimonials-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="testimonials-title">Müşteri Yorumları</h2>
          <p className="testimonials-subtitle">
            Müşterilerimizin memnuniyeti bizim en büyük başarımızdır. 
            Onların deneyimlerini dinleyin.
          </p>
        </div>

        <div className={`testimonials-grid ${isVisible ? 'visible' : ''}`}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                '--accent-color': testimonial.color 
              }}
            >
              <div className="testimonial-header">
                <div className="company-info">
                  <div className="company-logo">
                    {testimonial.companyLogo}
                  </div>
                  <div className="company-details">
                    <h4 className="company-name">{testimonial.company}</h4>
                    <div className="rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <div className="quote-icon">"</div>
              </div>

              <p className="testimonial-comment">
                {testimonial.comment}
              </p>

              <div className="testimonial-footer">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">
                    {testimonial.reviewer.charAt(0)}
                  </div>
                  <div className="reviewer-details">
                    <div className="reviewer-name">{testimonial.reviewer}</div>
                    <div className="reviewer-position">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;