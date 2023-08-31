import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'store/auth/helpers/instance';

export const getUserTasksThunk = createAsyncThunk(
  'tasks/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`api/tasks/`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
