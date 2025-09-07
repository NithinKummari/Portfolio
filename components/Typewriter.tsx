
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  onFinished?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 20, className = '', onFinished }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    } else if (onFinished) {
      onFinished();
    }
  }, [currentIndex, text, speed, onFinished]);
  
  // Render a non-breaking space if text is empty to maintain layout
  return <span className={className}>{displayedText || '\u00A0'}</span>;
};

export default Typewriter;
