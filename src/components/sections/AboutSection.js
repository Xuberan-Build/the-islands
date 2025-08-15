import React from 'react';
import { Droplets, Home, Sparkles, Heart } from 'lucide-react';

const AboutSection = () => {
  const spaFeatures = [
    {
      title: "SPA Treatment Philosophy",
      description: "Our \"spa treatment\" approach deeply cleans, revitalizes, and protects your carpets, rugs, upholstery and floors—making them look and feel refreshed while extending their lifespan.",
      icon: Sparkles
    },
    {
      title: "Health Through Water", 
      description: "Drawing from the ancient wellness tradition of \"sanitas per aquas\" (health through waters), we use state-of-the-art equipment and eco-friendly solutions for transformative results.",
      icon: Droplets
    },
    {
      title: "Treat Your Home Like Our Own",
      description: "You can have peace of mind knowing our professionals will treat and clean your home with the same care and attention we'd give our own family's treasures.",
      icon: Home
    },
    {
      title: "Deep Restoration and Protection",
      description: "Our experience and attention to detail removes deep-seated dirt, stains, and allergens—leaving your home refreshed and rejuvenated with enhanced overall beauty.",
      icon: Heart
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-seafoam/10 to-ivory">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-navy mb-6">
              Give Your Home the SPA Treatment
            </h2>
            <p className="text-xl text-navy/70 mb-8 font-sans">
              THE ISLANDS RUG SPA provides an escape from the drudgery and work of cleaning your home's furnishings. Discover the transformative spa treatment your home deserves.
            </p>
            
            <div className="space-y-6">
              {spaFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-gold" size={20} />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-navy mb-2">{feature.title}</h3>
                      <p className="text-navy/70 font-sans">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 bg-navy/5 border-l-4 border-gold p-6 rounded-r-lg">
              <p className="text-navy font-semibold font-sans mb-2">
                "We use our experience, attention to detail, state-of-the-art equipment, and eco-friendly solutions to remove deep-seated dirt, stains, and allergens."
              </p>
              <p className="text-navy/70 font-sans italic">
                Satisfaction guaranteed. Your home will be refreshed and rejuvenated with our transformative cleaning expertise.
              </p>
            </div>
          </div>
          
          <div>
            <div className="relative">
              <div className="w-full h-[500px] rounded-3xl shadow-xl overflow-hidden border border-gold/20">
                <img 
                  src="/images/Healing-waters.png" 
                  alt="Healing therapeutic waters representing The Islands Rug Spa's sanitas per aquas wellness tradition for professional carpet, rug, and upholstery cleaning in Charleston and Lowcountry South Carolina"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
                
                <div className="absolute top-6 left-6 right-6 text-center">
                  <div className="bg-transparent rounded-lg p-4">
                    <Droplets className="text-gold mx-auto mb-2" size={32} />
                    <p className="text-white font-serif font-semibold text-lg drop-shadow-lg">SPA Treatment Excellence</p>
                    <p className="text-white/90 font-sans text-sm mt-1 drop-shadow-md">Health through water • Sanitas per aquas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;