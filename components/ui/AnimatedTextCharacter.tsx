
import React, { useEffect, useState } from 'react';

interface AnimatedTextCharacterProps {
  text: string;
  className?: string;
  charClassName?: string;
  staggerDelay?: number; // in ms
  startCondition?: boolean; // Condition to start animation
}

const AnimatedTextCharacter: React.FC<AnimatedTextCharacterProps> = ({
  text,
  className = '',
  charClassName = '',
  staggerDelay = 50,
  startCondition = false,
}) => {
  const characters = text.split('');

  return (
    <span className={className} aria-label={text}>
      {characters.map((char, index) => (
        <span
          key={index}
          aria-hidden="true"
          className={`inline-block transition-all duration-300 ease-out ${charClassName} ${
            startCondition ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          style={{
            transitionDelay: startCondition ? `${index * staggerDelay}ms` : '0ms',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedTextCharacter;
