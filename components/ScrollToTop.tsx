'use client';

import { useState, useEffect } from 'react';
import Icon from './Icons';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setVisible(window.scrollY > 500);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg shadow-orange-500/50 hover:scale-110 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
    >
      <Icon name="arrow-up" className="w-6 h-6 text-black" />
    </button>
  );
}
