import React from 'react';
import RectangleImage from '../assets/Rectangle.png';
import LinkedinIcon from '../assets/linkedin.png';
import TwitterIcon from '../assets/twitter.png';

const Footer = () => {
  return (
    <footer className="text-white pt-20 pb-10" style={{ backgroundColor: '#333030' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Map Area */}
<div className="lg:col-span-2 relative flex items-center justify-center" style={{ height: '210px', width: '280px' }}>
  {/* Rectangle image */}
  <img
    src={RectangleImage}
    alt="USA Map"
    className="absolute top-0 left-0 w-full h-full object-contain"
  />

  {/* Text overlay */}
  <p className="absolute top-22 left1/2 transform -translate-x1/2 text-xs font-bold text-white">
    Made with lots of ❤️ in San Francisco
  </p>
</div>

           
          

          {/* Products Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Products</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Delta</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sigma</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Zeta</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Alpha</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Acumen</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Resources</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Help</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Training Videos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Request a Demo</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Create Surveys</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Quiz Maker</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">

          {/* Copyright — left */}
          <span>Copyright 2022 Circle. All rights reserved.</span>

          {/* Social Icons — center */}
          <div className="flex items-center space-x-3">
            <a href="#" aria-label="LinkedIn">
              <img src={LinkedinIcon} alt="LinkedIn" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
            </a>
            <a href="#" aria-label="Twitter">
              <img src={TwitterIcon} alt="Twitter" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
            </a>
          </div>

          {/* Legal Links — right */}
          <div className="flex items-center space-x-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Data & Security</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;