import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const STATUS = Object.freeze({
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: 'error',
    SUCCESS: 'success'
})


const productSlice = createSlice({
    name:'products',
    initialState:{
        data:[],
        status:STATUS.IDLE
    },
    reducers:{
        setProducts(state,action){
            state.data = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        }
    }

})

export const {setProducts, setStatus} = productSlice.actions
export default productSlice.reducer

// middleware 
export function fetchproduct(){
    return async function fetchproductThunk(dispatch, getstate){
        dispatch(setStatus(STATUS.LOADING))

        try{
            const res = await axios.get('https://fakestoreapi.com/products')
            const products = res.data
            dispatch(setProducts(products))
            dispatch(setStatus(STATUS.SUCCESS))
        }
        catch(err){
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}