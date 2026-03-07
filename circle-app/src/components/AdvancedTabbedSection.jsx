import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AdvancedTabbedSection = () => {
    const [activeTab, setActiveTab] = useState('Create');

    const tabs = ['Create', 'Distribute', 'Collect', 'Analyze'];

    const tabContent = {
        Create: {
            title: "Advanced research software",
            description: "Ask the right questions and get the answers you need with the most secure and collaborative survey platform on the market featuring powerful logic, quotas, and custom email.",
            imageColor: "bg-blue-50"
        },
        Distribute: {
            title: "Reach your audience everywhere",
            description: "Seamlessly distribute your surveys across multiple channels including email, social media, SMS, and embedded website links to maximize response rates.",
            imageColor: "bg-green-50"
        },
        Collect: {
            title: "Gather insights in real-time",
            description: "Watch responses roll in instantly. Our robust collection engine ensures data integrity and high availability even during traffic spikes.",
            imageColor: "bg-yellow-50"
        },
        Analyze: {
            title: "Powerful reporting & analytics",
            description: "Turn raw data into actionable insights with customizable dashboards, sentiment analysis, and automated report generation ready for presentations.",
            imageColor: "bg-purple-50"
        }
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Tab Navigation */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-16 mb-16 border-b border-gray-100 px-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative pb-4 text-xl font-bold transition-colors ${activeTab === tab ? 'text-primary' : 'text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="activeTabUnderline"
                                    className="absolute bottom-[-1px] left-0 right-0 h-1 bg-primary rounded-t-full"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Tab Content Area */}
                <div className="relative min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col lg:flex-row items-center gap-16 absolute inset-0 w-full h-full"
                        >
                            {/* Left Content */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <h2 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
                                    <span className="block mb-2">{activeTab}</span>
                                    <span className="text-gray-400 text-3xl md:text-4xl">{tabContent[activeTab].title}</span>
                                </h2>

                                <p className="text-xl text-gray-500 leading-relaxed max-w-lg mb-8">
                                    {tabContent[activeTab].description}
                                </p>

                                <button className="btn-primary text-lg">
                                    Get started for free
                                </button>
                            </div>

                            {/* Right Image/Graphic Container */}
                            <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
                                <div className={`w-full aspect-video rounded-3xl shadow-2xl border border-gray-100 ${tabContent[activeTab].imageColor} relative overflow-hidden flex items-center justify-center transition-colors duration-500`}>
                                    {/* Simulating the workspace image with hands typing on a laptop */}
                                    <div className="absolute bottom-0 w-3/4 h-2/3 bg-white rounded-t-xl shadow-lg border-t border-x border-gray-200 flex flex-col items-center p-4 transform translate-y-8">
                                        {/* Laptop Screen abstract */}
                                        <div className="w-full flex-1 bg-gray-100 rounded-lg flex flex-col gap-2 p-3">
                                            <div className="w-1/3 h-4 bg-primary/20 rounded"></div>
                                            <div className="w-full h-2 bg-gray-200 rounded mt-2"></div>
                                            <div className="w-5/6 h-2 bg-gray-200 rounded"></div>
                                            <div className="w-4/6 h-2 bg-gray-200 rounded mb-4"></div>

                                            <div className="flex gap-2 h-full">
                                                <div className="w-1/2 h-full bg-white rounded border border-gray-200 shadow-sm flex items-center justify-center">
                                                    <div className="w-10 h-10 rounded-full bg-accent-peach/50"></div>
                                                </div>
                                                <div className="w-1/2 h-full bg-white rounded border border-gray-200 shadow-sm flex items-center justify-center">
                                                    <div className="w-10 h-10 rounded-full bg-accent-cyan/50"></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Laptop Base */}
                                        <div className="w-[110%] h-4 bg-gray-300 rounded-b-lg mt-1"></div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default AdvancedTabbedSection;
