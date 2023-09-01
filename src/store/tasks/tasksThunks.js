import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'helpers/instance';

export const getUserTasksThunk = createAsyncThunk(
  'tasks/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`api/tasks`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getUserTasksByDateThunk = createAsyncThunk(
  'tasks/getByDate',
  async (res, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(
        `api/tasks?year=${res.year}&month=${res.month}&day=${res.day}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async ({ title, start, end, priority, date, category }, thunkAPI) => {
    try {
      const { data } = await instance.post(`api/tasks/`, {
        title,
        start,
        end,
        priority,
        date,
        category,
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (task, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/tasks/${task._id}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editTask = createAsyncThunk(
  'tasks/editTask',
  async (task, thunkAPI) => {
    try {
      const { data } = await instance.patch(`/tasks/${task._id}`, task);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
