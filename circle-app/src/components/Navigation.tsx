import React from 'react';

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">○</span>
        </div>
        <span className="text-xl font-bold text-gray-900">circle</span>
      </div>
      
      <div className="hidden md:flex gap-8 items-center">
        <a href="#" className="text-gray-700 hover:text-gray-900">Features</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Pricing</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Testimonials</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Resources</a>
      </div>

      <button className="px-6 py-2 border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-50 transition">
        Login
      </button>
    </nav>
  );
}
