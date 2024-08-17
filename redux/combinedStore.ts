import { configureStore } from '@reduxjs/toolkit';
import appReducer from '@/appSlice';
import authReducer from '@/authSlice';

export const combinedStore = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof combinedStore.getState>;
export type AppDispatch = typeof combinedStore.dispatch;
