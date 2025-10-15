import React from 'react';
import { Link } from 'react-router-dom';
import noImage from '../../../assets/img/noImage.png';
export const BASE_WEB_URL = import.meta.env.VITE_WEB_BASE_URL;


const PromoShareCard = ({title, desc, img, imageUrl, sector, id}) => {
    // console.log(title)
  return (
   <Link to={`/promoshare/${id}`} state={{id, desc, img}} className='w-fit'>
 <div className="flex justify-center items-center p-4">
      <div className="max-w-xs allCards rounded-lg overflow-hidden p-4 shadow-lg text-white border border-gray-700 min-h-[313px] max-h[313px]">
        <img
          className="w-full max-w[2020px] w-[220px] mx-auto h-auto object-cover"
          src={img ? `${BASE_WEB_URL}${imageUrl}` : noImage}
          alt="Stock graph"
        />
        <div className="pl-4 pr-4 pb-4">
          <div className="twoLinePara font-bold text-lg md:text-xl mb-2 text-white">
            {title}
          </div>
          {/* <p className="twoLinePara text-gray-400 text-sm md:text-base">
          {desc}
          </p> */}
          <p className="twoLinePara text-gray-400 text-sm md:text-base">
          Sector
          </p>
          <p className="twoLinePara text-gray-100 text-sm md:text-base">
          {sector}
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default PromoShareCard;