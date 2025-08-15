import React from 'react';
import { FileText, Mail, MapPin } from 'lucide-react';

const Terms = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy/90 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <FileText className="mx-auto mb-6 text-gold" size={64} />
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Terms of Use</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-sans">
            Please read these terms carefully before using our website and services.
          </p>
          <p className="text-white/60 font-sans mt-4">Last Updated: August 1, 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* Introduction */}
          <div className="bg-seafoam/10 border-l-4 border-gold p-6 rounded-r-lg mb-12">
            <p className="text-navy/80 font-sans leading-relaxed">
              Welcome to THE ISLANDS RUG SPA ("we," "our," or "us"). By accessing or using our website, theislandsrugspa.com (the "Site"), you agree to these Terms of Use. If you do not agree to these terms, please do not use the Site.
            </p>
          </div>

          {/* Acceptance of Terms */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">1. Acceptance of Terms</h2>
            <p className="text-navy/80 font-sans leading-relaxed">
              By using our Site, you agree to comply with these Terms of Use and all applicable laws and regulations. We reserve the right to modify these Terms of Use at any time without notice. Your continued use of the Site signifies acceptance of any updated Terms of Use.
            </p>
          </div>

          {/* Use of the Site */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">2. Use of the Site</h2>
            <p className="text-navy/80 font-sans leading-relaxed mb-4">
              You are granted a limited, non-exclusive, and non-transferable license to access and use the Site for personal, non-commercial purposes only. You agree not to:
            </p>
            <ul className="list-disc ml-8 space-y-2 text-navy/80 font-sans">
              <li>Copy, reproduce, or distribute any content on the Site without our permission.</li>
              <li>Engage in any activity that disrupts or interferes with the Site's functionality.</li>
              <li>Attempt to access unauthorized areas of the Site or engage in any unauthorized data collection or mining.</li>
            </ul>
          </div>

          {/* Intellectual Property Rights */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">3. Intellectual Property Rights</h2>
            <p className="text-navy/80 font-sans leading-relaxed">
              All content on the Site, including but not limited to text, graphics, logos, images, and software, is the property of THE ISLANDS RUG SPA and is protected by copyright, trademark, and other intellectual property laws. You may not use any of our intellectual property without prior written consent.
            </p>
          </div>

          {/* User Submissions */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">4. User Submissions</h2>
            <p className="text-navy/80 font-sans leading-relaxed">
              By submitting any content, feedback, or suggestions to us through the Site, you grant THE ISLANDS RUG SPA a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, display, and distribute such content. You agree that any submission is non-confidential and becomes our property.
            </p>
          </div>

          {/* Third-Party Links */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">5. Third-Party Links</h2>
            <p className="text-navy/80 font-sans leading-relaxed">
              The Site may contain links to third-party websites or services. We are not responsible for the content, accuracy, or practices of these external sites. Any links to third-party sites are provided solely for convenience, and your access to them is at your own risk.
            </p>
          </div>

          {/* Disclaimer of Warranties */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">6. Disclaimer of Warranties</h2>
            <p className="text-navy/80 font-sans leading-relaxed">
              The Site is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the accuracy, reliability, or completeness of any content on the Site. Your use of the Site is at your own risk.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">7. Limitation of Liability</h2>
            <p className="text-navy/80 font-sans leading-relaxed">
              To the fullest extent permitted by law, THE ISLANDS RUG SPA and its affiliates, officers, employees, and agents are not liable for any damages, losses, or claims arising from your use or inability to use the Site or its content. This includes, without limitation, direct, indirect, incidental, or consequential damages.
            </p>
          </div>

          {/* Indemnification */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">8. Indemnification</h2>
            <p className="text-navy/80 font-sans leading-relaxed">
              You agree to indemnify and hold THE ISLANDS RUG SPA and its affiliates harmless from any claims, losses, liabilities, and expenses (including attorneys' fees) arising from your use of the Site, your violation of these Terms of Use, or your violation of any rights of another.
            </p>
          </div>

          {/* Governing Law */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">9. Governing Law</h2>
            <p className="text-navy/80 font-sans leading-relaxed">
              These Terms of Use are governed by and construed following the laws of South Carolina / USA without regard to conflict of law principles. You agree to submit to the jurisdiction of the courts located in South Carolina.
            </p>
          </div>

          {/* Changes to These Terms */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">10. Changes to These Terms</h2>
            <p className="text-navy/80 font-sans leading-relaxed">
              We may update these Terms of Use at any time. Any changes will be posted on this page, and the "Last Updated" date will reflect the latest revisions. By continuing to use the Site, you agree to be bound by any updated Terms.
            </p>
          </div>

          {/* Contact Us */}
          <div className="bg-navy/5 border border-gold/20 rounded-xl p-8">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6 text-center">11. Contact Us</h2>
            <p className="text-navy/80 font-sans leading-relaxed mb-6 text-center">
              If you have questions about these Terms of Use, please contact us at:
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

export default Terms;