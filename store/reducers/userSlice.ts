import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  selectedUser: Cookies.get('user') || null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.selectedUser = action.payload;
      Cookies.set('user', action.payload, { expires: 7, path: '/' });
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
