import React, { useState } from 'react';
import { X, Phone, Mail, Shield, Star } from 'lucide-react';

const EstimatePopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add email sending logic or API call here
    alert('Thank you! We\'ll contact you within 24 hours with your FREE estimate.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-navy to-seafoam text-white p-6 rounded-t-2xl relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
          >
            <X size={24} />
          </button>
          
          <h2 className="text-3xl font-serif font-bold mb-2">Get Your FREE Estimate</h2>
          <p className="text-ivory/90 font-sans">
            Tell us about your needs and we'll provide a detailed quote within 24 hours
          </p>
          
          <div className="flex items-center space-x-6 mt-4 text-sm">
            <div className="flex items-center space-x-1">
              <Shield className="text-gold" size={16} />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="text-gold" size={16} />
              <span>Same-day service available</span>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-navy font-semibold mb-2 font-sans">Your Name *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full p-4 border border-navy/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none font-sans"
                />
              </div>
              <div>
                <label className="block text-navy font-semibold mb-2 font-sans">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="(843) 555-0123"
                  className="w-full p-4 border border-navy/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-navy font-semibold mb-2 font-sans">Email Address *</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@example.com"
                className="w-full p-4 border border-navy/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none font-sans"
              />
            </div>

            <div>
              <label className="block text-navy font-semibold mb-2 font-sans">Service Needed *</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full p-4 border border-navy/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none font-sans"
              >
                <option value="">Select a service...</option>
                <option value="luxury-rug-cleaning">Luxury & Area Rug Cleaning</option>
                <option value="upholstery-cleaning">Upholstery Cleaning</option>
                <option value="carpet-cleaning">Carpet Cleaning & Care</option>
                <option value="multiple-services">Multiple Services</option>
              </select>
            </div>

            <div>
              <label className="block text-navy font-semibold mb-2 font-sans">Tell us about your needs</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                placeholder="Describe your carpets, rugs, or upholstery that need attention. Include any specific concerns like stains, odors, or fabric types..."
                className="w-full p-4 border border-navy/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none resize-none font-sans"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                type="submit"
                className="flex-1 bg-gold text-navy py-4 px-6 rounded-lg font-semibold hover:bg-gold/90 transition-colors font-sans text-lg"
              >
                Get My FREE Estimate
              </button>
              <button 
                type="button"
                onClick={onClose}
                className="flex-1 border-2 border-navy/20 text-navy py-4 px-6 rounded-lg font-semibold hover:bg-navy/5 transition-colors font-sans"
              >
                Close
              </button>
            </div>
          </form>

          {/* Contact Info Section */}
          <div className="mt-8 pt-6 border-t border-navy/10">
            <h3 className="text-navy font-serif font-semibold text-lg mb-4">Prefer to call or email?</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-seafoam/10 rounded-lg">
                <Phone className="text-gold" size={20} />
                <div>
                  <p className="text-navy font-semibold font-sans">Call us directly</p>
                  <p className="text-navy/70 font-sans">843-437-8921</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-seafoam/10 rounded-lg">
                <Mail className="text-gold" size={20} />
                <div>
                  <p className="text-navy font-semibold font-sans">Email us</p>
                  <p className="text-navy/70 font-sans">info@theislandsrugspa.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimatePopup