import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Shield, Star, Users, Award, CheckCircle, Settings } from 'lucide-react';
import EstimatePopup from '../ui/EstimatePopup';

const CTASection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleCallClick = () => {
    window.location.href = 'tel:843-437-8921';
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": "estimate-request",
        ...formData 
      })
    })
    .then(() => {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    })
    .catch(error => {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <>
      <section id="contact" className="py-20 bg-gradient-to-br from-seafoam/10 to-ivory">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-navy mb-6">
                Ready to Refresh Your Home?
              </h2>
              <p className="text-xl text-navy/70 mb-8 font-sans">
                Your rugs, carpets and upholstery deserve expert, spa treatment-like care. 
                Choosing THE ISLANDS RUG SPA means you're investing in peace of mind, comfort, and better-quality results from a professional cleaning service focused on quality, reliability, and effective eco-friendly practices.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-gold" size={24} />
                  <span className="text-navy font-sans">Serving Greater Charleston and Lowcountry</span>
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
                  <span className="text-navy font-sans">Monday - Saturday: 8:00 AM - 6:00 PM</span>
                </div>
              </div>

              <div className="bg-navy/5 border-l-4 border-gold p-4 mb-8 rounded-r-lg">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Shield className="text-gold" size={20} />
                  <span className="text-navy font-semibold font-sans">Satisfaction Guarantee</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button 
                  onClick={openPopup}
                  className="bg-gold text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors font-sans"
                >
                  Get Your FREE Estimate
                </button>
                <button 
                  onClick={handleCallClick}
                  className="border-2 border-navy text-navy px-8 py-4 rounded-lg font-semibold hover:bg-navy hover:text-ivory transition-colors font-sans"
                >
                  Call Now: 843-437-8921
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-sm text-navy/60 font-sans">
                <div className="flex items-center space-x-1">
                  <Shield className="text-gold" size={14} />
                  <span>Satisfaction Guaranteed</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="text-gold" size={14} />
                  <span>Owner operated</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="text-gold" size={14} />
                  <span>IICRC-certified technicians</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="text-gold" size={14} />
                  <span>Eco-friendly solutions</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="text-gold" size={14} />
                  <span>Licensed and insured</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Settings className="text-gold" size={14} />
                  <span>Advanced equipment</span>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gold/20">
                <h3 className="text-2xl font-serif font-semibold text-navy mb-2">Get Your FREE Estimate</h3>
                <p className="text-navy/70 font-sans text-sm mb-6">Tell us about your cleaning needs and we'll provide a detailed quote</p>
                
                {submitStatus === 'success' && (
                  <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg font-sans">
                    Thank you! We'll contact you within 24 hours with your FREE estimate.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg font-sans">
                    Oops! Something went wrong. Please try again or call us at 843-437-8921.
                  </div>
                )}

                <form 
                  name="estimate-request"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Hidden fields for Netlify */}
                  <input type="hidden" name="form-name" value="estimate-request" />
                  <div hidden>
                    <input name="bot-field" />
                  </div>

                  <div>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your Name"
                      className="w-full p-4 border border-navy/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none font-sans"
                    />
                  </div>
                  <div>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Email Address"
                      className="w-full p-4 border border-navy/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none font-sans"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Phone Number"
                      className="w-full p-4 border border-navy/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none font-sans"
                    />
                  </div>
                  <div>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-navy/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none font-sans"
                    >
                      <option value="">Select Service Needed</option>
                      <option value="luxury-rug-cleaning">Luxury & Area Rug Cleaning</option>
                      <option value="upholstery-cleaning">Upholstery Cleaning</option>
                      <option value="carpet-cleaning">Carpet Cleaning & Care</option>
                      <option value="floor-tile-cleaning">Floor and Tile Cleaning</option>
                      <option value="multiple-services">Multiple Services</option>
                    </select>
                  </div>
                  <div>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your carpets, rugs, or upholstery that need attention..."
                      rows="4"
                      className="w-full p-4 border border-navy/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none resize-none font-sans"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold text-navy py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors font-sans disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Get My FREE Estimate'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EstimatePopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default CTASection;
