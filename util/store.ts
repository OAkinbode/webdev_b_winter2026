import { create } from "zustand";

// 1. Define the shape of the state
interface UserState {
  user: string;
  setUser: (newName: string) => void;
}

// 2. Apply the interface to the store
export const useUserStore = create<UserState>((set) => ({
  user: "",
  setUser: (newName) => set({ user: newName }),
}));
