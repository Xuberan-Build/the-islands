// Multi-touch attribution kept in the visitor's browser.
//
// Each visit that arrives from somewhere (a QR scan, a Google or Facebook ad,
// a tagged link, another website) or that starts after 30+ minutes away is
// recorded as a "touch". Call and booking events then carry the first touch,
// the last touch, and the whole path, e.g. "qr:hgr-kiawah > google_ad > direct",
// so we can see that a door hanger started a lead that an ad later closed.
//
// Touches are kept for 90 days (Google Ads' longest conversion window).
// Nothing leaves the browser except as parameters on our own analytics events.

const STORAGE_KEY = 'islands_attribution_v2';
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;
const NEW_VISIT_AFTER_MS = 30 * 60 * 1000;
const MAX_TOUCHES = 10;
const TAG_PARAMS = [
  'qr',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
  'gclid', 'gbraid', 'wbraid', 'fbclid',
];
const CLICK_ID_PARAMS = ['gclid', 'gbraid', 'wbraid', 'fbclid'];

const clip = (value, max = 100) => String(value).slice(0, max); // GA4 value limit is 100

const now = () => Date.now();

const readStore = () => {
  try {
    const store = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    if (store && Array.isArray(store.touches)) {
      store.touches = store.touches.filter((t) => now() - t.ts < MAX_AGE_MS);
      if (store.touches.length > 0) {
        return store;
      }
    }
  } catch (e) {
    // Storage blocked or corrupt: start fresh.
  }
  return null;
};

const writeStore = (store) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch (e) {
    // Storage blocked: attribution is skipped, event tracking still works.
  }
};

const referrerHost = () => {
  if (!document.referrer) {
    return '';
  }
  try {
    const host = new URL(document.referrer).hostname.replace(/^www\./, '');
    return host === window.location.hostname.replace(/^www\./, '') ? '' : host;
  } catch (e) {
    return '';
  }
};

// A short, readable name for where this visit came from.
const labelFor = (tags, refHost) => {
  if (tags.qr) return `qr:${tags.qr}`;
  if (tags.gclid || tags.gbraid || tags.wbraid) return 'google_ad';
  if (tags.fbclid) return 'facebook_ad';
  if (tags.utm_source) {
    return tags.utm_medium ? `${tags.utm_source}/${tags.utm_medium}` : tags.utm_source;
  }
  if (refHost) {
    if (/google\./.test(refHost)) return 'google_organic';
    if (/bing\.com|duckduckgo\.com|yahoo\./.test(refHost)) return 'search_organic';
    if (/facebook\.com|instagram\.com|fb\.me/.test(refHost)) return 'facebook';
    return `ref:${refHost}`;
  }
  return 'direct';
};

export const captureAttribution = () => {
  if (typeof window === 'undefined') {
    return;
  }

  const query = new URLSearchParams(window.location.search);
  const tags = {};
  TAG_PARAMS.forEach((key) => {
    const value = query.get(key);
    if (value) {
      tags[key] = clip(value);
    }
  });
  const refHost = referrerHost();
  const label = labelFor(tags, refHost);

  const store = readStore() || { touches: [], clickIds: {}, lastSeen: 0 };
  const lastTouch = store.touches[store.touches.length - 1];
  const isNewVisit = !lastTouch || now() - store.lastSeen > NEW_VISIT_AFTER_MS;
  const cameFromSomewhere = label !== 'direct';

  // Record a touch for a tagged/referred arrival, or for a direct return
  // visit after a break. A page reload mid-visit adds nothing.
  if (cameFromSomewhere || isNewVisit) {
    const repeatsLast = lastTouch && lastTouch.label === label && !isNewVisit;
    if (!repeatsLast) {
      store.touches.push({
        label: clip(label, 60),
        landing_page: clip(window.location.pathname, 60),
        campaign: tags.utm_campaign || undefined,
        ts: now(),
      });
      store.touches = store.touches.slice(-MAX_TOUCHES);
    }
  }

  CLICK_ID_PARAMS.forEach((key) => {
    if (tags[key]) {
      store.clickIds[key] = { value: tags[key], ts: now() };
    }
  });

  store.lastSeen = now();
  writeStore(store);
};

// "a > b > c", trimmed from the front if it would pass GA4's 100-char limit.
const pathString = (touches) => {
  let labels = touches.map((t) => t.label);
  let path = labels.join(' > ');
  while (path.length > 100 && labels.length > 2) {
    labels = labels.slice(1);
    path = `… > ${labels.join(' > ')}`;
  }
  return clip(path);
};

// Event parameters for GA4 call/booking events.
export const getAttributionParams = () => {
  if (typeof window === 'undefined') {
    return {};
  }

  const store = readStore();
  if (!store) {
    return {};
  }
  store.lastSeen = now();
  writeStore(store);

  const { touches, clickIds } = store;
  const first = touches[0];
  const last = touches[touches.length - 1];
  const daysToAction = Math.floor((now() - first.ts) / (24 * 60 * 60 * 1000));

  const params = {
    first_touch: first.label,
    first_landing_page: first.landing_page,
    first_campaign: first.campaign,
    last_touch: last.label,
    last_campaign: last.campaign,
    touch_path: pathString(touches),
    touch_count: touches.length,
    days_since_first_touch: daysToAction,
    from_google_ad: clickIds.gclid || clickIds.gbraid || clickIds.wbraid ? 'yes' : undefined,
    from_facebook_ad: clickIds.fbclid ? 'yes' : undefined,
  };

  return Object.fromEntries(Object.entries(params).filter(([, value]) => value !== undefined && value !== ''));
};

// Full record, including raw click IDs, for a future lead form or offline
// conversion upload to Google Ads.
export const getStoredAttribution = () => (typeof window === 'undefined' ? null : readStore());

// Call on in-app page changes so a long browse isn't mistaken for a new visit.
export const markActive = () => {
  if (typeof window === 'undefined') {
    return;
  }
  const store = readStore();
  if (store) {
    store.lastSeen = now();
    writeStore(store);
  }
};
