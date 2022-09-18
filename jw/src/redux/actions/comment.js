import { createAsyncThunk } from '@reduxjs/toolkit';
import * as commentApi from '../../api/commentApi';

export const getComment = createAsyncThunk('comment/get', async () => {
  const response = await commentApi.fetchGet();
  return response.data;
});

export const modifyComment = createAsyncThunk('comment/modify', async id => {
  const response = await commentApi.fetchModify();
  return response.data;
});

export const deleteComment = createAsyncThunk('comment/delete', async id => {
  const response = await commentApi.fetchDelete();
  return response.data;
});
