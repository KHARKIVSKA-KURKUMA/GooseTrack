import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = '';

export const getFeedbackThunk = createAsyncThunk(
  'feedback/getFeedback',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://64ea3781bf99bdcc8e676a13.mockapi.io/feedback`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
