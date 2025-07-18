import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, Waves, Mail, MapPin, Shield, Star } from 'lucide-react';

const Footer = () => {
  const serviceAreas = [
    "Seabrook Island", "Kiawah Island", "Johns Island", "Shell Point", 
    "Charleston", "Mount Pleasant", "Summerville", "Daniel Island"
  ];

  const services = [
    "Luxury & Area Rug Cleaning", 
    "Upholstery Cleaning", 
    "Carpet Cleaning & Care"
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
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <Waves className="text-navy" size={20} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">The Islands</h3>
                <p className="text-sm text-ivory/70 font-sans">Rug & Upholstery Spa</p>
              </div>
            </Link>
            <p className="text-ivory/70 mb-6 font-sans">
              Family-owned IICRC-certified specialists providing expert textile care for the Lowcountry's finest homes.
            </p>
            
            {/* Trust Signals */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="text-gold" size={16} />
                <span className="font-sans">100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Star className="text-gold" size={16} />
                <span className="font-sans">IICRC-Certified Technicians</span>
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
                  <p className="font-semibold">843-437-8921</p>
                  <p className="text-ivory/70 text-sm">Call for FREE estimate</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <Mail className="text-gold mt-1" size={16} />
                <div className="font-sans">
                  <p className="font-semibold">info@theislandsrugspa.com</p>
                  <p className="text-ivory/70 text-sm">Email us anytime</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <MapPin className="text-gold mt-1" size={16} />
                <div className="font-sans">
                  <p className="font-semibold">2860 Maybank Highway</p>
                  <p>STE 181</p>
                  <p>Johns Island, SC 29455</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Clock className="text-gold mt-1" size={16} />
                <div className="font-sans">
                  <p>Monday - Friday</p>
                  <p>9:00 AM - 5:00 PM</p>
                  <p className="text-ivory/70 text-sm">Same-day service available</p>
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
            <h4 className="font-serif font-semibold text-lg mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area, index) => (
                <li key={index} className="text-ivory/70 font-sans text-sm">{area}</li>
              ))}
            </ul>

            {/* CTA Box */}
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 mt-6">
              <h5 className="font-serif font-semibold text-gold mb-2">Ready to Get Started?</h5>
              <p className="text-ivory/80 font-sans text-sm mb-3">
                Call today for your FREE estimate and experience the Islands difference.
              </p>
              <Link 
                to="/contact"
                className="inline-block bg-gold text-navy px-4 py-2 rounded font-semibold font-sans text-sm hover:bg-gold/90 transition-colors"
              >
                Get FREE Estimate
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/20 mt-12 pt-8 text-center">
          <p className="text-ivory/70 font-sans">
            © 2024 The Islands Rug & Upholstery Spa. All rights reserved.
          </p>
          <p className="text-ivory/50 text-sm mt-2 font-sans italic">
            "Where Elegance Meets Expert Care"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;