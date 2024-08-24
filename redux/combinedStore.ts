import { configureStore } from '@reduxjs/toolkit';
import appReducer from '@/appSlice';

export const combinedStore = configureStore({
  reducer: {
    app: appReducer,
    
  },
});

export type RootState = ReturnType<typeof combinedStore.getState>;
export type AppDispatch = typeof combinedStore.dispatch;
