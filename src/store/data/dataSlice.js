import { createSlice } from '@reduxjs/toolkit';
import getCurrentDate from 'helpers/currentDay';
import { logout } from 'store/auth/authOperations';

const initialState = {
  currentDate: getCurrentDate(),
};

export const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setDates: (state, { payload }) => {
      state.currentDate = payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      action => {
        return (
          action.type === logout.pending.type ||
          action.type === logout.fulfilled.type ||
          action.type === logout.rejected.type
        );
      },
      state => {
        state.currentDate = getCurrentDate();
      }
    );
  },
});

export const { setDates } = dateSlice.actions;

export const dateReducer = dateSlice.reducer;
