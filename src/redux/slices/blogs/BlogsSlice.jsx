import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const BASE_API_URL = import.meta.env.VITE_API_BASE_URL;



// get all blogs
export const blogs = createAsyncThunk("blogs", async (currentPage, thunkAPI) => {
  try {
    const res = await axios.get(`${BASE_API_URL}/Blog/GetPagedBlogList?pageIndex=${currentPage}&pageSize=6`);
    // console.log(res.data)
    return res.data; // return just the response data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// get blogs by id
export const getBlogById = createAsyncThunk(
  "getNewsById",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_API_URL}/Blog/GetBlogById/${id}`);
      console.log(res.data)
      return res.data; // return just the response data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// createslice 
export const blogStatus = createSlice({
  name: "blogStatus",
  initialState: {
    blogs: [],
    singleBlog:null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(blogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(blogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload; // only assign the array
      })
      .addCase(blogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

    //   GET NEWS BY ID 
      .addCase(getBlogById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBlogById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleBlog = action.payload; // only assign the array
      })
      .addCase(getBlogById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default blogStatus.reducer;

