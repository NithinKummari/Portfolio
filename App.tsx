
import React, { useState, useEffect } from 'react';
import { resumeData } from './data/resumeData';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import EducationSection from './components/sections/EducationSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import CertificationsSection from './components/sections/CertificationsSection';
import ContactFooter from './components/layout/ContactFooter';
import AiAssistant from './components/ai/AiAssistant';
import Preloader from './components/ui/Preloader';
import BackToTopButton from './components/ui/BackToTopButton';
import { AiIcon } from './components/ui/Icons';

const App: React.FC = () => {
  const [showAiAssistant, setShowAiAssistant] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // For preloader

  useEffect(() => {
    // Simulate initial loading for preloader effect
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsMounted(true); // Ensures animations run after component is mounted
    }, 2000); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
  ];

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar navLinks={navLinks} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24">
        <HeroSection 
          name={resumeData.name} 
          title={resumeData.title} 
          contact={resumeData.contact}
          animate={isMounted}
        />
        <AboutSection careerObjective={resumeData.careerObjective} />
        <EducationSection educationEntries={resumeData.education} />
        <SkillsSection skillsData={resumeData.skills} />
        <ExperienceSection experienceEntries={resumeData.experience} />
        <ProjectsSection projectEntries={resumeData.projects} />
        <CertificationsSection certifications={resumeData.certifications} />
      </main>
      <ContactFooter contact={resumeData.contact} declaration={resumeData.declaration} name={resumeData.name} />
      
      <button
        onClick={() => setShowAiAssistant(prev => !prev)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 z-50"
        aria-label="Toggle AI Assistant"
      >
        <AiIcon className="w-6 h-6" />
      </button>

      {showAiAssistant && (
        <AiAssistant 
          resumeContext={JSON.stringify(resumeData, null, 2)} 
          onClose={() => setShowAiAssistant(false)} 
        />
      )}
      <BackToTopButton />
    </div>
  );
};

export default App;