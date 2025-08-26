// BlogPostGrid.jsx
import React from 'react';
import BlogPostCard from './BlogPostCard';
import img1 from '../../assets/img/carousels1/2.jpg';
import img2 from '../../assets/img/carousels1/3.jpg';
import img3 from '../../assets/img/carousels1/4.jpg';
import img4 from '../../assets/img/carousels1/5.jpg';
import img5 from '../../assets/img/carousels1/6.jpg';


const blogPosts = [
  // Sample data for your posts. In a real app, this would come from an API.
  { id: 1, image: img1, date: '17 Jan 2022', title: 'Lorem ipsum dolor', description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?', readMoreLink: '#' },
  { id: 2, image: img2, date: '6 Jan 2022', title: 'Lorem ipsum dolor', description: 'Mental models are simple expressions of complex processes or relationships.', readMoreLink: '#' },
  { id: 3, image: img3, date: '15 Jan 2022', title: 'Lorem ipsum dolor', description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.', readMoreLink: '#' },
  { id: 4, image: img4, date: '14 Jan 2022', title: 'Lorem ipsum dolor', description: 'Collaboration can make our teams stronger, and our individual designs better.', readMoreLink: '#' },
  { id: 5, image: img5, date: '13 Jan 2022', title: 'Lorem ipsum dolor', description: 'JavaScript frameworks make development easy with extensive features and functionalities.', readMoreLink: '#' },
  { id: 6, image: img1, date: '12 Jan 2022', title: 'Lorem ipsum dolor', description: 'Starting a community doesn’t need to be complicated, but how do you get started?', readMoreLink: '#' },
];

const AllBlogPosts = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-8">All blog posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogPosts;