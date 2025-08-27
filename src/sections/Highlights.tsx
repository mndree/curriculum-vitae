import React from 'react';

const Highlights = () => {
  return (
    <section id="highlights-section" className="relative py-20 bg-black text-white overflow-hidden" data-aos="fade-up">
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-[#0f0f0f] rounded-2xl border border-white/10 p-8 md:p-12 shadow-2xl max-w-6xl mx-auto">
          {/* About Me Section */}
          <div className="mb-10" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-white text-lg font-bold mb-2">About Me</h3>
            <div className="w-16 h-0.5 bg-red-500 mb-8"></div>
            
            <h4 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            🚀 Building Ideas through Code & Creativity
            </h4>
            
            <p className="text-gray-400 text-lg leading-relaxed">
            Hi, I’m Muhammad Andre Juliansyah, a passionate Programmer skilled in both Front-End and Back-End development. 
            I work with React.js, React Native, Next.js, Laravel, and ASP.NET to build modern, scalable, and efficient applications. 
            I’m a fast learner who adapts quickly to new technologies and challenges.
            </p>
          </div>

          {/* What I Do Section */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-white text-lg font-bold mb-4">What I Do?</h3>
            
            {/* Services Grid - Left-aligned */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* UI/UX Design Card */}
                <div className="bg-[#141414] rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 hover:border hover:border-red-500/50 cursor-pointer group">
                  <div className="w-6 h-6 mb-4">
                    <span className="text-red-500 text-lg font-bold group-hover:text-red-400 transition-colors duration-300">&lt;/&gt;</span>
                  </div>
                  <h4 className="text-white text-lg font-bold mb-3 group-hover:text-red-400 transition-colors duration-300">UI/UX Design</h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    Each one showcases my approach and dedication to detail, creativity
                  </p>
                </div>

                {/* Web Development Card */}
                <div className="bg-[#141414] rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 hover:border hover:border-red-500/50 cursor-pointer group">
                  <div className="w-6 h-6 mb-4">
                    <span className="text-red-500 text-lg group-hover:text-red-400 transition-colors duration-300">📍</span>
                  </div>
                  <h4 className="text-white text-lg font-bold mb-3 group-hover:text-red-400 transition-colors duration-300">Web Development</h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    Business consulting consul us to a provide expert advice businesses
                  </p>
                </div>

                {/* Business Solutions Card */}
                <div className="bg-[#141414] rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 hover:border hover:border-red-500/50 cursor-pointer group">
                  <div className="w-6 h-6 mb-4">
                    <span className="text-red-500 text-lg group-hover:text-red-400 transition-colors duration-300">📁</span>
                  </div>
                  <h4 className="text-white text-lg font-bold mb-3 group-hover:text-red-400 transition-colors duration-300">Business Solutions</h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    Each one showcases my approach and dedication to detail, creativity
                  </p>
                </div>

                {/* Profit Partners Card */}
                <div className="bg-[#141414] rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 hover:border hover:border-red-500/50 cursor-pointer group">
                  <div className="w-6 h-6 mb-4">
                    <span className="text-red-500 text-lg group-hover:text-red-400 transition-colors duration-300">💰</span>
                  </div>
                  <h4 className="text-white text-lg font-bold mb-3 group-hover:text-red-400 transition-colors duration-300">Profit Partners</h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    Business consulting consul us to a provide expert advice businesses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;