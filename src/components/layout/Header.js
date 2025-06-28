import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Waves } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    <header className="bg-ivory shadow-lg sticky top-0 z-50 border-b border-gold/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center relative overflow-hidden">
                <Waves className="text-ivory" size={28} />
                <div className="absolute top-2 right-2 w-2 h-2 bg-gold rounded-full"></div>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-serif font-bold text-navy tracking-tight">The Islands</h1>
              <p className="text-sm text-navy/70 font-sans tracking-wider uppercase">Coastal Textile Care</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-navy font-medium px-4 py-2 border-b-2 border-gold hover:border-gold/60 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-navy/80 hover:text-navy font-medium flex items-center space-x-1 px-4 py-2 transition-colors"
            >
              <span>Services</span>
              <ChevronDown size={16} />
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-navy/80 hover:text-navy font-medium px-4 py-2 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-navy/80 hover:text-navy font-medium px-4 py-2 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Call-to-Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="bg-gold hover:bg-gold/90 text-navy px-6 py-3 rounded-lg font-semibold transition-colors font-sans">
              SCHEDULE INSPECTION
            </button>
            <button className="bg-navy hover:bg-navy/90 text-ivory px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 font-sans">
              <Phone size={18} />
              <span>Call 843-555-0100</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden flex items-center space-x-2 text-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Phone size={18} />
            <span className="font-semibold">843-555-0100</span>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gold/20 pt-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-left text-navy font-medium py-2">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-left text-navy/80 hover:text-navy py-2">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-navy/80 hover:text-navy py-2">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-navy/80 hover:text-navy py-2">Contact</button>
              
              <div className="flex flex-col space-y-2 pt-4">
                <button className="bg-gold text-navy px-6 py-3 rounded-lg font-semibold">
                  SCHEDULE INSPECTION
                </button>
                <button className="bg-navy text-ivory px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2">
                  <Phone size={18} />
                  <span>Call 843-555-0100</span>
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;