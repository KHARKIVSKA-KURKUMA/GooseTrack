import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = '';

export const getUserTasksThunk = createAsyncThunk(
  'tasks/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/tasks`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
