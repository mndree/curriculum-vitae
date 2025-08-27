import React from 'react';

const socialLinks = [
  { href: '#', icon: 'fa-brands fa-instagram', label: 'Instagram' },
  { href: '#', icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn' },
  { href: '#', icon: 'fa-brands fa-twitter', label: 'Twitter' },
  { href: '#', icon: 'fa-brands fa-facebook-f', label: 'Facebook' },
];

const quickLinks = [
  { label: 'About Me', target: 'highlights-section' },
  { label: 'Skills', target: 'skills-section' },
  { label: 'Portfolio', target: 'portfolio-section' },
  { label: 'Contact Me', target: 'contact-section' },
];

const contactInfo = [
  { icon: 'fa-solid fa-phone', text: '0878 4388 0148' },
  { icon: 'fa-solid fa-location-dot', text: 'West Jakarta, Indonesia' },
  { icon: 'fa-solid fa-envelope', text: 'juliansyahmandree@gmail.com' },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-6 px-4 md:px-0">
      <div className="max-w-7xl mx-auto border border-white/10 rounded-2xl p-8 md:p-12 bg-[#141414]">
        <div className="flex flex-col md:flex-row gap-12 md:gap-0 md:justify-between md:items-start">
          {/* Logo & Description */}
          <div className="flex-1 min-w-[220px] mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl text-red-600 font-bold"><i className="fa-solid fa-infinity"></i></span>
              <span className="text-2xl font-extrabold">MDR</span>
            </div>
            <p className="text-gray-300 text-sm mb-6">The personal portfolio category includes websites or physical displays</p>
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
          {/* Quick Links */}
          <div className="flex-1 min-w-[180px] mb-8 md:mb-0">
            <div className="font-bold text-lg mb-4">Quick Link</div>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.target)}
                    className="hover:text-red-500 transition-colors text-sm font-medium bg-transparent outline-none border-none cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div className="flex-1 min-w-[200px] mb-8 md:mb-0">
            <div className="font-bold text-lg mb-4">Contact</div>
            <ul className="space-y-3">
              {contactInfo.map((info, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#222] text-red-500 text-base">
                    <i className={info.icon}></i>
                  </span>
                  <span>{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Newsletter */}
          <div className="flex-1 min-w-[260px]">
            <div className="bg-[#181818] rounded-2xl border border-white/10 p-6">
              <div className="font-bold text-lg mb-2">Newsletter</div>
              <p className="text-gray-300 text-sm mb-4">The personal portfolio categor includes the a websites or representation</p>
              <form className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Your e-mail"
                  className="flex-1 bg-transparent border border-white/10 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
                />
                <button type="submit" className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center text-white text-xl transition-colors">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs gap-4">
          <div>
            © Muhammad Andre Juliansyah - 2025 | <span className="text-white">All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
