import React from 'react'
import HeroImage1 from '../../assets/img/3bd5a701a18ad4156d9aba1d7faab1a05ff758c1.png';
import HeadingWithPara from './HeadingWithPara';
import Button from './Button';

function HeroImage({my, handBg}) {
  return (
    <>
  <div className={`${my}`} style={{ background: handBg }}>
     <div className="hreoImg relative">
    <div className="mt-12 relative max-w-lg mx-auto">
<img
src={HeroImage1}
alt="Hand holding a phone"
className="w-full"
/>    
</div>
<div className="bottomHandGrdientDiv absolute bottom-[-2px] left-0 w-full h-[254px]" style={{ background: handBg }}>
</div>
</div>
  </div>

  
  </>
  )
}

export default HeroImage