import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greeting: '',
  error: null,
};

export const getGreeting = createAsyncThunk('getGreetings', async () => {
  const response = await axios.get('http://127.0.0.1:3000/api/greetings');
  const { data } = response;
  return data;
});

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGreeting.fulfilled, (state, action) => {
        state.greeting = action.payload;
      });
  },
});

export default greetingsSlice.reducer;
