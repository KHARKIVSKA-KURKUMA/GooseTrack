import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../helpers/instance';

export const register = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.register(data);
      return result;
    } catch ({ response }) {
      console.log(response)
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      console.log('result>>>> ', result);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logout();
      console.log('logout>>>>', result)
      return result;
    } catch ({ response }) {
      console.log(response);
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.getCurrent(auth.token.accessToken);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);



// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// // axios.defaults.baseURL = 'http://localhost:4000';

// axios.defaults.baseURL = 'https://goosetrack-backend.onrender.com';

// export const setAuthHeader = accessToken => {
//   axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
// };

// axios.interceptors.response.use(
//   response => response,
//   async error => {
//     if (error.response.status === 401) {
//       const refreshToken = localStorage.getItem('refreshToken');
//       try {
//         const { data } = await axios.post('/api/auth/refresh', {
//           refreshToken,
//         });
//         setAuthHeader(data.accessToken);
//         localStorage.setItem('refreshToken', data.refreshToken);
//         // error.config.headers.common.authorization = `Bearer ${data.accessToken}`;
//         return axios(error.config);
//       } catch (error) {
//         return Promise.reject(error);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export const register = createAsyncThunk(
//   'auth/register',
//   async (user, thunkAPI) => {
//     try {
//       const { data } = await axios.post('/api/auth/registration', user);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
//   try {
//     const { data } = await axios.post('/api/auth/login', user);
//     console.log(data)
//     setAuthHeader(data.accessToken);
//     localStorage.setItem('refreshToken', data.refreshToken);
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const resendEmail = createAsyncThunk(
//   'auth/resendEmail',
//   async (email, thunkAPI) => {
//     try {
//       const { data } = await axios.post('/api/auth/verify', { email });

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const loginWithToken = createAsyncThunk(
//   'auth/loginWithToken',
//   async (accessToken, thunkAPI) => {
//     try {
//       const { data } = await axios.get(`/api/auth/login/${accessToken}`);
//       setAuthHeader(data.accessToken);
//       localStorage.setItem('refreshToken', data.refreshToken);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const googleAuth = createAsyncThunk(
//   'auth/google',
//   async (_, thunkAPI) => {
//     try {
//       await axios.get('/api/auth/google');
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await axios.post('/api/auth/logout');

//     setAuthHeader('');
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.accessToken;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }

//     try {
//       setAuthHeader(persistedToken);
//       const res = await axios.get('/api/auth/current');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
