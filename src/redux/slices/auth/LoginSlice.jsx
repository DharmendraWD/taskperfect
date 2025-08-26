import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('https://api.escuelajs.co/api/v1/auth/login', credentials)
      const token = res.data.access_token
      console.log(token, "token received")

      if (token) {
        localStorage.setItem('token', token)
        toast.success('Logged in successfully!', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        
      } else {
        localStorage.removeItem('token') // fallback
      }

      return res.data
    } catch (err) {
       toast.error("Invalid email or password", {
   position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
  });
      return thunkAPI.rejectWithValue(err.response.data)
    }
  }
)



export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  localStorage.removeItem('token')
  toast.success('Logged out successfully!', {
   position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
  });
  
  return true // ✅ fix: always return something
})

const LoginSlice = createSlice({
  name: 'auth',
  initialState: {
    // user: null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload.access_token
        // state.user = action.payload.user
        state.isAuthenticated = true
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.isAuthenticated = false
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.token = null
        // state.user = null
        state.isAuthenticated = false
      })
  }
})

export default LoginSlice.reducer