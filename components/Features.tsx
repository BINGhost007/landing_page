import { features } from '@/data/content';
import Icon from './Icons';
import ScrollReveal from './ScrollReveal';

export default function Features() {
  return (
    <ScrollReveal
      as="section"
      id="overview"
      className="relative py-24 bg-black/30 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            What is Brawl Stars?
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            An award-winning multiplayer mobile game where players battle in
            real-time with friends or solo. Choose from dozens of unique
            Brawlers and dominate the arena!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-yellow-500/50 transition-all hover:scale-105 group focus-within:ring-2 focus-within:ring-yellow-400"
            >
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                <Icon name={feature.icon} className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
