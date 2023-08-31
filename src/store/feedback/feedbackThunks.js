import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'store/auth/helpers/instance';

export const getAllFeedbacks = createAsyncThunk(
  'feedback/getAllFeedbacks',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/api/reviews`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
