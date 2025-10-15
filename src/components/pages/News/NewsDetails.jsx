import React from 'react'
import { getNewsById, news } from '../../../redux/slices/news/NewsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import img from '../../../assets/img/Rectangle14.png'
export const BASE_WEB_URL = import.meta.env.VITE_WEB_BASE_URL || 'http://www.taskperfect.somee.com';
import parse from 'html-react-parser';
import Loading2 from '../../utilities/loading/Loading2'



const NewsDetails = () => {
    const dispatch = useDispatch();
const {id} = useParams();
const newsDetail = useSelector((state)=>state.allNews.singleNews)
const loading = useSelector((state)=>state.allNews)
// const relatedNews = useSelector((state)=>state.allNews)




// getting single news data 
useEffect(() => {
dispatch(getNewsById(id))
}, [dispatch])

if(loading.loading){
  return <div className='text-white min-h-screen flex justify-center items-center text-2xl'>
  <Loading2 />
  </div>
}
/**
 * Converts a date string in the format 'YYYY-MM-DDTHH:mm:ss' to 'Month-DD-YYYY'.
 * @param {string} dateString The date string to format.
 * @returns {string} The formatted date string.
 */
const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const month = date.toLocaleString('default', { month: 'long' });
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  return `${month}-${day}-${year}`;
};


const formattedDate = formatDate(newsDetail?.data?.createdDate);

  return (
    <div className="text-white min-h-screen">
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <div className="flex-grow lg:w-2/3">
          {/* Article Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
      {newsDetail?.data?.title}
          </h1>

          {/* Article Meta */}
          <div className="flex items-center text-gray-400 text-sm mb-8">
            <span className="flex items-center mr-4">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {formattedDate}
            </span>
            <span className="flex items-center mr-4">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 5a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1V5a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              [{newsDetail?.data?.createdBy}]
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z"
                  clipRule="evenodd"
                ></path>
              </svg>
       {newsDetail?.data?.readDuration} mins
            </span>
          </div>

          {/* first img and title */}
          <div className="mb-8">
            
            <img
              src={`${BASE_WEB_URL+newsDetail?.data?.fileURL+newsDetail?.data?.image1}`} // Placeholder for your image
              alt="first image here"
              className="w-full h-auto rounded-lg"
            />
            <p className='space-y-6 py-2 text-gray-300 text-lg leading-relaxed semibold'> {newsDetail?.data?.image1Title}</p>
          </div>


{/* second image and title and desc  */}
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            {/* Limited-time offer banner */}
            <div className="">
     <img src={`${BASE_WEB_URL+newsDetail?.data?.fileURL+newsDetail?.data?.image2}`} alt="second image here" />
            <p className='space-y-6 py-2 text-gray-300 text-lg leading-relaxed semibold'> {newsDetail?.data?.image2Title}</p>

            </div>

            <div>
            {parse(newsDetail?.data?.description || '')}
            </div>
          </div>
        </div>

        {/* Trending News Sidebar */}
        <div className="lg:w-1/3 relative scrollbar-thin">
          <div className="lg:sticky lg:top-[64px] rounded-lg p-6 lg:max-h-[calc(100vh-64px)] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6">Trending News</h2>
            <div className="space-y-6">
              {/* News Item 1 */}
              <div className="flex items-start gap-4">
                <img
                  src={img}
                  alt="Apple news"
                  className="w-24 h-16 object-cover rounded"
                />
                <div>
                  <p className="text-sm font-semibold mb-1">Apple Reports Record iPhone Sales Despite Market Headwinds</p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>

              {/* News Item 2 */}
              <div className="flex items-start gap-4">
                <img
                  src={img}
                  alt="Fed news"
                  className="w-24 h-16 object-cover rounded"
                />
                <div>
                  <p className="text-sm font-semibold mb-1">Fed Signals Potential Rate Cut In December Meeting</p>
                  <p className="text-xs text-gray-400">4 hours ago</p>
                </div>
              </div>

              {/* News Item 3 */}
              <div className="flex items-start gap-4">
                <img
                  src={img}
                  alt="Amazon news"
                  className="w-24 h-16 object-cover rounded"
                />
                <div>
                  <p className="text-sm font-semibold mb-1">Amazon Prime Day Drives Q3 Revenue Growth</p>
                  <p className="text-xs text-gray-400">6 hours ago</p>
                </div>
              </div>

              {/* News Item 4 */}
              <div className="flex items-start gap-4">
                <img
                  src={img}
                  alt="Microsoft news"
                  className="w-24 h-16 object-cover rounded"
                />
                <div>
                  <p className="text-sm font-semibold mb-1">Microsoft Azure Revenue Jumps 30% Year-Over-Year</p>
                  <p className="text-xs text-gray-400">8 hours ago</p>
                </div>
              </div>
              {/* Add more news items here to make it scrollable */}
              <div className="flex items-start gap-4">
                <img
                  src={img}
                  alt="Tesla news"
                  className="w-24 h-16 object-cover rounded"
                />
                <div>
                  <p className="text-sm font-semibold mb-1">Tesla Unveils New Gigafactory in Texas</p>
                  <p className="text-xs text-gray-400">10 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  src={img}
                  alt="Google news"
                  className="w-24 h-16 object-cover rounded"
                />
                <div>
                  <p className="text-sm font-semibold mb-1">Google Announces New AI Initiatives</p>
                  <p className="text-xs text-gray-400">12 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  src={img}
                  alt="Meta news"
                  className="w-24 h-16 object-cover rounded"
                />
                <div>
                  <p className="text-sm font-semibold mb-1">Meta Expands VR Headset Lineup</p>
                  <p className="text-xs text-gray-400">14 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <RelatedNews totalNews={relatedNews}></RelatedNews> */}
    </div>
  );
};

export default NewsDetails;

