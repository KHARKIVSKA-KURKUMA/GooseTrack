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
      setAuthHeader("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjEwMDdmOGYwNmI3OGJkNDIwN2MzZiIsImlhdCI6MTY5MzUxNzMzNiwiZXhwIjoxNjk0MTIyMTM2fQ.TzJ5vt6VQj3fK5BkFJPK4ioFU-IXSsoLo1NZwzPZsE4");
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
