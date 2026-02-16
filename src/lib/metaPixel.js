const DEFAULT_PIXEL_ID = '944899791305016';

const getPixelId = () => {
  const envId = process.env.REACT_APP_META_PIXEL_ID;
  if (typeof envId === 'string' && envId.trim().length > 0) {
    return envId.trim();
  }
  return DEFAULT_PIXEL_ID;
};

export const initMetaPixel = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const pixelId = getPixelId();
  if (!pixelId) {
    return;
  }

  if (window.__metaPixelInitialized) {
    return;
  }

  window.__metaPixelInitialized = true;

  if (!window.fbq) {
    const fbq = function () {
      fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
    };
    fbq.queue = [];
    fbq.version = '2.0';
    fbq.loaded = true;

    window.fbq = fbq;
    if (!window._fbq) {
      window._fbq = fbq;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';

    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }
  }

  window.fbq('init', pixelId);
};

export const trackPageView = () => {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') {
    return;
  }

  const path = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (window.__metaPixelLastPath === path) {
    return;
  }
  window.__metaPixelLastPath = path;

  window.fbq('track', 'PageView');
};

export const trackEvent = (name, params = {}) => {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') {
    return;
  }

  window.fbq('track', name, params);
};
