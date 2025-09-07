import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { news } from '../../../redux/slices/news/NewsSlice';
// http://www.taskperfect.somee.com/UploadedImages/News/Screenshot__3_.png
export const BASE_WEB_URL = import.meta.env.VITE_WEB_BASE_URL;
import noImage from '../../../assets/img/noImage.png';
import Loading2 from '../../utilities/loading/Loading2';


const NewsCard = () => {
  const handleImageError = (e) => {
  e.target.src = noImage;
  e.target.onerror = null; // Prevent infinite loop if fallback also fails
};
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem('newsCurrentPage')) || 1
  );

  useEffect(() => {
    localStorage.setItem('newsCurrentPage', currentPage);
  }, [currentPage]);

  const totalNewss = useSelector((state) => state.allNews);

  const totalPages = totalNewss?.news?.data?.totalPages || 1;
  const items = totalNewss?.news?.data?.items|| [];

  useEffect(() => {
    dispatch(news(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Optional scroll
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 2) {
        pageNumbers.push(1, 2, '...', totalPages);
      } else if (currentPage >= totalPages - 1) {
        pageNumbers.push(1, '...', totalPages - 1, totalPages);
      } else {
        pageNumbers.push(
          1,
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages
        );
      }
    }




    return pageNumbers.map((number, index) =>
      number === '...' ? (
        <span key={index} className="px-2 text-gray-400">...</span>
      ) : (
        <button
          key={index}
          onClick={() => handlePageChange(number)}
          className={`w-8 h-8 mx-1 flex items-center justify-center rounded ${
            currentPage === number
              ? 'bg-white text-black font-bold'
              : 'text-white hover:bg-gray-600'
          }`}
        >
          {number}
        </button>
      )
    );
  };

  if (totalNewss.loading) {
    return (
      <div className="text-white relative min-h-screen flex justify-center items-center text-2xl">
       <Loading2 />
      </div>
    );
  }
  console.log(items)
  return (
    <>
      <div className="grid grid-cols-1 justify-self-center md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((news) => (
          <Link className='w-fit' key={news.id} to={`/news/${news.id}`} state={news}>
            <div className="border allCards border-[#374151] rounded-[30px] w-fit  px-[20px] py-[30px]">
              <div className="max-w-[250px] sm:max-w-sm rounded-lg overflow-hidden  text-white">
                <div className="relative">
                  {
                    `${news?.image1}` && (
                               <img
                    className="max-w-[250px] sm:h-[auto] sm:w-[250px] w-[200px] h-[151px] object-contain mx-auto sm:object-cover"
                    src={news.image1 ? `${BASE_WEB_URL}/UploadedImages/News/${news?.image1}` : noImage}
                    alt="News Image Here"
                     onError={handleImageError}
                  />
                    )
                  }
  
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

      {/* Pagination Controls */}
      <div className="mt-10 flex justify-center items-center space-x-1 text-white">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 text-white disabled:opacity-50"
        >
          Prev
        </button>

        {renderPageNumbers()}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 text-white disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default NewsCard;

