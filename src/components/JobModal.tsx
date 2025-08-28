import React from 'react';

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: {
    date: string;
    title: string;
    company: string;
    description: string | string[];
  } | null;
}

const JobModal: React.FC<JobModalProps> = ({ isOpen, onClose, job }) => {
  if (!isOpen || !job) return null;

  return (
    <div>
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold">
          <i className="fa-solid fa-calendar text-xs"></i>
          {job.date}
        </span>
      </div>
      {Array.isArray(job.description) ? (
        <ul className="list-disc list-inside space-y-2 text-white/90 leading-relaxed text-lg">
          {job.description.map((point: string, idx: number) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      ) : (
        <ul className="list-disc list-inside space-y-2 text-white/90 leading-relaxed text-lg">
          {String(job.description)
            .split(/\n+|\r+|\.\s+/)
            .map((s) => s.trim())
            .filter((s) => s.length > 0)
            .map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default JobModal;
