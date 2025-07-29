import React, { useState } from 'react';
import { CheckCircle, Home, Crown, Shield, Layers, Users, Award, Leaf, Zap } from 'lucide-react';
import EstimatePopup from '../ui/EstimatePopup';

const ServicesSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openPopup = (serviceName) => {
    setSelectedService(serviceName);
    setIsPopupOpen(true);
  };
  
  const closePopup = () => setIsPopupOpen(false);
  const services = [
    {
      title: "Luxury & Area Rug Cleaning",
      subtitle: "Protect and Rejuvenate Your Rugs with THE ISLANDS Rug Spa Care",
      description: "Your Persian, Oriental, and specialty rugs are more than floor coverings—they're valuable investments and treasured art pieces. Give them the spa treatment they deserve.",
      icon: Home,
      benefits: [
        "Remove allergens, bacteria & dust mites",
        "Eliminate odors and mustiness",
        "Lift tough stains without damaging fibers",
        "Restore softness and vibrant colors",
        "Extend rug life and preserve value"
      ],
      cta: "Schedule Rug Cleaning Consultation",
      highlight: "Fine area rug cleaning process meticulously is uniquely designed to safely clean and protect delicate fibers"
    },
    {
      title: "Carpet Cleaning & Care",
      subtitle: "Essential Care for Your Home's Investments",
      description: "Regular professional cleaning isn't just about appearance—it's essential for extending carpet life, protecting indoor air quality, and preserving your significant home's investment for style and comfort.",
      icon: Shield,
      benefits: [
        "Advanced eco-friendly cleaning methods",
        "Safe for family and pets always",
        "Tough on dirt, gentle on fibers", 
        "Fast drying, exceptional results",
        "Protects your carpets investment"
      ],
      cta: "Schedule a Carpet Cleaning",
      highlight: "We'll have your carpets looking and feeling fresh again"
    },
    {
      title: "Upholstery Cleaning", 
      subtitle: "Restore the Beauty. Renew the Comfort.",
      description: "Your upholstered furniture is where life happens—cozy evenings, memorable gatherings. Over time, it collects dust, body oils, allergens, and spills that dull its beauty and affect air quality.",
      icon: Crown,
      benefits: [
        "Skilled Stain Removal with precision and care",
        "Odor Removal Expertise for fresh, clean furniture", 
        "Longevity for Your Furniture - improves appearance and integrity",
        "Affordable Services without sacrificing quality",
        "Love Your Furniture Again - results that look and feel like new"
      ],
      cta: "Get Upholstery Cleaning Quote",
      highlight: "We clean and treat every piece as if it were our own — delivering results that look and feel like new"
    },
    {
      title: "Floor and Tile Cleaning",
      subtitle: "Revitalize Your Floor and Tiles Beauty and Shine",
      description: "We take much pride in offering an exceptional floor and tile cleaning service that goes beyond the surface to restore your flooring's original beauty. Our honed process ensures your floors and tiles are thoroughly cleaned, leaving them refreshed.",
      icon: Layers,
      benefits: [
        "Superior service that makes your home look and feel as good as new",
        "Restores original beauty and luster to dingy floors",
        "Expert cleaning for coastal South Carolina homes",
        "Fresh, clean, and vibrant home environment",
        "THE ISLANDS Rug Spa Sets the Coastal Cleaning Standard"
      ],
      cta: "Schedule Floor & Tile Service",
      highlight: "Treat your dirty and dingy floors and tiles to THE ISLANDS Rug Spa facelift!"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">Premier Rug, Carpet and Upholstery Cleaning Services</h2>
          <p className="text-xl text-navy/70 max-w-3xl mx-auto font-sans">
            experts at refreshing the beauty, comfort, and cleanliness of your home spaces you love most.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-ivory p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border-t-4 border-gold group flex flex-col h-full">{/* Added flex flex-col h-full for alignment */}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-seafoam/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-navy transition-colors">
                    <IconComponent className="text-navy group-hover:text-ivory transition-colors" size={32} />
                  </div>
                </div>

                <h3 className="text-xl font-serif font-semibold text-navy mb-2 text-center">{service.title}</h3>
                <h4 className="text-sm font-sans font-semibold text-gold mb-4 text-center">{service.subtitle}</h4>
                <p className="text-navy/70 mb-6 text-center font-sans text-sm">{service.description}</p>
                
                <div className="bg-seafoam/10 p-4 rounded-lg mb-6">
                  <p className="text-navy/80 font-sans text-sm italic text-center">
                    ✨ {service.highlight}
                  </p>
                </div>

                <div className="space-y-3 mb-6 flex-grow">{/* Added flex-grow to push button to bottom */}
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="text-gold flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-navy/70 font-sans">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => openPopup(service.title)}
                  className="w-full bg-gold text-navy font-semibold py-4 px-4 rounded-lg hover:bg-gold/90 transition-colors font-sans flex items-center justify-center mt-auto h-16"
                >
                  <span className="text-center leading-tight">{service.cta}</span>
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-navy/5 border border-gold/20 rounded-xl p-8 max-w-6xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-navy mb-4">Why Choose THE ISLANDS Rug Spa For Your Cleaning Needs?</h3>
            <div className="mb-8">
              <p className="text-navy font-semibold font-sans text-lg mb-2">
                "We take pride in treating your home and furnishings like our own, delivering hands-on service with the highest standards of care, professionalism, and integrity from start to finish."
              </p>
              <p className="text-navy/70 font-sans italic">
                It's more than a job —we're cleaning services craftspeople who stand behind every fiber we clean.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-gold" size={32} />
                </div>
                <h4 className="text-gold text-xl font-bold mb-3">Customer-Centric Approach</h4>
                <p className="text-navy/70 font-sans text-sm">
                  Our commitment to client satisfaction is the very core of all we do. We understand the challenges of maintaining clean carpets, rugs and upholstery, especially in Charleston and Lowcountry.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                  <Award className="text-gold" size={32} />
                </div>
                <h4 className="text-gold text-xl font-bold mb-3">Comprehensive Cleaning Solutions</h4>
                <p className="text-navy/70 font-sans text-sm">
                  Through decades of experience, we have perfected a wide range of professional cleaning services. From rugs, carpets and upholstery to drapery and commercial spaces, we handle it all. Our meticulous care and eco-friendly approach ensure every job is completed to perfection.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="text-gold" size={32} />
                </div>
                <h4 className="text-gold text-xl font-bold mb-3">Eco-Friendly Cleaning</h4>
                <p className="text-navy/70 font-sans text-sm">
                  We take our responsibility seriously for the environment. Our regular cleaning services are 100% organic, non-toxic, and hypoallergenic, prioritizing the health of your family, pets, and the planet. Our commitment to eco-friendly cleaning methods reflects our dedication to a healthier and safer environment.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                  <Zap className="text-gold" size={32} />
                </div>
                <h4 className="text-gold text-xl font-bold mb-3">Superior Stain Removal</h4>
                <p className="text-navy/70 font-sans text-sm">
                  Stubborn stains are no match for our expert stain removal service. We use industry knowledge and innovative techniques to tackle even the toughest spots, revitalizing your furniture and living spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EstimatePopup isOpen={isPopupOpen} onClose={closePopup} selectedService={selectedService} />
    </section>
  );
};

export default ServicesSection;