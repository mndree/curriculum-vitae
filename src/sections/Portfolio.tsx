import React, { useState } from 'react';
import { portfolioItems } from '../data/portofolio';
import { filters } from '../data/portofolio';

const Portfolio = () => {
  const [active, setActive] = useState('all');
  const filtered =
    active === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <section id="portfolio-section" className="py-20 bg-black text-white" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-red-500 font-semibold uppercase tracking-widest text-sm">Latest Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">Transforming Ideas into Exceptional</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Business consulting consultants provide expert advice and guide businesses to help them improve their performance, efficiency, and organizational health.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActive(filter.value)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all border border-transparent ${
                  active === filter.value
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-200 hover:bg-red-700 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="bg-black/70 border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col gap-4"
              data-aos="zoom-in-up"
              data-aos-delay={100 * idx}
            >
              <div className="rounded-xl overflow-hidden mb-4">
                <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
              </div>
              <div className="font-bold text-lg">
                {item.title}
              </div>
              <div className="text-sm text-gray-300 mb-2">
                {item.subtitle}
              </div>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-end">
                <button className="bg-gray-900 hover:bg-red-600 text-white px-5 py-2 rounded-full font-semibold text-sm flex items-center gap-2 transition-all">
                  View Design <span className="text-lg">&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 