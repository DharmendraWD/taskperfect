import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HeadingL from '../utilities/HeadingL';
import Button from '../utilities/Button';

import noImg from '../../assets/img/noImage.png'
import { useDispatch, useSelector } from 'react-redux';
import { totalPromoshare } from '../../redux/slices/promoShare/PromoshareSlice';




const MultiCarousel = () => {
  const [items, setitems] = useState([])

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(5);

  const dispatch = useDispatch();
  const {
    data,
    loading,
    error,
    limit,
    skip,
    totalPages,
    currentPage,
  } = useSelector((state) => state.promoshare);

  // Fetch paginated data on mount or when skip/limit changes
  useEffect(() => {
    dispatch(totalPromoshare({ limit, skip }));
  }, [dispatch, limit, skip]);

  console.log(data?.data?.items?.[0])

// ✅ Correct - run when `data` changes
useEffect(() => {
  if (data?.data?.items?.length) {
    setitems(data.data.items);
    setCurrentIndex(0); // reset to first slide
  }
}, [data]);

  console.log(items)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(5);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(3);
      } else {
        setItemsToShow(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = items?.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

 const getVisibleItems = () => {
  if (!items || items.length === 0) return [];

  const visibleItems = [];

  // If total items < itemsToShow, show only what's available
  const count = Math.min(itemsToShow, items.length);

  for (let i = 0; i < count; i++) {
    visibleItems.push(items[(currentIndex + i) % items?.length]);
  }

  return visibleItems;
};


  return (
    <section className="text-white mt-[150px]">
      <div className="container mx-auto ">
        <div className="text-center mb-10">
                 <HeadingL label={"Our Products"} />

          <p className="mt-2 text-lg text-gray-400">
            Explore Nepal’s Leading growth companies at your fingertips.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10  text-black hover:bg-gray-300 bg-gray-200 transition-colors duration-300"
            aria-label="Previous slide"
          >
            <FaChevronLeft size={20} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10  text-black hover:bg-gray-300 bg-gray-200 transition-colors duration-300"
            aria-label="Next slide"
          >
            <FaChevronRight size={20} />
          </button>

          {/* Carousel Content */}
          <div className="flex justify-center md:justify-start">
            {getVisibleItems().map((item, index) => (
              <div
                key={item?.id}
                className="flex-shrink-0 p-2"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className=" rounded-[20px] overflow-hidden ">
                  <img src={item?.image? `${import.meta.env.VITE_WEB_BASE_URL}${item?.imageUrl}` : noImg} alt={item?.imageUrl} className="w-full h-40 object-cover" />
                </div>
                <div>
                    <h3 className="text-base font-semibold text-gray-50">{item?.companyName}</h3>
                    <p className="= text-xs text-gray-400 leading-tight line-clamp-2">
                      {item?.remarks1}
                    </p>
                </div>
              </div>
            ))}
          </div>
       
      </div>
       </div>
<Button link="/" label="View More"></Button>
    </section>

  );
};

export default MultiCarousel;