import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import commentReducer from './reducers/commentSlice';

export const store = configureStore({
  reducer: {
    comment: commentReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});
