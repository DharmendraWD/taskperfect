import React from 'react'
import HeroImage1 from '../../assets/img/3bd5a701a18ad4156d9aba1d7faab1a05ff758c1.png';
import HeadingWithPara from './HeadingWithPara';
import Button from './Button';

function HeroImage({my, heading, para}) {
  return (
    <>
  <div className={`${my}`}>
     <div className="hreoImg relative">
    <div className="mt-12 relative max-w-lg mx-auto">
<img
src={HeroImage1}
alt="Hand holding a phone"
className="w-full rounded-lg shadow-xl"
/>    
</div>
<div className="bottomHandGrdientDiv absolute bottom-0 left-0 w-full h-[254px]">
</div>
</div>
  </div>

  
  </>
  )
}

export default HeroImage