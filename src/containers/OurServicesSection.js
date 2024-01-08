"use client"
// conatiners/OurServicesSection.js
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    width: fit-content;
    padding-top: 6%;
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
  padding-bottom: 6%;
`

const StyledButton = styled.div`
  border-radius: 8px;
  border: 1px solid var(--2, #F3F3F3);
  background: #3B6CBC;
  width: fit-content;
  padding: 9px 18px;
  margin: auto;

  & > span {
    color: #F1F1F1;
    /* font-family: Proxima Nova; */
    font-size: 18px;
    /* font-style: normal; */
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
  /* font-family: Manrope; */
  font-size: 23px;
  /* font-style: normal; */
  font-weight: 500;
  /* line-height: normal; */
  background: linear-gradient(90deg, #3B6CBC -16.73%, rgba(189, 214, 255, 0.80) 22.81%, rgba(168, 201, 255, 0.87) 46.05%, rgba(163, 198, 255, 0.80) 67.86%, #BAD4FF 96.93%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 87%;
`;

const ourServicesData = {
  image: [
    {
      label: '/services/tech.png',
      title: 'Technology Consulting'
    },
    {
      label: '/services/supply.png',
      title: 'Supply Chain Management'
    },
    {
      label: '/services/robotic.png',
      title: 'Robotic Process Automation'
    },
    {
      label: '/services/enterprise.png',
      title: 'Enterprise Solution'
    }
  ],
  title: 'What we serve',
  title2: 'Our Services',
  icon: {
    address: '/icon-logo.png',
    alt: 'icon logo'
  },
  buttonText: 'View All Services',
}


const OurServicesSection = () => {
  return (
    <Wrapper >
      <Title>
        <text>
          <Image
            src={ourServicesData.icon.address}
            alt={ourServicesData.icon.alt}
            width={20}
            height={20}
          />
          {ourServicesData.title}
        </text>
      </Title>
      <HeadingTitle>
        {ourServicesData.title2}
      </HeadingTitle>
      <StyledDiv>
        {ourServicesData['image'].map((services, index) => (
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
          {ourServicesData.buttonText}
        </span>
      </StyledButton>
    </Wrapper>
  );
};

export default OurServicesSection;