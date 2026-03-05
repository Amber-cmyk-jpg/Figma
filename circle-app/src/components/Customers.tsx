import React from 'react';

export default function Customers() {
  const logos = [
    { name: 'Capgemini', initials: 'CG' },
    { name: 'Yamaha', initials: 'YA' },
    { name: 'Biocon', initials: 'BC' },
    { name: 'Dell', initials: 'DE' },
    { name: 'CK Birla Group', initials: 'CK' },
    { name: 'Shell', initials: 'SH' }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-cyan-500 text-sm font-semibold uppercase tracking-wide mb-6">
          OUR CUSTOMERS
        </p>

        <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-16">
          Trusted by <span className="text-cyan-500">100,000+</span> customers in <span className="text-cyan-500">90+</span> countries
        </h3>

        {/* Customer Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center mb-12">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 hover:border-cyan-400 hover:bg-cyan-50 transition">
                <span className="text-gray-700 font-bold text-sm text-center px-2">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-cyan-500 text-xl">✓</span>
            <span className="text-gray-700">15281 signed up last month</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-500 text-xl">✓</span>
            <span className="text-gray-700">GDPR & CCPA-ready</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-500 text-xl">✓</span>
            <span className="text-gray-700">Leader@G2 SaaS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
