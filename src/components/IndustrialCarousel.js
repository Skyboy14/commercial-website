// components/CustomCarousel.js
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { IndustrilaCarouselImage } from '../../public/content/content';
import { color, font } from '../../public/styleContetnt/styleContent';



const CarouselContainer = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  padding: 3% 6%;
`;

const CarouselTrack = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`;

const CarouselItem = styled.div`
  flex: 0 0 auto;
  margin-right: 20px;
  max-width: 150px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
`;

const StyledLabel = styled.div`
    text-align: center;
    font-family: ${font.Manrope}; 
    font-size: 20px;
    font-style: normal; 
    font-weight: 500;
    line-height: normal;
    background: ${color.linerGradiant01};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${color.transparent};
    padding-top: 3px
`;

const CustomCarousel = ({ items, setItems }) => {

  const nextSlide = () => {
    // Rearrange the items array
    const rearrangedItems = [...items.slice(1), items[0]];
    setItems(rearrangedItems);
  };

  const prevSlide = () => {
    // Rearrange the items array
    const rearrangedItems = [items[items.length - 1], ...items.slice(0, items.length - 1)];
    setItems(rearrangedItems);
  };

  return (
    <CarouselContainer>
      <KeyboardBackspaceIcon sx={{ color: color.primary }} onClick={prevSlide} />
      <CarouselTrack>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <Image src={item.label} alt={item.title} width={96} height={96} />
            <StyledLabel>{item.title}</StyledLabel>
          </CarouselItem>
        ))}
      </CarouselTrack>
      <EastIcon sx={{ color: color.primary }} onClick={nextSlide} />
    </CarouselContainer>
  );
};

const IndustrialCarousel = () => {
  const [items, setItems] = useState(IndustrilaCarouselImage);

  return (
    <div>
      <CustomCarousel items={items} setItems={setItems} />
    </div>
  );
};

export default IndustrialCarousel;
