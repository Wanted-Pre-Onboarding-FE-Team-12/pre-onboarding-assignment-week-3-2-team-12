import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:4000/comments/';

export const fetchComment = createAsyncThunk('FETCH_COMMENT', async () => {
  const response = await axios.get(URL);
  return response.data;
});

export const deleteComment = createAsyncThunk('DELETE_COMMENT', async (id) => {
  await axios.delete(`${URL}${id}`);
});

export const postComment = createAsyncThunk(
  'POST_COMMENT',
  async (newComment) => {
    const response = await axios.post(URL, newComment);
    return response.data;
  }
);

export const commentSlice = createSlice({
  name: 'comment',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComment.fulfilled, (state, action) => [
      ...action.payload,
    ]);
    builder.addCase(deleteComment.fulfilled, (state, action) =>
      state.filter((comment) => comment.id !== action.payload)
    );
    builder.addCase(postComment.fulfilled, (state, action) => [
      ...state,
      action.payload,
    ]);
  },
});
