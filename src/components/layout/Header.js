import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Clock } from 'lucide-react';
import EstimatePopup from '../ui/EstimatePopup';
import { allCities } from '../../data/cityData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [mobileCitiesOpen, setMobileCitiesOpen] = useState(false);
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
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Split cities into two columns for dropdown
  const col1 = allCities.slice(0, 6);
  const col2 = allCities.slice(6);

  return (
    <>
      {/* Top Bar */}
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

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/images/ISLANDS-logo-transaprency.png"
                alt="THE ISLANDS Rug Spa Logo"
                className="h-16 object-contain"
              />
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

              {/* Service Areas dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCitiesOpen(true)}
                onMouseLeave={() => setCitiesOpen(false)}
              >
                <button
                  className="text-navy/80 hover:text-navy font-medium flex items-center space-x-1 px-4 py-2 transition-colors"
                  style={{ fontSize: '16px', lineHeight: '1.4' }}
                  onClick={() => setCitiesOpen((o) => !o)}
                  aria-expanded={citiesOpen}
                  aria-haspopup="true"
                >
                  <span>Locations</span>
                  <ChevronDown size={16} className={`transition-transform ${citiesOpen ? 'rotate-180' : ''}`} />
                </button>

                {citiesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-2 bg-transparent w-80 z-50">
                  <div className="bg-white rounded-xl shadow-2xl border border-gold/20 p-4">
                    <p className="text-xs font-sans font-semibold text-navy/40 uppercase tracking-widest mb-3 text-center">
                      Greater Charleston &amp; Lowcountry
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {col1.map((city) => (
                        <Link
                          key={city.slug}
                          to={`/${city.slug}`}
                          onClick={() => setCitiesOpen(false)}
                          className={`block px-2 py-1.5 rounded-lg font-sans text-sm transition-colors hover:bg-gold/10 hover:text-navy ${
                            location.pathname === `/${city.slug}` ? 'text-gold font-semibold' : 'text-navy/80'
                          }`}
                        >
                          {city.name}
                        </Link>
                      ))}
                      {col2.map((city) => (
                        <Link
                          key={city.slug}
                          to={`/${city.slug}`}
                          onClick={() => setCitiesOpen(false)}
                          className={`block px-2 py-1.5 rounded-lg font-sans text-sm transition-colors hover:bg-gold/10 hover:text-navy ${
                            location.pathname === `/${city.slug}` ? 'text-gold font-semibold' : 'text-navy/80'
                          }`}
                        >
                          {city.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  </div>
                )}
              </div>

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

            {/* Desktop CTAs */}
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
                <button onClick={() => scrollToSection('home')}
                  className="text-left text-navy font-medium py-2"
                  style={{ fontSize: '16px', lineHeight: '1.4' }}>
                  Home
                </button>
                <button onClick={() => scrollToSection('services')}
                  className="text-left text-navy/80 hover:text-navy py-2"
                  style={{ fontSize: '16px', lineHeight: '1.4' }}>
                  Services
                </button>

                {/* Mobile Service Areas accordion */}
                <div>
                  <button
                    onClick={() => setMobileCitiesOpen((o) => !o)}
                    className="w-full text-left text-navy/80 hover:text-navy py-2 flex items-center justify-between"
                    style={{ fontSize: '16px', lineHeight: '1.4' }}
                  >
                    <span>Locations</span>
                    <ChevronDown size={16} className={`transition-transform ${mobileCitiesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileCitiesOpen && (
                    <div className="pl-4 mt-1 space-y-1 border-l-2 border-gold/30">
                      {allCities.map((city) => (
                        <Link
                          key={city.slug}
                          to={`/${city.slug}`}
                          onClick={() => { setIsMenuOpen(false); setMobileCitiesOpen(false); }}
                          className={`block py-1.5 font-sans text-sm transition-colors ${
                            location.pathname === `/${city.slug}` ? 'text-gold font-semibold' : 'text-navy/70 hover:text-navy'
                          }`}
                        >
                          {city.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <button onClick={() => scrollToSection('about')}
                  className="text-left text-navy/80 hover:text-navy py-2"
                  style={{ fontSize: '16px', lineHeight: '1.4' }}>
                  About
                </button>
                <button onClick={() => scrollToSection('contact')}
                  className="text-left text-navy/80 hover:text-navy py-2"
                  style={{ fontSize: '16px', lineHeight: '1.4' }}>
                  Contact
                </button>

                <div className="flex flex-col space-y-2 pt-4">
                  <button onClick={openPopup}
                    className="bg-gold text-navy px-6 py-3 rounded-lg font-semibold"
                    style={{ fontSize: '16px', lineHeight: '1.4' }}>
                    Schedule Free Estimate
                  </button>
                  <button onClick={handleCallClick}
                    className="bg-navy text-ivory px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
                    style={{ fontSize: '16px', lineHeight: '1.4' }}>
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
