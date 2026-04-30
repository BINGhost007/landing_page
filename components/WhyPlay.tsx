import { whyPlayReasons } from '@/data/content';
import Icon from './Icons';
import ScrollReveal from './ScrollReveal';

export default function WhyPlay() {
  return (
    <ScrollReveal as="section" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Why Play Brawl Stars?
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Join millions of players worldwide in the ultimate mobile
            multiplayer experience!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {whyPlayReasons.map((reason) => (
            <div
              key={reason.id}
              className="flex gap-4 p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-yellow-500/50 transition-all group"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                <Icon name={reason.icon} className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {reason.title}
                </h3>
                <p className="text-gray-400">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
