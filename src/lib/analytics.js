import { trackEvent as trackMetaEvent } from './metaPixel';
import { captureAttribution, getAttributionParams } from './attribution';

// Runs once when the app loads, while the landing URL still has its tags.
captureAttribution();

export const PHONE_NUMBER = '843-437-8921';

// GA4 (gtag.js loaded in public/index.html). Page views come from GA4
// enhanced measurement's history-change tracking, so only events are sent here.
const trackGAEvent = (name, params = {}) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', name, {
    page_path: window.location.pathname,
    ...getAttributionParams(),
    ...params,
  });
};

// Google Ads conversions. Off until these are set at build time (Netlify env vars):
//   REACT_APP_GOOGLE_ADS_ID=AW-XXXXXXXXX            (Goals > Conversions > tag setup)
//   REACT_APP_ADS_LABEL_CALL_CLICK=xxxxxxxxxxx      (conversion label for "Website call click")
//   REACT_APP_ADS_LABEL_BOOKING_OPEN=xxxxxxxxxxx    (conversion label for "Booking widget open")
// gtag.js is already on the page for GA4, so this only adds the Ads config.
const GOOGLE_ADS_ID = (process.env.REACT_APP_GOOGLE_ADS_ID || '').trim();
const ADS_LABELS = {
  call_click: (process.env.REACT_APP_ADS_LABEL_CALL_CLICK || '').trim(),
  booking_open: (process.env.REACT_APP_ADS_LABEL_BOOKING_OPEN || '').trim(),
};

if (GOOGLE_ADS_ID && typeof window !== 'undefined' && typeof window.gtag === 'function') {
  window.gtag('config', GOOGLE_ADS_ID);
}

const trackAdsConversion = (key) => {
  const label = ADS_LABELS[key];
  if (!GOOGLE_ADS_ID || !label || typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'conversion', { send_to: `${GOOGLE_ADS_ID}/${label}` });
};

// `placement` says which button was used, e.g. 'header', 'hero', 'city_hero'.
export const trackCallClick = (placement) => {
  trackMetaEvent('Contact', { content_name: 'Phone Call', content_category: 'Estimate Request' });
  trackGAEvent('phone_call_click', { placement });
  trackAdsConversion('call_click');
};

export const callBusiness = (placement) => {
  trackCallClick(placement);
  window.location.href = `tel:${PHONE_NUMBER}`;
};

// Fires when the Housecall Pro widget is opened. The booking itself happens in
// HCP's iframe and can't be seen from here.
export const trackBookingOpen = (placement) => {
  trackMetaEvent('Lead', { content_name: 'HCP Booking Widget', content_category: 'Estimate Request' });
  trackGAEvent('booking_widget_open', { placement });
  trackAdsConversion('booking_open');
};

export const trackEmailClick = (placement) => {
  trackMetaEvent('Contact', { content_name: 'Email', content_category: 'Estimate Request' });
  trackGAEvent('email_click', { placement });
};
