import React from 'react';
import Hero from '../components/sections/Hero';
import ServicesSection from '../components/sections/ServicesSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ContactSection />
    </>
  );
};

export default Home;