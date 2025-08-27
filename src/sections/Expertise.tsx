import React from 'react';

const expertises = [
  {
    icon: 'fa-solid fa-landmark',
    title: 'Ui/Visual Design',
    percent: 90,
    description: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills",
  },
  {
    icon: 'fa-solid fa-image',
    title: 'Branding Design',
    percent: 75,
    description: 'I specialize in creating solutions that are not only visually engaging but also align with business goals',
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Motion Design',
    percent: 80,
    description: 'Each one showcases my approach and dedication to detail, creativity, and results-driven outcomes.',
  },
];

const CircularProgress = ({ percent }: { percent: number }) => (
  <svg width="56" height="56" viewBox="0 0 56 56">
    <circle
      cx="28"
      cy="28"
      r="24"
      stroke="#222"
      strokeWidth="4"
      fill="none"
    />
    <circle
      cx="28"
      cy="28"
      r="24"
      stroke="#fff"
      strokeWidth="4"
      fill="none"
      strokeDasharray={2 * Math.PI * 24}
      strokeDashoffset={2 * Math.PI * 24 * (1 - percent / 100)}
      strokeLinecap="round"
      style={{ transition: 'stroke-dashoffset 1s' }}
    />
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dy=".3em"
      fontSize="1.1em"
      fill="#fff"
      fontWeight="bold"
    >
      {percent}%
    </text>
  </svg>
);

const Expertise = () => {
  return (
    <section className="py-20 bg-black text-white" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-10 gap-8">
          <div>
            <span className="text-red-500 font-semibold uppercase tracking-widest text-sm">My Expertise</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3 leading-tight">
              Elevated Designs Personalized<br />the best Experiences
            </h2>
          </div>
          <div className="max-w-md text-gray-300 text-base">
            Business consulting consultants provide expert advice and guide businesses to help them improve their performance, efficiency, and organizational health.
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {expertises.map((exp, idx) => (
            <div
              key={exp.title}
              className={
                `flex flex-col md:flex-row items-center md:items-stretch gap-6 p-8 rounded-2xl border border-white/10 transition-colors duration-300 cursor-pointer bg-[#141314] hover:bg-red-700/80`
              }
              data-aos="fade-up"
              data-aos-delay={idx * 200}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-white/10 mb-4 md:mb-0">
                <i className={`${exp.icon} text-2xl text-white`}></i>
              </div>
              <div className="flex-1 flex flex-col md:flex-row md:items-center gap-6 w-full">
                <div className="flex-1 text-xl font-bold flex items-center">{exp.title}</div>
                <div className="flex items-center justify-center">
                  <CircularProgress percent={exp.percent} />
                </div>
                <div className="flex-1 text-gray-300 text-base md:text-left text-center">
                  {exp.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise; 