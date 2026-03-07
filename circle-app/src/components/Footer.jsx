import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Logo and Map Area */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center flex-shrink-0 cursor-pointer mb-6">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
                <div className="w-3 h-3 bg-dark rounded-full"></div>
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">circle</span>
            </div>

            <div className="relative w-full max-w-sm">
              <div className="text-gray-400 mb-2">Made with lots of ❤️ in San Francisco</div>
              {/* Simplified Map Graphic representation (using CSS shapes) */}
              <div className="h-40 w-full relative overflow-hidden rounded-xl bg-dark-second flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCc+PGNpcmNsZSBjeD0nMjAnIGN5PScyMCcgcj0nMicgZmlsbD0nI2ZmZicvPjwvc3ZnPg==')]"></div>
                <div className="text-primary font-bold tracking-widest text-xl opacity-50">Map Placeholder</div>
              </div>
            </div>
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
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400">
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <span>© 2022 Circle. All rights reserved.</span>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Data & Security</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
