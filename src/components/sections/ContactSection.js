import React from 'react';
import { MapPin, Clock, Phone, Mail, Shield, Star } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-seafoam/10 to-ivory">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-navy mb-6">
              Ready to Restore Your Textiles?
            </h2>
            <p className="text-xl text-navy/70 mb-8 font-sans">
              Your carpets and upholstery deserve expert care. Let our IICRC-certified specialists show you what professional textile restoration can do for your home.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <MapPin className="text-gold" size={24} />
                <span className="text-navy font-sans">Serving Charleston Lowcountry: Seabrook, Kiawah, Johns Island</span>
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
                <span className="text-navy font-sans">Monday - Friday: 9:00 AM - 5:00 PM</span>
              </div>
            </div>

            <div className="bg-navy/5 border-l-4 border-gold p-4 mb-8 rounded-r-lg">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Shield className="text-gold" size={16} />
                  <span className="text-navy font-semibold">100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="text-gold" size={16} />
                  <span className="text-navy font-semibold">Same-day service available</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gold text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors font-sans">
                Get FREE Estimate
              </button>
              <button className="border-2 border-navy text-navy px-8 py-4 rounded-lg font-semibold hover:bg-navy hover:text-ivory transition-colors font-sans">
                Call Now: 843-437-8921
              </button>
            </div>
            
            <div className="mt-6 text-sm text-navy/60 font-sans">
              <p>Family-owned and operated • IICRC-certified technicians • Eco-friendly solutions</p>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gold/20">
              <h3 className="text-2xl font-serif font-semibold text-navy mb-2">Get Your FREE Estimate</h3>
              <p className="text-navy/70 font-sans text-sm mb-6">Tell us about your needs and we'll provide a detailed quote</p>
              
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
                    <option>Select Service Needed</option>
                    <option>Luxury & Area Rug Cleaning</option>
                    <option>Upholstery Cleaning</option>
                    <option>Carpet Cleaning & Care</option>
                    <option>Multiple Services</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    placeholder="Describe your carpets, rugs, or upholstery that need attention..."
                    rows="4"
                    className="w-full p-4 border border-navy/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none resize-none font-sans"
                  />
                </div>
                <button className="w-full bg-gold text-navy py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors font-sans">
                  Get My FREE Estimate
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