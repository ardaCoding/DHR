import React from 'react';
import Header from '../Common/Header/Header';                           // 🔧 Düzeltildi
import HeroSection from '../HomePage/HeroSection/HeroSection';          // 🔧 Düzeltildi  
import ServicesSection from '../HomePage/ServicesSection/ServicesSection'; // 🔧 Düzeltildi
import ReferencesSection from '../HomePage/ReferencesSection/ReferencesSection'; // 🔧 Düzeltildi
import TestimonialsSection from '../HomePage/TestimonialsSection/TestimonialsSection'; // 🔧 Düzeltildi
import Footer from '../Common/Footer/Footer';                           // 🔧 Düzeltildi

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ReferencesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default HomePage;