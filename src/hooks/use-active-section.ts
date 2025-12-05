'use client';

import { useState, useEffect, useRef } from 'react';

export function useActiveSection(sectionIds: string[], options?: IntersectionObserverInit) {
  const [activeSection, setActiveSection] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options ?? { rootMargin: '-50% 0px -50% 0px' });

    const { current: currentObserver } = observer;

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        currentObserver.observe(el);
      }
    });

    return () => {
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          currentObserver.unobserve(el);
        }
      });
    };
  }, [sectionIds, options]);

  return activeSection;
}
