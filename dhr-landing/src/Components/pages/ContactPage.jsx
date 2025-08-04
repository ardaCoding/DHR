import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Common/Header/Header';    // 🔧 Büyük C
import Footer from '../Common/Footer/Footer';    // 🔧 Büyük C
import './ContactPage.css';



const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulated form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <div className="contact-page">
      <Header />
      
      <main className="contact-main">
        <div className="contact-hero">
          <div className="contact-hero-container">
            <h1 className="contact-title">Bize Ulaşın</h1>
            <p className="contact-subtitle">
              Projeleriniz için bizimle iletişime geçin. 
              En kısa sürede size geri dönüş yapacağız.
            </p>
            <nav className="breadcrumb">
              <Link to="/" className="breadcrumb-link">Ana Sayfa</Link>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-current">İletişim</span>
            </nav>
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-container">
            <div className="contact-grid">
              <div className="contact-info">
                <h2>İletişim Bilgileri</h2>
                <p>
                  Sorularınız mı var? Yeni bir proje mi planlıyorsunuz? 
                  Bizimle iletişime geçmekten çekinmeyin.
                </p>

                <div className="contact-details">
                  <div className="contact-detail">
                    <div className="contact-icon">📧</div>
                    <div className="contact-text">
                      <h4>E-posta</h4>
                      <p>info@dhr.com</p>
                    </div>
                  </div>

                  <div className="contact-detail">
                    <div className="contact-icon">📞</div>
                    <div className="contact-text">
                      <h4>Telefon</h4>
                      <p>+90 212 XXX XX XX</p>
                    </div>
                  </div>

                  <div className="contact-detail">
                    <div className="contact-icon">📍</div>
                    <div className="contact-text">
                      <h4>Adres</h4>
                      <p>İstanbul, Türkiye<br />Örnek Mahalle, Test Sokak No: 123</p>
                    </div>
                  </div>

                  <div className="contact-detail">
                    <div className="contact-icon">🕐</div>
                    <div className="contact-text">
                      <h4>Çalışma Saatleri</h4>
                      <p>Pazartesi - Cuma: 09:00 - 18:00<br />Hafta Sonu: Randevulu</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form-section">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2>Mesaj Gönderin</h2>
                  
                  {submitStatus === 'success' && (
                    <div className="success-message">
                      ✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                    </div>
                  )}

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Ad Soyad *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">E-posta *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Şirket</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Şirket adınız"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Telefon</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+90 XXX XXX XX XX"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Konu *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Konu seçiniz</option>
                      <option value="demo">Demo Talebi</option>
                      <option value="project">Yeni Proje</option>
                      <option value="support">Teknik Destek</option>
                      <option value="partnership">İş Ortaklığı</option>
                      <option value="other">Diğer</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Mesaj *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      placeholder="Mesajınızı buraya yazın..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loading-spinner"></span>
                        Gönderiliyor...
                      </>
                    ) : (
                      'Mesaj Gönder'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;