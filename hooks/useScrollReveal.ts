'use client';

import { useState, useEffect, useRef } from 'react';

type RevealCallback = () => void;

const callbackMap = new Map<Element, RevealCallback>();
const observerMap = new Map<number, IntersectionObserver>();

function getSharedObserver(threshold: number): IntersectionObserver {
  if (!observerMap.has(threshold)) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cb = callbackMap.get(entry.target);
            if (cb) {
              cb();
              callbackMap.delete(entry.target);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    observerMap.set(threshold, observer);
  }
  return observerMap.get(threshold)!;
}

export function useScrollReveal(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    callbackMap.set(currentRef, () => setIsVisible(true));
    const observer = getSharedObserver(threshold);
    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
      callbackMap.delete(currentRef);
    };
  }, [threshold]);

  return [ref, isVisible] as const;
}
