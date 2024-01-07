"use client"
// components/HeadingCarousel.js
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles
import Image from 'next/image';
import styled from 'styled-components';

const images = [
  '/Images/earthImage.png',
  '/Images/techImage.png'
]

const StyledCarousel = styled(Carousel)`
  width: 100%;
  margin: auto;

  .carousel .slide {
    overflow: hidden;
    text-align: center;
    transition: transform 1s ease;
  }

  .carousel .slide img {
    width: 100%;
    height: auto;
    object-fit: cover; /* Ensures the image covers the entire slide */
  }

  .carousel .thumbs-wrapper {
    display: none; /* Hide thumbnails */
  }

  .carousel .control-arrow {
    display: none; /* Hide side arrows */
  }
`;

const HeadingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 4000); // Change slide every 4 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <StyledCarousel
      selectedItem={currentIndex}
      onSelect={handleSelect}
      showStatus={false} // Hide slide count indicator
      showArrows={false} // Hide side arrows
      showThumbs={false} // Hide thumbnails
      dynamicHeight={true}
    >
      {images.map((image, index) => (
        <div key={index}>
          <Image src={image} alt={`Slide ${index + 1}`} width={800} height={400} />
        </div>
      ))}
    </StyledCarousel>
  );
};

export default HeadingCarousel;