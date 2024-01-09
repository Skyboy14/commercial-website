"use client"
// conatiners/IndustrialSection.js
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import IndustrialCarousel from '../components/IndustrialCarousel';
import { IndustrialSectionData } from '../../public/content/content';

const Title = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    width: fit-content;
    padding-top: 9%;
    padding-bottom: 3%;

  & > text {
    color: #3B6CBC;
    text-align: center;
    /* font-family: 'Proxima Nova'; */
    font-size: 20px;
    /* font-style: normal; */
    font-weight: 400;
    border : 1px solid #3B6CBC;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: 120px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: 9px;
    padding: 5px 13px;
  }
`;

const HeadingTitle = styled.div`
  text-align: center;
  /* font-family: Manrope; */
  font-size: 46px;
  /* font-style: normal; */
  font-weight: 600;
  line-height: 64px;
  background: linear-gradient(91deg, #464646 2.73%, rgba(101, 101, 101, 0.80) 52.78%, #565656 93.64%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 40% !important;
  margin: auto;
`

const Wrapper = styled.section`
  background-color: #E9F0FF;
  padding-bottom: 3%;
`

const IndustrialSection = () => {
  return (
    <Wrapper >
      <Title>
        <text>
          <Image
            src={IndustrialSectionData.image.icon.address}
            alt={IndustrialSectionData.image.icon.alt}
            width={20}
            height={20}
          />
          {IndustrialSectionData.title}
        </text>
      </Title>
      <HeadingTitle>
        {IndustrialSectionData.description}
      </HeadingTitle>
      <IndustrialCarousel />
    </Wrapper>
  );
};

export default IndustrialSection;