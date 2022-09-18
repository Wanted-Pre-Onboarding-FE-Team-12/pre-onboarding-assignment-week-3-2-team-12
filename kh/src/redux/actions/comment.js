import { createAsyncThunk } from '@reduxjs/toolkit';
import * as commentApi from '@api/commentApi';

export const getComment = createAsyncThunk('comment/get', async rejectWithValue => {
  try {
    const response = await commentApi.fetchGet();
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});

export const modifyComment = createAsyncThunk('comment/modify', async (id, { rejectWithValue }) => {
  try {
    const response = await commentApi.fetchModify();

    return response.data;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});

export const deleteComment = createAsyncThunk('comment/delete', async (id, { rejectWithValue }) => {
  try {
    const response = await commentApi.fetchDelete();
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});
