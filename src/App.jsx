import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import OurServices from './pages/OurServices';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import GetQuote from './pages/GetQuote';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/get-quote" element={<GetQuote />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
