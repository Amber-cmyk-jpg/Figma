import React from 'react';
import image1 from '../assets/image1.png.png';
import image2 from '../assets/image2.png.png';

export default function Hero() {
  return (
    <section 
      className="relative py-20 px-4 min-h-[900px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/80"></div>
      
      <div className="relative max-w-6xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          A powerful online engagement tool
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          that's intuitive and simple to use.
        </h2>
        
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          With stellar one-click reports and unmatched support, see how Circle will make a difference in your business
        </p>

        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded font-semibold mb-16 transition flex items-center gap-2 mx-auto">
          Get started free <span>→</span>
        </button>

        {/* Image 2 positioned as shown in Figma */}
        <div 
          className="relative mx-auto rounded-lg shadow-2xl overflow-hidden"
          style={{
            width: '974px',
            maxWidth: '100%',
            height: '649px',
            marginTop: '60px'
          }}
        >
          <img 
            src={image2} 
            alt="Circle Platform Dashboard" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
