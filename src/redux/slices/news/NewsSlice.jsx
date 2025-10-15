import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const BASE_API_URL = import.meta.env.VITE_API_BASE_URL;



// get all news
export const news = createAsyncThunk("news", async (currentPage, thunkAPI) => {
  try {
    const res = await axios.get(`${BASE_API_URL}/NewsAnnounce/GetPagedNewsList?pageIndex=${currentPage}&pageSize=6`);
    // console.log(res.data)
    return res.data; // return just the response data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// get news by id
export const getNewsById = createAsyncThunk(
  "getNewsById",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_API_URL}/NewsAnnounce/GetNewsById/${id}`);
      console.log(res.data)
      return res.data; // return just the response data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// createslice 
export const newsStatus = createSlice({
  name: "NewsStatus",
  initialState: {
    news: [],
    singleNews:null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(news.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(news.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload; // only assign the array
      })
      .addCase(news.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

    //   GET NEWS BY ID 
      .addCase(getNewsById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNewsById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleNews = action.payload; // only assign the array
      })
      .addCase(getNewsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default newsStatus.reducer;