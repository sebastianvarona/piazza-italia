import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggle: (state) => {
      state.active = !state.active;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = menuSlice.actions;

export default menuSlice.reducer;
