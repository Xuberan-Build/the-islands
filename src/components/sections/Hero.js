import React, { useState } from 'react';
import { Anchor, Shield, Star } from 'lucide-react';
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
      <section id="home" className="relative bg-gradient-to-br from-ivory to-seafoam/20 py-16 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-navy mb-4 leading-tight">
                THE ISLANDS <span className="text-navy">RUG SPA</span>
              </h1>
              
              <h2 className="text-xl lg:text-2xl font-serif text-navy/80 mb-5 italic">
                Give your home the spa treatment
              </h2>
              
              <div className="text-lg text-navy/80 mb-5 leading-relaxed font-sans">
                <p className="mb-2">
                  Your rugs, carpets and upholstery are significant investments. But, over time they harbor hidden contaminants like dirt, dust mites, mold, and bacteria.
                </p>
                <p className="mb-3">
                  <strong>That's where THE ISLANDS RUG SPA comes in.</strong> Let us refresh the comfort, coziness and beauty of your home's furnishings. We are owner-operated, experienced IICRC-certified specialists - professional, service minded and committed to excellence.
                </p>
                <p className="text-base font-semibold text-navy">
                  <strong>Premier Rug, Carpet and Upholstery Cleaning Services – experts at refreshing the beauty, comfort, and cleanliness of your home spaces you love most.</strong>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <button 
                  onClick={openPopup}
                  className="bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors text-base font-sans shadow-lg"
                >
                  Get FREE Estimate Today
                </button>
                <button 
                  onClick={handleCallClick}
                  className="border-2 border-navy text-navy px-6 py-3 rounded-lg font-semibold hover:bg-navy hover:text-ivory transition-colors text-base font-sans"
                >
                  Call: 843-437-8921
                </button>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-navy/70 font-sans mb-3">
                <div className="flex items-center space-x-1">
                  <Star className="text-gold" size={14} />
                  <span>Local, Owner Operated</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="text-gold" size={14} />
                  <span>Satisfaction Guaranteed</span>
                </div>
              </div>
              
             <div className="sr-only text-sm text-navy/60 font-sans">
                <p>Serving Seabrook Island • Kiawah Island • Johns Island • Charleston</p>
            </div>
            </div>
            
            <div className="lg:text-right">
              <div className="relative">
                <div className="w-full max-w-md mx-auto h-80 rounded-3xl shadow-2xl overflow-hidden border border-gold/20 relative">
                  <img 
                    src="/images/living-room.png" 
                    alt="Beautiful neutral sectional sofa with decorative pillows and ottoman in elegant Charleston home living room showcasing professional upholstery and carpet cleaning services by The Islands Rug Spa"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
                  
                  <div className="absolute top-6 left-6 right-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-center">
                        <Anchor className="text-grey mx-auto mb-2 drop-shadow-lg" size={32} />
                        <p className="text-grey font-serif font-semibold text-base drop-shadow-lg">Premier Care</p>
                        <p className="text-grey/90 font-sans text-sm mt-1 drop-shadow-md">Trusted by 500+ Lowcountry families</p>
                      </div>
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

export default Hero;