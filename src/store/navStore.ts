import { create } from "zustand";

interface Store {
  isNavbarBlack: boolean;
  setIsNavbarBlack: (val: boolean) => void;
}

export const useNavStore = create<Store>((set) => ({
  isNavbarBlack: true, // default can be true or false
  setIsNavbarBlack: (val) => set({ isNavbarBlack: val }),
}));
