"use client"
// conatiners/WhoAreWeSection.js
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { WhoAreWeSectionData } from '../../public/content/content';

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
  padding: 9px 18px;
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

const ImageWrapper = styled.div`
  padding-left: 12%;
  padding-top: 9%;
`;

const StyledImage1 = styled(Image)`
  position: absolute;
  z-index: -1;
  `;

const StyledImage2 = styled(Image)`
  padding-top: 30px;
  padding-left: 36px;
`;

const WhoAreWeSection = () => {
  return (
    <Wapper>
      <ImageWrapper>
        <StyledImage1
          src={WhoAreWeSectionData.unionImage.address}
          height={390}
          width={390}
          alt={WhoAreWeSectionData.unionImage.alt}
        />
        <StyledImage2
          src={WhoAreWeSectionData.image.address}
          height={390}
          width={390}
          alt={WhoAreWeSectionData.image.alt}
        />
      </ImageWrapper>

      <div style={{ paddingRight: '8%', paddingBottom: '6%' }}>
        <Title>
          <text>
            <Image
              src={WhoAreWeSectionData.icon.address}
              alt={WhoAreWeSectionData.icon.alt}
              width={20}
              height={20}
            />
            {WhoAreWeSectionData.title}
          </text>
        </Title>
        <HeadingTitle>
          {WhoAreWeSectionData.title2}
        </HeadingTitle>
        <QouteHeading>
          {WhoAreWeSectionData.quote}
        </QouteHeading>
        <StyledText>
          {WhoAreWeSectionData.description}
        </StyledText>
        <StyledButton>
          <span>
            {WhoAreWeSectionData.buttonText}
          </span>
        </StyledButton>
      </div>
    </Wapper>
  );
};

export default WhoAreWeSection;
