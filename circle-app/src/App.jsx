import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomersSection from './components/CustomersBackup';
import Features from './components/Features';
import Awards from './components/Awards';
import AdvancedTabbedSection from './components/AdvancedTabbedSection';
import EnterpriseCTA from './components/EnterpriseCTA';
import BlogSection from './components/BlogSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="font-sans antialiased text-gray-700 bg-white">
      <Navbar />
      <main>
        <Hero />
        <CustomersSection />
        <Features />
        <Awards />
        <AdvancedTabbedSection />
        <Testimonials />
        <EnterpriseCTA />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
