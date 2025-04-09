import { create } from "zustand";

interface Store {
  isNavbarBlack: boolean;
  setIsNavbarBlack: (val: boolean) => void;
  hasPreloaderAnimationEnded: boolean;
  setHasPreloaderAnimationEnded: (val: boolean) => void;
}

export const useNavStore = create<Store>((set) => ({
  isNavbarBlack: true, // default can be true or false
  setIsNavbarBlack: (val) => set({ isNavbarBlack: val }),
  hasPreloaderAnimationEnded: false, // default can be true or false
  setHasPreloaderAnimationEnded: (val) => set({ hasPreloaderAnimationEnded: val }),
}));
