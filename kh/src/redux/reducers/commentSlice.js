import { createSlice } from '@reduxjs/toolkit';
import { deleteComment, getComment, modifyComment } from '@redux/actions/comment';

const initialState = {
  comments: [],
};

function isPendingAction(action) {
  return action.type.endsWith('/pending');
}

function isRejectedAction(action) {
  return action.type.endsWith('/rejected');
}

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getComment.fulfilled, (state, action) => {})
      .addCase(deleteComment.fulfilled, (state, action) => {})
      .addCase(modifyComment.fulfilled, (state, action) => {})
      .addMatcher(isPendingAction, state => {})
      .addMatcher(isRejectedAction, (state, action) => {});
  },
});
