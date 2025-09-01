import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('http://www.taskperfect.somee.com/api/User/login', credentials)
      const token = res.data.data.token;
      const userId = res.data.data.userId;
      // console.log(token, "token received")
      // console.log(userId)

      if (token && token!==null && token!==undefined) {
        localStorage.setItem('token', token)
        localStorage.setItem('userId', userId)
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
           toast.warn('Invalid email or password', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
    userId: localStorage.getItem('userId') || null,
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
        state.token = action.payload.data.token
        if(state.token){
          state.isAuthenticated = true
          state.userId = action.payload.data.userId
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.isAuthenticated = false
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.token = null
       state.userId = null
        state.isAuthenticated = false
      })
  }
})

export default LoginSlice.reducer