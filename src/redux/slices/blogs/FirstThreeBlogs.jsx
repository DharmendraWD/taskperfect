import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const BASE_API_URL = import.meta.env.VITE_API_BASE_URL;



export const first3Blogs = createAsyncThunk(
  "first3Blogs",
  async ({ currentPage, numOfBlogs }, thunkAPI) => {
    try {
      const res = await axios.get(
        `${BASE_API_URL}/Blog/GetPagedBlogList?pageIndex=${currentPage}&pageSize=${numOfBlogs}`
      );
      // console.log(res.data)
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



// createslice 
export const first3blogsStatus = createSlice({
  name: "first3blogsStatus",
  initialState: {
    data: [],
    // singleBlog:null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(first3Blogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(first3Blogs.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // only assign the array
      })
      .addCase(first3Blogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

  },
});

export default first3blogsStatus.reducer;

