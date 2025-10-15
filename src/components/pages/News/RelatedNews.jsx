import React from 'react';
import { Link } from 'react-router-dom';

const RelatedNews = ({ totalNews }) => {
  return (
    <div className="grid grid-cols-1 justify-self-center md:grid-cols-2 lg:grid-cols-3 gap-6">
      {totalNews.data.slice(1, 4).map((news) => (
        <Link
        className='w-fit'
          key={news.id}
          to={`/news/${news.id}`}
          state={news}
        >
          <div className="border border-[#374151] rounded-[30px] w-fit  px-[20px] py-[30px]">
            <div className="max-w-[250px] sm:max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white">
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
  );
};

export default RelatedNews;

