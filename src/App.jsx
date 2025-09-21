import React, { Suspense, lazy } from 'react';
const Login = lazy(() => import('./components/pages/Login/Login'));
const HeroSection = lazy(() => import('./components/Hero/Homepage/Hero'))
const MultiCarousel = lazy(() => import('./components/carousels/MultiCarousel'))
// const MultiCarousel2 = lazy(() => import('./components/carousels/MultiCarousel2'))
const FAQ = lazy(() => import('./components/Hero/Homepage/FAQ'))
const Navbar = lazy(() => import('./components/Nav/Nav'))
const BlogPosts = lazy(() => import('./components/Hero/Homepage/BlogPosts'))
const HeroImage = lazy(() => import('./components/utilities/HeroImage'))
const Signup = lazy(() => import('./components/pages/signup/Signup'));
const Footer = lazy(() => import('./components/footer/Footer'));
const Homepage = lazy(() => import('./components/Hero/Homepage/Homepage'));
// const Card1 = lazy(() => import('./components/utilities/cards/Card1'));
const HomepageCard = lazy(() => import('./components/Hero/Homepage/HomepageCard'));
const TeamSupportSection = lazy(() => import('./components/Hero/Homepage/TeamSupportSection'));
const Blogs = lazy(() => import('./components/pages/blogs/Blogs'));
const HeadingL = lazy(() => import('./components/utilities/HeadingL'));
const Button2 = lazy(() => import('./components/utilities/Button2'));
const Button = lazy(() => import('./components/utilities/Button'));
const BlogPostDetail = lazy(() => import('./components/pages/blogs/BlogPostDetail'));
const Nepse = lazy(() => import('./components/pages/nepse/Nepse'));
const News = lazy(() => import('./components/pages/News/News'));
const NewsDetails = lazy(() => import('./components/pages/News/NewsDetails'));
const PromoShare = lazy(() => import('./components/pages/promoShare/PromoShare'));
const PromoshareDets = lazy(() => import('./components/pages/promoShare/PromoshareDets'));
const PrivateRoutes = lazy(() => import('./redux/slices/auth/PrivateRoutes'));
const ProctectedRoutesTest = lazy(() => import('./components/ProctectedRoutesTest'));
const Download = lazy(() => import('./components/pages/downloads/Download'));
const AboveFooter = lazy(() => import('./components/footer/AboveFooter'));
import UpperTitle from './components/utilities/UpperTitle/UpperTitle';


import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import './index.css'
import Legal from './components/footer/legal/Legal';

function App() {
UpperTitle();
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);


// const handBg = "linear-gradient(2deg, rgb(46 49 54) 17.55%, rgb(129 0 0 / 0%) 88.6%)";
const handBg = "linear-gradient(2deg, #2c3139 17.55%, rgb(129 0 0 / 0%) 88.6%)";


  return (
    <>
         <Navbar/>
      <div className='w-full relative max-w-[1440px]  mx-auto min-h-[100vh]'>

 <Suspense fallback={  <div className='text-white min-h-screen flex justify-center items-center text-2xl'>Loading...</div>
}>
<Routes>
 <Route path='/' element={        
    <>
  {
    isAuthenticated ? (
      <>
    <Homepage></Homepage>
    
      </>
    ) : (
        <>
          <HeroSection></HeroSection>
        <MultiCarousel></MultiCarousel>
        {/* <MultiCarousel2></MultiCarousel2> */}
        <HomepageCard></HomepageCard>
        <TeamSupportSection></TeamSupportSection>
        <FAQ></FAQ>
        <BlogPosts></BlogPosts>
      <div className='flex pb-32 items-center w-full items-center justify-center mt-[40px]'>
    <Button label="View More" link="/blogs" />
  </div>
        <div className='flex items-center flex-col w-full items-center justify-center'>
    <HeadingL label="Your gateway to growth" />
                 <Button2 label="Get Started Right Now"  link="/"></Button2>
</div>
      <AboveFooter my0={"100px"} handBg={handBg}></AboveFooter>
        </>
    )
  }
    </>
  }></Route>

  {/* lOGIN  */}
  <Route path='/login' element={<Login></Login>}></Route>
  <Route path='/signup' element={<Signup></Signup>}></Route>
  <Route path='/blogs' element={<Blogs></Blogs>}></Route>

      {/* BLOG ROUTES*/}
      <Route path="/blog/:id" element={<BlogPostDetail />} />
      <Route path="/nepse" element={<Nepse />} />

      {/* NEWS  ROUTES*/}
      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<NewsDetails />} />

      {/* PROMO SHARE ROUTES */}
      <Route path="/promoShare" element={<PromoShare />} />
      <Route path="/promoShare/:id" element={<PromoshareDets />} />

      {/* DOWNLOAD  */}
  <Route path='/downloads' element={ <Download></Download>}></Route>

  {/* FOOTER LEGAL  */}
  <Route path='/legal/:title' element={ <Legal></Legal>}></Route>

  {/* FAQS  */}
  <Route path='/faqs' element={ <FAQ></FAQ>}></Route>






  {/* protected routes  */}
    <Route element={<PrivateRoutes />}>
    <Route path="/protected" element={<ProctectedRoutesTest />} />
    {/* <Route path="/profile" element={<Profile />} />*/} 
  </Route>
</Routes>
        </Suspense>
<Footer></Footer>
      <ToastContainer />
</div>
     
    </>
     
    
  )
}

export default App
