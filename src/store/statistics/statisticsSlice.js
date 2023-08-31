import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getStatisticsThunk } from './statisticsThunks';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from './handleFunction';

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getStatisticsThunk.fulfilled, (state, { payload }) => {
        state.statistics = payload;
      })
      .addMatcher(isAnyOf(getStatisticsThunk.pending), handlePending)
      .addMatcher(isAnyOf(getStatisticsThunk.fulfilled), handleFulfilled)
      .addMatcher(isAnyOf(getStatisticsThunk.rejected), handleRejected);
  },
});

export const statisticsReducer = statisticsSlice.reducer;
