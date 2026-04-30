'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

const observers = new Map<string, IntersectionObserver>();

function getSharedObserver(
  threshold: number,
  callback: (entry: IntersectionObserverEntry) => void
): IntersectionObserver {
  const key = `t-${threshold}`;
  if (!observers.has(key)) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    observers.set(key, observer);
  }
  return observers.get(key)!;
}

export function useScrollReveal(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleIntersect = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = getSharedObserver(threshold, (entry) => {
      if (entry.target === currentRef) {
        handleIntersect();
      }
    });

    observer.observe(currentRef);
    return () => {
      observer.unobserve(currentRef);
    };
  }, [threshold, handleIntersect]);

  return [ref, isVisible] as const;
}
