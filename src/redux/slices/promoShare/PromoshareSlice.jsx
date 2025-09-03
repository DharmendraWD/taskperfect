import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// get allPromoshare 
export const totalPromoshare = createAsyncThunk("totalPromoshare", async ({ limit, skip }, thunkAPI) => {
    try {
        const res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
        return res.data.products; // return just the response data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})


// get particular promoshare page detailes 
// export const getPromoshareById = createAsyncThunk(
//   "getPromoshareById",
//   async (id, thunkAPI) => {
//     try {
//       const res = await axios.get(`${BASE_API_URL}/Blog/GetBlogById/${id}`);
//       console.log(res.data)
//       return res.data; // return just the response data
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );


// slice 
export const promoshareStatus = createSlice({
    name: "promoshareStatus",
    initialState: {
        data: [],
        loading: false,
        singlePromoshare: null,
        error: null,
        limit: 9,
        skip: 0,
        totalPages: 1,
        currentPage: 1,
    },
    reducers: {
        setPage: (state, action) => {
            state.skip = (action.payload - 1) * state.limit;
            state.currentPage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(totalPromoshare.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(totalPromoshare.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload; // Already paginated
                state.totalPages = Math.ceil(100 / state.limit); // Replace 100 with real total count if available
            })
            .addCase(totalPromoshare.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })
    }
})


export default promoshareStatus.reducer;
