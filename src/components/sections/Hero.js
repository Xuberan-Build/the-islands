import React from 'react';
import { Crown, Anchor } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-ivory to-seafoam/20 py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Crown className="text-gold" size={24} />
              <span className="text-navy font-semibold tracking-wide font-sans">WHITE-GLOVE SPECIALISTS</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-navy mb-6 leading-tight">
              Charleston <span className="text-gold">Luxury</span> Textile Care Specialists
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-serif text-navy/80 mb-6 italic">
              "Harboring Elegance, One Fiber at a Time"
            </h2>
            
            <p className="text-xl text-navy/80 mb-8 leading-relaxed font-sans">
              Premium rug cleaning, upholstery restoration, and carpet care for Kiawah Island, Seabrook Island, and Johns Island. Expert preservation of heirloom textiles under salt-air conditions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gold text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors text-lg font-sans">
                Schedule Inspection
              </button>
              <button className="border-2 border-navy text-navy px-8 py-4 rounded-lg font-semibold hover:bg-navy hover:text-ivory transition-colors text-lg font-sans">
                Call: 843-555-0100
              </button>
            </div>
            
            <div className="mt-8 text-sm text-navy/60 font-sans">
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
                  <p className="text-navy font-serif font-semibold text-lg">Coastal Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
