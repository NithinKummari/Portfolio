
import React from 'react';
import { EducationEntry } from '../../types';
import { AcademicCapIcon } from './Icons';

interface EducationCardProps {
  entry: EducationEntry;
  index: number;
  isVisible: boolean;
}

const EducationCard: React.FC<EducationCardProps> = ({ entry, index, isVisible }) => {
  return (
    <div 
      className={`bg-slate-800 p-6 rounded-lg shadow-xl border-2 border-transparent hover:border-blue-500/70 transition-all duration-300 ease-out transform hover:-translate-y-1 hover:scale-[1.02] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 mt-1">
          <AcademicCapIcon className="w-8 h-8 text-blue-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-300">{entry.degree}</h3>
          <p className="text-md font-medium text-slate-200">{entry.major}</p>
          <p className="text-slate-400">{entry.institution}</p>
          <p className="text-sm text-slate-500">{entry.years}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;