import React from 'react'
import cardImg from '../../../assets/img/Lightshade.png'
import HeadingL from '../HeadingL';
import Para from '../Para';
 const Card1 = () => {
  return (

    <div className="bg-black relative overflow-hidden rounded-xl p-6 md:p-8 lg:p-10 w-full">
    <img src={cardImg} alt="" className='absolute top-0 right-0 opacity-[0.84] blur-[16px]'/>
  <div className="flex items-center mb-4">
  <div className="bg-gray-800 rounded-md h-8 w-8 flex items-center justify-center">
  <span className="text-white text-sm">₹</span>
  </div>
  </div>
  <h3 className="text-white font-bold text-lg mb-2">Low ticket size</h3>
  <p className="text-gray-400 text-sm">Optimize business processes and streamline operations to significantly minimize costs and maximize overall efficiency.</p>
  </div>

  );
 };
 

export default Card1