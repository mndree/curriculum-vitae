import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fields: { [key: string]: string } = {
      Name: formData.name,
      Phone: formData.phone,
      Email: formData.email,
      Subject: formData.subject,
      Message: formData.message,
    };

    // Build message dynamically, skipping empty fields
    const text = Object.entries(fields)
        .filter(([_, value]) => value.trim() !== "")
        .map(([key, value]) => `*${key}:* ${value}`)
        .join("\n");

    const url = `https://api.whatsapp.com/send?phone=6287843880148&text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
      <section
          id="contact-section"
          className="py-20 bg-black text-white overflow-x-hidden"
          data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 rounded-2xl border border-red-600/40 bg-[#141414] py-16">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            {/* Left: Heading and Description */}
            <div className="flex-1 md:max-w-lg" data-aos="fade-up" data-aos-delay="200">
            <span className="text-red-500 font-semibold uppercase tracking-widest text-sm">
              Get in Touch
            </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3 leading-tight">
                Elevate Your Ideas
                <br />
                with Me
              </h2>
              <p className="text-gray-300 text-base">
                Whether you're looking to collaborate on a project, hire for a role, or simply
                connect — I'm open to new opportunities. Let's turn your vision into reality,
                together.
              </p>
            </div>

            {/* Right: Contact Form */}
            <form
                className="flex-1 w-full"
                data-aos="fade-up"
                data-aos-delay="400"
                onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-[#181818] border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-[#181818] border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#181818] border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors md:col-span-1"
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-[#181818] border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors md:col-span-1"
                />
              </div>
              <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#181818] border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors mb-6 resize-none"
              ></textarea>
              <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-5 rounded-full text-lg transition-colors flex items-center justify-center gap-2"
              >
                Connect With Me <span className="text-xl">&rarr;</span>
              </button>
            </form>
          </div>
        </div>
      </section>
  );
};

export default Contact;