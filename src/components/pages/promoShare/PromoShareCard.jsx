import React from 'react';
import { Link } from 'react-router-dom';



const PromoShareCard = ({title, desc, img}) => {
    console.log(title)
  return (
   <Link to={`/promoshare/${title}`} state={{title, desc, img}} className='w-fit'>
 <div className="flex justify-center items-center p-4">
      <div className="max-w-xs rounded-lg overflow-hidden shadow-lg text-white border border-gray-700">
        <img
          className="w-full h-auto object-cover"
          src={img}
          alt="Stock graph"
        />
        <div className="p-4">
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