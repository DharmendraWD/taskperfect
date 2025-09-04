import React, { useEffect } from 'react'
import { getPromoshareById } from '../../../redux/slices/promoShare/PromoshareSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import HeadingL from '../../utilities/HeadingL';



function Promoshare() {
    const financialData = [
    { title: "Rs 615", subtitle: "Earnings Per Share", change: "+12.4%", icon: "💰" },
    { title: "28.5", subtitle: "P/E Ratio", change: "-2.1%", icon: "%" },
    { title: "147.4%", subtitle: "Return on Equity", change: "+0.7%", icon: "📈" },
    { title: "22.6%", subtitle: "Return on Assets", change: "+5.2%", icon: "📊" },
    { title: "25.3%", subtitle: "Net Profit Margin", change: "+3.8%", icon: "🧮" },
    { title: "11.1%", subtitle: "Debt to Equity", change: "+1.1%A", icon: "⚖️" },
  ];

  const dispatch = useDispatch();
  const  singlePromoshareData = useSelector((state) => state?.promoshare?.singlePromoshare);
  const { id } = useParams();

useEffect(() => {
  dispatch(getPromoshareById(id));
}, [dispatch, id]);

const singlePromoSHareDets = singlePromoshareData?.data;
console.log(singlePromoSHareDets)
  return (
     <div className=" text-white font-sans min-h-screen p-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <img src="https://placehold.co/60x60/ffffff/000000?text=T" alt="Toyota Logo" className="h-16 w-16 rounded-full" />
          <div>
          <HeadingL label={singlePromoSHareDets?.companyName || "Company Name"}></HeadingL>

            <div className="text-sm text-gray-400 flex gap-8"><p>{singlePromoSHareDets?.remarks1}</p> <p>{singlePromoSHareDets?.remarks2}</p> <p>{singlePromoSHareDets?.remarks3} </p>  <p>{singlePromoSHareDets?.sector}</p> </div>
          </div>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-colors">
          Available Now
        </button>
      </div>
      
      {/* Price & Available On Section */}
      <div className="flex items-center space-x-16 mb-8">
        <div>
          <p className="text-gray-400 text-sm">Price Per Share</p>
          <p className="text-lg">Rs 1000 <span className="text-gray-400 text-sm">| Face Value |</span></p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Available on</p>
          <div className="flex space-x-2 mt-1">
            <img src="https://placehold.co/40x40/4285F4/ffffff?text=G" alt="Google" className="h-10 w-10 rounded-md" />
            <img src="https://placehold.co/40x40/FF0000/ffffff?text=B" alt="Bing" className="h-10 w-10 rounded-md" />
            <img src="https://placehold.co/40x40/000000/ffffff?text=A" alt="Apple" className="h-10 w-10 rounded-md" />
          </div>
        </div>
      </div>
      
      {/* Navigation Tabs */}
      <div className="flex space-x-2 mb-8 text-sm font-medium">
        {["Financial KPI", "Valuation KPI", "Operation KPI", "Market KPI", "News"].map((item, index) => (
          <button
            key={index}
            className={`py-2 px-4 rounded-full transition-colors ${
              index === 0 ? 'bg-indigo-600' : 'bg-[#212A3D] text-gray-400 hover:bg-[#313b52]'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      
      {/* Facts & Figures Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Facts & Figures</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {financialData.map((data, index) => (
            <div key={index} className="bg-[#212A3D] p-5 rounded-xl shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <p className="text-2xl font-semibold">{data.title}</p>
                <div className="bg-white bg-opacity-10 p-2 rounded-full text-white text-lg">{data.icon}</div>
              </div>
              <p className="text-sm text-gray-400">{data.subtitle}</p>
              <div className={`mt-1 text-sm font-medium ${data.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                {data.change}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Text Section */}
      <div className="bg-[#212A3D] p-8 rounded-xl leading-relaxed text-gray-300">
        <p>
          Apple's financial KPIs highlight its position as a market leader in the technology sector. A consistently strong EPS and high ROE reflect efficient use of capital, while superior net profit margins underline its pricing power and operational excellence. Although its P/E ratio suggests a premium valuation compared to peers, investor confidence remains high given its stable cash flows, innovation pipeline, and dominant ecosystem. These metrics collectively indicate a company with strong profitability, efficient management, and long-term growth potential.
        </p>
        <p className="mt-4">
          Apple's financial KPIs highlight its position as a market leader in the technology sector. A consistently strong EPS and high ROE reflect efficient use of capital, while superior net profit margins underline its pricing power and operational excellence. Although its P/E ratio suggests a premium valuation compared to peers, investor confidence remains high given its stable cash flows, innovation pipeline, and dominant ecosystem. These metrics collectively indicate a company with strong profitability, efficient management, and long-term growth potential.
        </p>
      </div>
    </div>
  )
}

export default Promoshare;














