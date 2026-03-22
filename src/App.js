import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import CityPage from './pages/cities/CityPage';
import { trackPageView } from './lib/metaPixel';

import {
  westAshley,
  jamesIsland,
  follyBeach,
  downtown,
  johnsIsland,
  kiawah,
  isleOfPalms,
  sullivansIsland,
  mountPleasant,
  northMountPleasant,
  danielIsland,
} from './data/cityData';

const PageViewTracker = () => {
  const location = useLocation();
  useEffect(() => {
    trackPageView();
  }, [location.pathname, location.search, location.hash]);
  return null;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <PageViewTracker />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* City landing pages */}
            <Route path="/rug-cleaning-west-ashley"          element={<CityPage city={westAshley} />} />
            <Route path="/rug-cleaning-james-island"         element={<CityPage city={jamesIsland} />} />
            <Route path="/rug-cleaning-folly-beach"          element={<CityPage city={follyBeach} />} />
            <Route path="/rug-cleaning-downtown-charleston"  element={<CityPage city={downtown} />} />
            <Route path="/rug-cleaning-johns-island"         element={<CityPage city={johnsIsland} />} />
            <Route path="/rug-cleaning-kiawah-island"        element={<CityPage city={kiawah} />} />
            <Route path="/rug-cleaning-isle-of-palms"        element={<CityPage city={isleOfPalms} />} />
            <Route path="/rug-cleaning-sullivans-island"     element={<CityPage city={sullivansIsland} />} />
            <Route path="/rug-cleaning-mount-pleasant"       element={<CityPage city={mountPleasant} />} />
            <Route path="/rug-cleaning-north-mount-pleasant" element={<CityPage city={northMountPleasant} />} />
            <Route path="/rug-cleaning-daniel-island"        element={<CityPage city={danielIsland} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
