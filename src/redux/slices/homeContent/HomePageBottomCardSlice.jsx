export const BASE_API_URL = import.meta.env.VITE_API_BASE_URL;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const HomePageBottomCard = createAsyncThunk("HomePageBottomCards", async (_, thunkAPI) => {
  try {
    const res = await axios.get(`${BASE_API_URL}/HomeContentMid/GetPagedHomeContentMidList?pageIndex=1&pageSize=10`);
    // console.log(res.data)
    return res.data; // return just the response data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});



// createslice 
export const HomePageBottomCardStatus = createSlice({
  name: "HomePageBottomCardStatus",
  initialState: {
    HomePageBottomCard: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // faq content 
      .addCase(HomePageBottomCard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(HomePageBottomCard.fulfilled, (state, action) => {
        state.loading = false;
        state.HomePageBottomCard = action.payload;
      })
      .addCase(HomePageBottomCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      
    },
});

export default HomePageBottomCardStatus.reducer;

