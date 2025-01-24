import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Carousel.module.css';

const images = [
  '../Pushti.life/public/Pushti_New.jpg',
  
  // ... more images
];

export const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000); // Change interval time as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <button onClick={handlePrev} className={styles.arrowButton}>
        &lt;
      </button>
      <Image
        src={'/../public/Pushti.png'}
        alt={`Image ${currentImageIndex + 1}`}
        objectFit="cover"
        width={300} 
        height={200} 
      />
      <button onClick={handleNext} className={styles.arrowButton}>
        &gt;
      </button>
    </div>
  );
};

export const useClient = true;