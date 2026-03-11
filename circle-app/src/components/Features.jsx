import React from 'react';
import { motion } from 'framer-motion';
import featureImage from '../assets/image10.png';

const Features = () => {
  return (
  
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div 
              className="inline-flex items-center justify-center"
              style={{
                width: '95px',
                height: '12px',
                borderRadius: '60px',
                padding: '6px 10px',
                gap: '10px',
                opacity: 1,
                border: '1px solid rgba(12, 187, 199, 0.3)',
                backgroundColor: 'rgba(12, 187, 199, 0.05)',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontStyle: 'Bold',
                fontSize: '8px',
                lineHeight: '100%',
                letterSpacing: '10%',
                textAlign: 'center',
                textTransform: 'uppercase',
                color: '#0CBBC7',
              }}
            >
              OUR PROMISE
            </div>

            <h2 
              className="text-4xl md:text-5xl font-bold text-dark leading-tight"
              style={{
                width: '100%',
                maxWidth: '279px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '28px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#000000',
              }}
            >
              <span style={{ fontWeight: 400 }}>Tool</span>
              <span style={{ fontWeight: 700 }}> built for people.</span>
            </h2>

            <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
              Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom.
            </p>

            <p className="text-xl text-gray-500 leading-relaxed max-w-lg pb-6">
              Circle has 100+ integrations with tools you already use and love.
            </p>

            <button 
              className="btn-primary"
              style={{
                width: '170px',
                height: '50px',
                padding: '14px 20px',
                gap: '10px',
                opacity: 1,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontStyle: 'Bold',
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '1%',
                borderRadius: '0px',
              }}
            >
              Get started free
            </button>
          </motion.div>

          {/* Right Image/Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* The actual image */}
              <img
  src={featureImage}
  alt="Features"
  style={{
    width: '100%',
    height: 'auto',
    display: 'block',
  }}
/>
          
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;
