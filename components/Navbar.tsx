'use client';

import { useState, useEffect } from 'react';
import Icon from './Icons';
import { STORE_LINKS } from '@/data/content';

const NAV_ITEMS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Game Modes', href: '#modes' },
  { label: 'Brawlers', href: '#brawlers' },
  { label: 'Download', href: '#download' },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-black/30 backdrop-blur-md'
      }`}
    >
      <nav
        className="container mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          BRAWL STARS
        </a>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="text-gray-300 hover:text-yellow-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded px-1"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={STORE_LINKS.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-bold text-black hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Play Now
          </a>

          <button
            type="button"
            className="md:hidden p-2 text-gray-300 hover:text-yellow-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <Icon name={mobileOpen ? 'x' : 'menu'} className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-gray-300 hover:text-yellow-400 transition-colors py-2 text-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
              >
                {item.label}
              </a>
            ))}
            <a
              href={STORE_LINKS.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-bold text-black text-center hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              Play Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
