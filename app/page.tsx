'use client';

import { useState, useEffect, useRef } from 'react';

const gameModes = [
  {
    name: 'Gem Grab',
    description: 'Collect and hold 10 gems to win. Work with your team to control the mine in the center.',
    icon: '💎',
  },
  {
    name: 'Showdown',
    description: 'Battle royale style! Last Brawler or team standing wins. Grab power-ups to dominate.',
    icon: '⚔️',
  },
  {
    name: 'Brawl Ball',
    description: 'Score 2 goals before the enemy team. Break walls and pass to teammates to win!',
    icon: '⚽',
  },
  {
    name: 'Bounty',
    description: 'Defeat enemies to earn stars. The team with the most stars at the end wins.',
    icon: '⭐',
  },
  {
    name: 'Heist',
    description: 'Protect your safe while trying to crack open the enemy safe. First to destroy wins!',
    icon: '💰',
  },
  {
    name: 'Hot Zone',
    description: 'Control the marked zones to earn points. Hold them longer than the enemy team.',
    icon: '🔥',
  },
];

const brawlers = [
  {
    name: 'Shelly',
    type: 'Common',
    description: 'A classic brawler with a trusty shotgun. Great at close range combat.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Colt',
    type: 'Rare',
    description: 'Rapid-fire gunslinger with incredible range and piercing shots.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Spike',
    type: 'Legendary',
    description: 'A cute cactus that explodes into spikes. Deals area damage.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Leon',
    type: 'Legendary',
    description: 'Master assassin who can turn invisible. Perfect for sneak attacks.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'Poco',
    type: 'Rare',
    description: 'Musical skeleton who heals teammates. Support your team to victory!',
    color: 'from-amber-500 to-orange-500',
  },
  {
    name: 'El Primo',
    type: 'Rare',
    description: 'A luchador with high health. Jump into battle and punch enemies!',
    color: 'from-red-500 to-rose-500',
  },
];

const features = [
  {
    title: 'Fast-Paced Action',
    description: 'Quick 3-minute matches packed with intense gameplay. Perfect for on-the-go gaming.',
    icon: '⚡',
  },
  {
    title: 'Team-Based Strategy',
    description: 'Form teams of 3 and work together to outsmart and outplay your opponents.',
    icon: '🤝',
  },
  {
    title: '60+ Unique Brawlers',
    description: 'Unlock and upgrade dozens of characters, each with unique abilities and playstyles.',
    icon: '🎭',
  },
  {
    title: 'Multiple Game Modes',
    description: 'Switch between various game modes to keep the action fresh and exciting.',
    icon: '🎮',
  },
];

const whyPlayReasons = [
  {
    title: 'Competitive & Fun',
    description: 'Climb the ranks and compete in championship events for glory.',
    icon: '🏆',
  },
  {
    title: 'Play With Friends',
    description: 'Team up with friends or make new ones in clubs and friendly matches.',
    icon: '👥',
  },
  {
    title: 'Regular Updates',
    description: 'New Brawlers, skins, and game modes are added constantly.',
    icon: '🆕',
  },
  {
    title: 'Free to Play',
    description: 'Download and play for free with fair progression systems.',
    icon: '🎁',
  },
];

function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
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
}

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState('');

  const [overviewRef, overviewVisible] = useScrollReveal();
  const [modesRef, modesVisible] = useScrollReveal();
  const [brawlersRef, brawlersVisible] = useScrollReveal();
  const [whyPlayRef, whyPlayVisible] = useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert('Thanks for subscribing! Stay tuned for updates.');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      
      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
            BRAWL STARS
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <button onClick={() => scrollToSection('overview')} className="text-gray-300 hover:text-yellow-400 transition-colors">
              Overview
            </button>
            <button onClick={() => scrollToSection('modes')} className="text-gray-300 hover:text-yellow-400 transition-colors">
              Game Modes
            </button>
            <button onClick={() => scrollToSection('brawlers')} className="text-gray-300 hover:text-yellow-400 transition-colors">
              Brawlers
            </button>
            <button onClick={() => scrollToSection('download')} className="text-gray-300 hover:text-yellow-400 transition-colors">
              Download
            </button>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-bold text-black hover:scale-105 transition-transform">
            Play Now
          </button>
        </nav>
      </header>

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-600/30 to-orange-600/30 animate-gradient" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 rounded-full text-yellow-400 text-sm font-semibold animate-fade-in">
            🎮 #1 Mobile Multiplayer Game
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl animate-fade-in-up">
            BRAWL STARS
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Fast-paced 3v3 multiplayer and battle royale made for mobile! Play with friends or solo across a variety of game modes in under three minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-bold text-black text-lg hover:scale-105 transition-transform shadow-lg shadow-orange-500/50">
              Download Free
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-bold text-white text-lg hover:bg-white/20 transition-colors">
              Watch Trailer
            </button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-center animate-fade-in-up animation-delay-600">
            <div>
              <div className="text-4xl font-bold text-yellow-400">500M+</div>
              <div className="text-gray-400 text-sm">Downloads</div>
            </div>
            <div className="w-px bg-white/20" />
            <div>
              <div className="text-4xl font-bold text-pink-400">60+</div>
              <div className="text-gray-400 text-sm">Brawlers</div>
            </div>
            <div className="w-px bg-white/20" />
            <div>
              <div className="text-4xl font-bold text-purple-400">10+</div>
              <div className="text-gray-400 text-sm">Game Modes</div>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" ref={overviewRef} className={`relative py-24 bg-black/30 backdrop-blur-sm transition-all duration-1000 ${overviewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              What is Brawl Stars?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              An award-winning multiplayer mobile game where players battle in real-time with friends or solo. Choose from dozens of unique Brawlers and dominate the arena!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="modes" ref={modesRef} className={`relative py-24 transition-all duration-1000 ${modesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Epic Game Modes
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose your favorite way to play! Each mode offers unique challenges and strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameModes.map((mode, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl hover:border-purple-500 transition-all cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all" />
                <div className="relative z-10">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {mode.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{mode.name}</h3>
                  <p className="text-gray-300">{mode.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="brawlers" ref={brawlersRef} className={`relative py-24 bg-gradient-to-b from-black/50 to-black/30 transition-all duration-1000 ${brawlersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              Meet the Brawlers
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Collect and upgrade 60+ unique characters, each with their own personality and special abilities!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brawlers.map((brawler, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${brawler.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all">
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-bold">
                    {brawler.type}
                  </div>
                  <div className={`w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br ${brawler.color} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform`}>
                    🎯
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white text-center">{brawler.name}</h3>
                  <p className="text-gray-400 text-center">{brawler.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-bold text-black text-lg hover:scale-105 transition-transform">
              View All Brawlers
            </button>
          </div>
        </div>
      </section>

      <section ref={whyPlayRef} className={`relative py-24 transition-all duration-1000 ${whyPlayVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Why Play Brawl Stars?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join millions of players worldwide in the ultimate mobile multiplayer experience!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whyPlayReasons.map((reason, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-yellow-500/50 transition-all group"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{reason.title}</h3>
                  <p className="text-gray-400">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="relative py-24 bg-gradient-to-b from-purple-900/20 via-pink-900/20 to-black">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              Ready to Brawl?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Download now and join the action-packed fun! Available on iOS and Android.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button className="px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-bold text-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-orange-500/50">
                📱 Download for iOS
              </button>
              <button className="px-10 py-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full font-bold text-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-green-500/50">
                🤖 Download for Android
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Official Website
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Esports
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                News & Updates
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Support
              </a>
            </div>

            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-white">Stay Updated!</h3>
              <p className="text-gray-400 mb-6">Subscribe to get the latest news, updates, and exclusive offers.</p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                />
                <button type="submit" className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-bold text-black hover:scale-105 transition-transform">
                  Subscribe
                </button>
              </form>
            </div>

            <div className="flex justify-center gap-6 mt-12">
              <a href="#" aria-label="Facebook" className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" aria-label="Twitter" className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-xl">🐦</span>
              </a>
              <a href="#" aria-label="YouTube" className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-xl">📺</span>
              </a>
              <a href="#" aria-label="Instagram" className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-xl">📷</span>
              </a>
              <a href="#" aria-label="Discord" className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-xl">💬</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 bg-black/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Brawl Stars. All rights reserved. Supercell, the Supercell logo and Brawl Stars are trademarks of Supercell Oy.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg shadow-orange-500/50 hover:scale-110 transition-transform"
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
