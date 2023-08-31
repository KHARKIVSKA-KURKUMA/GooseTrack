import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goosetrack-tj84.onrender.com';

export const getAllFeedbacks = createAsyncThunk(
  'feedback/getAllFeedbacks',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/reviews`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addReview = createAsyncThunk(
  'reviews/addReview',
  async ({ rating, text}, thunkAPI) => {
    try {
      const { data } = await axios.post('/reviews', {
       rating, text
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
      const { data } = await axios.delete(`/review/${review.id}`);
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
      const { data } = await axios.patch(`/review/${review.id}`, review);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
