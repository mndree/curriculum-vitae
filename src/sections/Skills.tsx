// src/sections/Skills.tsx
import React from 'react';

const designSkills = [
  { name: 'Photoshot', value: 100 },
  { name: 'Figma', value: 95 },
  { name: 'Adobe XD', value: 60 },
  { name: 'Adobe Illustrator', value: 70 },
];

const devSkills = [
  { name: 'Photoshot', value: 100 },
  { name: 'Figma', value: 95 },
  { name: 'Adobe XD', value: 60 },
  { name: 'Adobe Illustrator', value: 70 },
];

const SkillBar = ({ name, value }: { name: string; value: number }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-1">
      <span className="uppercase font-bold text-sm tracking-wide">{name}</span>
      <span className="font-semibold text-sm">{value}%</span>
    </div>
    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
      <div
        className="h-2 bg-red-600 rounded-full transition-all duration-1000"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills-section" className="py-20 bg-black text-white" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Design Skill */}
          <div className="flex-1" data-aos="fade-right" data-aos-delay="200">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Design Skill <span className="inline-block w-16 h-1 bg-gray-700 align-middle ml-2"></span></h2>
            {designSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} value={skill.value} />
            ))}
          </div>
          {/* Development Skill */}
          <div className="flex-1" data-aos="fade-left" data-aos-delay="400">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Development Skill <span className="inline-block w-16 h-1 bg-gray-700 align-middle ml-2"></span></h2>
            {devSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} value={skill.value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
