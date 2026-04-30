import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Brawl Stars - Fast-Paced 3v3 Multiplayer Mobile Game',
  description:
    'Join the ultimate mobile gaming experience! Brawl Stars features fast-paced 3v3 battles, unique characters, and multiple game modes. Download now for free!',
  openGraph: {
    title: 'Brawl Stars - Fast-Paced 3v3 Multiplayer Mobile Game',
    description:
      'Fast-paced 3v3 multiplayer and battle royale made for mobile! Play with friends or solo across a variety of game modes.',
    url: 'https://supercell.com/en/games/brawlstars/',
    siteName: 'Brawl Stars',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brawl Stars - Fast-Paced 3v3 Multiplayer Mobile Game',
    description:
      'Fast-paced 3v3 multiplayer and battle royale made for mobile!',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
