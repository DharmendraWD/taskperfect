// BlogPostCard.jsx
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const BlogPostCard = ({ post }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative h-48 sm:h-56">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
          <span>{post.date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{post.description}</p>
        <Link to={"/blog/"+post.id} state={post} className={"flex items-center text-blue-500 font-medium hover:text-blue-400 transition-colors duration-200"} className="flex items-center text-blue-500 font-medium hover:text-blue-400 transition-colors duration-200">
          <span className="mr-2">Read more</span>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;