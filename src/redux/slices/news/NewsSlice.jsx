import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// get all news
export const totalNews = createAsyncThunk("totalNews", async (_, thunkAPI) => {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    return res.data.products; // return just the response data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// get newws by id
export const getNewsById = createAsyncThunk(
  "getNewsById",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      return res.data; // return just the response data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// createslice 
export const newsStatus = createSlice({
  name: "newsStatus",
  initialState: {
    data: [],
    singleNews:null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(totalNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(totalNews.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // only assign the array
      })
      .addCase(totalNews.rejected, (state, action) => {
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

