// src/components/home/HeroSection.jsx

import React, { useEffect } from 'react';
import HeadingXL from '../../utilities/HeadingXL';
import Para from '../../utilities/Para';
import HeroImage from '../../utilities/HeroImage';
import { useDispatch, useSelector } from 'react-redux';
import { homeContents } from '../../../redux/slices/homeContent/HomepageSlice';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const handBg = "linear-gradient(0deg, #0a265c 17.55%, rgba(0, 0, 0, 0.00) 88.6%)";

  const homepageContent = useSelector((state) => state.homeContent);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!homepageContent.hasLoaded) {
      dispatch(homeContents());
    }
  }, [dispatch, homepageContent.hasLoaded]);

  const contentItem = homepageContent.homeContent?.data?.items?.[0];

  if (homepageContent.loading || !contentItem) {
    return (
      <div className='text-white min-h-screen flex justify-center items-center text-2xl'>
        Loading...
      </div>
    );
  }

  return (
    <div className='hero-section'>
      <div className="relative z-[8] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto mt-[110px]">
          <div className="p-4 sm:p-6 md:p-8 flex items-center justify-center rounded-xl my-8 mx-auto w-full max-w-2xl">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex">
                <div className="relative w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-full border-2 border-white overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop" alt="User 1" className="object-cover w-full h-full" />
                </div>
                <div className="relative w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-full border-2 border-white overflow-hidden ml-[-20px]">
                  <img src="https://randomuser.me/api/portraits/women/75.jpg" alt="User 2" className="object-cover w-full h-full" />
                </div>
                <div className="relative w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-full border-2 border-white overflow-hidden ml-[-20px]">
                  <img src="https://randomuser.me/api/portraits/women/64.jpg" alt="User 3" className="object-cover w-full h-full" />
                </div>
              </div>
              <span className="text-white text-sm sm:text-xl md:text-xl font-medium whitespace-nowrap">
                Trusted by people
              </span>
            </div>
          </div>

          <HeadingXL label={contentItem.topic} />
          <Para label={contentItem.description} />

          <div className="mt-8">
            <Link
              to="/login"
              >
            <button
              className="bg-white text-green-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors duration-300"
            >
              Reserve Access
            </button></Link>
          </div>
        </div>

        <HeroImage my={"10px"} handBg={handBg} />
      </div>
    </div>
  );
};

export default HeroSection;
