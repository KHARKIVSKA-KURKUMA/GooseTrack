import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'helpers/instance';

export const getAllFeedbacks = createAsyncThunk(
  'feedback/getAllFeedbacks',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/api/reviews`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addReview = createAsyncThunk(
  'reviews/addReview',
  async ({ rating, text }, thunkAPI) => {
    try {
      const { data } = await instance.post('api/reviews', {
        rating,
        text,
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  'reviews/deleteReview',
  async (review, thunkAPI) => {
    try {
      const { data } = await instance.delete(`api/review/${review.id}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editReview = createAsyncThunk(
  'review/editReview',
  async (review, thunkAPI) => {
    try {
      const { data } = await instance.patch(`api/review/${review.id}`, review);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
