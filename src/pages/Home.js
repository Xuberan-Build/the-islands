import React from 'react';
import Hero from '../components/sections/Hero';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection from '../components/sections/AboutSection';
import ReviewsSection from '../components/sections/ReviewsSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ReviewsSection />
      <ContactSection />
    </>
  );
};

export default Home;