import React from 'react';

const Contact = () => {
  return (
    <section id="contact-section" className="py-20 bg-black text-white overflow-x-hidden" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 md:px-8 rounded-2xl border border-red-600/40 bg-[#141414] py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* Left: Heading and Description */}
          <div className="flex-1 md:max-w-lg" data-aos="fade-up" data-aos-delay="200">
            <span className="text-red-500 font-semibold uppercase tracking-widest text-sm">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3 leading-tight">Elevate Your Ideas<br />with Me</h2>
            <p className="text-gray-300 text-base">
              Whether you're looking to collaborate on a project, hire for a role, or simply connect — I'm open to new opportunities.
              Let's turn your vision into reality, together.
            </p>
          </div>
          {/* Right: Contact Form */}
          <form className="flex-1 w-full" data-aos="fade-up" data-aos-delay="400" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input type="text" placeholder="Your Name" className="bg-[#181818] border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors" />
              <input type="text" placeholder="Phone Number" className="bg-[#181818] border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors" />
              <input type="email" placeholder="Your Email" className="bg-[#181818] border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors md:col-span-1" />
              <input type="text" placeholder="Subject" className="bg-[#181818] border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors md:col-span-1" />
            </div>
            <textarea placeholder="Your Message" rows={5} className="w-full bg-[#181818] border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors mb-6 resize-none"></textarea>
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-5 rounded-full text-lg transition-colors flex items-center justify-center gap-2">
              Connect With Me <span className="text-xl">&rarr;</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
