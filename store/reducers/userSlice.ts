import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

// Initial state includes both selectedUser and onBoard
const initialState = {
  selectedUser: Cookies.get('user') || null,  // Get user from cookies or default to null
  onBoard: false,  // Default to false, or you can set based on a cookie or another value
};

// Slice logic remains largely the same
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.selectedUser = action.payload;
      Cookies.set('user', action.payload, { expires: 7, path: '/' });
    },
    setOnBoard: (state, action) => {
      state.onBoard = action.payload;
    },
  },
});

export const { setUser, setOnBoard } = userSlice.actions;
export default userSlice.reducer;

