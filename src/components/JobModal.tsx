import React from 'react';

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: {
    date: string;
    title: string;
    company: string;
    description: string;
  } | null;
}

const JobModal: React.FC<JobModalProps> = ({ isOpen, onClose, job }) => {
  if (!isOpen || !job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-black/95 border border-white/20 rounded-2xl shadow-2xl shadow-red-500/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-2xl font-extrabold text-white">{job.title}</h2>
            <p className="text-red-500 font-semibold mt-1">{job.company}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg"
          >
            <i className="fa-solid fa-times text-xl"></i>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold">
              <i className="fa-solid fa-calendar text-xs"></i>
              {job.date}
            </span>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-white/90 leading-relaxed text-lg">
              {job.description}
            </p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
