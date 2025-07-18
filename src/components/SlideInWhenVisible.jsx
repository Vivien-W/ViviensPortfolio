import React, { useRef, useEffect, useState } from 'react';

const SlideInWhenVisible = ({ children, from = 'left', delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.02
    });

    if (domRef.current) observer.observe(domRef.current);

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  // Animation classes only for md and up
  const slideClass = from === 'left'
    ? 'md:translate-x-[-100%]'
    : from === 'right'
    ? 'md:translate-x-[100%]'
    : 'md:translate-y-[100%]';

  const visibleClass = 'md:translate-x-0 md:translate-y-0 md:opacity-100';

  return (
    <div
      className={`${className} transition-all duration-1000 ease-out 
        ${isVisible ? visibleClass : slideClass} 
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default SlideInWhenVisible;
