// ImageSlider.jsx
import React, { useEffect, useState } from 'react';
import styles from './ImageSlider.module.css'; // Import CSS module
import axios from 'axios';
export const BASE_API_URL = import.meta.env.VITE_API_BASE_URL;
export const BASE_WEB_URL = import.meta.env.VITE_WEB_BASE_URL;





const ImageSlider = () => {
const [images, setimages] = useState([])


useEffect(() => {
  const fetchSLiderImage = async () => {
    try {
      const res = await axios.get(`${BASE_API_URL}/CompanySlideShowImg/GetPagedSlideShowItemList?pageIndex=1&pageSize=10`);
      const data = res.data?.data?.items;
      setimages(data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchSLiderImage();
}, []);



  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 300);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true);
    }, 300);
  };
console.log(images.length)
return (
  images.length >= 1 && (
    <div className={styles.sliderContainer}>
      <div
        className={`${styles.sliderImage} ${fade ? styles.fadeIn : styles.fadeOut}`}
      >
        <img
          src={BASE_WEB_URL + images[currentIndex]?.imageUrl}
          alt={`Slide ${currentIndex}`}
        />
      </div>
      <button className={styles.prevButton} onClick={handlePrev}>⟨</button>
      <button className={styles.nextButton} onClick={handleNext}>⟩</button>
    </div>
  )
);


};

export default ImageSlider;
