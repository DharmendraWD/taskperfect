import React from 'react'
import { getNewsById } from '../../../redux/slices/news/NewsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import img from '../../../assets/img/Rectangle14.png'
import RelatedNews from './RelatedNews'

import { totalNews } from '../../../redux/slices/news/NewsSlice'





const NewsDetails = () => {
    const dispatch = useDispatch();
const {id} = useParams();
const newsDetail = useSelector((state)=>state.allNews.singleNews)
const relatedNews = useSelector((state)=>state.allNews)




// getting single news data 
useEffect(() => {
dispatch(getNewsById(id))
}, [dispatch])

console.log(newsDetail)
// showing related news 
useEffect(() => {
  dispatch(totalNews());
}, [dispatch]);

  return (
    <div className="text-white min-h-screen">
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <div className="flex-grow lg:w-2/3">
          {/* Article Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
      {newsDetail?.title}
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
              October 25, 2024
            </span>
            <span className="flex items-center mr-4">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 5a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2H4zm6 9a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Reuters
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              5 min read
            </span>
          </div>

          {/* Stock Chart Image */}
          <div className="mb-8">
            <img
              src={newsDetail?.images[0]} // Placeholder for your image
              alt="Stock Market Chart"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Article Content */}
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              {newsDetail?.description}
            </p>

            {/* Limited-time offer banner */}
            <div className="">
     <img src={img} alt="" />
            </div>

            <p>
              विश्लेषकहरूका अनुसार, बजारमा आएको यो सुधार छोटो अवधिको उतारचढाव नभई आगामी केही दिनसम्मै लिफ्ट
              रहने सम्भावना देखिएको छ। तर, लगानीकर्तालाई अझै पनि जोखिम व्यवस्थापन र दीर्घकालीन रणनीतित अपनाउन
              सुझाव दिइएको छ। बजार विशेषज्ञहरूका अनुसार, मौद्रिक नीतिप्रति लगानीकर्तामा आशा र आगामी
              निर्णयमा सूचीबद्ध कम्पनीहरूको साझा वृद्धि हुने अपेक्षाले बजारमा सकारात्मक प्रभाव पारिरहेको छ।
              तर, उनीहरूले दीर्घकालीन लगानी रणनीति र जोखिम व्यवस्थापनमा ध्यान दिनुपर्ने सुझाव पनि दिएका छन्।
            </p>
            <p>
              दैनिक कारोबार रकम ३ अर्ब रुपैयाँभन्दा माथि पुगेको छ, जसमा विशेषगरी बैंकिङ जलविद्युत र लघुवित्त
              सेयरहरूले उल्लेखनीय योगदान दिएका छन्। लगानीकर्ताले मनोबल बढाउने बजारमा निरन्तर सुधार देखिएको छ।
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit iure, quis mollitia sed exercitationem porro eligendi totam esse provident aperiam expedita tenetur, quae odit! Quibusdam officia eos a, possimus non exercitationem doloremque facere, rem provident, sapiente perspiciatis quos enim beatae alias accusamus illum similique impedit nam aperiam hic fuga? Eius pariatur voluptatum quos perspiciatis natus necessitatibus nesciunt hic nobis quibusdam dolore. In illo reprehenderit odio enim officia quod sed natus? Amet, ea sit necessitatibus ab repellendus unde quae possimus enim soluta animi recusandae numquam exercitationem perferendis similique rerum esse odit quia quod asperiores distinctio doloremque ratione perspiciatis. Voluptates ab dignissimos dolore nobis reiciendis repellendus deleniti fuga aliquam omnis rerum? Ad vero voluptatum consequuntur quibusdam. Quod facilis amet asperiores quaerat dicta magni. Animi, itaque ut, ipsam quia necessitatibus ab impedit dolor quaerat nisi magni dolorum accusantium libero unde blanditiis, praesentium corrupti corporis molestias. Ex quis sapiente temporibus corrupti sequi modi esse minima cum ratione soluta illo facilis iste repudiandae consectetur nemo molestiae asperiores, ab eos. Maxime eius iure ea blanditiis perferendis, ipsam neque, est vero magnam laudantium eligendi impedit. Ipsum aliquid saepe maiores cupiditate alias dolor adipisci perferendis iusto eos, laudantium animi accusantium consequuntur molestias voluptas molestiae quisquam eum nobis in voluptatum sit? Doloribus veniam aperiam quisquam vitae magni nihil dicta, sunt corrupti quod neque repellendus maiores perferendis tenetur a, esse doloremque ea et molestiae praesentium! Rem vitae voluptas blanditiis iure dolores doloremque! Porro cumque esse sint tempora dignissimos, quos animi culpa deserunt quam molestiae dicta! Quam vel voluptatibus facilis nisi, eum amet a pariatur provident veniam et quis quibusdam temporibus porro dolor facere quisquam ex. Illum incidunt temporibus eaque alias sequi omnis recusandae voluptate, quibusdam enim dolore assumenda est animi vero, nam sapiente molestias qui aliquid tenetur molestiae laudantium asperiores ipsum ullam vel. Ratione exercitationem vero enim nihil explicabo iure?
            </p>
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
      <RelatedNews totalNews={relatedNews}></RelatedNews>
    </div>
  );
};

export default NewsDetails;