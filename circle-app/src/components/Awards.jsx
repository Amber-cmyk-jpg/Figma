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
    { id: 1, title: 'Market leader across\n18 categories', color: '#FFF5F3', icon: Award1 },
    { id: 2, title: 'Most loved SaaS tool\nin 2021', color: '#FFF0F9', icon: Award2 },
    { id: 3, title: 'Category leader in\n2022', color: '#ECFFFF', icon: Award3 },
    { id: 4, title: 'Most recommended\ntool in 2021', color: '#F6F4FF', icon: Award4 },
    { id: 5, title: 'Champion in survey\ntool 2022', color: '#FFF9E7', icon: Award5 },
    { id: 6, title: 'Top performer spring\n2021', color: '#FFEDE4', icon: Award6 },
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
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-primary/28 text-primary text-sm font-bold uppercase tracking-widest bg-primary/5 mb-6">
                        Awards
                    </div>
<h2 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
<span style={{ fontStyle: 'regular',fontSize: '30px', fontFamily: 'Plus Jakarta Sans' , fontWeight: 400 , letterSpacing: '0%',}}>An </span>
<span style={{ fontStyle: 'bold',fontSize: '30px', fontFamily: 'Plus Jakarta Sans' , fontWeight: 700 , letterSpacing: '0%',}}>award winning{' '} </span> 
<span style={{ fontStyle: 'regular',fontSize: '30px', fontFamily: 'Plus Jakarta Sans' , fontWeight: 400 , letterSpacing: '0%',}}>platform,{' '} </span>
<span style={{ fontStyle: 'bold',fontSize: '30px', fontFamily: 'Plus Jakarta Sans' , fontWeight: 700 , letterSpacing: '0%',}}>loved by customers.</span>
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
    style={{ backgroundColor: award.color }}
    className="rounded-[2rem] p-8 flex flex-col items-center justify-center text-center aspect-square"
>
                            {/* Badge Image */}
                            <div className="w-28 h-28 mb-6">
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

                            {/* Title only — matching Figma */}
                            <h3
                                style={{
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    fontWeight: 700,
                                    fontSize: '18px',
                                    lineHeight: '1.4',
                                    color: '#1a1a1a',
                                    whiteSpace: 'pre-line',
                                }}
                            >
                                {award.title}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Awards;