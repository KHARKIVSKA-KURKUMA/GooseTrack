import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { register, login, logout, current } from './authOperations';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from './handleFunction';

const initialState = {
  user: {},
  isLogin: false,
  token: { accessToken: '', refreshToken: '' },
  loading: false,
  error: null,
  verify: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user = {};
        state.token = null;
        state.isLogin = false;
      })
      .addCase(logout.rejected, state => {
        state.user = {};
        state.token = null;
        state.isLogin = false;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(current.rejected, state => {
        state.token = '';
      })
      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          logout.pending,
          current.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          register.fulfilled,
          login.fulfilled,
          logout.fulfilled,
          current.fulfilled
        ),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          login.rejected,
          logout.rejected,
          current.rejected
        ),
        handleRejected
      );
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLogin'],
};

const authReducer = authSlice.reducer;

export const persistedAuthReducer = persistReducer(persistConfig, authReducer);
