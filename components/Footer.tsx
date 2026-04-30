import { STORE_LINKS } from '@/data/content';

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: STORE_LINKS.privacy },
  { label: 'Terms of Service', href: STORE_LINKS.terms },
  { label: 'Cookie Policy', href: STORE_LINKS.cookies },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Brawl Stars. All rights
            reserved. Supercell, the Supercell logo and Brawl Stars are
            trademarks of Supercell Oy.
          </div>
          <div className="flex gap-6 text-sm">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
