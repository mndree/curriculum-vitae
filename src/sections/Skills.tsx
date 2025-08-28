// src/sections/Skills.tsx
import React from 'react';

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Mobile Development',
    skills: [
      { name: 'React Native', percentage: 88 },
      { name: 'TypeScript', percentage: 90 },
      { name: 'Redux', percentage: 85 },
      { name: 'Kotlin', percentage: 65 },
      { name: 'Flutter', percentage: 65 },
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', percentage: 92 },
      { name: 'TypeScript', percentage: 85 },
      { name: 'Redux', percentage: 85 },
      { name: 'Next.js', percentage: 80 },
      { name: 'Vue.js', percentage: 85 },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', percentage: 70 },
      { name: 'Express', percentage: 75 },
      { name: 'Laravel', percentage: 88 },
      { name: 'CI', percentage: 82 },
      { name: '.NetCore', percentage: 70 },
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', percentage: 70 },
      { name: 'PostgreSQL', percentage: 85 },
      { name: 'Firebase', percentage: 80 },
      { name: 'MySQL', percentage: 90 },
      { name: 'SQL Server', percentage: 88 },
    ]
  }
];

const HexagonalProgress = ({ percentage }: { percentage: number }) => {
  const totalHexagons = 10;
  const filledHexagons = Math.floor((percentage / 100) * totalHexagons);
  const partialFill = (percentage / 100) * totalHexagons - filledHexagons;
  
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: totalHexagons }, (_, index) => {
        let fillStyle = 'bg-[#626262]';
        let clipPath = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
        
        if (index < filledHexagons) {
          // Fully filled hexagon
          fillStyle = 'bg-[#FF5555]';
        } else if (index === filledHexagons && partialFill > 0) {
          // Partially filled hexagon - create horizontal left-to-right fill
          const fillPercentage = partialFill * 100;
          
          // Create a layered effect: red fill on the left, gray on the right
          return (
            <div key={index} className="relative w-3 h-3.5">
              {/* Background gray hexagon */}
              <div 
                className="absolute inset-0 bg-[#626262]"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              />
              {/* Red fill on the left side - create a hexagon that's cut off at the right */}
              <div 
                className="absolute inset-0 bg-[#FF5555]"
                style={{ 
                  clipPath: `polygon(50% 0%, ${Math.min(100, 50 + fillPercentage * 0.5)}% 0%, ${Math.min(100, 50 + fillPercentage * 0.5)}% 25%, ${Math.min(100, 50 + fillPercentage * 0.5)}% 75%, ${Math.min(100, 50 + fillPercentage * 0.5)}% 100%, 50% 100%, 0% 75%, 0% 25%)`
                }}
              />
            </div>
          );
        }
        
        return (
          <div
            key={index}
            className={`w-3 h-3.5 ${fillStyle}`}
            style={{ clipPath }}
          />
        );
      })}
      <span className="ml-2 text-white font-medium text-sm">{percentage}%</span>
    </div>
  );
};

const SkillCard = ({ category }: { category: SkillCategory }) => (
  <div className="bg-[#282A36] rounded-lg p-6 border border-red-500 hover:border-red-400 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
    <h3 className="text-white text-xl font-bold mb-6 text-center">{category.title}</h3>
    <div className="space-y-4">
      {category.skills.map((skill) => (
        <div 
          key={skill.name} 
          className="flex justify-between items-center p-3 rounded-lg hover:bg-[#3C3F4C] transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-red-500/10 cursor-pointer group"
        >
          <span className="text-white text-sm font-medium group-hover:text-red-300 transition-colors duration-300">{skill.name}</span>
          <HexagonalProgress percentage={skill.percentage} />
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills-section" className="py-20 bg-black text-white" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expertise across multiple technology stacks with proficiency levels in various development domains
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={category.title} data-aos="fade-up" data-aos-delay={index * 100}>
              <SkillCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
