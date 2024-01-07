// components/CustomCarousel.js
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const images = [
  {
    label: '/industrialLogo/banking.png',
    title: 'Banking'
  },
  {
    label: '/industrialLogo/retail.png',
    title: 'Retail'
  },
  {
    label: '/industrialLogo/lifeScience.png',
    title: 'Life Science'
  },
  {
    label: '/industrialLogo/health.png',
    title: 'Health care'
  },
  {
    label: '/industrialLogo/food.png',
    title: 'Food Manufacturing'
  },
  {
    label: '/industrialLogo/tech.png',
    title: 'HighTech'
  }
];

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
    /* font-family: Manrope; */
    font-size: 20px;
    /* font-style: normal; */
    font-weight: 500;
    line-height: normal;
    background: linear-gradient(91deg, #3B6CBC 3.66%, rgba(82, 116, 173, 0.80) 36.53%, rgba(67, 107, 172, 0.87) 55.86%, rgba(65, 119, 206, 0.80) 73.98%, #3B6CBC 98.15%);
    /* background-clip: text; */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
      <KeyboardBackspaceIcon sx={{ color: '#3B6CBC' }} onClick={prevSlide} />
      <CarouselTrack>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <Image src={item.label} alt={item.title} width={96} height={96} />
            <StyledLabel>{item.title}</StyledLabel>
          </CarouselItem>
        ))}
      </CarouselTrack>
      <EastIcon sx={{ color: '#3B6CBC' }} onClick={nextSlide} />
    </CarouselContainer>
  );
};

const IndustrialCarousel = () => {
  const [items, setItems] = useState(images);

  return (
    <div>
      <CustomCarousel items={items} setItems={setItems} />
    </div>
  );
};

export default IndustrialCarousel;
