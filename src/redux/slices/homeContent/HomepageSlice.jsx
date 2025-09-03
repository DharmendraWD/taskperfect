import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const BASE_API_URL = import.meta.env.VITE_API_BASE_URL;



// get all blogs
export const homeContents = createAsyncThunk("homeContents", async (_, thunkAPI) => {
  try {
    const res = await axios.get(`${BASE_API_URL}/HomeContent/GetPagedHomeContentList?pageIndex=1&pageSize=10`);
    // console.log(res.data)
    return res.data; // return just the response data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});




// createslice 
export const homeContentStatus = createSlice({
  name: "homeContentStatus",
  initialState: {
    homeContent: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(homeContents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(homeContents.fulfilled, (state, action) => {
        state.loading = false;
        state.homeContent = action.payload; // only assign the array
      })
      .addCase(homeContents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

   
  },
});

export default homeContentStatus.reducer;

