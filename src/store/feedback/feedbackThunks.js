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

export const getByOwner = createAsyncThunk(
  'feedback/getByOwner',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/api/reviews/own`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addReview = createAsyncThunk(
  'feedback/addReview',
  async ({ rating, text }, thunkAPI) => {
    try {
      const { data } = await instance.post(`/api/reviews`, {
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
  'feedback/deleteReview',
  async ({ _id }, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/api/reviews/${_id}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editReview = createAsyncThunk(
  'feedback/editReview',
  async ({ rating, text, _id }, thunkAPI) => {
    try {
      console.log(rating, text, _id);
      const { data } = await instance.patch(`/api/reviews/${_id}`, {
        rating,
        text,
      });

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
