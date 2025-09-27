import React from 'react';
import HeadingL from '../../utilities/HeadingL';
import Para from '../../utilities/Para';
import { MdArrowOutward } from "react-icons/md";
import noImg from '../../../assets/img/noImage.png'

import {first3Blogs} from '../../../redux/slices/blogs/FirstThreeBlogs';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading2 from '../../utilities/loading/Loading2';
export const VITE_WEB_BASE_DOWNLOAD_URL = import.meta.env.VITE_WEB_BASE_DOWNLOAD_URL;


import parse from 'html-react-parser';


const BlogPosts = () => {
  console.log("las")
  const first3BlogsData = useSelector((state) => state?.first3Blogs?.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(first3Blogs({ currentPage: 1, numOfBlogs: 6})); // Fetch first page with 3 items
  }, [dispatch]);


  if (first3BlogsData.loading) {
    return <div className='text-white min-h-screen relative z-[899999] flex justify-center items-center text-2xl'>
      <Loading2 />
    </div>
  }

  // console.log(first3BlogsData)
  return (
 <>
    <div className='py-[80px]'>
      <HeadingL label="Market and Insights Concepts" />
      <Para label="Market and Insights Concepts involve analyzing trends, consumer behavior, and data to guide strategic business decisions and uncover growth opportunities." />
      <div className=" text-white flex-col  font-sans flex items-start justify-center px-[10px] lg:px-[0px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
        {/* Large Card */}

        {first3BlogsData?.data?.items?.[0] && (
       <Link to={"/blog/"+first3BlogsData?.data?.items?.[0].id} state={first3BlogsData?.blogs?.data?.items?.[0]} className=''>
        <div className='flex  flex-col md:flex-row bg-transparent rounded-lg overflow-hidden'>
         <div className="relative allCards group overflow-hidden  md:col-span-1 lg:col-span-1">
           <img
            src={ VITE_WEB_BASE_DOWNLOAD_URL+first3BlogsData?.data?.items?.[0]?.fileURL+first3BlogsData?.data?.items?.[0]?.image1 || noImg}
            alt={"img"}
            className="w-full h-[50%] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          {/* src={blog?.data?.images?.[0] ? BASE_WEB_URL+blog?.data?.fileURL+blog?.data?.image1 : noImage} */}
          <div className=" inset-0 flex flex-col justify-end ">
            <div className="text-gray-400 mt-2 text-lg flex justify-between mb-1">{first3BlogsData?.data?.items?.[0].createdDate} <MdArrowOutward /></div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight twoLinePara">{first3BlogsData?.data?.items?.[0].blogTitle}</h2>
            {/* <p className="text-gray-300 text-sm md:text-base leading-relaxed twoLinePara">{first3BlogsData?.data?.items?.[0].blogDesc}</p> */}
            <div className="text-gray-300 text-sm md:text-base leading-relaxed twoLinePara">
  {parse(first3BlogsData?.data?.items?.[0].blogDesc)}
</div>


          </div>
        </div>
        </div>
          </Link>
        )}
 

        {/* Small Cards */}
        <div className="grid grid-cols-1 gap-8">
          {first3BlogsData?.data?.items.slice(1, 3).map((blog, index) => (
            <div key={index} className="flex allCards flex-col md:flex-row  bg-transparent rounded-lg overflow-hidden">
              <Link to={"/blog/"+blog.id} state={blog} className=''>
               <div className='flex flex-col md:flex-row items-center gap-4 bg-transparent rounded-lg overflow-hidden'>
                <div className="w-full md:w-1/2 flex-shrink-0 relative">
                <img
                  src={VITE_WEB_BASE_DOWNLOAD_URL+blog?.fileURL+blog?.image1 || noImg}
                  alt={"img"}
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
              <div className="pr-4 md:pr-6 w-full flex-grow flex flex-col justify-start">
                <span className="text-gray-400 text-sm mb-1">{blog.createdDate} </span>
                <h3 className="text-xl font-bold mb-2 leading-tight twoLinePara">{blog.blogTitle}</h3>
                {/* <p className="text-gray-300 text-sm md:text-base leading-relaxed twoLinePara">{blog.blogDesc}</p> */}

                <div className="text-gray-300 text-sm md:text-base leading-relaxed twoLinePara">{parse(blog.blogDesc)}</div>
              </div>
              </div>
              </Link>
             
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>


<div>

</div>
 </>
  );
};

export default BlogPosts;