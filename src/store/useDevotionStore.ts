import { create } from 'zustand';
import { Devotion } from '@/types';

interface DevotionStore {
  devotions: Devotion[];
  currentDevotion: Devotion | null;
  addDevotion: (devotion: Devotion) => void;
  setCurrentDevotion: (devotion: Devotion) => void;
  getDailyDevotion: () => Devotion | undefined;
  getDevotionsByCategory: (category: string) => Devotion[];
}

const mockDevotions: Devotion[] = [
  {
    id: '1',
    title: 'Confiança em Deus',
    content: 'Quando enfrentamos dificuldades, é importante lembrar que Deus está sempre conosco. A confiança em Seu plano perfeito nos traz paz e segurança.',
    verse: 'Salmos 23:4',
    date: new Date(),
    author: 'Equipe Vida com Deus',
    category: 'morning',
    duration: 5,
  },
  {
    id: '2',
    title: 'A Força da Oração',
    content: 'A oração é o meio mais poderoso que temos para nos conectar com Deus. Através dela, compartilhamos nossas alegrias, preocupações e gratidão.',
    verse: '1 Tessalonicenses 5:17',
    date: new Date(),
    author: 'Equipe Vida com Deus',
    category: 'evening',
    duration: 7,
  },
];

export const useDevotionStore = create<DevotionStore>((set, get) => ({
  devotions: mockDevotions,
  currentDevotion: null,

  addDevotion: (devotion: Devotion) => {
    set((state) => ({
      devotions: [...state.devotions, devotion],
    }));
  },

  setCurrentDevotion: (devotion: Devotion) => {
    set({ currentDevotion: devotion });
  },

  getDailyDevotion: () => {
    const state = get();
    return state.devotions.find((d) => {
      const today = new Date();
      const devotionDate = new Date(d.date);
      return (
        today.getDate() === devotionDate.getDate() &&
        today.getMonth() === devotionDate.getMonth() &&
        today.getFullYear() === devotionDate.getFullYear()
      );
    });
  },

  getDevotionsByCategory: (category: string) => {
    const state = get();
    return state.devotions.filter((d) => d.category === category);
  },
}));
