import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Shield, Star, Users, Award, CheckCircle, Settings, AlertCircle } from 'lucide-react';
import EstimatePopup from '../ui/EstimatePopup';

const CTASection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleCallClick = () => {
    window.location.href = 'tel:843-437-8921';
  };

  const handleBookingClick = () => {
    if (window.HCPWidget) {
      window.HCPWidget.openModal();
    }
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
                <h3 className="text-2xl font-serif font-semibold text-navy mb-2">Book Your Appointment</h3>
                <p className="text-navy/70 font-sans text-sm mb-6">Schedule your service and receive your personalized estimate</p>

                {/* Important Notice */}
                <div className="mb-6 p-4 bg-gold/10 border-l-4 border-gold rounded-r-lg">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="text-gold flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-navy font-semibold font-sans text-sm mb-1">Important Notice</p>
                      <p className="text-navy/70 font-sans text-sm">
                        Pricing and appointment times are estimates and subject to physical evaluation and scheduling availability.
                        Final pricing will be confirmed after we assess your specific cleaning needs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* HouseCall Pro Booking Button */}
                <button
                  data-token="1159d6a5fcbd41b6bcb97c533b6d0924"
                  data-orgname="The-Islands-Rug-Spa"
                  className="w-full bg-gold text-navy py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors font-sans mb-4 hcp-button"
                  onClick={handleBookingClick}
                >
                  Book Your Appointment Online
                </button>

                {/* Alternative Contact Methods */}
                <div className="pt-6 border-t border-navy/10">
                  <p className="text-navy/70 font-sans text-sm text-center mb-4">Prefer to speak with us directly?</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={handleCallClick}
                      className="flex items-center justify-center space-x-2 p-3 bg-navy/5 rounded-lg hover:bg-navy/10 transition-colors"
                    >
                      <Phone className="text-gold" size={18} />
                      <span className="text-navy font-sans text-sm font-semibold">Call Now</span>
                    </button>
                    <a
                      href="mailto:info@theislandsrugspa.com"
                      className="flex items-center justify-center space-x-2 p-3 bg-navy/5 rounded-lg hover:bg-navy/10 transition-colors"
                    >
                      <Mail className="text-gold" size={18} />
                      <span className="text-navy font-sans text-sm font-semibold">Email Us</span>
                    </a>
                  </div>
                </div>

                {/* Service Highlights */}
                <div className="mt-6 pt-6 border-t border-navy/10">
                  <div className="grid grid-cols-2 gap-3 text-xs text-navy/60 font-sans">
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="text-gold" size={14} />
                      <span>Free Estimates</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="text-gold" size={14} />
                      <span>Same-Day Response</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="text-gold" size={14} />
                      <span>Flexible Scheduling</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="text-gold" size={14} />
                      <span>Licensed & Insured</span>
                    </div>
                  </div>
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
