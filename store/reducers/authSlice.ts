// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthenticationState {
  isConnected: boolean;
  publicAddress: string | null;
}

const initialState: AuthenticationState = {
  isConnected: false,
  publicAddress: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    disconnect(state) {
      state.isConnected = false;
      state.publicAddress = null;
    },
    connectWallet(state, action: PayloadAction<string>) {
      state.isConnected = true;
      state.publicAddress = action.payload;
    },
  },
});

export const { disconnect, connectWallet } = authSlice.actions;
export default authSlice.reducer;