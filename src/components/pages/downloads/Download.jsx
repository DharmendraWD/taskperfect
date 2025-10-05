// AccountCardGrid.jsx
import { FaDownload, FaFileAlt, FaEdit } from 'react-icons/fa';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { download } from '../../../redux/slices/download/DownloadSlice';
import { downloadStatus } from '../../../redux/slices/download/DownloadSlice';
import Loading2 from  '../../utilities/loading/Loading2';
export const BASE_WEB_URL = import.meta.env.VITE_WEB_BASE_URL;
import axios from 'axios';


function DownloadCard() {
  const dispatch = useDispatch();
  const {
    data,
    loading,
    error,
    limit,
    skip,
    totalPages,
    currentPage
  } = useSelector((state) => state.downloads);

  React.useEffect(() => {
    dispatch(download({ limit, skip }));
  }, [dispatch, limit, skip]);


  const downloadsItems = data?.data?.items;
  const handlePageChange = (page) => {
    const newSkip = (page - 1) * limit;
    dispatch(downloadStatus.actions.setPage(page));
    dispatch(downloadStatus.actions.setSkip(newSkip));
    dispatch(download({ limit, skip: newSkip }));
  };


const [loadingIndex, setLoadingIndex] = useState(null);
const [progressMap, setProgressMap] = useState({});


const handleDownload = async (itemIndex, limit, skip) => {
  setLoadingIndex(itemIndex);
  setProgressMap(prev => ({ ...prev, [itemIndex]: 0 }));

  try {
    const { data } = await axios.get(
      `http://3.27.120.54:81/api/DownloadFiles/GetPagedDownloadList?pageIndex=${skip}&pageSize=${limit}`
    );

    const item = data?.data?.items[itemIndex];
    if (!item) {
      alert("No files found.");
      return;
    }

    const fileUrl = "http://3.27.120.54:81" + item.fileURL + item.docName;
    console.log("Download URL:", fileUrl);

    const fileResponse = await axios.get(fileUrl, {
      responseType: "blob",
      onDownloadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / (progressEvent.total || 1)
        );
        setProgressMap(prev => ({ ...prev, [itemIndex]: percentCompleted }));
      },
    });

    const blobUrl = window.URL.createObjectURL(new Blob([fileResponse.data]));
    const link = document.createElement("a");
    link.href = blobUrl;
    link.setAttribute("download", item?.docName);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error("Download failed:", error);
    alert("File not available");
  } finally {
    setLoadingIndex(null);
    setProgressMap(prev => ({ ...prev, [itemIndex]: 0 })); // reset progress
  }
};




// download 
  if (loading) {
    return(
          <>
<div className='text-white min-h-screen flex justify-center items-center text-2xl'>
<Loading2 />
</div>
    </>
    )
  }

  if (error) {
    return <div className='text-red-500 text-center'>{error}</div>
  }
  if(downloadsItems?.length<1){
    return   <div className="text-white min-h-screen flex justify-center items-center text-2xl">
      No Data Found
    </div>
  }

  return (
    <div>
      <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-2">
       Downloads
      </h2>
      <p className="text-white/60 text-sm text-center mb-6">
        Download the Account Details Update Form.
      </p>

      <div className="min-h-screen p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 justifyItemsCenter md:grid-cols-3 gap-4 lg:gap-16">
          {downloadsItems?.map((item, index) => (
            <div key={index} className="allCards min-w-[313px] min-h-[200px] text-white border border-[#FEFBFB] rounded-[20px] p-4 flex flex-col justify-between shadow-lg hover:shadow-2xl transition duration-300">
              <div>
                <h2 className="text-sm font-semibold">{item?.docTitle}</h2>
                <p className="text-xs mt-1 text-gray-300">{item?.docName}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-between">
           <button
  onClick={() => handleDownload(index, limit, skip)}
  disabled={loadingIndex === index}
  className={`flex flex-row items-center justify-center mx-auto gap-1 bg-white text-[#0A0F2C] text-xs px-3 py-2 rounded-md hover:bg-gray-200 transition ${
    loadingIndex === index ? 'bg-gray-100 cursor-wait' : ''
  }`}
>
  {loadingIndex === index ? (
    <>
      <span className="animate-pulse text-[#002366] font-semibold relative mb-1">
        Downloading... ({progressMap[index] || 0}%)
        <div className="flex flex-row gap-2 justify-center mb-1 absolute left-0 right-0">
          <div className="w-2 h-2 rounded-full bg-green-700 animate-bounce [animation-delay:.6s]"></div>
          <div className="w-2 h-2 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-700 animate-bounce [animation-delay:.6s]"></div>
        </div>
      </span>
    </>
  ) : (
    <>
      <FaDownload size={12} />
      Download
    </>
  )}
</button>


             
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 text-white text-sm">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-2 py-1 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter(page =>
            page === 1 || page === totalPages || Math.abs(currentPage - page) <= 1
          )
          .map((page, index, arr) => {
            const showDots = index > 0 && page !== arr[index - 1] + 1;
            return (
              <React.Fragment key={page}>
                {showDots && <span className="px-1">...</span>}
                <button
                  onClick={() => handlePageChange(page)}
                  className={`px-2 py-1 rounded ${page === currentPage ? 'bg-white text-black' : 'hover:underline'}`}
                >
                  {page}
                </button>
              </React.Fragment>
            )
          })}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-2 py-1 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default DownloadCard;
