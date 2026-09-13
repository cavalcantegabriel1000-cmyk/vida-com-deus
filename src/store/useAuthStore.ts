import { create } from 'zustand';
import { User } from '@/types';

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    // TODO: Implement API call
    console.log('Logging in with:', email);
    // Mock user
    const mockUser: User = {
      id: '1',
      name: 'Usuário',
      email,
      createdAt: new Date(),
    };
    set({ user: mockUser, isAuthenticated: true });
  },

  register: async (name: string, email: string, password: string) => {
    // TODO: Implement API call
    console.log('Registering:', name, email);
    const mockUser: User = {
      id: '1',
      name,
      email,
      createdAt: new Date(),
    };
    set({ user: mockUser, isAuthenticated: true });
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },

  setUser: (user: User | null) => {
    set({ user, isAuthenticated: !!user });
  },
}));
