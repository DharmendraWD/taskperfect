import {configureStore} from '@reduxjs/toolkit'
import countReducer from './slices/Count'
import productReducer from './slices/ProductsSlice'
import loginReducer from './slices/auth/LoginSlice'

import  totalNews from "./slices/news/NewsSlice";
import promoshareReducer from './slices/promoShare/PromoshareSlice'
import userReducer from './slices/user/Userslice'
import blogReducer from './slices/blogs/BlogsSlice'


const store = configureStore({
    reducer: {
        // count: countReducer,
        // products: productReducer,
        login: loginReducer,
        allNews: totalNews,
        promoshare: promoshareReducer,
        user: userReducer,
        blog: blogReducer
    }
})

export default store;