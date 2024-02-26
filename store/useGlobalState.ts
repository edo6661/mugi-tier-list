import { create } from "zustand";

interface GlobalState {
  isOpen: boolean;
  falseIsOpen: () => void;
  trueIsOpen: () => void;
}
export const useGlobalState = create<GlobalState>((set) => ({
  isOpen: false,
  trueIsOpen: () => set({ isOpen: true }),
  falseIsOpen: () => set({ isOpen: false }),
}));
