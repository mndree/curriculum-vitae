import React from 'react';
import './KeyBenefits.css';

const KeyBenefits = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "Efficient Performance",
      description: "I write clean, optimized, and scalable code to ensure fast performance and smooth user experiences."
    },
    {
      icon: "💡",
      title: "Responsive Design",
      description: "I build modern, responsive applications that adapt seamlessly to all devices and screen sizes."
    },
    {
      icon: "🤝",
      title: "Collaborative & Reliable",
      description: "I work closely with teams and clients, ensuring clear communication, timely delivery, and ongoing support."
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Abstract Geometric Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="geometric-shape-benefits"></div>
        <div className="geometric-shape-benefits"></div>
        <div className="geometric-shape-benefits"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card group relative p-8 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-red-500/5 transition-all duration-500"></div>
              
              {/* Icon */}
              <div className="relative z-10 text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-red-500/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
