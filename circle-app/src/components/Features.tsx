import React from 'react';

export default function Features() {
  const features = [
    {
      icon: '📊',
      title: 'One-Click Reports',
      description: 'Generate comprehensive reports instantly with just one click. Save time and get the insights you need quickly.'
    },
    {
      icon: '💬',
      title: 'Unmatched Support',
      description: 'Get 24/7 dedicated support from our team of experts. We\'re here to help you succeed.'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your data is protected with enterprise-grade security. GDPR and CCPA compliant.'
    },
    {
      icon: '🚀',
      title: 'Fast Integration',
      description: 'Set up in minutes, not days. Our intuitive platform integrates seamlessly with your existing tools.'
    },
    {
      icon: '📈',
      title: 'Advanced Analytics',
      description: 'Get deep insights into your community engagement with powerful analytics and visualization tools.'
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'Connect with customers from 90+ countries with multi-language support and localized content.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-cyan-500 text-sm font-semibold uppercase tracking-wide mb-4">
          FEATURES
        </p>
        
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Everything you need to grow
        </h2>
        
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-16">
          Powerful features designed to help you build, manage, and grow your online community
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

