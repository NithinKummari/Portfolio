
import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
  titleClassName?: string;
  containerClassName?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children, titleClassName = "text-blue-400", containerClassName = "" }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({threshold: 0.1});

  return (
    <section 
      id={id} 
      ref={ref}
      className={`py-12 md:py-16 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${containerClassName}`}
    >
      <div className="text-center mb-10 md:mb-12">
        <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${titleClassName}`}>
          {title}
        </h2>
        <div className={`w-20 h-1 bg-blue-500 mx-auto mt-2 rounded-full transition-all duration-500 delay-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
      </div>
      {children}
    </section>
  );
};

export default SectionWrapper;
