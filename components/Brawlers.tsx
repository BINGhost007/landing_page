import { brawlers, STORE_LINKS } from '@/data/content';
import ScrollReveal from './ScrollReveal';

const TYPE_BADGE_COLORS: Record<string, string> = {
  Common: 'bg-gray-500/30 text-gray-300',
  Rare: 'bg-blue-500/30 text-blue-300',
  Legendary: 'bg-yellow-500/30 text-yellow-300',
};

export default function Brawlers() {
  return (
    <ScrollReveal
      as="section"
      id="brawlers"
      className="relative py-24 bg-gradient-to-b from-black/50 to-black/30"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
            Meet the Brawlers
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Collect and upgrade 60+ unique characters, each with their own
            personality and special abilities!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {brawlers.map((brawler) => (
            <div
              key={brawler.id}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${brawler.color} opacity-20 group-hover:opacity-30 transition-opacity`}
              />
              <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all">
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                    TYPE_BADGE_COLORS[brawler.type] ?? 'bg-white/10 text-white'
                  }`}
                >
                  {brawler.type}
                </div>
                <div
                  className={`w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 rounded-full bg-gradient-to-br ${brawler.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <span className="text-3xl sm:text-4xl font-black text-white drop-shadow-lg select-none">
                    {brawler.initial}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white text-center">
                  {brawler.name}
                </h3>
                <p className="text-gray-400 text-center">
                  {brawler.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={STORE_LINKS.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-bold text-black text-lg hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
          >
            View All Brawlers
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}
