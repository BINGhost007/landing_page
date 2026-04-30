import { STORE_LINKS } from '@/data/content';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-600/30 to-orange-600/30 animate-gradient" />

      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob motion-reduce:animate-none" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 motion-reduce:animate-none" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 motion-reduce:animate-none" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 rounded-full text-yellow-400 text-sm font-semibold animate-fade-in">
          <span aria-hidden="true" className="mr-1">&#x1F3AE;</span>
          #1 Mobile Multiplayer Game
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl animate-fade-in-up">
          BRAWL STARS
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          Fast-paced 3v3 multiplayer and battle royale made for mobile! Play
          with friends or solo across a variety of game modes in under three
          minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
          <a
            href={STORE_LINKS.ios}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-bold text-black text-lg hover:scale-105 transition-transform shadow-lg shadow-orange-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
          >
            Download Free
          </a>
          <a
            href={STORE_LINKS.trailer}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-bold text-white text-lg hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
          >
            Watch Trailer
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center animate-fade-in-up animation-delay-600">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-yellow-400">500M+</div>
            <div className="text-gray-400 text-sm">Downloads</div>
          </div>
          <div className="w-px bg-white/20 hidden sm:block" aria-hidden="true" />
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-pink-400">60+</div>
            <div className="text-gray-400 text-sm">Brawlers</div>
          </div>
          <div className="w-px bg-white/20 hidden sm:block" aria-hidden="true" />
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-purple-400">10+</div>
            <div className="text-gray-400 text-sm">Game Modes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
