import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserTasksThunk = createAsyncThunk(
  'tasks/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`api/tasks/`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
