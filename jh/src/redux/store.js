import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { commentSlice } from './reducers/commentSlice';
import { updateListSlice } from './reducers/updateListSlice';

const reducer = combineReducers({
  commentSlice: commentSlice.reducer,
  updateList: updateListSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});
