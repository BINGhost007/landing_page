export interface GameMode {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Brawler {
  id: string;
  name: string;
  type: 'Common' | 'Rare' | 'Legendary';
  description: string;
  color: string;
  initial: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface WhyPlayReason {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const gameModes: GameMode[] = [
  {
    id: 'gem-grab',
    name: 'Gem Grab',
    description:
      'Collect and hold 10 gems to win. Work with your team to control the mine in the center.',
    icon: 'gem',
  },
  {
    id: 'showdown',
    name: 'Showdown',
    description:
      'Battle royale style! Last Brawler or team standing wins. Grab power-ups to dominate.',
    icon: 'swords',
  },
  {
    id: 'brawl-ball',
    name: 'Brawl Ball',
    description:
      'Score 2 goals before the enemy team. Break walls and pass to teammates to win!',
    icon: 'football',
  },
  {
    id: 'bounty',
    name: 'Bounty',
    description:
      'Defeat enemies to earn stars. The team with the most stars at the end wins.',
    icon: 'star',
  },
  {
    id: 'heist',
    name: 'Heist',
    description:
      'Protect your safe while trying to crack open the enemy safe. First to destroy wins!',
    icon: 'vault',
  },
  {
    id: 'hot-zone',
    name: 'Hot Zone',
    description:
      'Control the marked zones to earn points. Hold them longer than the enemy team.',
    icon: 'flame',
  },
];

export const brawlers: Brawler[] = [
  {
    id: 'shelly',
    name: 'Shelly',
    type: 'Common',
    description:
      'A classic brawler with a trusty shotgun. Great at close range combat.',
    color: 'from-purple-500 to-pink-500',
    initial: 'S',
  },
  {
    id: 'colt',
    name: 'Colt',
    type: 'Rare',
    description:
      'Rapid-fire gunslinger with incredible range and piercing shots.',
    color: 'from-blue-500 to-cyan-500',
    initial: 'C',
  },
  {
    id: 'spike',
    name: 'Spike',
    type: 'Legendary',
    description:
      'A cute cactus that explodes into spikes. Deals area damage.',
    color: 'from-green-500 to-emerald-500',
    initial: 'Sp',
  },
  {
    id: 'leon',
    name: 'Leon',
    type: 'Legendary',
    description:
      'Master assassin who can turn invisible. Perfect for sneak attacks.',
    color: 'from-indigo-500 to-purple-500',
    initial: 'L',
  },
  {
    id: 'poco',
    name: 'Poco',
    type: 'Rare',
    description:
      'Musical skeleton who heals teammates. Support your team to victory!',
    color: 'from-amber-500 to-orange-500',
    initial: 'P',
  },
  {
    id: 'el-primo',
    name: 'El Primo',
    type: 'Rare',
    description:
      'A luchador with high health. Jump into battle and punch enemies!',
    color: 'from-red-500 to-rose-500',
    initial: 'EP',
  },
];

export const features: Feature[] = [
  {
    id: 'fast-action',
    title: 'Fast-Paced Action',
    description:
      'Quick 3-minute matches packed with intense gameplay. Perfect for on-the-go gaming.',
    icon: 'zap',
  },
  {
    id: 'team-strategy',
    title: 'Team-Based Strategy',
    description:
      'Form teams of 3 and work together to outsmart and outplay your opponents.',
    icon: 'users',
  },
  {
    id: 'unique-brawlers',
    title: '60+ Unique Brawlers',
    description:
      'Unlock and upgrade dozens of characters, each with unique abilities and playstyles.',
    icon: 'sparkles',
  },
  {
    id: 'game-modes',
    title: 'Multiple Game Modes',
    description:
      'Switch between various game modes to keep the action fresh and exciting.',
    icon: 'gamepad',
  },
];

export const whyPlayReasons: WhyPlayReason[] = [
  {
    id: 'competitive',
    title: 'Competitive & Fun',
    description:
      'Climb the ranks and compete in championship events for glory.',
    icon: 'trophy',
  },
  {
    id: 'friends',
    title: 'Play With Friends',
    description:
      'Team up with friends or make new ones in clubs and friendly matches.',
    icon: 'users-group',
  },
  {
    id: 'updates',
    title: 'Regular Updates',
    description:
      'New Brawlers, skins, and game modes are added constantly.',
    icon: 'refresh',
  },
  {
    id: 'free',
    title: 'Free to Play',
    description:
      'Download and play for free with fair progression systems.',
    icon: 'gift',
  },
];

export const STORE_LINKS = {
  ios: 'https://apps.apple.com/app/brawl-stars/id1229016807',
  android: 'https://play.google.com/store/apps/details?id=com.supercell.brawlstars',
  trailer: 'https://www.youtube.com/watch?v=CEt5BLKVSHY',
  website: 'https://supercell.com/en/games/brawlstars/',
  esports: 'https://esports.brawlstars.com/',
  support: 'https://help.supercellsupport.com/brawl-stars/en/index.html',
  news: 'https://blog.brawlstars.com/',
  privacy: 'https://supercell.com/en/privacy-policy/',
  terms: 'https://supercell.com/en/terms-of-service/',
  cookies: 'https://supercell.com/en/cookie-policy/',
  facebook: 'https://www.facebook.com/BrawlStars/',
  twitter: 'https://twitter.com/BrawlStars',
  youtube: 'https://www.youtube.com/BrawlStars',
  instagram: 'https://www.instagram.com/brawlstars/',
  discord: 'https://discord.gg/brawlstars',
} as const;
