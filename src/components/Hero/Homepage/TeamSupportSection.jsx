import React from 'react';
import man1 from '../../../assets/img/man1.jpg';
import man2 from '../../../assets/img/man2.jpg';
import man3 from '../../../assets/img/man3.jpg';
import HeadingL from '../../utilities/HeadingL';


const TeamSupportSection = () => {
  return (
    <div className="flex xl:flex-row flex-col w-auto  xl:w-[1182px] mx-auto justify-between items-center gap-[85px]">
      <div className="md:w-[510px] w-full  relative h-[456px] shrink-0">
        <div className="lg:w-[222px] teamSuppImageParent lg:h-[222px] w-[146px] h-[146px] absolute top-0 left-[32px] shrink-0">
          <img src={man1} alt="" className='h-full w-full teamSuppImage  rounded-[30px] object-cover' />
        </div>

        <div className='lg:w-[261px] teamSuppImageParent w-[166px] h-[176px] lg:h-[198px] lg:left-[0px] left-[5px] absolute bottom-0'>
          <img src={man2} className='h-full w-full teamSuppImage object-cover rounded-[30px]' alt="" />
        </div>

        <div className='lg:w-[221px] teamSuppImageParent w-[146px] h-[193px] lg:h-[263px] lg:right-[0px] right-[5px] absolute right-0 top-[50%] -translate-y-1/2 ' >
          <img className='h-full w-full teamSuppImage object-cover rounded-[30px]' src={man3} alt="" />
        </div>
      </div>

      <div className='lg:w-[587px] w-[auto] lg:px-0 px-[10px] lg:h-[259px]'>
  <div className="flex flex-col items-start ">
  
  {/* The "Precise Care" Tag */}
  <div className="flex justify-center items-center p-4">
  <div className="rounded-[57px] text-gray-400 border-b border-b-white/20 px-8 py-3 text-lg font-medium">
  Precise Care
  </div>
  </div>
  
  {/* Main Heading */}
  <HeadingL label="We're here for you" />
  
  {/* Description Paragraph */}
  <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-12 max-w-2xl">
  Chat, call or text. Our specialists are here to help you get the most out of your Precize experience.
  </p>
  
  {/* Call to Action Button */}
  <button className="border-2 border-white text-white font-medium rounded-full px-8 py-3 sm:px-10 sm:py-4 hover:bg-white hover:text-black transition-colors duration-300">
  View More
  </button>
  
  </div>
      </div>
    </div>
  );
};


export default TeamSupportSection;