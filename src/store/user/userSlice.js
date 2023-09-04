import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, updateUser } from './operations';

const updateUserState = (state, action) => {
  for (let key in state) {
    if (state.hasOwnProperty(key) && action.hasOwnProperty(key)) {
      state[key] = action[key];
    }
  }
};

const initialState = {
  name: '',
  email: '',
  birthday: '',
  phone: '',
  skype: '',
  avatarURL: '',
  isLoading: false,
  isFulfilled: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserData(state, action) {
      updateUserState(state, action.payload);
    },
    cleanUserData(state) {
      state = initialState;
      return state;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(updateUser.fulfilled, (state, action) => {
        updateUserState(state, action.payload);
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
        state.birthday = payload.birthday;
        state.phone = payload.phone;
        state.skype = payload.skype;
        state.avatarURL = payload.avatarURL;
        state.isLoading = false;
        state.isFulfilled = true;
      })
      .addCase(fetchCurrentUser.pending, (state, { payload }) => {
        state.isLoading = true;
        state.isFulfilled = false;
      })
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.isLoading = true;
      });
  },
});

export const { addUserData, cleanUserData } = userSlice.actions;
export const userReducer = userSlice.reducer;
