import { createAsyncThunk } from '@reduxjs/toolkit';
import { addUserData } from './userSlice';
import instance from 'helpers/instance';

export const fetchCurrentUser = createAsyncThunk(
  'getCurrentUser',
  async (_, thunkAPI) => {
    // const accessToken = localStorage.getItem('accessToken');
    // console.log(accessToken)
    try {
      // setAuthHeader(accessToken);
      const response = await instance.get('/auth/current');
      await thunkAPI.dispatch(addUserData(response.data));
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
