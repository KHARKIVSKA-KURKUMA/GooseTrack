import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from './handleFunction';
import { getFeedbackThunk } from './feedbackThunks';

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getFeedbackThunk.fulfilled, (state, { payload }) => {
        state.feedback = payload;
        console.log(state.feedback);
      })
      .addMatcher(isAnyOf(getFeedbackThunk.pending), handlePending)
      .addMatcher(isAnyOf(getFeedbackThunk.fulfilled), handleFulfilled)
      .addMatcher(isAnyOf(getFeedbackThunk.rejected), handleRejected);
  },
});

export const feedbackReducer = feedbackSlice.reducer;
