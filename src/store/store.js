import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedTaskReducer } from './tasks/tasksSlice';
import { persistedAuthReducer } from './auth/authSlice';

import { feedbackReducer } from './feedback/feedbackSlice';


const reducer = {
  feedback: feedbackReducer,
  tasks: persistedTaskReducer,
  auth: persistedAuthReducer
};

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
