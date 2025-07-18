import React from 'react';
import { CheckCircle, Home, Crown, Shield, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Luxury & Area Rug Cleaning",
      subtitle: "Protect and Rejuvenate Your Rugs with  Care",
      description: "Your Persian, Oriental, and specialty rugs are more than floor coverings—they're valuable investments and treasured art pieces. Give them the spa treatment they deserve.",
      icon: Home,
      benefits: [
        "Remove allergens, bacteria & dust mites",
        "Eliminate odors and mustiness completely", 
        "Lift tough stains without damaging fibers",
        "Restore softness and vibrant colors",
        "Extend rug life and preserve value"
      ],
      cta: "Schedule Rug Consultation",
      highlight: "Fine rug cleaning process meticulously designed to protect delicate fibers"
    },
    {
      title: "Upholstery Cleaning", 
      subtitle: "Restore the Beauty. Renew the Comfort.",
      description: "Your upholstered furniture is where life happens—cozy evenings, memorable gatherings. Over time, it collects dust, body oils, allergens, and spills that dull its beauty and affect air quality.",
      icon: Crown,
      benefits: [
        "Deep clean all fabric types safely",
        "Remove embedded dirt and allergens", 
        "Eliminate trapped odors completely",
        "Preserve texture, color, and integrity",
        "Extend furniture life significantly"
      ],
      cta: "Get Upholstery Quote",
      highlight: "IICRC-certified specialists using fabric-safe, eco-friendly methods"
    },
    {
      title: "Carpet Cleaning & Care",
      subtitle: "Essential Maintenance for Your Investment",
      description: "Regular professional cleaning isn't just about appearance—it's essential for extending carpet life, protecting indoor air quality, and preserving your significant investment.",
      icon: Shield,
      benefits: [
        "Advanced eco-friendly cleaning methods",
        "Safe for family and pets always",
        "Tough on dirt, gentle on fibers", 
        "Fast drying, exceptional results",
        "Protects your carpet investment"
      ],
      cta: "Book Carpet Service",
      highlight: "We'll have your carpets looking and feeling fresh again"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">Premier Rug and Upholstery Care Services</h2>
          <p className="text-xl text-navy/70 max-w-3xl mx-auto font-sans">
            Expert care delivered by trained IICRC-certified technicians—professional, service-minded, and committed to excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-ivory p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border-t-4 border-gold group">
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

                <div className="space-y-3 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="text-gold flex-shrink-0" size={16} />
                      <span className="text-sm text-navy/70 font-sans">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gold text-navy font-semibold py-3 rounded-lg hover:bg-gold/90 transition-colors font-sans flex items-center justify-center space-x-2">
                  <span>{service.cta}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-navy/5 border border-gold/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-navy mb-4">Why Choose The Islands Rug Spa?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-gold text-3xl font-bold mb-2">100%</div>
                <p className="text-navy/70 font-sans">Satisfaction Guarantee</p>
              </div>
              <div>
                <div className="text-gold text-3xl font-bold mb-2">5+</div>
                <p className="text-navy/70 font-sans">Years in operation</p>
              </div>
              <div>
                <div className="text-gold text-3xl font-bold mb-2">24hr</div>
                <p className="text-navy/70 font-sans">Response Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;