export const BASE_API_URL = import.meta.env.VITE_API_BASE_URL;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const footerAside = createAsyncThunk("footerAside", async (_, thunkAPI) => {
  try {
    const res = await axios.get(`${BASE_API_URL}/PromoConfig/GetPagedPromoConfigList?pageIndex=1&pageSize=10`);
    // console.log(res.data)
    return res.data; // return just the response data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});



// createslice 
export const footerAsideStatus = createSlice({
  name: "footerAsideStatus",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // faq content 
      .addCase(footerAside.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(footerAside.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(footerAside.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      
    },
});

export default footerAsideStatus.reducer;

