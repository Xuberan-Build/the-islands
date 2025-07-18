import React, { useState } from 'react';
import { Crown, Anchor, Shield, Star } from 'lucide-react';
import EstimatePopup from '../ui/EstimatePopup';

const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleCallClick = () => {
    window.location.href = 'tel:843-437-8921';
  };

  return (
    <>
      <section id="home" className="relative bg-gradient-to-br from-ivory to-seafoam/20 py-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Crown className="text-gold" size={24} />
                <span className="text-navy font-semibold tracking-wide font-sans">IICRC-CERTIFIED SPECIALISTS</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-navy mb-6 leading-tight">
                The Islands <span className="text-gold">Rug & Upholstery</span> Spa
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-serif text-navy/80 mb-6 italic">
                "Where Elegance Meets Expert Care"
              </h2>
              
              <p className="text-xl text-navy/80 mb-6 leading-relaxed font-sans">
                Your carpets and upholstery are significant investments. Over time, they harbor hidden contaminants like dust mites, mold, and bacteria. Our IICRC-certified technicians use eco-friendly methods that are safe for your family while restoring the natural beauty of your textiles.
              </p>
              
              <div className="bg-seafoam/10 border-l-4 border-gold p-4 mb-8 rounded-r-lg">
                <p className="text-navy font-semibold font-sans mb-1">
                  <span className="text-gold">✓</span> Family-owned & operated - You get the owner, not a random technician
                </p>
                <p className="text-navy/70 font-sans">
                  <span className="text-gold">✓</span> Eco-friendly methods safe for your home and loved ones
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button 
                  onClick={openPopup}
                  className="bg-gold text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors text-lg font-sans shadow-lg"
                >
                  Get FREE Estimate Today
                </button>
                <button 
                  onClick={handleCallClick}
                  className="border-2 border-navy text-navy px-8 py-4 rounded-lg font-semibold hover:bg-navy hover:text-ivory transition-colors text-lg font-sans"
                >
                  Call: 843-437-8921
                </button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-navy/70 font-sans mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="text-gold" size={16} />
                  <span>Same-day service available</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="text-gold" size={16} />
                  <span>100% Satisfaction Guarantee</span>
                </div>
              </div>
              
              <div className="text-sm text-navy/60 font-sans">
                <p>Serving Seabrook Island • Kiawah Island • Johns Island • Shell Point • Charleston</p>
              </div>
            </div>
            
            <div className="lg:text-right">
              <div className="relative">
                <div className="w-full max-w-lg mx-auto h-96 bg-gradient-to-br from-seafoam/30 via-ivory to-sandstone/30 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden border border-gold/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/10 to-transparent"></div>
                  <div className="absolute top-6 left-6 w-8 h-8 bg-gold rounded-full opacity-80"></div>
                  <div className="absolute bottom-8 right-8 w-6 h-6 bg-navy rounded-full opacity-60"></div>
                  <div className="absolute top-1/3 right-6 w-4 h-4 bg-seafoam rounded-full opacity-70"></div>
                  
                  <div className="relative z-10 text-center">
                    <Anchor className="text-navy mx-auto mb-4" size={48} />
                    <p className="text-navy font-serif font-semibold text-lg">Premier Textile Care</p>
                    <p className="text-navy/70 font-sans text-sm mt-2">Trusted by 500+ Lowcountry families</p>
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

export default Hero;