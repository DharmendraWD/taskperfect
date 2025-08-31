import React from 'react';
import phoneHand from '../../../assets/img/3bd5a701a18ad4156d9aba1d7faab1a05ff758c1.png'; 
import { FaUsers } from 'react-icons/fa'; // Example user icon
import HeadingXL from '../../utilities/HeadingXL';
import Navbar from '../../Nav/Nav';
import Para from '../../utilities/Para';
import HeroImage from '../../utilities/HeroImage';
const HeroSection = () => {
  const handBg = "linear-gradient(0deg, #0a265c 17.55%, rgba(0, 0, 0, 0.00) 88.6%)";
    return (
        
        <div className='hero-section  '>
    
   

    <div className="relative  z-[8] mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className=" mx-auto mt-[110px]">
 <div className=" p-4 sm:p-6 md:p-8 flex items-center justify-center rounded-xl my-8 mx-auto w-full max-w-2xl">
      <div className="flex items-center space-x-2 sm:space-x-4">
        <div className="flex ">
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
          Trusted by 21,000+ people
        </span>
      </div>
    </div>

<HeadingXL label="Your gateway to growth"></HeadingXL>
<HeadingXL label="Explore investments beyond the ordinary."></HeadingXL>

<Para label="Precise brings you a carefully curated selection of some of the most promising private growth
companies along with exclusive global trade finance opportunities."></Para>
<div className="mt-8">
<button
className="bg-white text-green-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors duration-300"
>
Reserve Access
</button>
</div>
</div>

{/* hand holding phonr  */}
<HeroImage my={"10px"} handBg={handBg} ></HeroImage>
</div>
    
    
</div>
);
};

export default HeroSection;

{/* <div className="">
<div className=""></div>
<div className=""></div>
<div className="relative  mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className=" mx-auto mt-[110px]">
<div className="flex items-center justify-center space-x-2 mb-4 text-sm text-gray-300">
<FaUsers className="text-gray-400" />
<p>Trusted by 21,000+ people</p>
</div>

<HeadingXL label="Your gateway to growth"></HeadingXL>
<HeadingXL label="Explore investments beyond the ordinary."></HeadingXL>

<p className="mt-2 text-sm text-gray-400 sm:text-base leading-relaxed mb-8">
Precise brings you a carefully curated selection of some of the most promising private growth
companies along with exclusive global trade finance opportunities.
</p>
<div className="mt-8">
<button
className="bg-white text-green-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors duration-300"
>
Reserve Access
</button>
</div>
</div>
<div className="hreoImg">
    <div className="mt-12 relative max-w-lg mx-auto">
<img
src={phoneHand}
alt="Hand holding a phone"
className="w-full rounded-lg shadow-xl"
/>    
</div>
<div className="bottomHandGrdientDiv absolute bottom-0 left-0 w-full h-full">
</div>
</div>
<div className="mt-16 md:mt-24 lg:mt-32">
<h2 className="text-2xl font-semibold text-white mb-4">We Provide</h2>
<p className="text-gray-300 sm:text-lg leading-relaxed">
Explore India's leading private growth companies
</p>
</div>
</div>
</div> */}