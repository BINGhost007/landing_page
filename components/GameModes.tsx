import { gameModes } from '@/data/content';
import Icon from './Icons';
import ScrollReveal from './ScrollReveal';

export default function GameModes() {
  return (
    <ScrollReveal as="section" id="modes" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            Epic Game Modes
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Choose your favorite way to play! Each mode offers unique
            challenges and strategies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gameModes.map((mode) => (
            <div
              key={mode.id}
              className="group relative p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl hover:border-purple-400 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all" />
              <div className="relative z-10">
                <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
                  <Icon name={mode.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {mode.name}
                </h3>
                <p className="text-gray-300">{mode.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
