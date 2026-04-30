import { STORE_LINKS } from '@/data/content';
import Icon from './Icons';
import SubscribeForm from './SubscribeForm';

const SOCIAL_LINKS = [
  { label: 'Facebook', icon: 'facebook', href: STORE_LINKS.facebook },
  { label: 'Twitter', icon: 'twitter', href: STORE_LINKS.twitter },
  { label: 'YouTube', icon: 'youtube', href: STORE_LINKS.youtube },
  { label: 'Instagram', icon: 'instagram', href: STORE_LINKS.instagram },
  { label: 'Discord', icon: 'discord', href: STORE_LINKS.discord },
] as const;

const QUICK_LINKS = [
  { label: 'Official Website', href: STORE_LINKS.website },
  { label: 'Esports', href: STORE_LINKS.esports },
  { label: 'News & Updates', href: STORE_LINKS.news },
  { label: 'Support', href: STORE_LINKS.support },
] as const;

export default function Download() {
  return (
    <section
      id="download"
      className="relative py-24 bg-gradient-to-b from-purple-900/20 via-pink-900/20 to-black"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
            Ready to Brawl?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-12">
            Download now and join the action-packed fun! Available on iOS and
            Android.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href={STORE_LINKS.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-bold text-black text-lg sm:text-xl hover:scale-105 transition-transform shadow-2xl shadow-orange-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <Icon name="phone" className="w-6 h-6" />
              Download for iOS
            </a>
            <a
              href={STORE_LINKS.android}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full font-bold text-black text-lg sm:text-xl hover:scale-105 transition-transform shadow-2xl shadow-green-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <Icon name="android" className="w-6 h-6" />
              Download for Android
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {QUICK_LINKS.map((link, i) => (
              <>
                {i > 0 && (
                  <span key={`sep-${link.label}`} className="text-gray-600" aria-hidden="true">
                    &bull;
                  </span>
                )}
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
                >
                  {link.label}
                </a>
              </>
            ))}
          </div>

          <SubscribeForm />

          <div className="flex justify-center gap-4 sm:gap-6 mt-12">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all hover:scale-110 text-gray-300 hover:text-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
              >
                <Icon name={link.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
