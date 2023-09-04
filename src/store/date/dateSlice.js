import { createSlice } from '@reduxjs/toolkit';
import { format } from 'date-fns';
import { logout } from 'store/auth/authOperations';

const initialState = {
  currentDate: format(Date.now(), 'yyyy-MM-dd'),
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
        state.currentDate = format(Date.now(), 'yyyy-MM-dd');
      }
    );
  },
});

export const { setDates } = dateSlice.actions;

export const dateReducer = dateSlice.reducer;
