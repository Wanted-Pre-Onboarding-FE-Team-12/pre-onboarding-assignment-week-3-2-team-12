import { createSlice } from '@reduxjs/toolkit';

export const updateListSlice = createSlice({
  name: 'updateList',
  initialState: { updated: false },
  reducers: {
    update(state, action) {
      state.updated = !state.updated;
    },
  },
  extraReducers: builder => {},
});

export const updateListActions = updateListSlice.actions;
