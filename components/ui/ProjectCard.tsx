
import React from 'react';
import { ProjectEntry } from '../../types';
import { CodeBracketIcon } from './Icons';

interface ProjectCardProps {
  entry: ProjectEntry;
  index: number;
  isVisible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ entry, index, isVisible }) => {
  return (
    <div 
      className={`bg-slate-800 p-6 rounded-lg shadow-xl border-2 border-transparent hover:border-blue-500/70 flex flex-col transition-all duration-300 ease-out transform hover:-translate-y-1 hover:scale-[1.02] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-start space-x-3 mb-3">
        <CodeBracketIcon className="w-7 h-7 text-blue-400 mt-1 flex-shrink-0" />
        <h3 className="text-xl font-semibold text-blue-300">{entry.name}</h3>
      </div>
      <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm mb-4 flex-grow">
        {entry.description.map((item, idx) => (
          <li key={idx} className="leading-relaxed">{item}</li>
        ))}
      </ul>
      {entry.techStack && entry.techStack.length > 0 && (
        <div className="mt-auto pt-3 border-t border-slate-700">
          <p className="text-xs text-slate-400 mb-1 font-medium">Tech Stack:</p>
          <div className="flex flex-wrap gap-2">
            {entry.techStack.map((tech, idx) => (
              <span key={idx} className="text-xs bg-slate-700 text-blue-300 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;