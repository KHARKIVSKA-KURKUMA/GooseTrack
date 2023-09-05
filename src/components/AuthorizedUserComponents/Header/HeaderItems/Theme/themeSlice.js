import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    toggleTheme: state => {
      return state === 'light' ? 'dark' : 'light';
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
