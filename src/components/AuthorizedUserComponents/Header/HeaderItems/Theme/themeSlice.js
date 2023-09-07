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

// import { createSlice } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';

// const themeSlice = createSlice({
//   name: 'theme',
//   initialState: { theme: 'light' },
//   reducers: {
//     toggleTheme: state => {
//       return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
//     },
//   },
// });

// export const { toggleTheme } = themeSlice.actions;

// const persistConfig = {
//   key: 'theme',
//   storage,
//   whitelist: ['theme'],
// };

// export const themeReducer = themeSlice.reducer;
// export const persistedThemeReducer = persistReducer(
//   persistConfig,
//   themeReducer
// );
