import React from 'react';
import { Shield, Mail, MapPin } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy/90 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <Shield className="mx-auto mb-6 text-gold" size={64} />
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-sans">
            Your privacy and trust are important to us. Learn how we protect and handle your information.
          </p>
          <p className="text-white/60 font-sans mt-4">Last Updated: August 1, 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* Introduction */}
          <div className="bg-seafoam/10 border-l-4 border-gold p-6 rounded-r-lg mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-4">1. Introduction</h2>
            <p className="text-navy/80 font-sans leading-relaxed">
              Welcome to THE ISLANDS RUG SPA ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website - theislandsrugspa.com (the "Site"). By using our website, you agree to the terms outlined in this Privacy Policy. If you do not agree with the terms, please do not use our site.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">2. Information We Collect</h2>
            <p className="text-navy/80 font-sans leading-relaxed mb-4">
              We may collect information from you in several ways:
            </p>
            <div className="space-y-4 ml-4">
              <div>
                <h3 className="text-lg font-serif font-semibold text-navy mb-2">Personal Information:</h3>
                <p className="text-navy/80 font-sans leading-relaxed">
                  When you contact us or use our services, we may collect personal information such as your name, email address, phone number, and address.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-navy mb-2">Usage Data:</h3>
                <p className="text-navy/80 font-sans leading-relaxed">
                  We may automatically collect information about your device and how you use our website, including IP address, browser type, and pages visited.
                </p>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">3. How We Use Your Information</h2>
            <p className="text-navy/80 font-sans leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc ml-8 space-y-2 text-navy/80 font-sans">
              <li>To provide and improve our services.</li>
              <li>To respond to your inquiries and provide customer support.</li>
              <li>To personalize your experience on our website.</li>
              <li>To analyze website usage and enhance our site's functionality.</li>
            </ul>
          </div>

          {/* Sharing Your Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">4. Sharing Your Information</h2>
            <p className="text-navy/80 font-sans leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to outside parties unless required for business operations or by law. Third-party service providers who assist us in operating our website or conducting our business may have access to your information but are bound by confidentiality agreements.
            </p>
          </div>

          {/* Security */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">5. Security</h2>
            <p className="text-navy/80 font-sans leading-relaxed">
              We take the security of your information seriously. We implement various security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, please note that no electronic storage or transmission method is 100% secure.
            </p>
          </div>

          {/* Cookies */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">6. Cookies</h2>
            <p className="text-navy/80 font-sans leading-relaxed">
              We may use cookies to enhance your experience on our website. You can disable cookies through your browser settings, although this may affect certain website functionalities.
            </p>
          </div>

          {/* Third-Party Links */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">7. Third-Party Links</h2>
            <p className="text-navy/80 font-sans leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites, so we recommend reviewing their privacy policies.
            </p>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">8. Your Rights</h2>
            <p className="text-navy/80 font-sans leading-relaxed">
              You may request access to, correction of, or deletion of your personal information at any time by contacting us. We will respond to your request by applicable laws.
            </p>
          </div>

          {/* Changes to This Privacy Policy */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">9. Changes to This Privacy Policy</h2>
            <p className="text-navy/80 font-sans leading-relaxed">
              We reserve the right to update this Privacy Policy at any time. We will post any changes on this page, and the "Last Updated" date will reflect the latest revisions.
            </p>
          </div>

          {/* Contact Us */}
          <div className="bg-navy/5 border border-gold/20 rounded-xl p-8">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6 text-center">10. Contact Us</h2>
            <p className="text-navy/80 font-sans leading-relaxed mb-6 text-center">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            
            <div className="max-w-md mx-auto space-y-4">
              <div className="text-center">
                <h3 className="font-serif font-bold text-navy text-lg mb-2">THE ISLANDS RUG SPA</h3>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="text-gold" size={20} />
                <div className="text-navy/80 font-sans">
                  <p>2860 Maybank Hwy, Box 181</p>
                  <p>Johns Island, SC 29455</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <Mail className="text-gold" size={20} />
                <a 
                  href="mailto:admin@theislandsrugspa.com" 
                  className="text-navy/80 font-sans hover:text-gold transition-colors"
                >
                  admin@theislandsrugspa.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;