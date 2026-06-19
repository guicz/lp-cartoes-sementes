import { create } from 'zustand';
import type { CardTier } from '@/types/cards';

export type CardFilter = 'todos' | CardTier;

interface CardFilterState {
  filter: CardFilter;
  setFilter: (filter: CardFilter) => void;
}

export const useCardFilterStore = create<CardFilterState>((set) => ({
  filter: 'todos',
  setFilter: (filter) => set({ filter }),
}));
