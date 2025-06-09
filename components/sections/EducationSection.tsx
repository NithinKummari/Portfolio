
import React from 'react';
import { EducationEntry as EducationEntryType } from '../../types';
import SectionWrapper from '../layout/SectionWrapper';
import EducationCard from '../ui/EducationCard';
import useScrollAnimation from '../../hooks/useScrollAnimation';


interface EducationSectionProps {
  educationEntries: EducationEntryType[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ educationEntries }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({threshold: 0.2});

  return (
    <SectionWrapper id="education" title="Education">
      <div ref={ref} className="max-w-2xl mx-auto space-y-8">
        {educationEntries.map((entry, index) => (
          <EducationCard key={index} entry={entry} index={index} isVisible={isVisible} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default EducationSection;
