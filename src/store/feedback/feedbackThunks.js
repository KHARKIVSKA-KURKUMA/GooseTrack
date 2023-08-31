import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goosetrack-tj84.onrender.com';

export const getAllFeedbacks = createAsyncThunk(
  'feedback/getAllFeedbacks',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/reviews`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
