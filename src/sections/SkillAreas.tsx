import React from 'react';

const skills = [
  {
    icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#61DAFB"/>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
               className="icon icon-tabler icons-tabler-outline icon-tabler-brand-react-native"
               x="8" y="8">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097"/>
            <path
                d="M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254"/>
            <path
                d="M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978"/>
            <path
                d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8"/>
            <path
                d="M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087"/>
            <path
                d="M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393"/>
            <path
                d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24"/>
          </svg>
        </svg>
    ),
    title: 'React Native',
    description: 'Create cross-platform mobile applications for iOS and Android with a native-like experience.',
  },
  {
    icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#000000"/>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
               className="icon icon-tabler icons-tabler-outline icon-tabler-brand-nextjs"
               x="8" y="8">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"/>
            <path d="M15 12v-3"/>
          </svg>
        </svg>
    ),
    title: 'Next.js',
    description: 'Develop server-side rendered and static websites optimized for performance and SEO.',
  },
  {
    icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#FF2D20"/>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
               className="icon icon-tabler icons-tabler-outline icon-tabler-brand-laravel"
               x="8" y="8">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5z"/>
            <path d="M11 18v4"/>
            <path d="M7 15.5l7 -4"/>
            <path d="M14 7.5v4"/>
            <path d="M14 11.5l4 2.5"/>
            <path d="M11 13v-7.5l-4 -2.5l-4 2.5"/>
            <path d="M7 8l4 -2.5"/>
            <path d="M18 10l4 -2.5"/>
          </svg>
        </svg>
    ),
    title: 'Laravel',
    description: 'Build secure and maintainable backends with a powerful PHP framework.',
  },
  {
    icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#222"/>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
               x="8" y="8">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            <path d="M12 22V12"/>
          </svg>
        </svg>
    ),
    title: 'ASP.NET Core',
    description: 'Develop enterprise-level backend services and REST APIs with Microsoft\'s modern framework.',
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
              As a passionate front-end developer, I specialize in building modern, responsive, and user-friendly applications. I have experience working across web and mobile platforms, leveraging the latest frameworks and tools to deliver high-quality solutions.
              </p>
            </div>
            {/* Right: Skill Cards */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full" data-aos="fade-left" data-aos-delay="400">
              {skills.map((skill, idx) => (
                  <div
                      key={skill.title}
                      className="bg-black/70 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:bg-black/90 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20 hover:scale-105 transform hover:-translate-y-2 cursor-pointer group shadow-lg shadow-black/20 animate-pulse hover:ring-2 hover:ring-red-500/30"
                      data-aos="zoom-in"
                      data-aos-delay={600 + idx * 100}
                      style={{
                        animationDelay: `${idx * 0.2}s`
                      }}
                  >
                    <div className="mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-lg group-hover:drop-shadow-red-500/50 group-hover:filter group-hover:brightness-110">{skill.icon}</div>
                    <div className="font-bold text-xl mb-2 transition-colors duration-300 group-hover:text-red-400">{skill.title}</div>
                    <div className="text-gray-300 text-sm transition-colors duration-300 group-hover:text-gray-200">{skill.description}</div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default SkillAreas;