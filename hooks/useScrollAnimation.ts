
import { useEffect, useRef, useState, useCallback } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

const useScrollAnimation = <T extends HTMLElement,>(options?: ScrollAnimationOptions) => {
  const { threshold = 0.1, triggerOnce = true } = options || {};
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T | null>(null);

  const setRef = useCallback((node: T | null) => {
    if (node) {
      elementRef.current = node;
    }
  }, []);

  useEffect(() => {
    const currentElement = elementRef.current; // Capture current value

    if (!currentElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(currentElement);
          }
        } else {
          if (!triggerOnce) {
            setIsVisible(false);
          }
        }
      },
      { threshold }
    );

    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
    };
  }, [threshold, triggerOnce]); // Removed elementRef from deps, setRef handles it

  return { ref: setRef, isVisible };
};

export default useScrollAnimation;
