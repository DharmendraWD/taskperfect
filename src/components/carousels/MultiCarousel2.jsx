import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../../assets/img/carousels1/5.jpg';
import img2 from '../../assets/img/carousels1/2.jpg';
import img3 from '../../assets/img/carousels1/3.jpg';
import img4 from '../../assets/img/carousels1/4.jpg';
import HeadingL from '../utilities/HeadingL';
import Button from '../utilities/Button';


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 564, min: 0 },
    items: 1
  }
};

function MultiCarousel2() {
  return (
   <div className='mt-16 pb-16'>
    <HeadingL label="Another Level"></HeadingL>
        <p className="mt-2 text-lg text-center text-gray-400">
            Explore India's leading private growth companies
          </p>
     <Carousel
      swipeable
      draggable
      showDots
      responsive={responsive}
      ssr
      infinite
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item"
    >
      <div className="carousel-card">
        <img src={img} alt="Slide 1" className="carousel-image" />
         <h3 className="text-base font-semibold text-start text-gray-50">lorem</h3>
                    <p className="= text-xs text-start text-gray-400 leading-tight line-clamp-2">
                      Lorem ipsum dolor sit.1
                    </p>
      </div>
      <div className="carousel-card">
        <img src={img2} alt="Slide 2" className="carousel-image" />
       <h3 className="text-base font-semibold text-start text-gray-50">lorem</h3>
                    <p className="= text-xs text-start text-gray-400 leading-tight line-clamp-2">
                      Lorem ipsum dolor sit.2
                    </p>
      </div>
      <div className="carousel-card">
        <img src={img3} alt="Slide 3" className="carousel-image" />
        <h3 className="text-base text-start font-semibold text-gray-50">lorem</h3>
                    <p className="= text-xs text-start text-gray-400 leading-tight line-clamp-2">
                      Lorem ipsum dolor sit.3
                    </p>
      </div>
      <div className="carousel-card">
        <img src={img4} alt="Slide 4" className="carousel-image" />
          <h3 className="text-base font-semibold text-start text-gray-50">lorem</h3>
                    <p className="= text-xs text-start text-gray-400 leading-tight line-clamp-2">
                      Lorem ipsum dolor sit.4
                    </p>
      </div>
    </Carousel>
    <Button link="/" label="View More" />
   </div>
  );
}

export default MultiCarousel2;
