import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ContactSection from './components/Contact';
import Destinations from './components/Destinations'; // ✅ Add this
import ContactPage from './pages/Contact';

function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Destinations /> {/* ✅ Add this */}
      <Gallery />
      <ContactSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={
          <>
            <TopBar />
            <Navbar />
            <ContactPage />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;

