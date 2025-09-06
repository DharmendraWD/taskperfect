import React, { use, useEffect, useState } from 'react'
import { getPromoshareById } from '../../../redux/slices/promoShare/PromoshareSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import HeadingL from '../../utilities/HeadingL';
import { promoshareTabAPI, promoshareTabAPiStatus } from '../../../redux/slices/promoShare/TabData';
import noImg from '../../../assets/img/noImage.png'
import googleAdImg from '../../../assets/img/googleAd.png'
import Barclays from '../../../assets/img/Barclays.png'

import dollarImg from '../../../assets/img/dollar.png'
import up from '../../../assets/img/up.png'
import percentage from '../../../assets/img/percentage.png'
import down from '../../../assets/img/down.png'
import chart from '../../../assets/img/chart.png'
import assets from '../../../assets/img/assets.png'
import profit from '../../../assets/img/profit.png'
import warn from '../../../assets/img/warn.png'
import Loading2 from '../../utilities/loading/Loading2';



function Promoshare() {
    const financialData = [
    { title: "Rs 615", subtitle: "Earnings Per Share", change: "+12.4%", icon: "💰" },
    { title: "28.5", subtitle: "P/E Ratio", change: "-2.1%", icon: "%" },
    { title: "147.4%", subtitle: "Return on Equity", change: "+0.7%", icon: "📈" },
    { title: "22.6%", subtitle: "Return on Assets", change: "+5.2%", icon: "📊" },
    { title: "25.3%", subtitle: "Net Profit Margin", change: "+3.8%", icon: "🧮" },
    { title: "11.1%", subtitle: "Debt to Equity", change: "+1.1%A", icon: "⚖️" },
  ];
  const [desc, setDesc] = useState(""); 
  const dispatch = useDispatch();
  const  singlePromoshareData = useSelector((state) => state?.promoshare?.singlePromoshare);
  const { id } = useParams();

useEffect(() => {
  dispatch(getPromoshareById(id));
}, [dispatch, id]);

const singlePromoSHareDets = singlePromoshareData?.data;


// --------------
// tab section 
const [activeIndex, setActiveIndex] = useState(null);

  const kpiItems = [
    "Financial KPI",
    "Valuation KPI",
    "Operation KPI",
    "Market KPI",
    "News"
  ];


  const tabData = useSelector((state) => state.promoshareTabs?.data);
  const loadingTabData = useSelector((state) => state.promoshareTabs);
   const [btnClicked, setbtnClicked] = useState("")
   const [tabIndex, settabIndex] = useState("");
   const [tabDataArray, settabDataArray] = useState([]);
   const [financialKPI, setfinancialKPI] = useState([]);
   const [operation, setoperation] = useState([]);
   const [valuation, setvaluation] = useState([]);
   const [market, setmarket] = useState([]);
   const [news, setnews] = useState([]);


//    useEffect(() => {
//   if (singlePromoSHareDets?.description) {
//     setDesc(singlePromoSHareDets.description);
//   }
// }, [singlePromoSHareDets?.description, btnClicked]);
// setting default first paragraph 
useEffect(() => {
  if (singlePromoSHareDets?.remarks1) {
    setDesc(`${singlePromoSHareDets.remarks1} ${singlePromoSHareDets.remarks2} ${singlePromoSHareDets.remarks3}`);
  }
},[singlePromoSHareDets]);

// console.log(desc)
const handleClick = (index) => {
  setActiveIndex(index);

  let api = "";

  if (kpiItems[index] === "Financial KPI") {
    api = `/FinancialKPI/GetPagedFinancialKPIList?pageIndex=1&pageSize=10&companyId=${id}`;
    setbtnClicked(kpiItems[index])
    
    settabIndex(index)
  } else if (kpiItems[index] === "Valuation KPI") {
    api = `/ValuationKPI/GetPagedValuationKPIList?pageIndex=1&pageSize=10&companyId=${id}`;
    setbtnClicked(kpiItems[index])
    settabIndex(index)

  } else if (kpiItems[index] === "Operation KPI") {
    api = `/OperationalKPI/GetPagedOperationalKPIList?pageIndex=1&pageSize=10&companyId=${id}`;
    setbtnClicked(kpiItems[index])
    settabIndex(index)

  } else if (kpiItems[index] === "Market KPI") {
    api = `/MarketKPI/GetPagedMarketKPIList?pageIndex=1&pageSize=10&companyId=${id}`;
    setbtnClicked(kpiItems[index])
    settabIndex(index)


  } else if (kpiItems[index] === "News") {

    settabIndex(index)

    return;
  }

  dispatch(promoshareTabAPI(api));
};

useEffect(() => {
  if (kpiItems[tabIndex] === "Financial KPI") {
    setfinancialKPI(null)
    setfinancialKPI(tabData)
    let paraBellow = tabData?.data?.items[0]?.description;
    setDesc(paraBellow)
  } else if (kpiItems[tabIndex] === "Valuation KPI") {
    setvaluation(tabData)
    setDesc("")
        let paraBellow = tabData?.data?.items[0]?.description;
    setDesc(paraBellow)
  } else if (kpiItems[tabIndex] === "Operation KPI") {
setoperation(tabData)
    let paraBellow = tabData?.data?.items[0]?.description;
    setDesc(paraBellow)

  } else if (kpiItems[tabIndex] === "Market KPI") {
    setmarket(tabData)
     let paraBellow = tabData?.data?.items[0]?.description;
    setDesc(paraBellow)

  } else if (kpiItems[tabIndex] === "News") {
   setnews([])
   setfinancialKPI([])
   setmarket([])
   setvaluation([])
   setoperation([])
  //  console.log(financialData)
  }
  // console.log(kpiItems[tabIndex])
}, [btnClicked, tabData]);
// tab section end
// --------------

// console.log(loadingTabData.loading)
// --------------
// marketkpit high medium low btn 
  const [selectedCap, setSelectedCap] = useState("Medium"); // Default selected market cap 
 
  const [marketCApValue, setmarketCApValue] = useState(); // 



  const handleClickMarketKpi = (value) => {
    setSelectedCap(value);
if(value === "Low"){
  setmarketCApValue(market?.data?.items?.[0]?.lowMarketCap)
}else if(value === "Medium"){
  setmarketCApValue(market?.data?.items?.[0]?.medMarketCap)
}else if(value === "High"){
  setmarketCApValue(market?.data?.items?.[0]?.highMarketCap)
}
  };

  const capOptions = ["Low", "Medium", "High"];

  useEffect(() => {
  if(market?.data?.items?.items?.[0]?.medMarketCap){
    setmarketCApValue(market?.data?.items[0].medMarketCap);
  }
  }, [btnClicked]);
// --------------

// console.log(btnClicked, "btnClicked")
if(singlePromoshareData?.loading){
  return <div className='text-white min-h-screen flex justify-center items-center text-2xl'>Loading...</div>
}

  return (
     <div className=" text-white font-sans min-h-screen p-8">
      {/* Header Section */}
      <div className="flex justify-between flex-col md:flex-row gap-[20px] md:gap-[auto] items-center mb-6">
        <div className="flex items-center space-x-4 md:justify-start w-full md:w-auto justify-between">
          <img src={singlePromoSHareDets?.imageUrl ? `${import.meta.env.VITE_WEB_BASE_URL}${singlePromoSHareDets?.imageUrl}` : noImg} alt="Company Logo" className="h-16 w-16 rounded-full" />
          <div>
          <HeadingL label={singlePromoSHareDets?.companyName || "Company Name"}></HeadingL>

            <div className="text-sm text-gray-400 flex gap-8">
              <p>{singlePromoSHareDets?.sector}</p>
               <p>{singlePromoSHareDets?.address ? singlePromoSHareDets?.address : "Address No Available"} </p>
                  </div>
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
          <p className="text-lg truncate-two-words">{singlePromoSHareDets?.remarks1} <span className="text-gray-400 text-sm">| Face Value |</span></p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Available on</p>
          <div className="flex space-x-2 mt-1">
            <img src={googleAdImg} alt="Google" className="h-10 w-10 rounded-md" />
            <img src={Barclays} alt="Bing" className="h-10 w-10 rounded-md" />
          </div>
        </div>
      </div>
      
      {/* Navigation Tabs */}
     <div className=" mb-8 
  text-sm 
  font-medium
  grid grid-cols-1
  md:grid-cols-3
  md:gap-4
  gap-2 
  xl:flex xl:space-x-2 xl:grid-cols-none">
      {kpiItems.map((item, index) => (
        <button
          key={index}
          id={id} // Dynamic ID
          onClick={() => handleClick(index)}
          className={`py-2 px-4 border border-gray-400 rounded-full transition-colors ${
            activeIndex === index
              ? 'bg-white text-black'
              : 'bg-transparent text-white hover:bg-[#313b52]'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
      
      {/* Facts & Figures Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Facts & Figures</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row gap-4">
          {/* financialKPI  */}
{btnClicked === "Financial KPI" && (
  <>
    {loadingTabData.loading ? (
      <div className='text-white flex justify-center items-center text-2xl'>
       <Loading2></Loading2>
      </div>
    ) : (
      financialKPI?.data?.items?.map((data, index) => (
        <React.Fragment key={index}>
          <div key={"819"} className="bg-white/5 rounded-xl border border-dashed border-white/20 p-5 rounded-xl shadow-lg w-full">
      <div className="flex justify-between items-center mb-2">
        <p className="text-2xl text-white font-semibold">RS: {data?.eps}</p>
        <img src={dollarImg} alt="" className="bg-white  p-2 rounded-full text-white text-lg"/>
      </div>
        <p className="text-sm text-[#a2a2a2] font-semibold">Earning Per Share</p>
      <div className='flex items-center gap-2 mt-1 text-sm font-medium text-[grey] mt-2'>
          <img src={up} alt="" />
          <p className='text-sm text-[#4bf187]'>+12.4%</p>
      </div>
    </div>

      <div key={"11"} className="bg-[white] p-5 rounded-xl shadow-lg w-full bg-white/5 rounded-xl border border-dashed border-white/20">
      <div className="flex justify-between items-center mb-2">
        <p className="text-2xl font-semibold text-white"> {data?.peRatio}</p>
        <img src={percentage} alt="" className="bg-white  p-2 rounded-full text-white text-lg"/>
      </div>
        <p className="text-sm font-semibold text-[#a2a2a2]">P/E Ratio:</p>
      <div className='flex items-center gap-2 mt-1 text-sm font-medium text-[#4bf187] mt-2'>
          <img src={up} alt="" />
          <p className='text-sm text-[#4bf187]'>+12.4%</p>
      </div>
    </div>

      <div key={"22"} className="bg-[white] p-5 rounded-xl shadow-lg w-full bg-white/5 rounded-xl border border-dashed border-white/20">
      <div className="flex justify-between items-center mb-2">
        <p className="text-2xl font-semibold text-white"> {data?.roe}</p>
        <img src={chart} alt="" className="bg-white  p-2 rounded-full text-white text-lg"/>
      </div>
        <p className="text-sm font-semibold text-[#a2a2a2]">Return on Equity:</p>
      <div className='flex items-center gap-2 mt-1 text-sm font-medium text-[#4bf187] mt-2'>
          <img src={down} alt="" />
          <p className='text-sm text-[#4bf187]'>+12.4%</p>
      </div>
    </div>

      <div key={"233"} className="bg-[white] p-5 rounded-xl shadow-lg w-full bg-white/5 rounded-xl border border-dashed border-white/20">
      <div className="flex justify-between items-center mb-2">
        <p className="text-2xl font-semibold text-white"> {data?.roa}</p>
        <img src={assets} alt="" className="bg-white  p-2 rounded-full text-white text-lg"/>
      </div>
        <p className="text-sm font-semibold text-[#a2a2a2]">Return on Assets:</p>
      <div className='flex items-center gap-2 mt-1 text-sm font-medium text-[#4bf187] mt-2'>
          <img src={up} alt="" />
          <p className='text-sm text-[#4bf187]'>+12.4%</p>
      </div>
    </div>

      <div key={"3423"} className="bg-[white] p-5 rounded-xl shadow-lg w-full bg-white/5 rounded-xl border border-dashed border-white/20">
      <div className="flex justify-between items-center mb-2">
        <p className="text-2xl font-semibold text-white"> {data?.netProfitMargin}</p>
        <img src={profit} alt="" className="bg-white  p-2 rounded-full text-white text-lg"/>
      </div>
        <p className="text-sm font-semibold text-[#a2a2a2]">Net Profit Margin:</p>
      <div className='flex items-center gap-2 mt-1 text-sm font-medium text-[#4bf187] mt-2'>
          <img src={down} alt="" />
          <p className='text-sm text-[#4bf187]'>+12.4%</p>
      </div>
    </div>

        </React.Fragment>
      ))
    )}
  </>
)}



  


{/* valuation kpi  */}
{btnClicked === "Valuation KPI" && (
  <>
    {loadingTabData.loading ? (
      <div className="text-white mx-auto flex justify-center items-center text-2xl">
        <Loading2 />
      </div>
    ) : valuation?.data?.items?.length > 0 ? (
      valuation.data.items.map((data, index) => (
        <React.Fragment key={index}>
          {/* 1st card */}
          <div className="bg-white/5 rounded-xl border border-dashed border-white/20 p-5 rounded-xl shadow-lg w-full">
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-between w-full items-center gap-2">
                <p className="text-sm font-semibold text-[#a2a2a2]">P/B Ratio</p>
                <div className="flex items-center gap-2 mt-1 text-sm font-medium text-green-600">
                  <img src={warn} alt="" />
                  <p className="text-sm flex gap-4 text-[#4bf187]">+12.4%</p>
                  <img src={down} alt="" />
                </div>
              </div>
            </div>
            <div className="mt-1 text-sm font-medium">
              <p className="text-2xl font-semibold text-white">{data?.pbRatio}</p>
            </div>
          </div>

          {/* 2nd card */}
          <div className="bg-white/5 border border-dashed border-white/20 p-5 rounded-xl shadow-lg w-full">
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-between w-full items-center gap-2">
                <p className="text-sm font-semibold text-[#a2a2a2]">Dividend Yield</p>
                <div className="flex items-center gap-2 mt-1 text-sm font-medium text-green-600">
                  <img src={warn} alt="" />
                  <p className="text-sm flex gap-4 text-[#4bf187]">+12.4%</p>
                  <img src={down} alt="" />
                </div>
              </div>
            </div>
            <div className="mt-1 text-sm font-medium">
              <p className="text-2xl font-semibold text-black">{data?.dividentYield}</p>
            </div>
          </div>

          {/* 3rd card */}
          <div className="bg-white/5 rounded-xl border border-dashed border-white/20 p-5  shadow-lg w-full">
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-between w-full items-center gap-2">
                <p className="text-sm font-semibold text-[#a2a2a2]">EBITDA</p>
                <div className="flex items-center gap-2 mt-1 text-sm font-medium text-green-600">
                  <img src={warn} alt="" />
                  <p className="text-sm flex gap-4 text-[#f23e60]">+12.4%</p>
                  <img src={down} alt="" />
                </div>
              </div>
            </div>
            <div className="mt-1 text-sm font-medium">
              <p className="text-2xl font-semibold text-white">RS: {data?.ebitda}</p>
            </div>
          </div>
        </React.Fragment>
      ))
    ) : (
      <div className="text-gray-500 text-center mx-auto py-10 text-center text-lg font-medium">
        No Data Found
      </div>
    )}
  </>
)}






{/* operational  */}
{btnClicked === "Operation KPI" && (
  <>
    {loadingTabData.loading ? (
      <div className="text-white mx-auto flex justify-center items-center text-2xl">
        <Loading2 />
      </div>
    ) : operation?.data?.items?.length > 0 ? (
      operation.data.items.map((data, index) => (
        <React.Fragment key={index}>
        {/* 1st card  */}
    <div key={"1006"} className="bg-white/5 rounded-xl border border-dashed border-white/20 p-5 shadow-lg w-full bg-white/5 rounded-xl border border-dashed border-white/20">
      <div className="flex justify-between items-center mb-2">    
        <div className='flex justify-between w-full items-center gap-2'>
              <div>
               <p className='text-sm font-semibold text-[#a2a2a2]'> Operating Margin</p>
              </div>
            <div className='flex items-center gap-2 mt-1 text-sm font-medium text-[#4bf187] mt-2'>
                  <img src={warn} alt="" />
              <p className='text-sm flex gap-4 text-[#f23e60]'>+12.4%</p>
                  <img src={down} alt="" />
            </div>
        </div>
      </div>
      <div className='mt-1 text-sm font-medium mt-2'>
        <p className="text-2xl font-semibold text-white">{data?.operatingMargin} </p>
      </div>
    </div>
    {/* 2nd card */}
    <div key={"1005"} className="bg-[white] p-5 rounded-xl shadow-lg w-full bg-white/5 rounded-xl border border-dashed border-white/20">
      <div className="flex justify-between items-center mb-2">    
        <div className='flex justify-between w-full items-center gap-2'>
              <div>
               <p className='text-sm font-semibold text-[#a2a2a2]'>Inventory Turnover</p>
              </div>
            <div className='flex items-center gap-2 mt-1 text-sm font-medium text-[#4bf187] mt-2'>
                  <img src={warn} alt="" />
              <p className='text-sm flex gap-4 text-[#f23e60]'>+12.4%</p>
                  <img src={down} alt="" />
            </div>
        </div>
      </div>
      <div className='mt-1 text-sm font-medium mt-2'>
        <p className="text-2xl font-semibold text-white">{data?.invTurnOver} </p>
      </div>
    </div>
        </React.Fragment>
      ))
    ) : (
      <div className="text-gray-500 text-center mx-auto py-10 text-center text-lg font-medium">
        No Data Found
      </div>
    )}
  </>
)}










{/* marketkpi  */}
{btnClicked === "Market KPI" && (
  <>
    {loadingTabData.loading ? (
      <div className="text-white mx-auto flex justify-center items-center text-2xl">
        <Loading2 />
      </div>
    ) : market?.data?.items?.length > 0 ? (
      market.data.items.map((data, index) => (
        <React.Fragment key={index}>
         {/* Beta */}
        <div className="bg-white/5 w-full p-4 rounded-xl border border-dashed border-white/20" key={"1101"}>
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm text-gray-300">Beta</p>
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">Stable</span>
          </div>
          <p className="text-2xl font-semibold">{data?.beta}</p>
          <p className="text-xs text-gray-400 mt-1">Volatility vs Market</p>
        </div>

        {/* Market Cap */}
      <div className="bg-white/5 w-full p-4 rounded-xl border border-dashed border-white/20" key={"1102"}>
      <div className="flex justify-between items-center mb-1">
        <p className="text-sm text-gray-300">Market Cap</p>
        <div className="flex gap-1">
          {capOptions.map((cap) => (
            <span
              key={cap}
              onClick={() => handleClickMarketKpi(cap)}
              className={`cursor-pointer text-xs px-2 py-0.5 rounded-full transition
                ${
                  selectedCap === cap
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }
              `}
            >
              {cap}
            </span>
          ))}
        </div>
      </div>
      <p className="text-2xl font-semibold">Rs: {marketCApValue}</p>
      <p className="text-xs text-gray-400 mt-1">{selectedCap}</p>
    </div>

        {/* Production Output */}
        <div className="bg-white/5 w-full p-4 rounded-xl border border-dashed border-white/20"  key={"1103"}>
          <p className="text-sm text-gray-300 mb-1">Production Output</p>
          <div className="flex justify-between">
            <div>
              <p className="text-xs text-gray-400">Retail Sales</p>
              <p className="text-lg font-semibold text-green-400">250K</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Active Users</p>
              <p className="text-lg font-semibold text-blue-400">18.2M</p>
            </div>
          </div>
        </div>

        {/* Volume */}
        <div className="bg-white/5 w-full p-4 rounded-xl border border-dashed border-white/20"  key={"1104"}>
          <p className="text-sm text-gray-300 mb-1">Volume</p>
          <p className="text-2xl font-semibold">{data?.volume}<span className="text-sm font-normal">shares</span></p>
          <p className="text-xs text-gray-400 mt-1">Daily Avg Volume</p>
          {/* Optional: Add bar chart here later */}
        </div>

        {/* Due Diligence */}
        <div className="bg-white/5 w-full p-4 rounded-xl border border-dashed border-white/20" key={"1105"}>
  <p className="text-sm text-gray-300 mb-1">Due Diligence</p>
  <div className="flex items-center space-x-2">
    <div className="relative w-10 h-10">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
        <path
          className="text-gray-700 stroke-current"
          strokeWidth="3"
          fill="none"
          d="
            M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831
          "
        />
        <path
          className="text-green-500 stroke-current"
          strokeWidth="3"
          fill="none"
          d="
            M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831
          "
          strokeDasharray={`${data.duedegi}, 100`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
        {data.duedegi}%
      </div>
    </div>
    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full">In Progress</span>
  </div>
  <p className="text-xs text-gray-400 mt-2">Due Diligence Status</p>
</div>

        </React.Fragment>
      ))
    ) : (
      <div className="text-gray-500 text-center mx-auto py-10 text-center text-lg font-medium">
        No Data Found
      </div>
    )}
  </>
)}





{/* News  */}
  {btnClicked === "News" && news?.data?.items?.map((data, index) => (
    <div key={index} className="bg-[white] p-5 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <p className="text-2xl font-semibold text-black">{data.title}</p>
        <div className="bg-white  p-2 rounded-full text-white text-lg">{data.icon}</div>
      </div>
      <p className="text-sm text-gray-400">{data.subtitle}</p>
    </div>
  ))}


       
        </div>
      </div>

      {/* Text Section */}
      <div className=" p-8 rounded-xl leading-relaxed text-gray-300">
        <p>
          {desc&& desc}
        </p>
       
      </div>
    </div>
  )
}

export default Promoshare;














