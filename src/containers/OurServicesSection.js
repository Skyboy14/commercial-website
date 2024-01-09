"use client"
// conatiners/OurServicesSection.js
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { OurServicesSectionData } from '../../public/content/content';
import { color, font } from '../../public/styleContetnt/styleContent';

const Title = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    width: fit-content;
    padding-top: 6%;
    padding-bottom: 3%;

  & > text {
    color: ${color.primary};
    text-align: center;
    font-family: ${font.ProximaNova};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    border : 1px solid ${color.primary};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: 180px;
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
  font-family: ${font.Manrope};
  font-size: 46px;
  font-style: normal;
  font-weight: 600;
  line-height: 64px;
  background: ${color.linerGradiant03};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${color.transparent};
  width: 40% !important;
  margin: auto;
`

const Wrapper = styled.section`
  background-color: ${color.lightPrimary};
  padding-bottom: 6%;
`

const StyledButton = styled.div`
  border-radius: 8px;
  border: 1px solid var(--2, #F3F3F3);
  background: ${color.primary};
  width: fit-content;
  padding: 9px 18px;
  margin: auto;

  & > span {
    color: ${color.lightGrey};
    font-family: ${font.ProximaNova};
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 30px;
  }
`;


const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 3% 9%;
  `;

const ServiceItem = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
`;

const TitleOverlay = styled.span`
  position: absolute;
  bottom: 33px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-family: ${font.Manrope};
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: ${color.linerGradiant04};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${color.transparent};
  width: 87%;
`;

const OurServicesSection = () => {
  return (
    <Wrapper >
      <Title>
        <text>
          <Image
            src={OurServicesSectionData.icon.address}
            alt={OurServicesSectionData.icon.alt}
            width={20}
            height={20}
          />
          {OurServicesSectionData.title}
        </text>
      </Title>
      <HeadingTitle>
        {OurServicesSectionData.title2}
      </HeadingTitle>
      <StyledDiv>
        {OurServicesSectionData['image'].map((services, index) => (
          <ServiceItem key={index}>
            <Image
              src={services.label}
              height={240}
              width={240}
              alt={services.title}
            />
            <TitleOverlay>
              {services.title}
            </TitleOverlay>
          </ServiceItem>
        ))}
      </StyledDiv>
      <StyledButton>
        <span>
          {OurServicesSectionData.buttonText}
        </span>
      </StyledButton>
    </Wrapper>
  );
};

export default OurServicesSection;