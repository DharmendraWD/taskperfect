import React from 'react'
import { HomePageBottomCard } from '../../../redux/slices/homeContent/HomePageBottomCardSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import ticketimg0 from '../../../assets/img/lowTicket/1.jpeg'
import ticketimg1 from '../../../assets/img/lowTicket/2.jpeg'
import ticketimg2 from '../../../assets/img/lowTicket/3.jpeg'
import ticketimg3 from '../../../assets/img/lowTicket/4.jpeg'







 const Card1 = () => {
  const ticketImages = [ticketimg0, ticketimg1, ticketimg2, ticketimg3];
const dispatch = useDispatch();
const cardData = useSelector((state) => state.HomePageBottomCard);

useEffect(() => {
  dispatch(HomePageBottomCard());
}, [dispatch]);

let cards = cardData?.HomePageBottomCard?.data?.items || [];

  return (
    <>
      {cards.map((card, index) => (
        <div key={index} className="bg_transparent relative rounded-[20px] min-h-[320px]  w-[100%] overflow-hidden p-4 md:p-6 lg:p-8 text-white">
          {/* <img src={card?.image || cardImg} alt="Card Image" className=" absolute right-[10%] w-[100px] opacity-40 object-cover mb-4 rounded" /> */}
          {/* <img src={"ticketimg"+index+".jpeg"} alt="" className='background: #6b6969;
    padding: 7px;
    border-radius: 8px; absolute top-[10%]' /> */}
    <div className='h-full flex flex-col pb-[p5x]'> 
    <img src={ticketImages[index]} alt={`Ticket ${index}`} className=" w-[50px] widthWkitFIll rounded-[20px] h-[170px]" />
       <div className='mt-1'>
           <h3 className="text-xl oneLinePara font-semibold mb-2">{card?.topic}</h3>
          <p className="text-sm text-gray-400 threeLinePara">{card?.description}</p>
       </div>
        </div></div>
      ))}
     </>
  );
};
export default Card1;
