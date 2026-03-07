import React from 'react';
import { motion } from 'framer-motion';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';
import stat1821 from '../assets/1821.png';
import statGDPR from '../assets/GDPR.png';
import statLeader from '../assets/Leader.png';

const Customers = () => {
  // Customer logos as images
  const logos = [
    { src: image3, alt: 'Customer 3', id: 1 },
    { src: image4, alt: 'Customer 4', id: 2 },
    { src: image5, alt: 'Customer 5', id: 3 },
    { src: image6, alt: 'Customer 6', id: 4 },
    { src: image7, alt: 'Customer 7', id: 5 },
    { src: image8, alt: 'Customer 8', id: 6 },
  ];

  const stats = [
    { src: stat1821, alt: '1821 signed up last month' },
    { src: statGDPR, alt: 'GDPR- & CCPA-ready' },
    { src: statLeader, alt: 'Leader @ G2 Summer' }
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* OUR CUSTOMERS - Pill Badge */}
        <div className="flex justify-center mb-8">
          <div 
            className="flex items-center gap-2.5 px-2.5 py-1.5"
            style={{
              backgroundColor: '#EFFEFF',
              borderRadius: '60px',
              width: 'fit-content',
              height: 'fit-content',
            }}
          >
            <span 
              className="text-sm font-bold"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#0CBBC7',
              }}
            >
              OUR CUSTOMERS
            </span>
          </div>
        </div>

        {/* Logos Ribbon - Customer Images (Inline) */}
        <div className="flex justify-center items-center gap-16 mb-12" style={{ width: '1140px', maxWidth: '100%', margin: '0 auto' }}>
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="cursor-pointer flex-shrink-0"
            >
              <img 
                src={logo.src} 
                alt={logo.alt}
                style={{
                  width: 'auto',
                  height: '53px',
                  objectFit: 'contain',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats / Trust Indicators */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12" style={{ width: '147px' }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + (index * 0.1) }}
              className="flex items-center"
              style={{ width: '147px', height: '18px', opacity: 1 }}
            >
              <img 
                src={stat.src} 
                alt={stat.alt}
                style={{
                  width: '147px',
                  height: '18px',
                  objectFit: 'contain',
                }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Customers;
