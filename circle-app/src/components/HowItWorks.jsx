import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Sign Up',
      description: 'Create your free account in just a few clicks. No credit card required.'
    },
    {
      number: '02',
      title: 'Set Up',
      description: 'Customize your community space with our easy-to-use tools and templates.'
    },
    {
      number: '03',
      title: 'Grow',
      description: 'Invite members and watch your community flourish with our growth tools.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-cyan-500 text-sm font-semibold uppercase tracking-wide mb-4">
          HOW IT WORKS
        </p>
        
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-16">
          Get started in three simple steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-100 rounded-full mb-6">
                <span className="text-cyan-500 text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded font-semibold transition">
            Start your free trial
          </button>
        </div>
      </div>
    </section>
  );
}

