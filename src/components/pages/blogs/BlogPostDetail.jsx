import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import mainImage from '../../../assets/img/carousels1/4.jpg'; // Adjust path to your image
import ctaImage from '../../../assets/img/carousels1/2.jpg'; // Adjust path to your image

import noImage from "../../../assets/img/noImage.png"

import {getBlogById} from "../../../redux/slices/blogs/BlogsSlice";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import parse from 'html-react-parser';
import Loading2 from '../../utilities/loading/Loading2';
import { extractYouTubeEmbedData } from "../../utilities/tools/ExtractYtEmbedData";

export const VITE_WEB_BASE_DOWNLOAD_URL = import.meta.env.VITE_WEB_BASE_DOWNLOAD_URL;
export const BASE_WEB_URL = import.meta.env.VITE_WEB_BASE_URL;



const postData = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  date: 'August 6, 2026',
  readTime: '2 Mins. Read',
  mainImageUrl: mainImage,
  content: {
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quote: 'Blog Post Quote',
    subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    subParagraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    subParagraph2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    subParagraph3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    subParagraph4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  cta: {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonText: 'Book Your Test',
    backgroundImageUrl: ctaImage,
  }
};



const BlogPostDetail = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const blog = useSelector(state => state.blog.singleBlog);
  const blogStatus = useSelector(state => state.blog);
  React.useEffect(() => {
    dispatch(getBlogById(id));
  }, [dispatch, id]);


 if(blog){
  console.log(blog.data.videoURL)
 }

if (blogStatus?.loading){  
  return  <div className='text-white min-h-screen flex justify-center items-center text-2xl'>
  <Loading2 />
  </div>

}

if(blogStatus?.error){
  return <div className='text-red-300 min-h-screen flex justify-center items-center text-2xl'>{blogStatus?.error}</div>
}



// yt videoo 
if(blog?.data?.videoURL){
var videoURL = blog?.data?.videoURL;
 var { videoId, playlistId } = extractYouTubeEmbedData(videoURL || "");

  var embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}${
    playlistId ? `?list=${playlistId}` : ""
  }`;
}
// yt videoo end 
  const HeroSection = () => (
    <div className=" pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          {blog?.data?.blogTitle}
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center text-gray-400 text-sm mb-8 space-y-2 sm:space-y-0 sm:space-x-8">
          <span>{blog?.data?.createdDate}</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition-colors"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-white transition-colors"><FaInstagram /></a>
          </div>
          <span>{"2 mins read"}</span>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-8 relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
        {/* <img src={blog?.data?.images?.[0] ? blog?.data?.image1 : noImage} alt="Blog Post Hero" className="w-full h-full object-cover" /> */}

{
  blog?.data?.videoURL ? (
     <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
      <iframe
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  ) : (
    <img src={blog?.data?.images?.[0] ? BASE_WEB_URL+blog?.data?.fileURL+blog?.data?.image1 : noImage} alt="Blog Post Hero" className="w-full h-full object-cover" />
  )
}
      </div>
    </div>
  );

  const ContentSection = () => (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">{blog?.data?.image1Titile}</h2>
      {/* <p className="text-gray-300 mb-6 leading-relaxed">
        {blog?.data?.blogDesc}
      </p> */}
 
<div className="text-gray-300 mb-6 leading-relaxed">
  {parse(blog?.data?.blogDesc || '')}
</div>

      <blockquote className="border-l-4 border-green-500 pl-4 py-2 mb-8 italic text-gray-200">
        "{postData.content.quote}"
      </blockquote>

      <h2 className="text-2xl sm:text-3xl font-bold mb-6">{blog?.data?.image2Title}</h2>
      {/* <p className="text-gray-300 mb-6 leading-relaxed">
        {blog?.data?.blogDesc}
      </p> */}
       <div className="text-gray-300 mb-6 leading-relaxed">
  {parse(blog?.data?.blogDesc || '')}
</div>
    </div>
  );

  const CTABanner = () => (
     <div className="relative w-full h-auto flex flex-col md:flex-row min-h-[300px] overflow-hidden rounded-lg shadow-lg">
      {/* Left section with gradient background and text */}
      <div className="relative w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center items-center md:items-start text-center md:text-left
                      bg-gradient-to-br from-blue-600 to-green-500 text-white">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <p className="text-base sm:text-lg mb-8 max-w-md">
          Lorem ipsum dolor sit amet, consectetur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <button className="bg-white text-green-700 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300">
          Book Your Trek
        </button>
      </div>

      {/* Right section with background image */}
      <div className="relative w-full md:w-1/2 min-h-[200px] md:min-h-full">
        <img
          src={ctaImage} // Use your actual image path here
          alt="Stock Chart"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Optional overlay for image */}
      </div>
    </div>
  );

  return (
    <div className=" min-h-screen text-white">
      <HeroSection />
      <ContentSection />
      <CTABanner />
   
   {/* REKLATED BLOG  */}
    {/* <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-8">Related blog posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div> */}
    </div>
  );
};

export default BlogPostDetail;
