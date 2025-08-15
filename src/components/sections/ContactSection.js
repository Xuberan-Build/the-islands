import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Shield, Star, Users, Award, CheckCircle, Settings } from 'lucide-react';
import EstimatePopup from '../ui/EstimatePopup';

const CTASection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleCallClick = () => {
    window.location.href = 'tel:843-437-8921';
  };

  return (
    <>
      <section id="contact" className="py-20 bg-gradient-to-br from-seafoam/10 to-ivory">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-navy mb-6">
                Ready to Refresh Your Home?
              </h2>
              <p className="text-xl text-navy/70 mb-8 font-sans">
                Your rugs, carpets and upholstery deserve expert, spa treatment-like care. 
                Choosing THE ISLANDS RUG SPA means you're investing in peace of mind, comfort, and better-quality results from a professional cleaning service focused on quality, reliability, and effective eco-friendly practices.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-gold" size={24} />
                  <span className="text-navy font-sans">Serving Greater Charleston and Lowcountry</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-gold" size={24} />
                  <span className="text-navy font-sans">843-437-8921</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-gold" size={24} />
                  <span className="text-navy font-sans">info@theislandsrugspa.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-gold" size={24} />
                  <span className="text-navy font-sans">Monday - Saturday: 8:00 AM - 6:00 PM</span>
                </div>
              </div>

              <div className="bg-navy/5 border-l-4 border-gold p-4 mb-8 rounded-r-lg">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Shield className="text-gold" size={20} />
                  <span className="text-navy font-semibold font-sans">Satisfaction Guarantee</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button 
                  onClick={openPopup}
                  className="bg-gold text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors font-sans"
                >
                  Get Your FREE Estimate
                </button>
                <button 
                  onClick={handleCallClick}
                  className="border-2 border-navy text-navy px-8 py-4 rounded-lg font-semibold hover:bg-navy hover:text-ivory transition-colors font-sans"
                >
                  Call Now: 843-437-8921
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-sm text-navy/60 font-sans">
                <div className="flex items-center space-x-1">
                  <Shield className="text-gold" size={14} />
                  <span>Satisfaction Guaranteed</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="text-gold" size={14} />
                  <span>Owner operated</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="text-gold" size={14} />
                  <span>IICRC-certified technicians</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="text-gold" size={14} />
                  <span>Eco-friendly solutions</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="text-gold" size={14} />
                  <span>Licensed and insured</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Settings className="text-gold" size={14} />
                  <span>Advanced equipment</span>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gold/20">
                <h3 className="text-2xl font-serif font-semibold text-navy mb-2">Get Your FREE Estimate</h3>
                <p className="text-navy/70 font-sans text-sm mb-6">Tell us about your cleaning needs and we'll provide a detailed quote</p>
                
                <div className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full p-4 border border-navy/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none font-sans"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address"
                      className="w-full p-4 border border-navy/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none font-sans"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number"
                      className="w-full p-4 border border-navy/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none font-sans"
                    />
                  </div>
                  <div>
                    <select className="w-full p-4 border border-navy/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none font-sans">
                      <option>Select Service Needed</option>
                      <option>Luxury & Area Rug Cleaning</option>
                      <option>Upholstery Cleaning</option>
                      <option>Carpet Cleaning & Care</option>
                      <option>Floor and Tile Cleaning</option>
                      <option>Multiple Services</option>
                    </select>
                  </div>
                  <div>
                    <textarea 
                      placeholder="Describe your carpets, rugs, or upholstery that need attention..."
                      rows="4"
                      className="w-full p-4 border border-navy/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none resize-none font-sans"
                    />
                  </div>
                  <button 
                    onClick={openPopup}
                    className="w-full bg-gold text-navy py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors font-sans"
                  >
                    Get My FREE Estimate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EstimatePopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default CTASection;