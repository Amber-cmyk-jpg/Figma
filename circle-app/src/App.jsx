import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Customers from './components/Customers';
import Features from './components/Features';
import Awards from './components/Awards';
import AdvancedTabbedSection from './components/AdvancedTabbedSection';
import EnterpriseCTA from './components/EnterpriseCTA';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-700 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Customers />
        <Features />
        <Awards />
        <AdvancedTabbedSection />
        <EnterpriseCTA />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
