
import React from 'react';
import { ExperienceEntry } from '../../types';
import { BriefcaseIcon } from './Icons';

interface ExperienceCardProps {
  entry: ExperienceEntry;
  index: number;
  isVisible: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ entry, index, isVisible }) => {
  return (
    <div 
      className={`bg-slate-800 p-6 rounded-lg shadow-xl border-2 border-transparent hover:border-blue-500/70 transition-all duration-300 ease-out transform hover:-translate-y-1 hover:scale-[1.02] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-start space-x-4 mb-3">
        <BriefcaseIcon className="w-7 h-7 text-blue-400 mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-xl font-semibold text-blue-300">{entry.title}</h3>
          <p className="text-md font-medium text-slate-200">{entry.company}</p>
          <p className="text-sm text-slate-500">{entry.duration}</p>
        </div>
      </div>
      <ul className="list-disc list-inside text-slate-300 space-y-1 pl-2">
        {entry.responsibilities.map((item, idx) => (
          <li key={idx} className="text-sm leading-relaxed">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;