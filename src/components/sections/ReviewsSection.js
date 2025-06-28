import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  
  const reviews = [
    {
      name: "Margaret Whitmore",
      location: "Kiawah Island",
      rating: 5,
      text: "The Islands treated my antique Persian rug with the reverence it deserved. After years of salt air exposure, it looks magnificent again. Their understanding of coastal conditions is unmatched.",
      date: "2024-06-15",
      service: "Heirloom Area Rug Care"
    },
    {
      name: "James Richardson", 
      location: "Seabrook Island",
      rating: 5,
      text: "Our vacation home's upholstery needed expert attention after the humid summer. The discretion and quality of service exceeded our expectations. Truly white-glove treatment.",
      date: "2024-05-28",
      service: "Fine Upholstery Restoration"
    },
    {
      name: "Eleanor Davidson",
      location: "Johns Island",
      rating: 5,
      text: "Finally, textile care specialists who understand the unique challenges of Lowcountry living. My silk carpets have never looked better. Impeccable craftsmanship.",
      date: "2024-04-12",
      service: "Coastal Carpet Preservation"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">What Our Clients Say</h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-gold fill-current" size={24} />
              ))}
            </div>
            <span className="text-xl font-semibold text-navy">5.0 out of 5</span>
          </div>
          <p className="text-navy/70 font-sans">Trusted by discerning clients across the Charleston Lowcountry</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-ivory p-8 rounded-2xl relative border border-gold/20">
            <button 
              onClick={prevReview}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow border border-gold/20"
            >
              <ChevronLeft size={24} className="text-navy" />
            </button>
            
            <button 
              onClick={nextReview}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow border border-gold/20"
            >
              <ChevronRight size={24} className="text-navy" />
            </button>

            <div className="text-center px-16">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-gold fill-current" size={20} />
                ))}
              </div>
              <p className="text-lg text-navy mb-6 italic font-serif">"{reviews[currentReview].text}"</p>
              <div>
                <p className="font-serif font-semibold text-navy">{reviews[currentReview].name}</p>
                <p className="text-gold text-sm font-medium font-sans">{reviews[currentReview].location}</p>
                <p className="text-navy/60 text-sm font-sans">{reviews[currentReview].service}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentReview === index ? 'bg-gold' : 'bg-navy/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
