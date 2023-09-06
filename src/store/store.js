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
import {
  // persistedThemeReducer,
  themeReducer,
} from '../components/AuthorizedUserComponents/Header/HeaderItems/Theme/themeSlice';
import { dateReducer } from './date/dateSlice';

const reducer = {
  feedback: feedbackReducer,
  auth: persistedAuthReducer,
  tasks: tasksReducer,
  user: userReducer,
  // theme: persistedThemeReducer,
  theme: themeReducer,
  date: dateReducer,
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
