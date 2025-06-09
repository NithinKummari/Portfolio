import React from 'react';
import { SkillsData } from '../../types';
import SectionWrapper from '../layout/SectionWrapper';
import SkillBadge from '../ui/SkillBadge';
import useScrollAnimation from '../../hooks/useScrollAnimation';

interface SkillsSectionProps {
  skillsData: SkillsData;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skillsData }) => {
  const { ref: techSkillsRef, isVisible: techSkillsVisible } = useScrollAnimation<HTMLDivElement>({threshold: 0.1});
  const { ref: softSkillsRef, isVisible: softSkillsVisible } = useScrollAnimation<HTMLDivElement>({threshold: 0.1});

  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-semibold text-slate-100 mb-6 text-center">Technical Skills</h3>
          <div ref={techSkillsRef} className="space-y-6">
            {skillsData.technical.map((category, catIndex) => (
              <div key={catIndex} className="bg-slate-800/70 p-4 rounded-lg shadow-lg"> 
                <h4 className="text-lg font-medium text-blue-400 mb-4">{category.name}</h4>
                <div className="flex flex-wrap gap-2.5"> {/* Slightly adjusted gap */}
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBadge 
                      key={skillIndex} 
                      skill={skill} 
                      index={skillIndex} 
                      isVisible={techSkillsVisible} 
                      variant="technical"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-slate-100 mb-6 text-center">Soft Skills</h3>
          <div ref={softSkillsRef} className="flex flex-wrap justify-center gap-2.5"> {/* Slightly adjusted gap */}
            {skillsData.soft.map((skill, index) => (
              <SkillBadge 
                key={index} 
                skill={skill} 
                index={index} 
                isVisible={softSkillsVisible} 
                variant="soft"
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;