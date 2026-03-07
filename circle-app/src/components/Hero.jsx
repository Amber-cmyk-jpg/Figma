import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import heroBg from '../assets/image1.png';
import heroImg from '../assets/image2.png';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Colour overlay at 10% opacity — 1440×550px */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '1540px',
          maxWidth: '100%',
          height: '550px',
          backgroundColor: '#0CBBC7',
          opacity: 0.10,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Background image at 10% opacity */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '1540px',
          height: '550px',
          maxWidth: '100%',
          objectFit: 'cover',
          opacity: 0.10,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: '44px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
            }}
            className="text-dark mb-6"
          >
            A powerful online engagement tool that's intuitive and simple to use.
          </h1>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '22px',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#878787',
              maxWidth: '447px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            With stellar one-click reports and unmatched support, see how Circle will make a difference in your business.
          </p>

          <div className="flex justify-center items-center">
            <button
              style={{
                display: 'inline-flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '14px 20px',
                height: '48px',
                backgroundColor: '#0CBBC7',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: '14px',
                whiteSpace: 'nowrap',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#00A9B5'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0CBBC7'}
            >
              Get started free
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* image2.png — Oval Bubble Collage */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: '100%',
              padding: '40px 0',
            }}
          >
            <style>{`
              .oval-slice { transition: transform 0.3s ease; }
              .oval-slice:hover { transform: translateY(-14px); z-index: 99 !important; position: relative; }
            `}</style>

            <div style={{ display: "flex", alignItems: "center" }}>
              {Array.from({ length: 5 }).map((_, i) => {
                const OVAL_WIDTH = 200;
                const OVAL_HEIGHT = 280;
                const OVERLAP = 44;
                const offsetX = i * (OVAL_WIDTH - OVERLAP);
                const TOTAL_IMG_WIDTH = OVAL_WIDTH * 5 - OVERLAP * 4;
                
                return (
                  <div
                    key={i}
                    className="oval-slice"
                    style={{
                      marginLeft: i === 0 ? 0 : `-${OVERLAP}px`,
                      zIndex: i,
                      position: "relative",
                      width: `${OVAL_WIDTH}px`,
                      height: `${OVAL_HEIGHT}px`,
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "5px solid white",
                      boxShadow: "0 6px 24px rgba(0,0,0,0.13)",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={heroImg}
                      alt="team"
                      style={{
                        position: "absolute",
                        top: '50%',
                        transform: "translateY(-50%)", 
                        left: `-${offsetX}px`,
                        width: `${TOTAL_IMG_WIDTH}px`,
                        height: `auto`,
                        minHeight: `${OVAL_HEIGHT}px`,
                        objectFit: "cover",
                        objectPosition: "center",
                        display: "block",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
