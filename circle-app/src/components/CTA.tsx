import React from 'react';

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to build your community?
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of companies that use Circle to build thriving online communities. Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded font-semibold transition">
            Get started free
          </button>
          <button className="border-2 border-gray-600 text-white hover:border-white px-8 py-3 rounded font-semibold transition">
            Book a demo
          </button>
        </div>
      </div>
    </section>
  );
}

