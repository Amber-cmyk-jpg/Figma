import React from 'react';

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl">○</span>
        </div>
        <span className="text-2xl font-bold text-dark">circle</span>
      </div>
      
      <div className="hidden md:flex gap-8 items-center">
        <a href="#features" className="text-gray-600 hover:text-primary font-medium transition">Features</a>
        <a href="#pricing" className="text-gray-600 hover:text-primary font-medium transition">Pricing</a>
        <a href="#customers" className="text-gray-600 hover:text-primary font-medium transition">Testimonials</a>
        <a href="#" className="text-gray-600 hover:text-primary font-medium transition">Resources</a>
      </div>

      <button className="btn-login w-[138px] h-[38px] rounded px-5 py-2.5 font-medium transition flex items-center justify-center gap-2.5">
        Login
      </button>
    </nav>
  );
}

