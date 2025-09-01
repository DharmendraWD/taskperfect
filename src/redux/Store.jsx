import {configureStore} from '@reduxjs/toolkit'
import countReducer from './slices/Count'
import productReducer from './slices/ProductsSlice'
import loginReducer from './slices/auth/LoginSlice'

import  totalNews from "./slices/news/NewsSlice";
import promoshareReducer from './slices/promoShare/PromoshareSlice'
import userReducer from './slices/user/Userslice'


const store = configureStore({
    reducer: {
        // count: countReducer,
        // products: productReducer,
        login: loginReducer,
        allNews: totalNews,
        promoshare: promoshareReducer,
        user: userReducer
    }
})

export default store;