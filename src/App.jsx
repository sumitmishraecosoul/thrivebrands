import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Header from './layouts/Headers';
import Footer from './layouts/Footer';
import Home from './pages/Home';
import React from 'react';
import About from './pages/About';
import Services from './pages/Services';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-[calc(100vh-200px)]">
        {/* <Router> */}
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/events" element={<Events/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          
        </Routes>
        {/* </Router> */}
      </main>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;