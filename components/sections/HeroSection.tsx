
import React, { useState, useEffect } from 'react';
import { ContactInfo } from '../../types';
import AnimatedTextCharacter from '../ui/AnimatedTextCharacter';
import { LinkedInIcon, MailIcon, PhoneIcon, ChevronDownIcon } from '../ui/Icons';

interface HeroSectionProps {
  name: string;
  title: string;
  contact: ContactInfo;
  animate: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ name, title, contact, animate }) => {
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setTextAnimationComplete(true);
      }, name.length * 50 + title.length * 30 + 500); // Estimate based on animation delays
      return () => clearTimeout(timer);
    }
  }, [animate, name, title]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 -mt-16">
      <div className="max-w-3xl">
        <AnimatedTextCharacter
          text={name}
          startCondition={animate}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
          charClassName="drop-shadow-md"
          staggerDelay={60}
        />
        <AnimatedTextCharacter
          text={title}
          startCondition={animate}
          className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-8 whitespace-nowrap"
          charClassName=""
          staggerDelay={35}
        />
        
        <div 
          className={`flex justify-center space-x-6 mb-12 transition-all duration-500 ease-out ${
            textAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{transitionDelay: textAnimationComplete ? '0ms' : `${name.length * 50 + title.length * 30 + 300}ms` }}
        >
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-transform duration-300 hover:scale-125" aria-label="LinkedIn">
            <LinkedInIcon className="w-8 h-8" />
          </a>
          <a href={`mailto:${contact.email}`} className="text-slate-400 hover:text-blue-500 transition-transform duration-300 hover:scale-125" aria-label="Email">
            <MailIcon className="w-8 h-8" />
          </a>
          <a href={`tel:${contact.phone}`} className="text-slate-400 hover:text-blue-500 transition-transform duration-300 hover:scale-125" aria-label="Phone">
            <PhoneIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-blue-400 transition-all duration-500 ease-out animate-bounce ${
          textAnimationComplete ? 'opacity-100' : 'opacity-0'
        }`}
        style={{transitionDelay: textAnimationComplete ? '200ms' : '0ms' }}
      >
        <ChevronDownIcon className="w-10 h-10" />
      </button>
    </section>
  );
};

export default HeroSection;
