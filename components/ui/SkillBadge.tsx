
import React from 'react';

interface SkillBadgeProps {
  skill: string;
  index: number;
  isVisible: boolean;
  variant?: 'technical' | 'soft';
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, index, isVisible, variant = 'soft' }) => {
  const baseClasses = `inline-block text-sm font-medium shadow-md transition-all duration-300 ease-out hover:scale-105 cursor-default transform`;
  const animationClasses = isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6';

  let specificShapeAndColorClasses = '';

  if (variant === 'technical') {
    // Technical skills: Dark blue backgrounds, light blue/cyan/white text, blue accent borders
    const techColorSchemes = [
      'bg-blue-900 text-sky-200 border border-blue-700 hover:bg-blue-800 hover:border-sky-400',
      'bg-indigo-800 text-blue-200 border border-indigo-600 hover:bg-indigo-700 hover:border-blue-400',
      'bg-sky-900 text-cyan-200 border border-sky-700 hover:bg-sky-800 hover:border-cyan-400',
      'bg-blue-800 text-slate-100 border border-blue-600 hover:bg-blue-700 hover:border-sky-300',
    ];
    specificShapeAndColorClasses = `px-3 py-1.5 rounded-md ${techColorSchemes[index % techColorSchemes.length]}`;
  } else { 
    // Soft skills: Darker blue backgrounds (generally a bit lighter than technical), white/light blue text
    const softColorSchemes = [
      'bg-blue-700 text-slate-100 hover:bg-blue-600',
      'bg-sky-700 text-white hover:bg-sky-600',
      'bg-blue-800 text-blue-100 hover:bg-blue-700', // This blue-800 can overlap with tech, but context (pill shape) differs
      'bg-sky-800 text-sky-100 hover:bg-sky-700',
    ];
    specificShapeAndColorClasses = `px-4 py-1.5 rounded-full ${softColorSchemes[index % softColorSchemes.length]}`;
  }

  return (
    <span
      className={`${baseClasses} ${specificShapeAndColorClasses} ${animationClasses}`}
      style={{ transitionDelay: `${index * 70}ms` }} 
    >
      {skill}
    </span>
  );
};

export default SkillBadge;
