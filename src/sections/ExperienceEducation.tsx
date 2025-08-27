import React, { useState } from 'react';
import { experience, education } from '../data/experienceEducation';
import JobModal from '../components/JobModal';

const Card = ({ date, title, company, gpa, onClick, isClickable }: { 
  date: string; 
  title: string; 
  company: string; 
  gpa?: string;
  onClick?: () => void;
  isClickable?: boolean;
}) => (
  <div 
    className={`bg-black/70 border border-white/10 rounded-2xl shadow p-6 flex flex-col gap-1 transition-all duration-300 h-full hover:bg-black/90 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/20 hover:scale-[1.02] ${
      isClickable ? 'cursor-pointer' : 'cursor-default'
    }`}
    onClick={isClickable ? onClick : undefined}
  >
    <span className="text-red-500 text-sm font-bold flex items-center gap-2">
      <i className="fa-solid fa-circle mr-1 text-xs"></i> {date}
    </span>
    <span className="text-lg md:text-xl font-extrabold uppercase mt-1">{title}</span>
    <span className="text-gray-400 text-sm">{company}</span>
    {gpa && (
      <span className="text-red-400 text-sm font-semibold mt-1">
        GPA: {gpa}
      </span>
    )}
    {isClickable && (
      <div className="mt-auto pt-2">
        <span className="text-red-400 text-xs font-medium flex items-center gap-1">
          <i className="fa-solid fa-info-circle"></i>
          Click to view details
        </span>
      </div>
    )}
  </div>
);

const ExperienceEducation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<{
    date: string;
    title: string;
    company: string;
    description: string;
  } | null>(null);

  const handleJobClick = (job: any) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <section className="py-20 bg-black text-white" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Education - First */}
          <div className="mb-16" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center gap-3 mb-8">
              <i className="fa-solid fa-graduation-cap text-red-500 text-2xl"></i>
              <h2 className="text-2xl md:text-3xl font-extrabold">My Education</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((item: { date: string; title: string; company: string; gpa: string }, idx: number) => (
                <Card key={idx} {...item} isClickable={false} />
              ))}
            </div>
          </div>
          
          {/* Experience - Second */}
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center gap-3 mb-8">
              <i className="fa-solid fa-award text-red-500 text-2xl"></i>
              <h2 className="text-2xl md:text-3xl font-extrabold">My Experience</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experience.map((item: { date: string; title: string; company: string; description: string }, idx: number) => (
                <Card 
                  key={idx} 
                  {...item} 
                  onClick={() => handleJobClick(item)}
                  isClickable={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Job Description Modal */}
      <JobModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        job={selectedJob}
      />
    </section>
  );
};

export default ExperienceEducation; 