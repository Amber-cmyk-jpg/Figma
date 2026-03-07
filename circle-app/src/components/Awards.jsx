import React from 'react';
import { motion } from 'framer-motion';
import Award1 from '../assets/Award1.png';
import Award2 from '../assets/Award2.png';
import Award3 from '../assets/Award3.png';
import Award4 from '../assets/Award4.png';
import Award5 from '../assets/Award5.png';
import Award6 from '../assets/Award6.png';

const Awards = () => {
    const awardsList = [
        { id: 1, title: 'Leader', subtitle: 'Summer 2022', color: 'bg-accent-peach', icon: Award1 },
        { id: 2, title: 'Users love us', subtitle: 'G2 Report', color: 'bg-accent-pink', icon: Award2 },
        { id: 3, title: 'High Performer', subtitle: 'Summer 2022', color: 'bg-accent-cyan', icon: Award3 },
        { id: 4, title: 'Best Support', subtitle: 'Summer 2022', color: 'bg-accent-lavender', icon: Award4 },
        { id: 5, title: 'Easiest to Use', subtitle: 'Summer 2022', color: 'bg-accent-yellow', icon: Award5 },
        { id: 6, title: 'Fastest Implementation', subtitle: 'Summer 2022', color: 'bg-accent-orange', icon: Award6 },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-bold uppercase tracking-widest bg-primary/5 mb-6">
                        Awards
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
                        An award winning platform, <span className="text-gray-400">loved by customers.</span>
                    </h2>
                </div>

                {/* CSS Grid for the 6 cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
                >
                    {awardsList.map((award) => (
                        <motion.div
                            key={award.id}
                            variants={itemVariants}
                            className={`${award.color} rounded-[2rem] p-8 flex flex-col items-center justify-center text-center aspect-square shadow-sm hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1`}
                        >
                            {/* Badge Graphic Placeholder */}
                            <div className="w-24 h-24 mb-6 relative">
                                <img 
                                    src={award.icon} 
                                    alt={award.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                    }}
                                />
                            </div>

                            <h3 className="text-xl font-bold text-dark mb-2">G2 {award.title}</h3>
                            <p className="text-dark/70 font-medium">{award.subtitle}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Awards;
