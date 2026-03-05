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
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-cyan-500 text-sm font-semibold uppercase tracking-wide mb-4">
          PRICING
        </p>
        
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Simple, transparent pricing
        </h2>
        
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-16">
          Choose the plan that fits your needs. All plans include a 14-day free trial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 transition ${
                plan.popular 
                  ? 'ring-2 ring-cyan-400 shadow-lg scale-105' 
                  : 'border border-gray-200 hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <span className="bg-cyan-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              
              <h3 className="text-xl font-bold text-gray-900 mt-4">{plan.name}</h3>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-gray-500">/month</span>}
              </div>
              <p className="text-gray-500 text-sm mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <span className="text-cyan-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 rounded font-semibold transition ${
                  plan.popular
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
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

