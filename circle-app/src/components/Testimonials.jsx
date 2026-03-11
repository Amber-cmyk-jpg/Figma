import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import testimonialImage from '../assets/image12.png';
import Paypal from '../assets/paypal.png';

const testimonials = [
    {
        id: 1,
        image: testimonialImage,
        logo: Paypal,
        quote: '"I used to have a bunch of different tools I had to pay for, with Circle you get everything in one bundle."',
        name: 'Michel Dedrick',
        role: 'Senior Conversion Optimizer',
    },
    {
        id: 2,
        image: testimonialImage,
        logo: Paypal,
        quote: '"Circle has completely transformed how we approach customer engagement."',
        name: 'Sarah Johnson',
        role: 'Marketing Director',
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const handleNext = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const handlePrev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    const t = testimonials[current];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-stretch gap-0" style={{ position: 'relative' }}>

                    {/* ── Left: Label + Heading + CTA ── */}
                    <div className="w-full lg:w-1/4 flex flex-col items-start justify-center gap-6 flex-shrink-0 lg:pr-8 mb-10 lg:mb-0">

                        {/* TESTIMONIALS pill */}
                        <div style={{
                            backgroundColor: '#EFFEFF',
                            borderRadius: '60px',
                            padding: '5px 12px',
                            width: 'fit-content',
                        }}>
                            <span style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontWeight: 700,
                                fontSize: '11px',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                color: '#0CBBC7',
                            }}>
                                Testimonials
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: '32px',
                            lineHeight: '1.2',
                            color: '#1a1a1a',
                            fontWeight: 400,
                            margin: 0,
                        }}>
                            See how customers{' '}
                            <strong style={{ fontWeight: 700 }}>drive impact</strong>
                        </h2>

                        {/* CTA Button */}
                        <button style={{
                            backgroundColor: '#0CBBC7',
                            color: '#fff',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: '15px',
                            padding: '13px 22px',
                            borderRadius: '0px',
                            border: 'none',
                            cursor: 'pointer',
                        }}>
                            See case studies
                        </button>
                    </div>

                    {/* ── Center + Right: Overlapping image + card ── */}
                    <div className="relative flex-1" style={{ minHeight: '400px' }}>

                        {/* Nav arrows — top right corner */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            zIndex: 10,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                        }}>
                            <button
                                onClick={handlePrev}
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    border: '2px solid #ccc',
                                    backgroundColor: 'transparent',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                }}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                    stroke="#999" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    backgroundColor: '#0CBBC7',
                                    border: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                }}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                    stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </button>
                        </div>

                        {/* Image — takes up left ~65% of this container */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '62%',
                            height: '100%',
                        }}>
                            <img
                                src={t.image}
                                alt="Testimonial"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                            {/* Play button */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '64px',
                                height: '64px',
                                borderRadius: '50%',
                                backgroundColor: '#0CBBC7',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 4px 20px rgba(12,187,199,0.4)',
                            }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <polygon points="6,3 20,12 6,21" />
                                </svg>
                            </div>
                        </div>

                        {/* Quote card — overlaps image on the right */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.35 }}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: 0,
                                    transform: 'translateY(-50%)',
                                    width: '45%',
                                    backgroundColor: '#ECFFFF',
                                    padding: '28px 28px 32px',
                                    zIndex: 5,
                                    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                                }}
                            >
                                {/* Company logo */}
                                <div style={{ marginBottom: '16px' }}>
                                    <img
                                        src={t.logo}
                                        alt="Company logo"
                                        style={{ height: '24px', objectFit: 'contain' }}
                                    />
                                </div>

                                {/* Quote */}
                                <p style={{
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    fontSize: '15px',
                                    lineHeight: '1.7',
                                    color: '#1a1a1a',
                                    marginBottom: '20px',
                                }}>
                                    {t.quote}
                                </p>

                                {/* Author */}
                                <div>
                                    <p style={{
                                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                                        fontWeight: 700,
                                        fontSize: '14px',
                                        color: '#1a1a1a',
                                        marginBottom: '2px',
                                    }}>
                                        {t.name}
                                    </p>
                                    <p style={{
                                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                                        fontWeight: 400,
                                        fontSize: '13px',
                                        color: '#666',
                                    }}>
                                        {t.role}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;