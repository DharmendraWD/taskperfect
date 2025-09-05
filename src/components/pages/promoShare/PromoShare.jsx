import React, { useEffect } from "react";
import PromoShareCard from "./PromoShareCard";
import { useDispatch, useSelector } from "react-redux";
import { totalPromoshare, promoshareStatus } from "../../../redux/slices/promoShare/PromoshareSlice";
import FAQ from "../../Hero/Homepage/FAQ";


function PromoShare() {
  const dispatch = useDispatch();

  const {
    data,
    loading,
    error,
    limit,
    skip,
    totalPages,
    currentPage,
  } = useSelector((state) => state.promoshare);

  // Fetch paginated data on mount or when skip/limit changes
  useEffect(() => {
    dispatch(totalPromoshare({ limit, skip }));
  }, [dispatch, limit, skip]);

  // Handle page change
  const handlePageChange = (page) => {
    dispatch(promoshareStatus.actions.setPage(page));
  };

  if (loading) {
    return (
      <div className="text-white min-h-screen flex justify-center items-center text-2xl">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  // Extract items safely
  const promshares = data?.data?.items || [];
console.log(promshares)

  return (
    <div>
      <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-2">
        Promoshare Lorem Ipsum Dolor
      </h2>
      <p className="text-white/60 text-sm text-center mb-6">
        Lorem ipsum dolor sit amet consectetur.
      </p>

      <div className="grid grid-cols-1 justify-self-center md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {promshares.map((promoshare, index) => (
          <PromoShareCard
            key={index}
            title={promoshare.companyName}
            desc={promoshare.description}
            imageUrl={promoshare.imageUrl}
            id={promoshare.id}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 text-white text-sm">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-2 py-1 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Prev
        </button>

        {/* Show 3 pages near current + first & last */}
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter((page) =>
            page === 1 || // Always show first
            page === totalPages || // Always show last
            Math.abs(currentPage - page) <= 1 // Near current
          )
          .map((page, index, arr) => {
            const showDots = index > 0 && page !== arr[index - 1] + 1;
            return (
              <React.Fragment key={page}>
                {showDots && <span className="px-1">...</span>}
                <button
                  onClick={() => handlePageChange(page)}
                  className={`px-2 py-1 rounded ${
                    page === currentPage ? "bg-white text-black" : "hover:underline"
                  }`}
                >
                  {page}
                </button>
              </React.Fragment>
            );
          })}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-2 py-1 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Next
        </button>
      </div>

      <FAQ />
    </div>
  );
}

export default PromoShare;
