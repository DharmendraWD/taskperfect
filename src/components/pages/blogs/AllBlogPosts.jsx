import React, { useEffect, useState } from 'react';
import BlogPostCard from './BlogPostCard';
import { blogs } from '../../../redux/slices/blogs/BlogsSlice';
import { useDispatch, useSelector } from 'react-redux';
import noImage from "../../../assets/img/noImage.png";
import Loading2 from '../../utilities/loading/Loading2';

const AllBlogPosts = () => {
  const dispatch = useDispatch();
  const allBlogs = useSelector((state) => state.blog);

  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem('blogCurrentPage')) || 1
  );

  const totalPages = allBlogs.blogs?.data?.totalPages || 1;
  const items = allBlogs.blogs?.data?.items || [];

  useEffect(() => {
    localStorage.setItem('blogCurrentPage', currentPage);
  }, [currentPage]);

  useEffect(() => {
      dispatch(blogs({ currentPage: 1, numOfBlogs: 9 })); // Fetch 6 items per page
  }, [dispatch, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 2) {
        pageNumbers.push(1, 2, '...', totalPages);
      } else if (currentPage >= totalPages - 1) {
        pageNumbers.push(1, '...', totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pageNumbers.map((number, index) =>
      number === '...' ? (
        <span key={index} className="px-2 text-gray-400">...</span>
      ) : (
        <button
          key={index}
          onClick={() => handlePageChange(number)}
          className={`w-8 h-8 mx-1 flex items-center justify-center rounded ${
            currentPage === number
              ? 'bg-white text-black font-bold'
              : 'text-white hover:bg-gray-600'
          }`}
        >
          {number}
        </button>
      )
    );
  };


  if (allBlogs.loading) {
    return <div className='text-white relative min-h-screen flex justify-center items-center text-2xl'>
      <Loading2 />
    </div>;
  }

  if (!items || items.length === 0) {
    return <div className='text-white min-h-screen flex justify-center items-center text-2xl'>No Blog Post Found. {items.length}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-8">All blog posts {items.length}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.slice(3).map(blog => (
          <BlogPostCard key={blog.id} blog={blog} noImage={noImage} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-8 flex justify-center items-center space-x-1">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1  text-white disabled:opacity-50"
        >
          Prev
        </button>

        {renderPageNumbers()}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1  text-white disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllBlogPosts;
