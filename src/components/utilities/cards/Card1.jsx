import React from 'react'
import cardImg from '../../../assets/img/Lightshade.png'
import HeadingL from '../HeadingL';
import Para from '../Para';
import { HomePageBottomCard } from '../../../redux/slices/homeContent/HomePageBottomCardSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ru from '../../../assets/img/ru.png'
 const Card1 = () => {
const dispatch = useDispatch();
const cardData = useSelector((state) => state.HomePageBottomCard);

useEffect(() => {
  dispatch(HomePageBottomCard());
}, [dispatch]);

let cards = cardData?.HomePageBottomCard?.data?.items || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div key={index} className="bg_transparent relative rounded-[20px] min-h-[320px]  w-[100%] overflow-hidden p-4 md:p-6 lg:p-8 text-white">
          <img src={card?.image || cardImg} alt="Card Image" className=" absolute right-[10%] w-[100px] opacity-40 object-cover mb-4 rounded" />
          <img src={ru} alt="" className='background: #6b6969;
    padding: 7px;
    border-radius: 8px; absolute top-[10%]' />
    <div className='h-full flex flex-col justify-end pb-[10px]'> 
       <div>
           <h3 className="text-xl font-semibold mb-2">{card?.topic}</h3>
          <p className="text-sm text-gray-400">{card?.description}</p>
       </div>
        </div></div>
      ))}
     
    </div>
  );
};
export default Card1;
