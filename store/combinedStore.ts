import { configureStore } from '@reduxjs/toolkit';
import appReducer from '@/store/reducers/appSlice';
import userReducer from '@/store/reducers/userSlice';

export const combinedStore = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  
  },
});

export type RootState = ReturnType<typeof combinedStore.getState>;
export type AppDispatch = typeof combinedStore.dispatch;