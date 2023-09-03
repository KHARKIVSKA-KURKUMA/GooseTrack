import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import getCurrentDate from 'helpers/currentDay';
import { logout } from 'store/auth/authOperations';

const dateSlice = createSlice({
  name: 'date',
  initialState: { currentDate: getCurrentDate() },
  reducers: {
    setDates: (state, { payload }) => {
      state.currentDate = payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      isAnyOf(logout.pending, logout.fulfilled, logout.rejected),
      state => {
        state.currentDate = getCurrentDate();
      }
    );
  },
});

export const { setDates } = dateSlice.actions;

export const dateReducer = dateSlice.reducer;
