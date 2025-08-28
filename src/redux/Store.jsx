import {configureStore} from '@reduxjs/toolkit'
import countReducer from './slices/Count'
import productReducer from './slices/ProductsSlice'
import loginReducer from './slices/auth/LoginSlice'

import  totalNews from "./slices/news/NewsSlice";

import promoshareReducer from './slices/promoShare/PromoshareSlice'


const store = configureStore({
    reducer: {
        // count: countReducer,
        // products: productReducer,
        login: loginReducer,
        allNews: totalNews,
        promoshare: promoshareReducer
    }
})

export default store;