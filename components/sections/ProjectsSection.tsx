
import React from 'react';
import { ProjectEntry as ProjectEntryType } from '../../types';
import SectionWrapper from '../layout/SectionWrapper';
import ProjectCard from '../ui/ProjectCard';
import useScrollAnimation from '../../hooks/useScrollAnimation';

interface ProjectsSectionProps {
  projectEntries: ProjectEntryType[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projectEntries }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({threshold: 0.05});
  return (
    <SectionWrapper id="projects" title="Projects">
      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectEntries.map((entry, index) => (
          <ProjectCard key={index} entry={entry} index={index} isVisible={isVisible} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
