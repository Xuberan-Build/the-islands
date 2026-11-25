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
          <p className="text-white/60 font-sans mt-4">Last Updated: November 25, 2026</p>
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
              We do not sell your personal information. We share it only with service providers that help us run our business and website (such as our booking, analytics, and advertising partners described in Section 7), or when required by law. These providers may use your information only to provide their services to us and as described in their own privacy policies.
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
              We and our analytics and advertising partners use cookies, pixels, and similar technologies to keep the site working, understand how visitors use it, and measure the results of our advertising. You can block or delete cookies through your browser settings, although some parts of the site may not work as intended.
            </p>
          </div>

          {/* Analytics, Advertising & Booking Tools */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">7. Analytics, Advertising &amp; Booking Tools</h2>
            <p className="text-navy/80 font-sans leading-relaxed mb-4">
              We use the following third-party tools. Each may collect information such as your IP address, device and browser details, pages you visit, and the actions you take on our site (for example, tapping our phone number or opening our booking form).
            </p>
            <ul className="list-disc pl-6 space-y-3 text-navy/80 font-sans leading-relaxed mb-4">
              <li>
                <strong>Google Analytics</strong> helps us understand how visitors use our site. Learn{' '}
                <a href="https://policies.google.com/technologies/partner-sites" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">how Google uses data from sites that use its services</a>, or opt out with the{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics opt-out browser add-on</a>.
              </li>
              <li>
                <strong>Google Ads</strong> lets us measure which ads lead to calls and bookings and may show our ads to people who have visited our site (remarketing). If you call a phone number shown in one of our ads or on our site, Google may record call details such as the time, duration, and caller area code. It does not record the conversation.
              </li>
              <li>
                <strong>Meta (Facebook and Instagram) Pixel</strong> helps us measure our ads on Meta platforms and show relevant ads to people who have visited our site.
              </li>
              <li>
                <strong>Housecall Pro</strong> powers our online booking and scheduling. Information you enter in the booking form is collected and processed by Housecall Pro under its{' '}
                <a href="https://www.housecallpro.com/privacy/" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">privacy policy</a>.
              </li>
            </ul>
            <p className="text-navy/80 font-sans leading-relaxed mb-4">
              <strong>Customer information for ad measurement.</strong> To understand whether our advertising works, we may share contact details you have given us, such as your email address or phone number, with Google and Meta. This information is hashed (converted into an unreadable code) before it is sent. It is used to match conversions to ads and, where permitted, to build advertising audiences. It is not sold.
            </p>
            <p className="text-navy/80 font-sans leading-relaxed">
              <strong>Your choices.</strong> You can control personalized ads through{' '}
              <a href="https://myadcenter.google.com/" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">Google My Ad Center</a>,{' '}
              <a href="https://www.facebook.com/adpreferences/" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">Meta Ad Preferences</a>, and industry opt-out pages from the{' '}
              <a href="https://optout.aboutads.info/" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance</a> and the{' '}
              <a href="https://optout.networkadvertising.org/" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">Network Advertising Initiative</a>. You can also contact us to opt out of having your information used for advertising measurement.
            </p>
          </div>

          {/* Third-Party Links */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">8. Third-Party Links</h2>
            <p className="text-navy/80 font-sans leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites, so we recommend reviewing their privacy policies.
            </p>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">9. Your Rights</h2>
            <p className="text-navy/80 font-sans leading-relaxed">
              You may request access to, correction of, or deletion of your personal information at any time by contacting us. You may also ask us not to use your contact details for advertising measurement or audiences. We will respond to your request in accordance with applicable laws.
            </p>
          </div>

          {/* Changes to This Privacy Policy */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">10. Changes to This Privacy Policy</h2>
            <p className="text-navy/80 font-sans leading-relaxed">
              We reserve the right to update this Privacy Policy at any time. We will post any changes on this page, and the "Last Updated" date will reflect the latest revisions.
            </p>
          </div>

          {/* Contact Us */}
          <div className="bg-navy/5 border border-gold/20 rounded-xl p-8">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6 text-center">11. Contact Us</h2>
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