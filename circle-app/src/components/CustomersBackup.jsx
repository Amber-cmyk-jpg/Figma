import React from 'react';
import { motion } from 'framer-motion';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';

const CustomersSection = () => {
  const logos = [
    { src: image4, alt: 'Capgemini', id: 1 },
    { src: image5, alt: 'Yamaha', id: 2 },
    { src: image6, alt: 'Biocon', id: 3 },
    { src: image7, alt: 'Dell', id: 4 },
    { src: image8, alt: 'CK Birla Group', id: 5 },
    { src: image3, alt: 'Shell', id: 6 },
  ];

  const stats = [
    { label: '18281', suffix: ' signed up last month' },
    { label: 'GDPR-', suffix: ' & CCPA-ready' },
    { label: 'Leader@G2', suffix: ' Summer' },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* OUR CUSTOMERS - Pill Badge */}
        <div className="flex justify-center mb-6">
          <div
            style={{
              backgroundColor: '#EFFEFF',
              borderRadius: '60px',
              padding: '6px 14px',
              width: 'fit-content',
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: '14px',
                color: '#0CBBC7',
                letterSpacing: '0.02em',
              }}
            >
              OUR CUSTOMERS
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="flex justify-center mb-10">
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '36px',
              fontWeight: 400,
              color: '#1a1a1a',
              textAlign: 'center',
              lineHeight: '1.2',
            }}
          >
            Trusted by{' '}
            <strong style={{ fontWeight: 700 }}>100,000+ customers</strong>
            {' '}in 90+ countries
          </h2>
        </div>

        {/* Logos Row */}
        <div
          className="flex justify-center items-center flex-wrap gap-10 mb-10"
          style={{ maxWidth: '1100px', margin: '0 auto 2.5rem auto' }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  height: '40px',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex items-center gap-2"
            >
              {/* Teal checkmark */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8L6.5 11.5L13 5"
                  stroke="#0CBBC7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '14px',
                  color: '#1a1a1a',
                }}
              >
                <span style={{ color: '#0CBBC7', fontWeight: 600 }}>
                  {stat.label}
                </span>
                {stat.suffix}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomersSection;

