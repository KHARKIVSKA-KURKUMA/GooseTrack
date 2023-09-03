import { createAsyncThunk } from '@reduxjs/toolkit';
import { addUserData } from './userSlice';
import axios from 'axios';
import instance from 'helpers/instance';

const patch = axios.create({
  baseURL: `https://goosetrack-tj84.onrender.com`,
});

const setAuthHeader = token => {
  if (token) {
    return (patch.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  patch.defaults.headers.common.authorization = '';
};

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
