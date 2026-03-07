import React from 'react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for getting started',
      features: [
        'Up to 100 members',
        'Basic analytics',
        'Community support',
        '1 workspace',
        'Standard themes'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$29',
      description: 'For growing communities',
      features: [
        'Up to 10,000 members',
        'Advanced analytics',
        'Priority support',
        'Unlimited workspaces',
        'Custom themes',
        'API access',
        'Integrations'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited members',
        'Custom analytics',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee',
        'SSO & SAML',
        'Custom onboarding'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 bg-light">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-primary text-sm font-semibold uppercase tracking-widest mb-4">
          PRICING
        </p>
        
        <h2 className="text-center text-4xl md:text-5xl font-bold text-dark mb-6">
          Simple, transparent pricing
        </h2>
        
        <p className="text-center text-gray-600 text-xl max-w-2xl mx-auto mb-16">
          Choose the plan that fits your needs. All plans include a 14-day free trial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 transition ${
                plan.popular 
                  ? 'ring-4 ring-primary shadow-2xl scale-105 relative' 
                  : 'border border-gray-200 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                  Most Popular
                </span>
              )}
              
              <h3 className="text-2xl font-bold text-dark mt-2">{plan.name}</h3>
              <div className="mt-6 mb-4">
                <span className="text-5xl font-bold text-dark">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-gray-500 text-lg">/month</span>}
              </div>
              <p className="text-gray-500 mb-6">{plan.description}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600">
                    <span className="text-primary text-xl">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 rounded-xl font-semibold text-lg transition ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 hover:bg-primary hover:text-white text-dark'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

