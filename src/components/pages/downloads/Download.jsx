// AccountCardGrid.jsx
import { div } from 'framer-motion/client';
import { FaDownload, FaFileAlt, FaEdit } from 'react-icons/fa';
import HeadingL from '../../utilities/HeadingL';
import Para from '../../utilities/Para';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { download } from '../../../redux/slices/download/DownloadSlice';
import { downloadStatus } from '../../../redux/slices/download/DownloadSlice';









function downloadCard() {
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


  const handlePageChange = (page) => {
    dispatch(downloadStatus.actions.setPage(page));
  };

  if (loading) {
    return <div className='text-white min-h-screen flex justify-center items-center text-2xl'>Loading...</div>
  }

  if (error) {
    return <div className='text-red-500 text-center'>{error}</div>
  }

  return (
    <div>
      <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-2">
        Promoshare Lorem Ipsum Dolor
      </h2>
      <p className="text-white/60 text-sm text-center mb-6">
        Lorem ipsum dolor sit amet consectetur.
      </p>

      <div className="min-h-screen p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-16">
        {data.map((item,  index) => (
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

        {/* Show 3 page buttons around current */}
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter(page =>
            page === 1 || // Always show first
            page === totalPages || // Always show last
            Math.abs(currentPage - page) <= 1 // Show pages near current
          )
          .map((page, index, arr) => {
            const showDots =
              index > 0 && page !== arr[index - 1] + 1;

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

export default downloadCard;

