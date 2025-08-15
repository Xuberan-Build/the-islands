import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Clock } from 'lucide-react';
import EstimatePopup from '../ui/EstimatePopup';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleCallClick = () => {
    window.location.href = 'tel:843-437-8921';
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar with Hours */}
      <div className="bg-navy text-ivory py-2">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-3">
              <Clock className="text-gold" size={16} />
              <span className="font-sans" style={{ fontSize: '16px', lineHeight: '1.4' }}>
                Monday - Saturday: 8:00 AM - 6:00 PM | Or: By Appointment
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span className="font-sans" style={{ fontSize: '16px', lineHeight: '1.4' }}>
                Call now for free estimate
              </span>
              <a href="tel:843-437-8921" className="text-gold font-semibold">
                843-437-8921
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className="bg-ivory shadow-lg sticky top-0 z-50 border-b border-gold/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            
            {/* Logo Section - Updated to remove redundant text */}
            <Link to="/" className="flex items-center">
              <div className="relative">
                <img 
                  src="/images/ISLANDS-logo-transaprency.png" 
                  alt="THE ISLANDS Rug Spa Logo" 
                  className="h-16 object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-navy font-medium px-4 py-2 border-b-2 border-gold hover:border-gold/60 transition-colors"
                style={{ fontSize: '16px', lineHeight: '1.4' }}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-navy/80 hover:text-navy font-medium flex items-center space-x-1 px-4 py-2 transition-colors"
                style={{ fontSize: '16px', lineHeight: '1.4' }}
              >
                <span>Services</span>
                <ChevronDown size={16} />
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-navy/80 hover:text-navy font-medium px-4 py-2 transition-colors"
                style={{ fontSize: '16px', lineHeight: '1.4' }}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-navy/80 hover:text-navy font-medium px-4 py-2 transition-colors"
                style={{ fontSize: '16px', lineHeight: '1.4' }}
              >
                Contact
              </button>
            </nav>

            {/* Call-to-Action Buttons - Updated CTA text */}
            <div className="hidden lg:flex items-center space-x-3">
              <button 
                onClick={openPopup}
                className="bg-gold hover:bg-gold/90 text-navy px-6 py-3 rounded-lg font-semibold transition-colors font-sans"
                style={{ fontSize: '16px', lineHeight: '1.4' }}
              >
                Schedule Free Estimate
              </button>
              <button 
                onClick={handleCallClick}
                className="bg-navy hover:bg-navy/90 text-ivory px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 font-sans"
                style={{ fontSize: '16px', lineHeight: '1.4' }}
              >
                <Phone size={18} />
                <span>843-437-8921</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden flex items-center space-x-2 text-navy"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Phone size={18} />
              <span className="font-semibold" style={{ fontSize: '16px', lineHeight: '1.4' }}>
                843-437-8921
              </span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-gold/20 pt-4">
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-left text-navy font-medium py-2"
                  style={{ fontSize: '16px', lineHeight: '1.4' }}
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-left text-navy/80 hover:text-navy py-2"
                  style={{ fontSize: '16px', lineHeight: '1.4' }}
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-left text-navy/80 hover:text-navy py-2"
                  style={{ fontSize: '16px', lineHeight: '1.4' }}
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-left text-navy/80 hover:text-navy py-2"
                  style={{ fontSize: '16px', lineHeight: '1.4' }}
                >
                  Contact
                </button>
                
                <div className="flex flex-col space-y-2 pt-4">
                  <button 
                    onClick={openPopup}
                    className="bg-gold text-navy px-6 py-3 rounded-lg font-semibold"
                    style={{ fontSize: '16px', lineHeight: '1.4' }}
                  >
                    Schedule Free Estimate
                  </button>
                  <button 
                    onClick={handleCallClick}
                    className="bg-navy text-ivory px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
                    style={{ fontSize: '16px', lineHeight: '1.4' }}
                  >
                    <Phone size={18} />
                    <span>843-437-8921</span>
                  </button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      <EstimatePopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default Header;