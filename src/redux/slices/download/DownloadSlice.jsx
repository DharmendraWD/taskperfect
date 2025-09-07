import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const BASE_API_URL = import.meta.env.VITE_API_BASE_URL;

// Get paginated downloads
export const download = createAsyncThunk("download", async ({ limit, skip }, thunkAPI) => {
    try {
        const res = await axios.get(
            `${BASE_API_URL}/DownloadFiles/GetPagedDownloadList?pageIndex=${skip}&pageSize=${limit}`
        );
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

// Slice
export const downloadStatus = createSlice({
    name: "downloadStatus",
    initialState: {
        data: [],
        loading: false,
        singlePromoshare: null,
        error: null,
        limit: 12,
        skip: 1,
        totalPages: 1,
        currentPage: 1,
    },
    reducers: {
        setPage: (state, action) => {
            state.skip = (action.payload - 1) * state.limit;
            state.currentPage = action.payload;
        },
        setSkip: (state, action) => {
            state.skip = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(download.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(download.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;

                const totalCount = action.payload?.data?.totalCount || 0;
                state.totalPages = Math.ceil(totalCount / state.limit);
            })
            .addCase(download.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            });
    },
});

export default downloadStatus.reducer;
