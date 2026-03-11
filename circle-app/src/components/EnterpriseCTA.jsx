import React from 'react';
import { motion } from 'framer-motion';
import Image16 from '../assets/image16.png';

const EnterpriseCTA = () => {
    return (
        <section className="bg-white overflow-hidden">
            <div className="flex flex-col lg:flex-row items-stretch min-h-[418px]">

                {/* ── Left: Text Content ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
className="w-full lg:w-1/2 flex flex-col justify-center px-16 sm:px-24 lg:px-48 py-16 lg:py-0"
                >
                    {/* Heading */}
                    <h2 style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '32px',
                        fontWeight: 400,
                        lineHeight: '1.25',
                        color: '#1a1a1a',
                        marginBottom: '20px',
                    }}>
                        Looking for a{' '}
                        <strong style={{ fontWeight: 700 }}>solution</strong>
                        <br />
                        for your business?
                    </h2>

                    {/* Subtext */}
                    <p style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '15px',
                        lineHeight: '1.7',
                        color: '#555',
                        marginBottom: '32px',
                        maxWidth: '420px',
                    }}>
                        Check out Sogolytics enterprise feedback and experience management platform.
                    </p>

                    {/* Buttons */}
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <button style={{
                            backgroundColor: '#0CBBC7',
                            color: '#fff',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: '15px',
                            padding: '13px 24px',
                            border: 'none',
                            borderRadius: '0px',
                            cursor: 'pointer',
                        }}>
                            Learn more
                        </button>
                        <button style={{
                            backgroundColor: 'transparent',
                            color: '#0CBBC7',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: '15px',
                            padding: '13px 24px',
                            border: '2px solid #0CBBC7',
                            borderRadius: '0px',
                            cursor: 'pointer',
                        }}>
                            Schedule a consultation
                        </button>
                    </div>
                </motion.div>

                {/* ── Right: Full-bleed Photo ── */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="w-full lg:w-1/2 relative flex items-center justify-center"
                    style={{ minHeight: '418px' }}
                >
                    <img
                        src={Image16}
                        alt="Enterprise workspace"
                        style={{
                            width: '100%',
                            maxWidth: '405px',
                            height: 'auto',
                            aspectRatio: '405/418',
                            objectFit: 'cover',
                            display: 'block',
                        }}
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default EnterpriseCTA;