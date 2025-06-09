
import React from 'react';
import { ExperienceEntry as ExperienceEntryType } from '../../types';
import SectionWrapper from '../layout/SectionWrapper';
import ExperienceCard from '../ui/ExperienceCard';
import useScrollAnimation from '../../hooks/useScrollAnimation';

interface ExperienceSectionProps {
  experienceEntries: ExperienceEntryType[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experienceEntries }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({threshold: 0.1});
  return (
    <SectionWrapper id="experience" title="Experience">
      <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {experienceEntries.map((entry, index) => (
          <ExperienceCard key={index} entry={entry} index={index} isVisible={isVisible} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
