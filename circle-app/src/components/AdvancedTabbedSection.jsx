import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image11 from '../assets/image11.png';
import Mask1 from '../assets/Mask1.png';
import Mask2 from '../assets/Mask2.png';
import Mask3 from '../assets/Mask3.png';
import Mask4 from '../assets/Mask4.png';

const AdvancedTabbedSection = () => {
    const [activeTab, setActiveTab] = useState('Create');

    const tabs = [
        { name: 'Create', icon: Mask1, width: 20, height: 25 },
        { name: 'Distribute', icon: Mask2, width: 21.78, height: 25 },
        { name: 'Collect', icon: Mask3, width: 20.85, height: 20 },
        { name: 'Analyze', icon: Mask4, width: 24.24, height: 22 }
    ];

    const tabContent = {
        Create: {
            subtitle: "Advanced research software",
            description: "Ask the right questions and get the answers you need with the most secure and collaborative survey platform on the market featuring powerful logic, sophisticated analytics, and built-in automation and integration.",
        },
        Distribute: {
            subtitle: "Reach your audience everywhere",
            description: "Seamlessly distribute your surveys across multiple channels including email, social media, SMS, and embedded website links to maximize response rates.",
        },
        Collect: {
            subtitle: "Gather insights in real-time",
            description: "Watch responses roll in instantly. Our robust collection engine ensures data integrity and high availability even during traffic spikes.",
        },
        Analyze: {
            subtitle: "Powerful reporting & analytics",
            description: "Turn raw data into actionable insights with customizable dashboards, sentiment analysis, and automated report generation ready for presentations.",
        }
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* BUILT FOR PEOPLE badge */}
                <div className="flex justify-center mb-4">
                    <div style={{
                        backgroundColor: '#EFFEFF',
                        borderRadius: '60px',
                        padding: '6px 14px',
                    }}>
                        <span style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: '12px',
                            color: '#0CBBC7',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                        }}>
                            Built for people
                        </span>
                    </div>
                </div>

{/* Main Heading — above tabs */}
                <div className="text-center mb-10">
                    <h2 style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '28px',
                        lineHeight: '100%',
                        color: '#000000',
                    }}>
                        <span style={{ fontWeight: 400 }}>See how customers</span>
                        <br />
                        <span style={{ fontWeight: 700 }}>drive impact</span>
                    </h2>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-16 border-b border-gray-200 mb-0 px-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(tab.name)}
                            className="relative pb-4 transition-colors flex items-center gap-2"
                            style={{
                                color: activeTab === tab.name ? '#0CBBC7' : '#676767',
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                fontWeight: activeTab === tab.name ? 600 : 400,
                                fontSize: '16px',
                            }}
                        >
                            <img src={tab.icon} alt="" style={{ width: `${tab.width}px`, height: `${tab.height}px` }} />
                            {tab.name}
                            {activeTab === tab.name && (
                                <motion.div
                                    layoutId="activeTabUnderline"
                                    className="absolute bottom-[-1px] left-0 right-0 h-[3px] rounded-t-full"
                                    style={{ backgroundColor: '#0CBBC7' }}
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Tab Content Area — teal background */}
                <div
                    style={{ backgroundColor: '#ECFFFF', minHeight: '400px' }}
                    className="px-8 py-12"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col lg:flex-row items-center gap-16"
                        >
                            {/* Left Content — left aligned */}
                            <div className="w-full lg:w-1/2 space-y-4 text-left">
                                {/* Tab name as heading */}
                                <h3 style={{
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    fontWeight: 700,
                                    fontSize: '28px',
                                    color: '#1a1a1a',
                                }}>
                                    {activeTab}
                                </h3>

                                {/* Subtitle */}
                                <p style={{
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    color: '#1a1a1a',
                                }}>
                                    {tabContent[activeTab].subtitle}
                                </p>

                                {/* Description */}
                                <p style={{
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '15px',
                                    color: '#555',
                                    lineHeight: '1.7',
                                    maxWidth: '480px',
                                }}>
                                    {tabContent[activeTab].description}
                                </p>

                                <button
                                    className="btn-primary"
                                    style={{
                                        marginTop: '12px',
                                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                                        fontWeight: 700,
                                        fontSize: '16px',
                                        borderRadius: '0px',
                                        padding: '14px 24px',
                                    }}
                                >
                                    Get started for free
                                </button>
                            </div>

                            {/* Right Image — no rounded corners, no shadow */}
                            <div className="w-full lg:w-1/2">
                                <img
                                    src={image11}
                                    alt="Advanced features"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block',
                                    }}
                                />
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default AdvancedTabbedSection;