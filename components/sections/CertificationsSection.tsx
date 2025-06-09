
import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { CertificateIcon } from '../ui/Icons';
import useScrollAnimation from '../../hooks/useScrollAnimation';

interface CertificationsSectionProps {
  certifications: string[];
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLUListElement>({threshold: 0.1});
  return (
    <SectionWrapper id="certifications" title="Certifications">
      <ul ref={ref} className="max-w-2xl mx-auto space-y-4">
        {certifications.map((cert, index) => (
          <li 
            key={index} 
            className={`bg-slate-800 p-4 rounded-md shadow-lg flex items-center space-x-3 border-2 border-transparent hover:border-blue-500/50 transition-all duration-300 ease-out hover:bg-slate-700/70 hover:scale-[1.02] ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <CertificateIcon className="w-6 h-6 text-blue-400 flex-shrink-0" />
            <span className="text-slate-200">{cert}</span>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};

export default CertificationsSection;