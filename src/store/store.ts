import {create} from 'zustand';

interface State {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useStore = create<State>()((set) => ({
  isDarkMode: true,
  toggleDarkMode: () => set((state) => ({isDarkMode: !state.isDarkMode})),
}));
