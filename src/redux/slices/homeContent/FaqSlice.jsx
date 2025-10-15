export const BASE_API_URL = import.meta.env.VITE_API_BASE_URL;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const faqContent = createAsyncThunk("faqContents", async (_, thunkAPI) => {
  try {
    const res = await axios.get(`${BASE_API_URL}/Faq/GetPagedFaqList?pageIndex=1&pageSize=10`);
    // console.log(res.data)
    return res.data; // return just the response data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});



// createslice 
export const faqStatus = createSlice({
  name: "faqStatus",
  initialState: {
    faqContent: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // faq content 
      .addCase(faqContent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(faqContent.fulfilled, (state, action) => {
        state.loading = false;
        state.faqContent = action.payload;
      })
      .addCase(faqContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      
    },
});

export default faqStatus.reducer;

