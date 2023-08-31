import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { register, login, logout, current } from './authOperations';

// import { register, login, logout, current } from './helpers/instance';

const initialState = {
  user: {},
  isLogin: false,
  token: {accessToken:'', refreshToken:''},
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = {
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
        };
        state.isLogin = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = {};
        state.token = '';
        state.isLogin = false;
      })
      .addCase(current.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogin = true;
      });
  },
});
// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [register.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [register.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.user = payload.user;
//       store.token = {
//         accessToken: payload.accessToken,
//         refreshToken: payload.refreshToken,
//       };
//       store.isLogin = true;
//     },
//     [register.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//     [login.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [login.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.user = payload.user;
//       store.token = payload.token;
//       store.isLogin = true;
//     },
//     [login.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//     [logout.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [logout.fulfilled]: store => {
//       store.loading = false;
//       store.user = {};
//       store.token = '';
//       store.isLogin = false;
//     },
//     [logout.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//     [current.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [current.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.user = payload.user;
//       store.token = payload.token;
//       // stor.user = payload;
//       store.isLogin = true;
//     },
//     [current.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.token = '';
//       store.error = payload;
//     },
//   },
// });

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLogin'],
};



const authReducer = authSlice.reducer;

export const persistedAuthReducer = persistReducer(persistConfig, authReducer);
