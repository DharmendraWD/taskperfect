import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const BASE_API_URL = import.meta.env.VITE_API_BASE_URL;


// get userProfile data
export const userProfile = createAsyncThunk("userProfile", async (_, thunkAPI) => {
    try {
        // /api/User/userprofile
        const userId = localStorage.getItem('userId');  
        const res = await axios.get(`${BASE_API_URL}/User/userprofile?userCode=${userId}`);
        // console.log(res.data.data)
        return res.data.data; // return just the response data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})



// slice 
export const userStatus = createSlice({
    name: "userStatus",
    initialState: {
        user: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload; // set user
            })
            .addCase(userProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })
    }
})


export default userStatus.reducer;