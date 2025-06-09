
import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';

interface AboutSectionProps {
  careerObjective: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ careerObjective }) => {
  return (
    <SectionWrapper id="about" title="Career Objective">
      <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed text-center">
        {careerObjective}
      </p>
    </SectionWrapper>
  );
};

export default AboutSection;
