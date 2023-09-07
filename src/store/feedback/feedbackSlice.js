import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from './handleFunction';
import {
  getAllFeedbacks,
  addReview,
  getByOwner,
  deleteReview,
  editReview,
} from './feedbackThunks';

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllFeedbacks.fulfilled, (state, { payload }) => {
        state.feedback = payload;
      })
      .addCase(getByOwner.fulfilled, (state, { payload }) => {
        state.feedback = payload;
      })
      .addCase(addReview.fulfilled, (state, { payload }) => {
        state.feedback.push(payload);
        state.feedback = payload;
      })
      .addCase(editReview.fulfilled, (state, { payload }) => {
        state.feedback = state.feedback.map(item => {
          if (item._id === payload._id) {
            return payload;
          }
          return item;
        });
      })
      .addCase(deleteReview.fulfilled, (state, { payload }) => {
        state.feedback.filter(item => item._id !== payload._id);
      })
      .addMatcher(
        isAnyOf(
          getAllFeedbacks.pending,
          getByOwner.pending,
          addReview.pending,
          editReview.pending,
          deleteReview.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getAllFeedbacks.fulfilled,
          getByOwner.fulfilled,
          addReview.fulfilled,
          editReview.fulfilled,
          deleteReview.fulfilled
        ),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(
          getAllFeedbacks.rejected,
          getByOwner.rejected,
          addReview.rejected,
          editReview.rejected,
          deleteReview.rejected
        ),
        handleRejected
      );
  },
});

export const feedbackReducer = feedbackSlice.reducer;
