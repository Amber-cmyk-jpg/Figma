import React from 'react';
import { motion } from 'framer-motion';

const EnterpriseCTA = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -z-10 rounded-l-full opacity-50 block md:hidden lg:block lg:w-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
                            Looking for a <span className="text-primary relative inline-block">
                                solution
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent-yellow z-[-1]" viewBox="0 0 100 20" preserveAspectRatio="none">
                                    <path d="M0 10 Q 50 20, 100 10" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span> for your business?
                        </h2>

                        <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
                            Check out Sogolytics enterprise feedback and experience management platform.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="btn-primary">
                                Learn more
                            </button>
                            <button className="btn-outline">
                                Schedule a consultation
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Image/Graphic Area */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
                    >
                        {/* Flat-lay workspace representation */}
                        <div className="relative w-full max-w-lg aspect-square bg-gray-50 rounded-[40px] p-8 shadow-inner border border-gray-100 overflow-hidden group">

                            {/* Decorative elements simulating a desk setup */}
                            <div className="absolute top-[-5%] right-10 w-40 h-60 bg-white shadow-xl rounded-xl rotate-12 border border-gray-200 group-hover:rotate-6 transition-transform duration-700">
                                <div className="w-full h-full p-3 flex flex-col gap-2 opacity-50">
                                    <div className="w-1/2 h-2 bg-gray-300 rounded"></div>
                                    <div className="w-full h-2 bg-gray-200 rounded"></div>
                                    <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                                </div>
                            </div>

                            <div className="absolute bottom-10 left-[-5%] w-64 h-40 bg-dark rounded-xl shadow-2xl -rotate-6 border-4 border-gray-800 flex items-center justify-center overflow-hidden group-hover:-rotate-3 transition-transform duration-700 z-10">
                                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 border-t border-l border-gray-600">
                                    {/* Tablet screen abstract */}
                                    <div className="w-full h-4 bg-gray-800 border-b border-gray-700 flex items-center px-2">
                                        <div className="w-2 h-2 rounded-full bg-red-400 mr-1"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-400 mr-1"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="p-4 flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/80"></div>
                                        <div className="flex-1 flex flex-col gap-2">
                                            <div className="w-full h-3 bg-gray-600 rounded"></div>
                                            <div className="w-2/3 h-3 bg-gray-600 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-accent-peach/40 blur-xl"></div>
                            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-primary/10 blur-2xl"></div>

                            {/* Foreground prominent element (e.g., notebook or phone) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 bg-white rounded-lg shadow-2xl border-l-[8px] border-primary z-20 flex flex-col justify-between p-4 transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                <div className="w-8 h-8 rounded-full border-2 border-primary/30 mx-auto mt-4"></div>
                                <div className="space-y-2 mb-4">
                                    <div className="w-full h-1 bg-gray-100 rounded"></div>
                                    <div className="w-full h-1 bg-gray-100 rounded"></div>
                                    <div className="w-3/4 h-1 bg-gray-100 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default EnterpriseCTA;
