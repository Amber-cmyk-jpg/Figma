import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Customers from './components/Customers'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Customers />
      <CTA />
      <Footer />
    </div>
  )
}

export default App

