import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, Waves } from 'lucide-react';

const Footer = () => {
  const serviceAreas = [
    "Seabrook Island", "Kiawah Island", "Johns Island", "Shell Point", 
    "Charleston", "Mount Pleasant", "Summerville", "Daniel Island"
  ];

  const services = [
    "Heirloom Area Rug Care", 
    "Fine Upholstery Restoration", 
    "Coastal Carpet Preservation"
  ];

  const partners = [
    "Kiawah House Care",
    "Above & Beyond Property Services", 
    "Seabrook Concierge"
  ];

  return (
    <footer className="bg-navy text-ivory py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <Waves className="text-navy" size={20} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">The Islands</h3>
                <p className="text-sm text-ivory/70 font-sans">Coastal Textile Care</p>
              </div>
            </Link>
            <p className="text-ivory/70 mb-4 font-sans">
              White-glove textile care specialists preserving heirloom-quality pieces under the Lowcountry's unique coastal conditions.
            </p>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span className="font-semibold font-sans">843-555-0100</span>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Our Specialties</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button className="text-ivory/70 hover:text-ivory transition-colors text-left font-sans text-sm">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area, index) => (
                <li key={index} className="text-ivory/70 font-sans text-sm">{area}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Trusted Partners</h4>
            <ul className="space-y-2 mb-6">
              {partners.map((partner, index) => (
                <li key={index} className="text-ivory/70 font-sans text-sm">{partner}</li>
              ))}
            </ul>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <div className="font-sans text-sm">
                  <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                  <p className="text-ivory/70">By Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/20 mt-12 pt-8 text-center">
          <p className="text-ivory/70 font-sans">
            © 2024 The Islands Coastal Textile Care. All rights reserved.
          </p>
          <p className="text-ivory/50 text-sm mt-2 font-sans italic">
            "Harboring Elegance, One Fiber at a Time"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
