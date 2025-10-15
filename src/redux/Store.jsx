import {configureStore} from '@reduxjs/toolkit'
import countReducer from './slices/Count'
import productReducer from './slices/ProductsSlice'
import loginReducer from './slices/auth/LoginSlice'

import  totalNews from "./slices/news/NewsSlice";
import promoshareReducer from './slices/promoShare/PromoshareSlice'
import userReducer from './slices/user/Userslice'
import blogReducer from './slices/blogs/BlogsSlice'
import homeContentReducer from './slices/homeContent/HomepageSlice'
import faqReducer from './slices/homeContent/FaqSlice'
import HomePgBtmCardReducer from './slices/homeContent/HomePageBottomCardSlice'
import first3BlogsReducer from './slices/blogs/FirstThreeBlogs'
import downloadReducer from './slices/download/DownloadSlice'
import promosshareReducer from './slices/promoShare/TabData'
import footerAsideReducer from './slices/footer/footerSLice'


const store = configureStore({
    reducer: {
        // count: countReducer,
        // products: productReducer,
        login: loginReducer,
        allNews: totalNews,
        promoshare: promoshareReducer,
        user: userReducer,
        blog: blogReducer,
        homeContent: homeContentReducer,
        faq: faqReducer,
        HomePageBottomCard: HomePgBtmCardReducer,
        first3Blogs: first3BlogsReducer,
        downloads:downloadReducer,
        promoshareTabs: promosshareReducer,
        footerAsideS: footerAsideReducer,
    }
})

export default store;