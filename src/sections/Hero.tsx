import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';
import { useRef } from 'react';

const screenshots = [
  // Replace these with your actual screenshot URLs
  'https://i.imgur.com/7OONzzq.jpeg',
  'https://i.imgur.com/7OONzzq.jpeg',
  'https://i.imgur.com/7OONzzq.jpeg',
  'https://i.imgur.com/7OONzzq.jpeg',
];

const Hero = () => {
  const arrowRef = useRef<HTMLDivElement>(null);
  const handleArrowClick = () => {
    const nextSection = document.getElementById('highlights-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden px-4 py-20">
      {/* Abstract Geometric Background */}
      <div className="abstract-geometric-bg">
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
      </div>
      {/* Floating Screenshots with Animation */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <img src={screenshots[0]} alt="screenshot1" className="absolute top-8 left-8 w-80 rounded-2xl shadow-2xl hidden md:block floating-screenshot-1" />
        <img src={screenshots[1]} alt="screenshot2" className="absolute top-8 right-8 w-80 rounded-2xl shadow-2xl hidden md:block floating-screenshot-2" />
        <img src={screenshots[2]} alt="screenshot3" className="absolute bottom-8 left-24 w-80 rounded-2xl shadow-2xl hidden md:block floating-screenshot-3" />
        <img src={screenshots[3]} alt="screenshot4" className="absolute bottom-8 right-24 w-80 rounded-2xl shadow-2xl hidden md:block floating-screenshot-4" />
      </div>
      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-7xl mx-auto">
        {/* Rotating Dots at heading corners */}
        <div className="rotating-dot-corners pointer-events-none absolute w-full h-full top-0 left-0">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
          <span className="dot dot4"></span>
        </div>
        <span className="text-6xl mb-4">👋</span>
        <h1 className="text-6xl md:text-6xl font-extrabold leading-tight mb-2">
          Hi, I'm Muhammad Andre Juliansyah
        </h1>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-2">
          A Passionate <span className="text-red-500 inline-block">
            <Typewriter
              words={['Front End Developer', 'Back End Developer']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
          From backend logic to frontend magic, I bring ideas to life across the stack. Let’s build something great together.
        </p>
        {/* Down Arrow - Outlined Circle with Arrow, scrolls to next section */}
        <div ref={arrowRef} className="mt-12 cursor-pointer group" onClick={handleArrowClick}>
          <div className="arrow-circle flex items-center justify-center w-16 h-16 rounded-full border-2 border-red-500 transition group-hover:bg-red-500 group-hover:border-red-500">
            <span className="text-3xl text-red-500 group-hover:text-white transition"><i className="fa-solid fa-arrow-down"></i></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 