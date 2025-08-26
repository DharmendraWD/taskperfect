import React from 'react';
import img1 from '../../../assets/img/carousels1/2.jpg';
import img2 from '../../../assets/img/carousels1/5.jpg';
import img3 from '../../../assets/img/carousels1/4.jpg';
import HeadingL from '../../utilities/HeadingL';
import Para from '../../utilities/Para';
import { MdArrowOutward } from "react-icons/md";
import Button from '../../utilities/Button';
import HeroImage from '../../utilities/HeroImage';
import Button2 from '../../utilities/Button2';

const blogPosts = [
  {
    date: '20 Jan 2022',
    title: 'Lorem ipsum dolor',
    description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    image: img2,
    icon: true,
  },
  {
    date: '19 Jan 2022',
    title: 'Lorem ipsum dolor',
    description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here\'s how to get...',
    image: img1,
  },
  {
    date: '18 Jan 2022',
    title: 'Lorem ipsum dolor',
    description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
    image: img3,
  },
];

const BlogPosts = () => {
  return (
 <>
    <div>
      <HeadingL label="Market and Insights Concepts" />
      <Para label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." />
      <div className=" text-white flex-col min-h-screen  font-sans flex items-start justify-center px-[10px] lg:px-[0px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
        {/* Large Card */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg md:col-span-1 lg:col-span-1">
          <img
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            className="w-full h-[50%] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className=" inset-0 bg-black bg-opacity-50 flex flex-col justify-end ">
            <div className="text-gray-400 mt-2 text-lg flex justify-between mb-1">{blogPosts[0].date} <MdArrowOutward /></div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">{blogPosts[0].title}</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">{blogPosts[0].description}</p>

          </div>
        </div>

        {/* Small Cards */}
        <div className="grid grid-cols-1 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <div key={index} className="flex flex-col md:flex-row bg-transparent rounded-lg overflow-hidden">
              <div className="w-full md:w-1/2 flex-shrink-0 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
              <div className="px-4 md:px-6 w-full flex-grow flex flex-col justify-start">
                <span className="text-gray-400 text-sm mb-1">{post.date} </span>
                <h3 className="text-xl font-bold mb-2 leading-tight">{post.title}</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>


<div>

</div>
 </>
  );
};

export default BlogPosts;