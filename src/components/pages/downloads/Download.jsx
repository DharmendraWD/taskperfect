// AccountCardGrid.jsx
import { FaDownload, FaFileAlt, FaEdit } from 'react-icons/fa';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { download } from '../../../redux/slices/download/DownloadSlice';
import { downloadStatus } from '../../../redux/slices/download/DownloadSlice';
import Loading2 from  '../../utilities/loading/Loading2';

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
  if(!downloadsItems?.length==0){
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
                <h2 className="text-sm font-semibold">ACCOUNT DETAILS UPDATE FORM</h2>
                <p className="text-xs mt-1 text-gray-300">(Bank, Phone, Email, PAN, Address)</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-between">
                <button className="flex items-center gap-1 bg-white text-[#0A0F2C] text-xs px-3 py-1 rounded-md hover:bg-gray-200 transition">
                  <FaDownload size={12} />
                  Download
                </button>
                <button className="flex items-center gap-1 bg-white text-[#0A0F2C] text-xs px-3 py-1 rounded-md hover:bg-gray-200 transition">
                  <FaFileAlt size={12} />
                  Sample
                </button>
                <button className="flex items-center gap-1 bg-white text-[#0A0F2C] text-xs px-3 py-1 rounded-md hover:bg-gray-200 transition">
                  <FaEdit size={12} />
                  Editable
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
