import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, Waves, Mail, MapPin, Shield, Star } from 'lucide-react';
import EstimatePopup from '../ui/EstimatePopup';

const Footer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleCallClick = () => {
    window.location.href = 'tel:843-437-8921';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@theislandsrugspa.com';
  };
  const serviceAreas = [
    "Charleston", "Mount Pleasant", "Lowcountry", "Seabrook Island", "Kiawah Island", 
    "Johns Island", "James Island"
  ];

  const services = [
    "Fine Area Rug Cleaning", 
    "Carpet Cleaning and Care",
    "Upholstery Cleaning", 
    "Floor and Tile Cleaning"
  ];

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Get FREE Estimate", path: "/contact", highlight: true }
  ];

  return (
    <footer className="bg-navy text-ivory py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <div className="bg-white/75 backdrop-blur-sm rounded-lg p-8">
                <img 
                  src="/images/ISLANDS-logo-transaprency.png" 
                  alt="THE ISLANDS Rug Spa Logo - Professional carpet, rug, and upholstery cleaning services in Charleston and Lowcountry South Carolina"
                  className="h-24 object-contain"
                />
              </div>
            </Link>
            
            <p className="text-ivory/70 mb-6 font-sans">
              Owner-operated, IICRC-certified specialists providing expert care for the Charleston and Lowcountry's finest homes.
            </p>
            
            <p className="text-ivory/80 mb-4 font-sans">
              Satisfaction Guarantee.
            </p>
            
            <p className="text-ivory/70 mb-6 font-sans">
              Licensed, insured throughout Charleston/Lowcountry.
            </p>
            
            {/* Trust Badges in Company Section */}
            <div className="flex justify-between gap-2 mb-6">
              {/* IICRC Certified Badge */}
              <div className="w-12 h-12 bg-ivory rounded-full flex items-center justify-center">
                <Shield className="text-navy" size={20} />
              </div>

              {/* Licensed and Insured Badge */}
              <div className="w-12 h-12 bg-ivory rounded-full flex items-center justify-center">
                <Star className="text-navy" size={20} />
              </div>

              {/* Satisfaction Guarantee Badge */}
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <svg className="text-navy" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>

              {/* Years Experience Badge */}
              <div className="w-12 h-12 bg-ivory rounded-full flex items-center justify-center">
                <span className="text-navy font-bold text-xs">15+</span>
              </div>

              {/* Green Seal Certified Badge */}
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <svg className="text-white" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L8 8H2l6 6-6 6h6l4 6 4-6h6l-6-6 6-6h-6z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Phone className="text-gold mt-1" size={16} />
                <div className="font-sans">
                  <button 
                    onClick={handleCallClick}
                    className="font-semibold hover:text-gold transition-colors cursor-pointer"
                  >
                    843-437-8921
                  </button>
                  <p className="text-ivory/70 text-sm">Call for FREE estimate</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <Mail className="text-gold mt-1" size={16} />
                <div className="font-sans">
                  <button 
                    onClick={handleEmailClick}
                    className="font-semibold hover:text-gold transition-colors cursor-pointer"
                  >
                    info@theislandsrugspa.com
                  </button>
                  <p className="text-ivory/70 text-sm">Email us anytime</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <MapPin className="text-gold mt-1" size={16} />
                <div className="font-sans">
                  <p className="text-ivory/70 text-sm">Locally-operated from</p>
                  <p className="font-semibold">Johns Island, SC 29455</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Clock className="text-gold mt-1" size={16} />
                <div className="font-sans">
                  <p>Monday - Saturday</p>
                  <p>8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services" 
                    className="text-ivory/70 hover:text-ivory transition-colors text-left font-sans text-sm block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-serif font-semibold text-lg mb-4 mt-8">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className={`font-sans text-sm block transition-colors ${
                      link.highlight 
                        ? 'text-gold hover:text-gold/90 font-semibold' 
                        : 'text-ivory/70 hover:text-ivory'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Service Areas — Greater Charleston and Lowcountry</h4>
            <ul className="space-y-1">
              {serviceAreas.slice(2).map((area, index) => (
                <li key={index} className="text-ivory/70 font-sans text-sm">{area}</li>
              ))}
            </ul>

            {/* CTA Box */}
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 mt-6">
              <h5 className="font-serif font-semibold text-gold mb-2">Ready to Get Started?</h5>
              <p className="text-ivory/80 font-sans text-sm mb-3">
                Call today for your FREE estimate and experience <strong>THE ISLANDS Rug Spa</strong> difference.
              </p>
              <button 
                onClick={openPopup}
                className="inline-block bg-gold text-navy px-4 py-2 rounded font-semibold font-sans text-sm hover:bg-gold/90 transition-colors cursor-pointer"
              >
                Get FREE Estimate
              </button>
            </div>
          </div>
        </div>

        {/* Satisfaction Guarantee and Service Disclaimer */}
        <div className="bg-ivory/5 rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h5 className="font-serif font-semibold text-gold mb-2">Satisfaction Guarantee:</h5>
              <p className="text-ivory/80 font-sans">
                We stand behind our work with a customer satisfaction guarantee. If you're not completely pleased with the cleaning results, within 7 days of service, we'll redo the cleaning at no additional cost - no questions asked. If any <em>normally removable</em> spots return within 7 days of cleaning, we'll come back out and re-clean them at no charge.
              </p>
            </div>
            <div>
              <h5 className="font-serif font-semibold text-gold mb-2">Service Disclaimer:</h5>
              <p className="text-ivory/80 font-sans">
                We cannot guarantee removal of all stains - especially those that are long-standing or ones that have been caused by active chemical agents.
              </p>
              <p className="text-ivory/80 font-sans mt-2">
                Please notify us prior to service if you know or believe your items to be serviced are damaged.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/20 pt-8 text-center">
          <p className="text-ivory/70 font-sans">
            © 2025, THE ISLANDS RUG SPA, All rights reserved | <Link to="/privacy" className="underline">Privacy Policy</Link> | <Link to="/terms" className="underline">Terms of Use</Link>
          </p>
        </div>
      </div>

      <EstimatePopup isOpen={isPopupOpen} onClose={closePopup} />
    </footer>
  );
};

export default Footer;