import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from './handleFunction';
import { getAllFeedbacks } from './feedbackThunks';

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllFeedbacks.fulfilled, (state, { payload }) => {
        state.feedback = payload;
        console.log('payload :>> ', payload);
        console.log(state.feedback);

      })
      .addMatcher(isAnyOf(getAllFeedbacks.pending), handlePending)
      .addMatcher(isAnyOf(getAllFeedbacks.fulfilled), handleFulfilled)
      .addMatcher(isAnyOf(getAllFeedbacks.rejected), handleRejected);
  },
});

export const feedbackReducer = feedbackSlice.reducer;
