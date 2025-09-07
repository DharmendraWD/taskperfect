import React, { useEffect } from 'react';
import Logo1 from '../../assets/img/Logo1.png'
import { Link } from 'react-router-dom';
import footerImg from '../../assets/img/footerbg.png';
import { footerAsideStatus, footerAside } from '../../redux/slices/footer/footerSLice';
import { useDispatch, useSelector } from 'react-redux';



const Footer = () => {
const dispatch = useDispatch();
const data = useSelector((state) => state.footerAsideS);


useEffect(() => {
  dispatch(footerAside());
}, [dispatch]);

const footerItems = data?.data?.data?.items;



  return (
    <footer className="text-white max-w-[1440px] mt-16 border-t-2 border-white/10 px-4 pb-16  left-0 right-0 bottom-0">
               <img src={footerImg} alt="" className='absolute z-[-1] top-0 left-0 w-[100%] opacity-[30%] h-full'/>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 pl-[20px] lg:pl-[0px]">
        {/* Left Section: Logo, Text, and Social Icons */}
        <div className="md:col-span-2 lg:col-span-3">
          <div className="flex items-center mb-4">
                  <Link to="/">  <img src={Logo1} className='w-[60px]' alt="" /></Link>
        
          </div>
          <p className="text-sm text-gray-400 mb-6 w-[90%] lg:w-[55%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non risus nec nulla tempus varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti ac massa vel dapibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus.
          </p>
          <div className="flex space-x-2">
            {/* Social Icons - Using simple buttons as placeholders for icons */}
            <a href="#" className="bg-gray-800 p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter text-white">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram text-white">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin text-white">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dribbble text-white">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8.56 2.75c4.81 1.05 6.42 5.67 6.42 5.67A4.62 4.62 0 0 1 16 11.5c.34 2.06-1.55 4-4.22 4-2.58 0-4.04-1.25-4.57-3.08-1.12-3.83 2.1-7.17 6.57-8.17z"></path>
              </svg>
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe text-white">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Section: Link Columns */}
        <div className="md:col-span-1 lg:col-span-2 grid grid-cols-2 gap-8 md:gap-4 lg:gap-8">
          {/* Sections Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Sections</h4>
            <ul className="space-y-2 text-sm text-gray-400 flex flex-col">

              {
                footerItems?.map((item, index)=>{
                  return(
                  <Link
  to={{
    pathname: "/legal/" + item?.title.replace(/\s+/g, '-').toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
  }}
  state={{ id: index }}  // Pass the ID here
  className="hover:underline"
>
  {item?.title}
</Link>
                  )
                })
              }
            </ul>
          </div>
          {/* Pages Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Pages</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:underline">Demo</a></li>
              <li><a href="#" className="hover:underline">Demo</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;