import React, { useState, useEffect } from 'react';
import { Star, Shield, CheckCircle, Phone, ChevronLeft, ChevronRight, MapPin, AlertCircle } from 'lucide-react';
import EstimatePopup from '../../components/ui/EstimatePopup';

// ─── Services (same across all city pages) ───────────────────────────────────
const SERVICES = [
  {
    title: 'Fine Area Rug Cleaning',
    icon: '/images/fine rug cleaning.svg',
    bullets: ['Persian, Oriental & specialty rugs', 'Removes allergens & dust mites', 'Restores color & softness', 'Safe for delicate fibers'],
  },
  {
    title: 'Carpet Cleaning & Care',
    icon: '/images/carpet cleaning.svg',
    bullets: ['Deep extraction cleaning', 'Pet odor & stain removal', 'Eco-friendly, family-safe', 'Fast-dry process'],
  },
  {
    title: 'Upholstery Cleaning',
    icon: '/images/Upholstery cleaning.svg',
    bullets: ['Sofas, chairs & sectionals', 'Precision stain removal', 'Odor elimination', 'Extends furniture life'],
  },
  {
    title: 'Floor & Tile Cleaning',
    icon: '/images/tile cleaning.svg',
    bullets: ['Grout deep-cleaning', 'Restores original luster', 'Coastal home specialists', 'Streak-free finish'],
  },
];

// ─── Star row ─────────────────────────────────────────────────────────────────
const StarRow = ({ count = 5, size = 16 }) => (
  <div className="flex">
    {[...Array(count)].map((_, i) => (
      <Star key={i} className="text-gold fill-current" size={size} />
    ))}
  </div>
);

// ─── Before/After tile — handles null/one/both photo states ──────────────────
const BeforeAfterTile = ({ item, cityName }) => {
  const hasNeither = !item.before && !item.after;
  const hasBoth = item.before && item.after;
  const hasBefore = item.before && !item.after;
  const hasAfter = !item.before && item.after;

  if (hasNeither) {
    return (
      <div className="rounded-2xl overflow-hidden border border-gold/20">
        <div className="grid grid-cols-2 h-52">
          <div className="bg-navy/10 flex flex-col items-center justify-center p-4 border-r border-gold/20">
            <span className="text-xs font-sans font-semibold text-navy/40 uppercase tracking-widest mb-2">Before</span>
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-2">
              <span className="text-gold text-lg">📷</span>
            </div>
            <span className="text-navy/40 font-sans text-xs text-center">Photo coming soon</span>
          </div>
          <div className="bg-gold/5 flex flex-col items-center justify-center p-4">
            <span className="text-xs font-sans font-semibold text-navy/40 uppercase tracking-widest mb-2">After</span>
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-2">
              <span className="text-gold text-lg">✨</span>
            </div>
            <span className="text-navy/40 font-sans text-xs text-center">Photo coming soon</span>
          </div>
        </div>
        <div className="bg-ivory px-4 py-2 text-center">
          <p className="text-navy/60 font-sans text-sm italic">{item.caption}</p>
        </div>
      </div>
    );
  }

  if (hasBoth) {
    return (
      <div className="rounded-2xl overflow-hidden border border-gold/20">
        <div className="grid grid-cols-2 h-52">
          <div className="relative">
            <img src={item.before} alt={`Before — ${item.caption}`} className="w-full h-full object-cover" />
            <div className="absolute top-2 left-2 bg-navy/80 text-ivory text-xs font-sans font-semibold px-2 py-1 rounded">Before</div>
          </div>
          <div className="relative">
            <img src={item.after} alt={`After — ${item.caption}`} className="w-full h-full object-cover" />
            <div className="absolute top-2 left-2 bg-gold text-navy text-xs font-sans font-semibold px-2 py-1 rounded">After</div>
          </div>
        </div>
        <div className="bg-ivory px-4 py-2 text-center">
          <p className="text-navy/60 font-sans text-sm italic">{item.caption}</p>
        </div>
      </div>
    );
  }

  // Single image (before or after only)
  const src = hasBefore ? item.before : item.after;
  const label = hasBefore ? 'Before' : 'After';
  return (
    <div className="rounded-2xl overflow-hidden border border-gold/20">
      <div className="relative h-52">
        <img src={src} alt={`${label} — ${item.caption}`} className="w-full h-full object-cover" />
        <div className="absolute top-2 left-2 bg-gold text-navy text-xs font-sans font-semibold px-2 py-1 rounded">{label}</div>
      </div>
      <div className="bg-ivory px-4 py-2 text-center">
        <p className="text-navy/60 font-sans text-sm italic">{item.caption}</p>
      </div>
    </div>
  );
};

// ─── Review carousel ──────────────────────────────────────────────────────────
const ReviewCarousel = ({ reviews }) => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const r = reviews[current];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-ivory p-8 rounded-2xl relative border border-gold/20">
        <button onClick={prev} aria-label="Previous review"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow border border-gold/20">
          <ChevronLeft size={22} className="text-navy" />
        </button>
        <button onClick={next} aria-label="Next review"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow border border-gold/20">
          <ChevronRight size={22} className="text-navy" />
        </button>
        <div className="text-center px-12">
          <div className="flex justify-center mb-4"><StarRow count={r.stars} size={18} /></div>
          <p className="text-lg text-navy my-5 italic font-serif">"{r.text}"</p>
          <p className="font-serif font-semibold text-navy">{r.name}</p>
          <p className="text-gold text-sm font-medium font-sans">{r.location}</p>
        </div>
      </div>
      <div className="flex justify-center mt-5 space-x-2">
        {reviews.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`Review ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${i === current ? 'bg-gold' : 'bg-navy/30'}`} />
        ))}
      </div>
    </div>
  );
};

// ─── Main template ────────────────────────────────────────────────────────────
const CityPage = ({ city }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // SEO: title + meta description
    document.title = city.seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', city.seo.description);

    // Meta Pixel: ViewContent per city for retargeting audiences
    if (window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: city.name,
        content_category: 'City Landing Page',
      });
    }
  }, [city]);

  const openPopup = () => setIsPopupOpen(true);

  const handleBooking = () => {
    if (city.bookingUrl) {
      window.open(city.bookingUrl, '_blank', 'noopener,noreferrer');
    } else {
      openPopup();
    }
  };

  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-ivory to-seafoam/20 py-16 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center space-x-2 text-sm text-navy/60 font-sans mb-4">
                <MapPin size={14} className="text-gold" />
                <span>Serving {city.name}</span>
                {city.zips?.length > 0 && (
                  <span className="text-navy/40">· {city.zips.join(', ')}</span>
                )}
              </div>

              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-navy mb-4 leading-tight">
                {city.hero.headline}
              </h1>

              <p className="text-xl font-serif text-navy/80 mb-5 italic">
                {city.hero.subheadline}
              </p>

              <p className="text-sm text-navy/60 font-sans mb-6">
                Owner-operated · IICRC-certified · Eco-friendly · Satisfaction guaranteed
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button onClick={handleBooking}
                  className="bg-gold text-navy px-7 py-3.5 rounded-lg font-semibold hover:bg-gold/90 transition-colors text-base font-sans shadow-lg">
                  Get FREE Estimate Today
                </button>
                <a href="tel:843-437-8921"
                  className="flex items-center justify-center space-x-2 border-2 border-navy text-navy px-7 py-3.5 rounded-lg font-semibold hover:bg-navy hover:text-ivory transition-colors text-base font-sans">
                  <Phone size={16} />
                  <span>843-437-8921</span>
                </a>
              </div>

              <div className="flex items-center space-x-5 text-sm text-navy/70 font-sans">
                <div className="flex items-center space-x-1.5">
                  <StarRow count={5} size={13} />
                  <span className="ml-1">5-Star Rated</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Shield className="text-gold" size={14} />
                  <span>Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>

            <div className="lg:text-right">
              <div className="relative w-full max-w-md mx-auto h-80 rounded-3xl shadow-2xl overflow-hidden border border-gold/20">
                <img src="/images/living-room.png"
                  alt={`Professional rug and carpet cleaning in ${city.name}, SC`}
                  className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 text-center">
                    <p className="text-navy font-serif font-semibold text-sm">
                      Trusted by 500+ Lowcountry Families
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-navy mb-6">
              {city.problem.headline}
            </h2>
            <p className="text-lg text-navy/75 font-sans leading-relaxed mb-5">
              {city.problem.body}
            </p>
            <p className="text-base text-navy font-semibold font-sans">
              {city.problem.closer}
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
            {[
              { stat: '500+', label: 'Lowcountry homes cleaned' },
              { stat: '5★', label: 'Average customer rating' },
              { stat: '100%', label: 'Satisfaction guarantee' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-ivory rounded-xl p-6 border border-gold/20">
                <p className="text-3xl font-serif font-bold text-gold mb-1">{stat}</p>
                <p className="text-navy/70 font-sans text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. BEFORE / AFTER ────────────────────────────────────────────── */}
      <section className="py-16 bg-ivory">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-navy mb-3">See the Difference</h2>
            <p className="text-navy/70 font-sans max-w-xl mx-auto">
              Professional deep cleaning removes what vacuuming leaves behind — embedded dirt, allergens, odors, and years of buildup.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {city.beforeAfter.map((item, i) => (
              <BeforeAfterTile key={i} item={item} cityName={city.name} />
            ))}
          </div>

          <div className="text-center mt-10">
            <button onClick={handleBooking}
              className="bg-gold text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors font-sans text-lg shadow-lg">
              Get My Free Estimate
            </button>
          </div>
        </div>
      </section>

      {/* ── 4. WHY LOCAL ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              {city.local.headline}
            </h2>
            <p className="text-lg text-ivory/85 font-sans leading-relaxed mb-10">
              {city.local.body}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                { icon: '🏠', label: 'Owner on every single job' },
                { icon: '🎓', label: 'IICRC-certified specialists' },
                { icon: '🌿', label: 'Eco-friendly, pet & kid-safe products' },
                { icon: '⭐', label: '5-star rated across the Lowcountry' },
                { icon: '📋', label: 'Free estimates, transparent pricing' },
                { icon: '🛡️', label: 'Satisfaction guaranteed on every job' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center space-x-3 bg-white/10 rounded-xl px-5 py-4 border border-white/20">
                  <span className="text-xl">{icon}</span>
                  <span className="text-ivory/90 font-sans text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-navy mb-3">
              What We Clean in {city.name}
            </h2>
            <p className="text-navy/70 font-sans max-w-2xl mx-auto">
              Every job is handled by our owner with professional-grade equipment and eco-friendly solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.title}
                className="bg-ivory rounded-2xl p-6 border-t-4 border-gold hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="w-14 h-14 bg-seafoam/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-navy transition-colors mx-auto">
                  <img src={service.icon} alt={service.title}
                    className="w-10 h-10 group-hover:invert transition-all" />
                </div>
                <h3 className="text-base font-serif font-semibold text-navy mb-4 text-center">
                  {service.title}
                </h3>
                <ul className="space-y-2 flex-grow">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start space-x-2">
                      <CheckCircle className="text-gold flex-shrink-0 mt-0.5" size={14} />
                      <span className="text-navy/70 font-sans text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={handleBooking}
                  className="mt-5 w-full bg-gold text-navy py-2.5 rounded-lg font-semibold text-sm font-sans hover:bg-gold/90 transition-colors">
                  Book a Cleaning
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. REVIEWS ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-ivory">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-navy mb-3">
              What {city.name} Clients Say
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <StarRow count={5} size={22} />
              <span className="text-lg font-semibold text-navy ml-2">5.0 out of 5</span>
            </div>
          </div>
          <ReviewCarousel reviews={city.reviews} />
        </div>
      </section>

      {/* ── 7. FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-navy mb-4">
              Ready for a Cleaner Home in {city.name}?
            </h2>
            <p className="text-navy/70 font-sans mb-8 leading-relaxed">
              Get a free, no-obligation estimate today. We'll assess your needs, give you transparent pricing, and schedule at your convenience. Don't wait — spots fill fast.
            </p>

            <div className="mb-7 p-4 bg-gold/10 border-l-4 border-gold rounded-r-lg text-left">
              <div className="flex items-start space-x-3">
                <AlertCircle className="text-gold flex-shrink-0 mt-0.5" size={18} />
                <p className="text-navy/70 font-sans text-sm">
                  Pricing and appointment times are estimates subject to physical evaluation and scheduling availability. Final pricing confirmed after we assess your specific needs.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleBooking}
                className="bg-gold text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors font-sans text-lg shadow-lg">
                Book Online — It's Free
              </button>
              <a href="tel:843-437-8921"
                className="flex items-center justify-center space-x-2 border-2 border-navy text-navy px-8 py-4 rounded-lg font-semibold hover:bg-navy hover:text-ivory transition-colors font-sans text-lg">
                <Phone size={18} />
                <span>Call 843-437-8921</span>
              </a>
            </div>

            {city.zips?.length > 0 && (
              <p className="text-navy/50 text-sm font-sans mt-6">
                Serving {city.name} — ZIP codes {city.zips.join(', ')}
              </p>
            )}
          </div>
        </div>
      </section>

      <EstimatePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default CityPage;
