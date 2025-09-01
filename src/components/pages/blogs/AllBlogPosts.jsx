// BlogPostGrid.jsx
import React, { useEffect, useState } from 'react';
import BlogPostCard from './BlogPostCard';
import img1 from '../../../assets/img/carousels1/2.jpg';
import img2 from '../../../assets/img/carousels1/3.jpg';
import img3 from '../../../assets/img/carousels1/4.jpg';
import img4 from '../../../assets/img/carousels1/5.jpg';
import img5 from '../../../assets/img/carousels1/6.jpg';
import {blogs} from '../../../redux/slices/blogs/BlogsSlice';
import { useDispatch, useSelector } from 'react-redux';
import noImage from "../../../assets/img/noImage.png"



const AllBlogPosts = () => {
  const dispatch = useDispatch();

  const allBlogs = useSelector((state) => state.blog);
  const [currentPage, setcurrentPage] = useState(1)
  useEffect(() => {
    dispatch(blogs(currentPage));
  }, [dispatch])
  
  // console.log(allBlogs.blogs.data)
  // console.log(allBlogs)
if (!allBlogs.blogs.data) {
  return <div className="text-white">Loading...</div>; // or some loading indicator
}
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-8">All blog posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allBlogs.blogs.data.items?.map(blog => (
          <BlogPostCard key={blog.id} blog={blog} noImage={noImage}/>
        ))}
      </div>
    </div>
  );
};

export default AllBlogPosts;