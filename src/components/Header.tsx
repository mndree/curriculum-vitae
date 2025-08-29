import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', target: 'hero-section' },
  { label: 'About', target: 'highlights-section' },
  { label: 'Skills', target: 'skills-section' },
  { label: 'Experience & Education', target: 'experience-education-section' },
  { label: 'Contact', target: 'contact-section' },
];

const socialLinks = [
  { href: 'https://www.instagram.com/mndree_/', icon: 'fa-brands fa-instagram', label: 'Instagram' },
  { href: 'https://www.linkedin.com/in/mndree/', icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn' },
  { href: 'https://github.com/mndree', icon: 'fa-brands fa-github', label: 'Github' },
  { href: '#', icon: 'fa-brands fa-facebook-f', label: 'Facebook' },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarClosing, setSidebarClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On small screens, lock body scroll so touch scroll goes to sidebar
  useEffect(() => {
    const isSmallScreen = window.innerWidth < 1024; // match lg breakpoint
    const shouldLock = isSmallScreen && (sidebarOpen || sidebarClosing);
    const { body, documentElement } = document;
    if (shouldLock) {
      body.style.overflow = 'hidden';
      documentElement.style.overflow = 'hidden';
      body.style.touchAction = 'none';
    } else {
      body.style.overflow = '';
      documentElement.style.overflow = '';
      body.style.touchAction = '';
    }
    return () => {
      body.style.overflow = '';
      documentElement.style.overflow = '';
      body.style.touchAction = '';
    };
  }, [sidebarOpen, sidebarClosing]);

  // Handle sidebar close with animation
  const handleSidebarClose = () => {
    setSidebarClosing(true);
    setTimeout(() => {
      setSidebarOpen(false);
      setSidebarClosing(false);
    }, 300); // match animation duration
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className={`transition-all duration-300 w-full flex items-center justify-between py-3 px-4 md:px-8 ${
          scrolled
            ? 'bg-black/60 shadow-lg backdrop-blur-md'
            : 'bg-gradient-to-r from-black via-[#181014] to-black/80'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <span className="text-lg font-extrabold">MDR</span>
        </div>
        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => scrollToSection(link.target)}
              className="font-semibold hover:text-red-500 transition-colors px-2 py-1"
            >
              {link.label}
            </button>
          ))}
        </nav>
        {/* Social Icons & Menu (mobile) */}
        <div className={`flex items-center gap-3 lg:gap-3${sidebarOpen ? ' hidden lg:flex' : ''}`}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full bg-[#222] hover:bg-red-600 transition-colors text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={link.icon}></i>
            </a>
          ))}
          {/* Menu Button - visible on all screen sizes */}
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 text-white text-2xl"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      {/* Sidebar Overlay */}
      {(sidebarOpen || sidebarClosing) && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex">
          {/* Minimal Sidebar for Mobile */}
          <aside className={`w-full bg-[#181818] h-full shadow-2xl p-6 flex flex-col relative overflow-y-auto hide-scrollbar overscroll-contain touch-pan-y lg:hidden ${sidebarClosing ? 'animate-slideOutLeft' : 'animate-slideInLeft'}`}>
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl text-white hover:text-red-500"
              onClick={handleSidebarClose}
              aria-label="Close menu"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8 mt-2">
              <img src="/logo.png" alt="Logo" className="w-8 h-8" />
              <span className="text-lg font-extrabold">MDR</span>
            </div>
            {/* Nav Links */}
            <div className="order-3 flex flex-col gap-1 mt-4 w-full">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => {
                    handleSidebarClose();
                    setTimeout(() => scrollToSection(link.target), 350);
                  }}
                  className="w-full text-left px-4 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors text-white bg-[#222] mb-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
            {/* Profile and Contact (mobile) */}
            <div className="order-2 mt-6">
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=200&q=80"
                alt="Profile"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <div className="text-center mb-4">
                <div className="font-bold text-lg mb-1">Front-End Developer crafting modern & scalable web apps.</div>
                <div className="text-gray-300 text-sm mb-2">
                  I specialize in React.js, Next.js, and React Native to create fast, responsive, and scalable applications. With a passion for clean design and smooth user experiences, I bring ideas to life through code.
                </div>
              </div>
              <div className="w-full mb-4">
                <div className="flex items-center gap-3 mb-2 text-red-500">
                  <i className="fa-solid fa-phone"></i>
                  <span className="text-white font-semibold">+62 878 4388 0148</span>
                </div>
                <div className="flex items-center gap-3 mb-2 text-red-500">
                  <i className="fa-solid fa-envelope"></i>
                  <span className="text-white font-semibold">juliansyahmandree@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-red-500">
                  <i className="fa-solid fa-location-dot"></i>
                  <span className="text-white font-semibold">West Jakarta, Indonesia</span>
                </div>
              </div>
              <div className="w-full mb-2">
                <div className="font-bold text-sm mb-2 text-white">Find with me</div>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-[#222] hover:bg-red-600 transition-colors text-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={link.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
          {/* Detailed Sidebar for Desktop */}
          <aside className={`w-full max-w-xs bg-[#181818] h-full shadow-2xl p-6 flex flex-col relative overflow-y-auto hide-scrollbar hidden lg:flex ${sidebarClosing ? 'animate-slideOutLeft' : 'animate-slideInLeft'}`}>
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl text-white hover:text-red-500"
              onClick={handleSidebarClose}
              aria-label="Close menu"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            {/* Sidebar Content */}
            <div className="flex flex-col items-center mt-6">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="Logo" className="w-8 h-8" />
                <span className="text-lg font-extrabold">MDR</span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=200&q=80"
                alt="Profile"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <div className="text-center mb-4">
                <div className="font-bold text-lg mb-1">Front-End Developer crafting modern & scalable web apps.</div>
                <div className="text-gray-300 text-sm mb-2">
                  I specialize in React.js, Next.js, and React Native to create fast, responsive, and scalable applications. With a passion for clean design and smooth user experiences, I bring ideas to life through code.
                </div>
              </div>
              <div className="w-full mb-4">
                <div className="flex items-center gap-3 mb-2 text-red-500">
                  <i className="fa-solid fa-phone"></i>
                  <span className="text-white font-semibold">+62 878 4388 0148</span>
                </div>
                <div className="flex items-center gap-3 mb-2 text-red-500">
                  <i className="fa-solid fa-envelope"></i>
                  <span className="text-white font-semibold">juliansyahmandree@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-red-500">
                  <i className="fa-solid fa-location-dot"></i>
                  <span className="text-white font-semibold">West Jakarta, Indonesia</span>
                </div>
              </div>
              <div className="w-full mb-4">
                <div className="font-bold text-sm mb-2 text-white">Find with me</div>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-[#222] hover:bg-red-600 transition-colors text-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={link.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
              <div className="w-full flex flex-col gap-2 mt-4">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => {
                      handleSidebarClose();
                      setTimeout(() => scrollToSection(link.target), 350);
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors text-white bg-[#222] mb-2"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>
          {/* Click outside to close */}
          <div className="flex-1" onClick={handleSidebarClose} />
        </div>
      )}
      {/* Sidebar animation keyframes */}
      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.3s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes slideOutLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-slideOutLeft {
          animation: slideOutLeft 0.3s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </header>
  );
};

export default Header;
