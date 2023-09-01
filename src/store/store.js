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

import { userReducer } from './user/userSlice';
import { persistedAuthReducer } from './auth/authSlice';
import { tasksReducer } from './tasks/tasksSlice';
import { feedbackReducer } from './feedback/feedbackSlice';
import { statisticsReducer } from './statistics/statisticsSlice';

const reducer = {
  feedback: feedbackReducer,
  auth: persistedAuthReducer,
  tasks: tasksReducer,
  user: userReducer,
  statistics: statisticsReducer,
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
