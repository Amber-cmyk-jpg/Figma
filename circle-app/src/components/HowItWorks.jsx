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
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-primary text-sm font-semibold uppercase tracking-widest mb-4">
          HOW IT WORKS
        </p>
        
        <h2 className="text-center text-4xl md:text-5xl font-bold text-dark mb-6">
          Get started in three simple steps
        </h2>
        
        <p className="text-center text-gray-600 text-xl max-w-2xl mx-auto mb-16">
          Set up your community in minutes and start engaging with your members right away
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-2xl mb-6">
                <span className="text-primary text-3xl font-bold">{step.number}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>
              )}
              <h3 className="text-2xl font-bold text-dark mb-3">{step.title}</h3>
              <p className="text-gray-600 text-lg">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-xl font-semibold text-lg transition shadow-lg hover:shadow-xl">
            Start your free trial
          </button>
        </div>
      </div>
    </section>
  );
}

