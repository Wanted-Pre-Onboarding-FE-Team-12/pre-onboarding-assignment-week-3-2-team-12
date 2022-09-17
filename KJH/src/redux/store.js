import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { commentSlice } from './reducers/commentSlice';

export const store = configureStore({
  reducer: {
    comment: commentSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});
