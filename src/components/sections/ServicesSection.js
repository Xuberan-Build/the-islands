import React from 'react';
import { CheckCircle, Home, Crown, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Heirloom Area Rug Care",
      description: "Expert preservation of Persian, Oriental, and luxury area rugs. Our coastal-sensitive techniques protect against salt-air damage while maintaining fiber integrity.",
      icon: Home,
      features: ["Hand-knotted rug expertise", "Salt-air protection", "Fiber preservation", "White-glove pickup & delivery"]
    },
    {
      title: "Fine Upholstery Restoration",
      description: "Meticulous care for luxury furniture, antiques, and designer pieces. We understand the delicate nature of coastal living and marine-influenced wear.",
      icon: Crown,
      features: ["Designer fabric expertise", "Marine-wear mitigation", "Stain protection", "Coastal humidity solutions"]
    },
    {
      title: "Coastal Carpet Preservation",
      description: "Advanced cleaning technology tailored for Lowcountry conditions. Fast drying and exceptional results that protect your investment from seasonal wear.",
      icon: Shield,
      features: ["Quick 1-2 hour drying", "Salt-season care", "Eco-friendly solutions", "Heritage preservation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">Our Coastal Specialties</h2>
          <p className="text-xl text-navy/70 max-w-3xl mx-auto font-sans">
            Three specialized services, executed with unmatched expertise for Charleston Lowcountry living
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
                <h3 className="text-xl font-serif font-semibold text-navy mb-4 text-center">{service.title}</h3>
                <p className="text-navy/70 mb-6 text-center font-sans">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="text-gold flex-shrink-0" size={16} />
                      <span className="text-sm text-navy/70 font-sans">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full text-navy font-semibold hover:text-ivory transition-colors border border-navy py-3 rounded-lg hover:bg-navy font-sans">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
