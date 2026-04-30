import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import GameModes from '@/components/GameModes';
import Brawlers from '@/components/Brawlers';
import WhyPlay from '@/components/WhyPlay';
import Download from '@/components/Download';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white">
      <div
        className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <Navbar />
      <Hero />
      <Features />
      <GameModes />
      <Brawlers />
      <WhyPlay />
      <Download />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
