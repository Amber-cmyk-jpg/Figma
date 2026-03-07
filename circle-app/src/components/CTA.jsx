import React from 'react';

export default function CTA() {
  return (
    <section className="py-24 px-4 bg-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to build your community?
        </h2>
        <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
          Join thousands of companies that use Circle to build thriving online communities. Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-xl font-semibold text-lg transition shadow-lg hover:shadow-xl">
            Get started free
          </button>
          <button className="border-2 border-gray-600 text-white hover:border-white px-10 py-4 rounded-xl font-semibold text-lg transition">
            Book a demo
          </button>
        </div>
      </div>
    </section>
  );
}

