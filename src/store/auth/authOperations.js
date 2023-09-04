import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../helpers/instance';
import { toast } from 'react-toastify';

export const register = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.register(data);
      toast.info(
        '🦄 We have sent you a message by email. Run over there and see',
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        }
      );
      return result;
    } catch (error) {
      console.log(error.response.data.message)
      toast.warn(error.response.data.message);
      return rejectWithValue({ status: error.status, message: error.message });
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);

      return result;
    } catch (error) {
      console.log(error.response.data.message);
      if (error.response.data.message === 'User not found') {
        toast.warn('Go to email and click verify');
        return rejectWithValue({
          status: error.status,
          message: error.message,
        });
      } 
        toast.warn(error.response.data.message);
        return rejectWithValue({
          status: error.status,
          message: error.message,
        });
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logout();
      return result.data;
    } catch (error) {
      return rejectWithValue({ status: error.status, message: error.message });
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.getCurrent(auth.token.accessToken);
      return result;
    } catch (error) {
      return rejectWithValue({ status: error.status, message: error.message });
    }
  }
);
