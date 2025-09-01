import React from 'react';
import { Link } from 'react-router-dom';



const PromoShareCard = ({title, desc, img}) => {
    // console.log(title)
  return (
   <Link to={`/promoshare/${title}`} state={{title, desc, img}} className='w-fit'>
 <div className="flex justify-center items-center p-4">
      <div className="max-w-xs rounded-lg overflow-hidden shadow-lg text-white border border-gray-700 min-h-[350px] max-h[350px]">
        <img
          className="w-full max-w[2020px] w-[220px] mx-auto h-auto object-cover"
          src={img}
          alt="Stock graph"
        />
        <div className="pl-4 pr-4 pb-4">
          <div className="twoLinePara font-bold text-lg md:text-xl mb-2 text-white">
            {title}
          </div>
          <p className="twoLinePara text-gray-400 text-sm md:text-base">
          {desc}
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default PromoShareCard;