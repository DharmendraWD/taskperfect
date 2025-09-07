// src/redux/slices/homeContent/HomepageSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Load base API URL from environment
// export const BASE_API_URL = import.meta.env.VITE_API_BASE_URL;
export const BASE_API_URL = import.meta.env.VITE_API_BASE_URL;

// Async thunk to fetch home content
export const homeContents = createAsyncThunk("homeContents", async (_, thunkAPI) => {
  try {
    const res = await axios.get(`${BASE_API_URL}/HomeContent/GetPagedHomeContentList?pageIndex=1&pageSize=10`);
    // console.log(res.data)
    return res.data;

  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Redux slice
export const homeContentStatus = createSlice({
  name: "homeContentStatus",
  initialState: {
    homeContent: {
      data: {
        items: [],
      },
    },
    loading: false,
    error: null,
    hasLoaded: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(homeContents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(homeContents.fulfilled, (state, action) => {
        if (!state.hasLoaded) {
          state.homeContent = action.payload;
          state.hasLoaded = true;
        }
        state.loading = false;
      })
      .addCase(homeContents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default homeContentStatus.reducer;
