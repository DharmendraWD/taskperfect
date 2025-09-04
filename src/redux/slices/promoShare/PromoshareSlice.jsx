import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const BASE_API_URL = import.meta.env.VITE_API_BASE_URL;

// Async thunk: Get paginated promoshare data
export const totalPromoshare = createAsyncThunk(
  "totalPromoshare",
  async ({ limit, skip }, thunkAPI) => {
    try {
      const res = await axios.get(
        `${BASE_API_URL}/CompanyProfile/GetPagedCompanyProfileList?pageIndex=${skip}&pageSize=${limit}`
      );

      // Log API response
    //   console.log("API Response:", res.data);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// get particular promoshare page detailes 
export const getPromoshareById = createAsyncThunk(
  "getPromoshareById",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_API_URL}/CompanyProfile/GetCompanyProfileById/${id}`);
      return res.data; // return just the response data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Slice
export const promoshareStatus = createSlice({
  name: "promoshareStatus",
  initialState: {
    data: [],
    loading: false,
    singlePromoshare: null,
    error: null,
    limit: 8,
    skip: 1, // skip is an offset (i.e., start index)
    totalPages: 1,
    currentPage: 1,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
      state.skip = (action.payload - 1) * state.limit;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(totalPromoshare.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(totalPromoshare.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;

        const totalCount = action.payload?.data?.totalCount || 0;
        state.totalPages = Math.ceil(totalCount / state.limit);
      })
      .addCase(totalPromoshare.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

    //   singlie promoshare 
            .addCase(getPromoshareById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPromoshareById.fulfilled, (state, action) => {
        state.loading = false;
        state.singlePromoshare = action.payload;

        const totalCount = action.payload?.data?.totalCount || 0;
        state.totalPages = Math.ceil(totalCount / state.limit);
      })
      .addCase(getPromoshareById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default promoshareStatus.reducer;


