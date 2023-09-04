import { createAsyncThunk } from '@reduxjs/toolkit';
import { addUserData } from './userSlice';
import instance from 'helpers/instance';

export const fetchCurrentUser = createAsyncThunk(
  'getCurrentUser',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/auth/current');
      await thunkAPI.dispatch(addUserData(response.data));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'patchCurrentUser',
  async (data, thunkAPI) => {
    try {
      const response = await instance.patch('/auth/user', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
