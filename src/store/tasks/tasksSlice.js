import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  getUserTasksThunk,
  addTask,
  deleteTask,
  editTask,
} from './tasksThunks';
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
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.tasks.push(payload);
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.tasks.filter(task => task._id !== payload._id);
      })
      .addCase(editTask.fulfilled, (state, { payload }) => {
        state.tasks = state.tasks.map(task => {
          if (task._id === payload._id) {
            return payload;
          }
          return task;
        });
      })
      .addMatcher(
        isAnyOf(
          getUserTasksThunk.pending,
          addTask.pending,
          deleteTask.pending,
          editTask.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getUserTasksThunk.fulfilled,
          addTask.fulfilled,
          deleteTask.fulfilled,
          editTask.fulfilled
        ),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(
          getUserTasksThunk.rejected,
          addTask.rejected,
          deleteTask.rejected,
          editTask.rejected
        ),
        handleRejected
      );
  },
});

export const tasksReducer = tasksSlice.reducer;
