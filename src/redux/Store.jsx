import {configureStore} from '@reduxjs/toolkit'
import countReducer from './slices/Count'
import productReducer from './slices/ProductsSlice'
import loginReducer from './slices/auth/LoginSlice'


const store = configureStore({
    reducer: {
        count: countReducer,
        products: productReducer,
        login: loginReducer
    }
})

export default store;