import { configureStore } from '@reduxjs/toolkit';
// import { persistStore } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { tasksReducer } from './tasks/tasksSlice';

const reducer = {
  tasks: tasksReducer,
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

// export const persistor = persistStore(store);
