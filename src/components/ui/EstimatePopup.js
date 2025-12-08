import React from 'react';
import { X, Phone, Mail, Shield, Star, AlertCircle, CheckCircle } from 'lucide-react';

const EstimatePopup = ({ isOpen, onClose }) => {
  const handleBookingClick = () => {
    if (window.HCPWidget) {
      window.HCPWidget.openModal();
    }
  };

  const handleCallClick = () => {
    window.location.href = 'tel:843-437-8921';
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
              <span>Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="text-gold" size={16} />
              <span>Locally Owned and Operated</span>
            </div>
          </div>
        </div>

        {/* Booking Content */}
        <div className="p-6">
          {/* Important Notice */}
          <div className="mb-6 p-4 bg-gold/10 border-l-4 border-gold rounded-r-lg">
            <div className="flex items-start space-x-3">
              <AlertCircle className="text-gold flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-navy font-semibold font-sans text-sm mb-1">Important Notice</p>
                <p className="text-navy/70 font-sans text-sm">
                  Pricing and appointment times are estimates and subject to physical evaluation and scheduling availability.
                  Final pricing will be confirmed after we assess your specific cleaning needs.
                </p>
              </div>
            </div>
          </div>

          {/* HouseCall Pro Booking Button */}
          <button
            data-token="1159d6a5fcbd41b6bcb97c533b6d0924"
            data-orgname="The-Islands-Rug-Spa"
            className="w-full bg-gold text-navy py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors font-sans text-lg mb-6 hcp-button"
            onClick={handleBookingClick}
          >
            Book Your Appointment Online
          </button>

          {/* Service Highlights */}
          <div className="mb-6 p-5 bg-gradient-to-br from-seafoam/10 to-ivory rounded-lg">
            <h4 className="text-navy font-serif font-semibold text-base mb-3">What to Expect:</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-start space-x-2">
                <CheckCircle className="text-gold flex-shrink-0 mt-0.5" size={16} />
                <span className="text-navy/80 font-sans">Free estimate provided</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="text-gold flex-shrink-0 mt-0.5" size={16} />
                <span className="text-navy/80 font-sans">Same-day response</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="text-gold flex-shrink-0 mt-0.5" size={16} />
                <span className="text-navy/80 font-sans">Flexible scheduling</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="text-gold flex-shrink-0 mt-0.5" size={16} />
                <span className="text-navy/80 font-sans">Licensed & insured</span>
              </div>
            </div>
          </div>

          {/* Alternative Contact Methods */}
          <div className="pt-6 border-t border-navy/10">
            <h3 className="text-navy font-serif font-semibold text-lg mb-4 text-center">Prefer to Call or Email?</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <button
                onClick={handleCallClick}
                className="flex items-center space-x-3 p-4 bg-seafoam/10 rounded-lg hover:bg-seafoam/20 transition-colors"
              >
                <Phone className="text-gold" size={20} />
                <div className="text-left">
                  <p className="text-navy font-semibold font-sans">Call us directly</p>
                  <p className="text-navy/70 font-sans">843-437-8921</p>
                </div>
              </button>
              <a
                href="mailto:info@theislandsrugspa.com"
                className="flex items-center space-x-3 p-4 bg-seafoam/10 rounded-lg hover:bg-seafoam/20 transition-colors"
              >
                <Mail className="text-gold" size={20} />
                <div className="text-left">
                  <p className="text-navy font-semibold font-sans">Email us</p>
                  <p className="text-navy/70 font-sans">info@theislandsrugspa.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimatePopup;
