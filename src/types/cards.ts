export type CardTier = 'premium' | 'equilibrio' | 'rotina';

export interface SicrediCard {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  tier: CardTier;
  points: string;
  highlights: string[];
  bestFor: string;
}

export interface Benefit {
  title: string;
  text: string;
  icon: string;
}
