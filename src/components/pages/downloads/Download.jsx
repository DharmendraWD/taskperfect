// AccountCardGrid.jsx
import { FaDownload, FaFileAlt, FaEdit } from 'react-icons/fa';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { download } from '../../../redux/slices/download/DownloadSlice';
import { downloadStatus } from '../../../redux/slices/download/DownloadSlice';
import Loading2 from  '../../utilities/loading/Loading2';
export const BASE_WEB_URL = import.meta.env.VITE_WEB_BASE_URL;

import Logo from '../../../assets/img/Logo.png';
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

// console.log(downloadsItems)
// console.log(`${BASE_WEB_URL}${downloadsItems?.[0]?.fileURL}/${downloadsItems?.[0]?.docName}`)
// const fileUrl = BASE_WEB_URL; 
// download 
 const [isLoading, setIsLoading] = useState(false);

 const handleDownload = async (itemId, limit, skip) => {
    setIsLoading(true);
    try {
      // 1. Get the list of downloadable files
      const { data } = await axios.get(
        `http://www.taskperfect.somee.com/api/DownloadFiles/GetPagedDownloadList?pageIndex=${skip}&pageSize=${limit}`
      );

      const item = data?.data?.items[itemId];
      if (!item) {
        alert("No files found.");
        return;
      }

      // 2. Construct full file URL
      const fileUrl =
        "http://www.taskperfect.somee.com" +
        item.fileURL +
        item.docName;

        console.log("RiFileUserLine", fileUrl)
      // 3. Download the file as a blob
      const fileResponse = await axios.get(fileUrl, {
        responseType: "blob",
      });

      // 4. Trigger file download
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
      alert("FIle not available");
    } finally {
      setIsLoading(false);
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
                disabled={isLoading}
                 className={`flex items-center mx-auto gap-1 bg-white text-[#0A0F2C] text-xs px-3 py-1 rounded-md hover:bg-gray-200 transition ${isLoading ? 'bg-gray-100' : ''}`}>


                  <FaDownload size={12} />
                  Download
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
