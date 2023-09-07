import { createSlice } from '@reduxjs/toolkit';

const initialTheme = localStorage.getItem('theme') || 'light';

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialTheme,
  reducers: {
    toggleTheme: state => {
      const newTheme = state === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
