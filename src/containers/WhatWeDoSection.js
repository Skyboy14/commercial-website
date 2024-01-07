"use client"
// conatiners/WhatWeDoSection.js
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Wapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    `;

const Title = styled.div`
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
    width: 147px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: 9px;
    padding: 5px 13px;
  }
`;

const HeadingTitle = styled.div`
  /* font-family: Manrope; */
  font-size: 46px;
  /* font-style: normal; */
  font-weight: 600;
  line-height: 64px;
  background: linear-gradient(91deg, #464646 2.73%, rgba(101, 101, 101, 0.80) 52.78%, #565656 93.64%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-bottom: 6%;
`

const QouteHeading = styled.div`
// font-family: Manrope;
font-size: 30px;
// font-style: normal;
font-weight: 500;
line-height: normal;
background: linear-gradient(91deg, #3B6CBC 3.66%, rgba(82, 116, 173, 0.80) 36.53%, rgba(67, 107, 172, 0.87) 55.86%, rgba(65, 119, 206, 0.80) 73.98%, #3B6CBC 98.15%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
 width: 86%;
 padding-bottom: 6%;
`

const StyledText = styled.div`
  color: #252525;
  /* font-family: Proxima Nova; */
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  opacity: 0.9;
`
const StyledButton = styled.div`
  border-radius: 8px;
  border: 1px solid var(--2, #F3F3F3);
  background: #3B6CBC;
  width: fit-content;
  padding: 3px 6px;
  margin: 3% 0;

  & > span {
    color: #F1F1F1;
    /* font-family: Proxima Nova; */
    font-size: 18px;
    /* font-style: normal; */
    font-weight: 300;
    line-height: 30px;
  }
`;


const WhatWeDoSection = () => {
  return (
    <Wapper>
      <div style={{ paddingLeft: '8%' }}>
        <Title>
          <text>
            <Image
              src='/icon-logo.png'
              alt='icon logo'
              width={20}
              height={20}
            />
            Who we Do
          </text>
        </Title>

        <HeadingTitle>
          Our Work
        </HeadingTitle>

        <QouteHeading>
          “Drive Business Growth with Groundbreaking Solutions"
        </QouteHeading>
        <StyledText>
          In today's fast-paced and ever-evolving business landscape, staying ahead of the curve is not just an advantage, it's a necessity. "Drive Business Growth with Groundbreaking Solutions" encapsulates our commitment to providing innovative and transformative solutions that propel businesses forward.
        </StyledText>

        <StyledButton>
          <span>
            Know More
          </span>
        </StyledButton>
      </div>
      <Image
        src='/Images/OurWork.png'
        height={390}
        width={390}
      />
    </Wapper>
  );
};

export default WhatWeDoSection;
