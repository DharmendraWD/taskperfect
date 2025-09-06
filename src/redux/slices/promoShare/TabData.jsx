import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const BASE_API_URL = import.meta.env.VITE_API_BASE_URL;

// Async thunk: Get paginated promoshare data
export const promoshareTabAPI = createAsyncThunk(
  'promoshareTabAPI/fetchData',
  async (endpoint, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_API_URL}${endpoint}`);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



// Slice
export const promoshareTabAPiStatus = createSlice({
  name: "promoshareTabAPiStatus",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },

extraReducers: (builder) => {
  builder
    .addCase(promoshareTabAPI.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(promoshareTabAPI.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload; // Add this in your `initialState`
    })
    .addCase(promoshareTabAPI.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message;
    })
}
  });
  
  export default promoshareTabAPiStatus.reducer;
  
  
