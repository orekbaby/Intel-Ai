import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

// Initial state includes both selectedUser and onBoard
const initialState = {
  selectedUser: Cookies.get('user') || null,  // Get user from cookies or default to null
  onBoard: false,  // Default to false, or you can set based on a cookie or another value
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to set the selected user
    setUser: (state, action) => {
      state.selectedUser = action.payload;  // Update selected user in Redux state
      Cookies.set('user', action.payload, { expires: 7, path: '/' });  // Store user in cookie
    },
    // Action to set the onBoard state
    setOnBoard: (state, action) => {
      state.onBoard = action.payload;  // Update onBoard state in Redux
    },
  },
});

// Export actions to be used in components
export const { setUser, setOnBoard } = userSlice.actions;

// Export reducer to be used in store
export default userSlice.reducer;
