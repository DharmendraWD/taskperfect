import './index.css'
import { Routes, Route} from "react-router-dom";
import HeroSection from './components/Hero/Homepage/Hero'
import MultiCarousel from './components/carousels/MultiCarousel'
import MultiCarousel2 from './components/carousels/MultiCarousel2'
import FAQ from './components/Hero/Homepage/FAQ'
import Navbar from './components/Nav/Nav'
import BlogPosts from './components/Hero/Homepage/BlogPosts'
import HeroImage from './components/utilities/HeroImage'
import Login from './components/Login/Login';
import Signup from './components/signup/Signup';
import Footer from './components/footer/Footer';
import Homepage from './components/Hero/Homepage/Homepage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import Card1 from './components/utilities/cards/Card1';
import HomepageCard from './components/Hero/Homepage/HomepageCard';
import TeamSupportSection from './components/Hero/Homepage/TeamSupportSection';
import Blogs from './components/blogs/Blogs';
import HeadingL from './components/utilities/HeadingL';
import Button2 from './components/utilities/Button2';
import Button from './components/utilities/Button';
import BlogPostDetail from './components/blogs/BlogPostDetail';
import Nepse from './components/nepse/Nepse';

function App() {

  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

  return (
    <>
      <div className='w-full relative max-w-[1440px]  mx-auto'>
         <Navbar/>


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
        <MultiCarousel2></MultiCarousel2>
        <HomepageCard></HomepageCard>
        <TeamSupportSection></TeamSupportSection>
        <FAQ></FAQ>
        <BlogPosts></BlogPosts>
      <div className='flex pb-32 items-center w-full items-center justify-center mt-[40px]'>
    <Button label="View More" />
  </div>
        <div className='flex items-center flex-col w-full items-center justify-center'>
    <HeadingL label="Your gateway to growth" />
                 <Button2 label="Lorem ipsum"  link="/"></Button2>
</div>
      <HeroImage my0={"100px"}></HeroImage>
        </>
    )
  }
    </>
  }></Route>

  {/* lOGIN  */}
  <Route path='/login' element={<Login></Login>}></Route>
  <Route path='/signup' element={<Signup></Signup>}></Route>
  <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path="/blog/:id" element={<BlogPostDetail />} />
      <Route path="/nepse" element={<Nepse />} />
  {/*   <Route path='/about' element={<About></About>}></Route> */}
</Routes>
<Footer></Footer>
      <ToastContainer />
</div>
     
    </>
     
    
  )
}

export default App
