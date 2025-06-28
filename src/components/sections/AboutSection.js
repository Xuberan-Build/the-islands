import React from 'react';
import { Award, Star } from 'lucide-react';

const AboutSection = () => {
  const benefits = [
    {
      title: "Coastal Expertise",
      description: "Technical mastery of delicate fabrics and marine-influenced wear patterns unique to Lowcountry living."
    },
    {
      title: "White-Glove Discretion",
      description: "Seamless service aligned with high-end lifestyles and luxury property management requirements."
    },
    {
      title: "Heirloom Preservation",
      description: "We use only the finest, safest cleaning solutions designed specifically for luxury textiles and heritage pieces."
    },
    {
      title: "Concierge Partnership",
      description: "Trusted by Kiawah House Care, Above & Beyond, and Charleston's premier property management firms."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-seafoam/10 to-ivory">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-navy mb-6">
              Why The Islands Sets the Coastal Standard
            </h2>
            <p className="text-xl text-navy/70 mb-8 font-sans">
              When you own beautiful things in the Lowcountry, you need specialists who understand salt air, seasonal humidity, and the unique challenges of coastal living. We're craftspeople dedicated to preserving what matters most.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-navy mb-2">{benefit.title}</h3>
                    <p className="text-navy/70 font-sans">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-sandstone/30 via-ivory to-seafoam/30 rounded-3xl shadow-xl flex items-center justify-center relative overflow-hidden border border-gold/20">
                <div className="absolute inset-0 bg-gradient-to-t from-navy/10 to-transparent"></div>
                <div className="absolute top-8 left-8 w-6 h-6 bg-gold rounded-full opacity-80"></div>
                <div className="absolute bottom-12 right-12 w-8 h-8 bg-navy rounded-full opacity-60"></div>
                <div className="absolute top-1/4 right-8 w-4 h-4 bg-seafoam rounded-full opacity-70"></div>
                
                <div className="relative z-10 text-center">
                  <Star className="text-gold mx-auto mb-4" size={48} />
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

export default AboutSection;
