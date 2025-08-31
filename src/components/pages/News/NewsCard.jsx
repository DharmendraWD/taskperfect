import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { totalNews } from '../../../redux/slices/news/NewsSlice'

const NewsCard = () => {
const dispatch = useDispatch();
const totalNewss = useSelector((state)=>state.allNews)

useEffect(() => {
    dispatch(totalNews());
}, [dispatch]);


const [currentPage, setcurrentPage] = useState(1);
const [newsPerPage, setnewsPerPage] = useState(9)
const lastPOstIndex = currentPage * newsPerPage;
const firstPOstIndex = lastPOstIndex - newsPerPage;
const currentNews = totalNewss.data?.slice(firstPOstIndex, lastPOstIndex);


// pagination 
const pages = [];
for (let i = 1; i <= Math.ceil(totalNewss.data?.length / newsPerPage); i++) {
  pages.push(i);
}

console.log(pages)

  return (
    <>
    <div className="grid grid-cols-1 justify-self-center md:grid-cols-2 lg:grid-cols-3 gap-6">
      {currentNews.map((news) => (
        <Link
        className='w-fit'
          key={news.id}
          to={`/news/${news.id}`}
          state={news}
        >
          <div className="border border-[#374151] rounded-[30px] w-fit  px-[20px] py-[30px]">
            <div className="max-w-[250px] sm:max-w-sm rounded-lg overflow-hidden  text-white">
              <div className="relative">
                <img
                  className="max-w-[250px] sm:h-[auto] sm:w-[250px] w-[200px] h-[151px] object-contain mx-auto sm:object-cover"
                  src={news.thumbnail}
                  alt="Stock graph"
                />
              </div>
              <div className="p-4">
                <div className="font-bold twoLinePara text-xl mb-2 text-white">
                  {news.title}
                </div>
                <p className="text-gray-400 twoLinePara font-semibold text-base">
                  {news.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}

      
    </div>
     <div className="flex justify-between items-center text-white p-4 font-sans text-lg">
      <button className="flex items-center text-gray-500 hover:text-white transition-colors duration-200">
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Previous
      </button>

      <div className="flex items-center space-x-2">
        {/* <div className="w-10 h-10 bg-white rounded-lg shadow-lg flex justify-center items-center transform -rotate-1 text-black font-bold">
          1
        </div> */}
 {
  pages.map((page) => (
    <Link to={`/news/page/${page}`} className="w-10 h-10 flex justify-center items-center text-gray-500 hover:text-white transition-colors duration-200">
      {page}
    </Link>
  ))
 }
        <div className="w-10 h-10 flex justify-center items-center text-gray-500">
          ...
        </div>
        <div className="w-10 h-10 flex justify-center items-center text-gray-500 hover:text-white transition-colors duration-200">
          8
        </div>
        <div className="w-10 h-10 flex justify-center items-center text-gray-500 hover:text-white transition-colors duration-200">
          9
        </div>
        <div className="w-10 h-10 flex justify-center items-center text-gray-500 hover:text-white transition-colors duration-200">
          10
        </div>
      </div>

      <button className="flex items-center text-gray-500 hover:text-white transition-colors duration-200">
        Next
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </div>
    </>
  );
};

export default NewsCard;

