import React, { useEffect } from 'react'
import {homeContents} from '../../redux/slices/homeContent/HomepageSlice'
import { useDispatch, useSelector } from 'react-redux';


function HeroImage({my, handBg}) {
const homepageContent = useSelector((state) => state.homeContent);
const dispatch = useDispatch();

useEffect(() => {
  if (!homepageContent.homeContent.data) {
    dispatch(homeContents());
  }
}, [dispatch, homepageContent.homeContent.data]);


// console.log(homepageContent)
if (homepageContent.loading) {
  return <div className='text-white min-h-screen flex justify-center items-center text-2xl'>Loading..k.</div>
}

  return (
    <>
  <div className={`${my}`}>
     <div className="hreoImg relative">
    <div className="mt-12 relative max-w-lg mx-auto">
      {homepageContent?.homeContent?.data?.items?.[0]?.imageUrl && (
<img
src={`${import.meta.env.VITE_WEB_BASE_URL}${homepageContent?.homeContent?.data?.items[0].imageUrl}`}
alt="Hand holding a phone"
className="w-full"
/>      
)})
</div>
<div className="bottomHandGrdientDiv absolute bottom-[-2px] left-0 w-full h-[254px]" style={{ background: handBg }}>
</div>
</div>
  </div>

  
  </>
  )
}

export default HeroImage