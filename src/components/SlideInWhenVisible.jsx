import React, { useRef, useEffect, useState } from 'react';

const SlideInWhenVisible = ({ children, from = 'left', delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Observer nach dem ersten Erscheinen stoppen, wenn die Animation nur einmal laufen soll
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.02 // Auslöser, wenn 2% des Elements sichtbar sind
    });

    observer.observe(domRef.current);

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  const slideClass = from === 'left' ? 'translate-x-[-100%]' : from === 'right' ? 'translate-x-[100%]' : 'translate-y-[100%]';
  const visibleClass = from === 'left' || from === 'right' || from === 'bottom' ? 'translate-x-0 translate-y-0 opacity-100' : '';

  return (
    <div
      className={`${className} transition-all duration-1500 ease-out ${isVisible ? visibleClass : slideClass} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default SlideInWhenVisible;