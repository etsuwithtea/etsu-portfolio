import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;

    const checkInitialVisibility = () => {
      if (currentRef) {
        const rect = currentRef.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
          setIsVisible(true);
          return true;
        }
      }
      return false;
    };

    if (checkInitialVisibility()) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [ref, isVisible] as const;
};

export const useTypingAnimation = <T extends HTMLElement>(text: string, speed = 50) => {
  const [displayedText, setDisplayedText] = useState('');
  const [shouldStart, setShouldStart] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    setShouldStart(true);
  }, []);

  useEffect(() => {
    if (shouldStart) {
      let index = 0;
      const timer = window.setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          window.clearInterval(timer);
        }
      }, speed);

      return () => window.clearInterval(timer);
    }
  }, [shouldStart, text, speed]);

  return [ref, displayedText] as const;
};
