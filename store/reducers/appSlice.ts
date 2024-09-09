// appSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  aiTrainCompleted: boolean;
}

const initialState: AppState = {
  aiTrainCompleted: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    completeTrain(state) {
      state.aiTrainCompleted = true;
    },
    resetTrain(state) {
      state.aiTrainCompleted = false;
    },
  },
});

export const { completeTrain, resetTrain } = appSlice.actions;

export default appSlice.reducer;
