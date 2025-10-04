import React, { useEffect, useState } from 'react';
import man1 from '../../../assets/img/man1.jpg';
import man2 from '../../../assets/img/man2.jpg';
import man3 from '../../../assets/img/man3.jpg';
import HeadingL from '../../utilities/HeadingL';
import { FaEye } from "react-icons/fa";
import {homeContents} from '../../../redux/slices/homeContent/HomepageSlice'
import { useDispatch, useSelector } from 'react-redux';


const TeamSupportSection = () => {
    const [showPopup, setShowPopup] = useState(false);


    const homepageContent = useSelector((state) => state.homeContent);
const dispatch = useDispatch();

useEffect(() => {
  if (!homepageContent.homeContent.data) {
    dispatch(homeContents());
  }
}, [dispatch, homepageContent.homeContent.data]);

let teamSupportData = homepageContent?.homeContent?.data?.items[1]
// console.log(teamSupportData)
if (homepageContent.loading) {
  return <div className='text-white min-h-screen flex justify-center items-center text-2xl'>Loading...</div>
}

    
  
  
  return (
    <div className="flex xl:flex-row flex-col w-auto  lg:w-[1182px] mx-auto justify-between items-center gap-[85px]">
      <div className="w-[90%] lg:w-[500px]  relative h-[456px] shrink-0">
        <div className="lg:w-[222px] w-[40%] h-[50%] teamSuppImageParent lg:h-[222px] w-[146px] h-[146px] absolute top-0 left-[32px] shrink-0">
          <img src={man1} alt="" className='h-full w-full teamSuppImage  rounded-[30px] object-cover' />
        </div>

        <div className='lg:w-[261px] h-[46%] w-[40%] teamSuppImageParent w-[166px] h-[176px] lg:h-[198px] lg:left-[0px] left-[5px] absolute bottom-0'>
          <img src={man2} className='h-full w-full teamSuppImage object-cover rounded-[30px]' alt="" />
        </div>

        <div className='w-[40%]               /* ✅ Width for small screens */
  sm:w-[50%]            /* Optional: medium small tweak */
  md:w-[221px]          /* Width for md+ if needed */
  w-[146px]             /* ✅ Default width (overridden by 40% on small) */
  h-[193px] 
  lg:h-[263px] 
  h-[100%] 
  teamSuppImageParent 
  absolute 
  right-0 
  right-[5px] 
  lg:right-[0px] 
  top-[50%] 
  -translate-y-1/2' >
          <img className='h-full w-full teamSuppImage object-cover rounded-[30px]' src={man3} alt="" />
        </div>
      </div>

      <div className='lg:w-[587px] w-[auto] lg:px-0 px-[10px] lg:h-[259px]'>
  <div className="flex flex-col items-start ">
  
  {/* The "Precise Care" Tag */}
  <div className="flex justify-center items-center p-4">
  <div className="rounded-[57px] text-gray-400 border-b border-b-white/20 px-8 py-3 text-lg font-medium">
  Promoquity Care
  </div>
  </div>
  
  {/* Main Heading */}
  <HeadingL label={teamSupportData?.topic} />
  
  {/* Description Paragraph */}
  <div className="paraandTopic ">
    <p className="text-gray-400 text-base sm:text-lg md:text-xl  max-w-4xl twoLinePara">
  {teamSupportData?.description}
  </p><span
      className="text-white cursor-pointer ml-1 flex items-center gap-1"
      onClick={() => setShowPopup(true)}
    >
      View More
    </span>
  </div>
  
  {/* Call to Action Button */}
  {/* <button className="border-2 border-white text-white font-medium rounded-full px-8 py-3 sm:px-10 sm:py-4 hover:bg-white hover:text-black transition-colors duration-300">
  View More
  </button> */}
  
  </div>
  
    
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50" onClick={() => setShowPopup(false)}>
          <div className="bg-[#081a3b]  min-h-[300px] m-auto rounded-xl border border-dashed border-white/20 px-6 pb-6 pt-2 rounded-lg shadow-lg w-[90%] lg:max-w-[80%] lg:min-w-[80%] max-w-md animate-fade-in">
            <div className="flex justify-end gap-3">
              {/* <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 rounded bg-[grey] text-[#b70000] hover:bg-red-400 hover:text-white"
              >
               X
              </button> */}
            </div>
            {/* <h2 className="text-lg font-semibold text-gray-800 mb-4">Confirm Logout</h2> */}
            <p className="text-[#b6b6b6] m-auto mb-6">{teamSupportData?.description}</p>

          </div>
        </div>
      )}
    </div>
  );
};


export default TeamSupportSection;