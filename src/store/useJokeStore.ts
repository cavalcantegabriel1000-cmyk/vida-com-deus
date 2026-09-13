import { create } from 'zustand';

export interface Joke {
  id: string;
  setup: string;
  punchline: string;
  type: string;
}

interface JokeStore {
  jokes: Joke[];
  currentJoke: Joke | null;
  isLoading: boolean;
  error: string | null;
  fetchRandomJoke: () => Promise<void>;
  addToFavorites: (joke: Joke) => void;
  removeFromFavorites: (jokeId: string) => void;
  isFavorite: (jokeId: string) => boolean;
}

export const useJokeStore = create<JokeStore>((set, get) => ({
  jokes: [],
  currentJoke: null,
  isLoading: false,
  error: null,

  fetchRandomJoke: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      if (!response.ok) throw new Error('Falha ao buscar piada');
      
      const data = await response.json();
      const joke: Joke = {
        id: `${data.id}`,
        setup: data.setup,
        punchline: data.punchline,
        type: data.type,
      };
      
      set({ currentJoke: joke });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Erro desconhecido' });
    } finally {
      set({ isLoading: false });
    }
  },

  addToFavorites: (joke: Joke) => {
    set((state) => {
      if (!state.jokes.find(j => j.id === joke.id)) {
        return { jokes: [...state.jokes, joke] };
      }
      return state;
    });
  },

  removeFromFavorites: (jokeId: string) => {
    set((state) => ({
      jokes: state.jokes.filter(j => j.id !== jokeId),
    }));
  },

  isFavorite: (jokeId: string) => {
    return get().jokes.some(j => j.id === jokeId);
  },
}));
