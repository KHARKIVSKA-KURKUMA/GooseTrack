import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'helpers/instance';

export const getStatisticsThunk = createAsyncThunk(
  'statistics/getStatistics',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`api/tasks/`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
