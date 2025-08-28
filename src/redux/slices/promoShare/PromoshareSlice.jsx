import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// get allPromoshare 
export const totalPromoshare = createAsyncThunk("totalPromoshare", async (_, thunkAPI) => {
    try {
        const res = await axios.get("https://dummyjson.com/products");
        return res.data.products; // return just the response data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})



// slice 
export const promoshareStatus = createSlice({
    name: "promoshareStatus",
    initialState: {
        data: [],
        loading: false,
        singlePromoshare: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(totalPromoshare.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(totalPromoshare.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload; // only assign the array
            })
            .addCase(totalPromoshare.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })
    }
})


export default promoshareStatus.reducer;