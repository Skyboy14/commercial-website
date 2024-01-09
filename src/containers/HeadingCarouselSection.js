"use client"
// containers/HeadingCarousel.js
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles
import Image from 'next/image';
import styled from 'styled-components';
import { HeaderCarouselImage } from '../../public/content/content';
import { color, font } from '../../public/styleContetnt/styleContent';

const StyledCarousel = styled(Carousel)`
  position: relative;
  width: 100%;
  margin: auto;

  .carousel .slide {
    position: relative;
    overflow: hidden;
    text-align: center;
    transition: transform 1s ease;
  }

  .carousel .slide img {
    width: 100%;
    height: auto;
    object-fit: cover; /* Ensures the image covers the entire slide */
  }

  .carousel .slide .image-title {
    position: absolute;
    bottom: 93px; /* Adjust the distance from the bottom */
    left: 50%;
    transform: translateX(-50%);
    font-size: 42px;
    line-height: 84px;
    color: ${color.lightSecondary};
  }

  .carousel .slide .image-title .first-line{
    text-align: center;
    font-family: ${font.Manrope};
    font-style: normal;
    font-weight: 700;
  }

  .carousel .slide .image-title .second-line{
    background: ${color.linerGradiant02};
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${color.transparent};
    font-family: ${font.Manrope};
    font-style: normal;
    font-weight: 800;
  }

  .carousel .thumbs-wrapper {
    display: none; /* Hide thumbnails */
  }

  .carousel .control-arrow {
    display: none; /* Hide side arrows */
  }
`;

const HeadingCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === HeaderCarouselImage.length - 1 ? 0 : prevIndex + 1));
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
      {HeaderCarouselImage.map((image, index) => (
        <div key={index} className="slide">
          <Image src={image.label} alt={image.alt} width={800} height={400} />
          <div className="image-title">
            <span className="first-line">
              {image.title.line1}
            </span>
            {index === 1 && <br />}
            <span className="second-line">
              {image.title.line2}
            </span>
          </div>
        </div>
      ))}
    </StyledCarousel>
  );
};

export default HeadingCarouselSection;
