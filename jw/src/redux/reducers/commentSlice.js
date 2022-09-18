import { createSlice } from '@reduxjs/toolkit';
import { deleteComment, getComment, modifyComment } from '../actions/comment';
import { reducerUtils } from '../../util/async.utill';

const initialState = reducerUtils.initial();

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getComment.pending, (state, action) => reducerUtils.loading(action.payload))
      .addCase(getComment.rejected, (state, action) => reducerUtils.error(action.payload))
      .addCase(getComment.fulfilled, (state, action) => reducerUtils.success(action.payload))
      .addCase(deleteComment.pending, (state, action) => reducerUtils.loading(action.payload))
      .addCase(deleteComment.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteComment.fulfilled, (state, action) => reducerUtils.success(action.payload))
      .addCase(modifyComment.pending, (state, action) => reducerUtils.loading(action.payload))
      .addCase(modifyComment.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(modifyComment.fulfilled, (state, action) => reducerUtils.success(action.payload));
  },
});

export default commentSlice.reducer;
