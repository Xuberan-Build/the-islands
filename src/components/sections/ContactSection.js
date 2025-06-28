import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-seafoam/10 to-ivory">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-navy mb-6">
              Experience The Islands Difference
            </h2>
            <p className="text-xl text-navy/70 mb-8 font-sans">
              Your heirloom textiles deserve the finest coastal care. Let our specialists show you what true white-glove service looks like in the Lowcountry.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <MapPin className="text-gold" size={24} />
                <span className="text-navy font-sans">Serving Charleston Lowcountry: Seabrook, Kiawah, Johns Island</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-gold" size={24} />
                <span className="text-navy font-sans">Monday - Friday: 9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-gold" size={24} />
                <span className="text-navy font-sans">843-555-0100</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gold text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors font-sans">
                Schedule Inspection
              </button>
              <button className="border-2 border-navy text-navy px-8 py-4 rounded-lg font-semibold hover:bg-navy hover:text-ivory transition-colors font-sans">
                Call Now
              </button>
            </div>
            
            <div className="mt-8 text-sm text-navy/60 font-sans">
              <p>Trusted partners: Kiawah House Care • Above & Beyond Property Services</p>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gold/20">
              <h3 className="text-2xl font-serif font-semibold text-navy mb-6">Request an Inspection</h3>
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
                    <option>Select Service</option>
                    <option>Heirloom Area Rug Care</option>
                    <option>Fine Upholstery Restoration</option>
                    <option>Coastal Carpet Preservation</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    placeholder="Tell us about your textile care needs"
                    rows="4"
                    className="w-full p-4 border border-navy/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none resize-none font-sans"
                  />
                </div>
                <button className="w-full bg-gold text-navy py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors font-sans">
                  Request Inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
