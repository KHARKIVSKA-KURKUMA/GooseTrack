import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getUserTasksThunk } from './tasksThunks';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from './handleFunction';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getUserTasksThunk.fulfilled, (state, { payload }) => {
        state.tasks = payload;
      })
      .addMatcher(isAnyOf(getUserTasksThunk.pending), handlePending)
      .addMatcher(isAnyOf(getUserTasksThunk.fulfilled), handleFulfilled)
      .addMatcher(isAnyOf(getUserTasksThunk.rejected), handleRejected);
  },
});

export const tasksReducer = tasksSlice.reducer;

