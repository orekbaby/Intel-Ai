// store.ts
import create from "zustand";

interface AppState {
  aiTrainCompleted: boolean;
  completeTrain: () => void;
  resetTrain: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  aiTrainCompleted: false,
  completeTrain: () => set({ aiTrainCompleted: true }),
  resetTrain: () => set({ aiTrainCompleted: false }),
}));
