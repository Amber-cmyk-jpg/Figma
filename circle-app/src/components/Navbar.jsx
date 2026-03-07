import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import circleLogo from '../assets/circle.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [loginHovered, setLoginHovered] = useState(false);
    const [logoHovered, setLogoHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const leftLinks = [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Resources', href: '#resources' },
    ];

    const rightLinks = [
        { name: 'Company', href: '#company' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'} border-b border-gray-100`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex items-center justify-between h-16">

                    {/* Left nav links */}
                    <div className="hidden md:flex items-center space-x-8 flex-1">
                        {leftLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors whitespace-nowrap"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Centered Logo */}
                    <div
                        className="flex items-center justify-center flex-shrink-0 mx-8 cursor-pointer select-none"
                        onMouseEnter={() => setLogoHovered(true)}
                        onMouseLeave={() => setLogoHovered(false)}
                    >
                        <img 
                            src={circleLogo} 
                            alt="circle" 
                            style={{
                                width: '70.294118881225586px',
                                height: '79.411760330200195px',
                                opacity: 1,
                                color: '#0CBBC7',
                            }}
                        />
                    </div>


                    <div className="hidden md:flex items-center space-x-8 flex-1 justify-end">
                        {rightLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors whitespace-nowrap"
                            >
                                {link.name}
                            </a>
                        ))}

                        <span className="text-gray-300 text-xs tracking-widest select-none">· · ·</span>

                        {/* Login Button */}
                        <button
                            style={{
                                borderColor: loginHovered ? '#00A9B5' : '#0CBBC7',
                                color: loginHovered ? '#00A9B5' : '#0CBBC7',
                                backgroundColor: 'transparent',
                            }}
                            onMouseEnter={() => setLoginHovered(true)}
                            onMouseLeave={() => setLoginHovered(false)}
                            className="px-5 py-1.5 rounded border-2 text-sm font-semibold transition-all duration-200 whitespace-nowrap"
                        >
                            Login
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-600 hover:text-primary focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
                    >
                        <div className="px-6 py-6 space-y-4 flex flex-col">
                            {[...leftLinks, ...rightLinks].map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium text-gray-800 hover:text-primary py-1 border-b border-gray-50"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4">
                                <button
                                    style={{
                                        borderColor: loginHovered ? '#00A9B5' : '#0CBBC7',
                                        color: loginHovered ? '#00A9B5' : '#0CBBC7',
                                        backgroundColor: 'transparent',
                                    }}
                                    onMouseEnter={() => setLoginHovered(true)}
                                    onMouseLeave={() => setLoginHovered(false)}
                                    className="w-full px-5 py-2.5 rounded border-2 font-semibold transition-all duration-200"
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
