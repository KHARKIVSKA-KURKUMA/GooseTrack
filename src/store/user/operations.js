import { createAsyncThunk } from '@reduxjs/toolkit';
import { addUserData } from './userSlice';
import axios from 'axios';
const patch = axios.create({
  baseURL: `https://goosetrack-tj84.onrender.com`
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
    try {
      setAuthHeader("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWY1MjYyNTQ4ZTRiNTdjM2UxMTY0MyIsImlhdCI6MTY5MzQyNzc3NCwiZXhwIjoxNjk0MDMyNTc0fQ.MqEqqICHN324ut5PUH58NX7zAR0OAnup6kwmK47iD_w");
      const response = await patch.get('/auth/current');
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
      const response = await patch.patch('/auth/user', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
