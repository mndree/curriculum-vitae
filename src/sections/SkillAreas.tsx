import React from 'react';

const skills = [
  {
    icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#222" /><text x="50%" y="55%" textAnchor="middle" fill="#14F195" fontSize="22" fontWeight="bold" dy=".3em">F</text></svg>
    ),
    title: 'Framer',
    description: 'The personal portfol category includes websites or physic Your Journey Your Story',
  },
  {
    icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#222" /><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="bold" dy=".3em">W</text></svg>
    ),
    title: 'Webflow',
    description: 'The personal portfol category includes websites or physic Your Journey Your Story',
  },
  {
    icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#222" /><circle cx="20" cy="20" r="12" fill="#F24E1E" /><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold" dy=".3em">F</text></svg>
    ),
    title: 'Figma',
    description: 'The personal portfol category includes websites or physic Your Journey Your Story',
  },
  {
    icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#222" /><text x="50%" y="55%" textAnchor="middle" fill="#FF7A00" fontSize="22" fontWeight="bold" dy=".3em">W</text></svg>
    ),
    title: 'Wordpress',
    description: 'The personal portfol category includes websites or physic Your Journey Your Story',
  },
];

const SkillAreas = () => {
  return (
      <section className="py-20 bg-black text-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 md:px-8 rounded-3xl bg-[#141414] py-16">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            {/* Left: Heading and Description */}
            <div className="flex-1 md:max-w-lg" data-aos="fade-right" data-aos-delay="200">
              <span className="text-red-500 font-semibold uppercase tracking-widest text-sm">My Skill</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3 leading-tight">My Experts Areas Where I<br />Gained Skill</h2>
              <p className="text-gray-300 text-base">
                Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational Business consulting consultants provide
              </p>
            </div>
            {/* Right: Skill Cards */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full" data-aos="fade-left" data-aos-delay="400">
              {skills.map((skill, idx) => (
                  <div
                      key={skill.title}
                      className="bg-[#181818] rounded-2xl border border-white/10 p-8 flex flex-col items-center text-center transition-colors duration-300 hover:bg-red-700/80"
                      data-aos="zoom-in"
                      data-aos-delay={600 + idx * 100}
                  >
                    <div className="mb-4">{skill.icon}</div>
                    <div className="font-bold text-xl mb-2">{skill.title}</div>
                    <div className="text-gray-300 text-sm">{skill.description}</div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default SkillAreas;