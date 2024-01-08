"use client"
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const servicesData = {
  image: {
    logo: {
      address: '/Logo.png',
      alt: 'website logo'
    },
    Message: {
      address: '/socialMediaIcon/Message.png',
      alt: 'Message icon'
    },
    linkedIn: {
      address: '/socialMediaIcon/linkedIn.png',
      alt: 'linkedIn icon'
    },
    whatsApp: {
      address: '/socialMediaIcon/whatsApp.png',
      alt: 'whatsApp icon'
    },
    whatsApp: {
      address: '/socialMediaIcon/whatsApp.png',
      alt: 'whatsApp icon'
    },
  },
  contant: {
    ContactUs: 'Contact Us:',
    email: 'info@cygnustics.com',
    followUs: 'follow us:',
  },
  category: ['Links', 'Industries', 'Services', 'Product & Solution'],
  Links: ['Home', 'Who we are', 'What we do', 'Connect us', 'Worldwide'],
  Industries: ['Banking', 'Retail', 'Life Science', 'Health care', 'Food Manufacturing', 'High Tech'],
  Services: ['Robotic Process Automation', 'Robotic Test Automation', 'Technology Consulting', 'Health care', 'Supply Chain Management', 'Enterprise Solution'],
  'Product & Solution': ['Supplier Management Solutions', 'Quality Management Solutions', 'Compliance Management Solutions', 'Learning Management Solutions', 'GFSI Software Solutions', 'Lab Management Solutions', 'Food Safety Program Solutions', 'Audit & Gap Assessment Solutions']
};

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 7fr repeat(4,5fr);
  padding: 6% 7% 2%;
`;

const StyledDiv = styled.div`

`;

const StyledImage = styled(Image)`
  padding: 3px 9px 0px 0px;
`;

const StyledHead = styled.div`
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(92deg, #3B6CBC 1.72%, rgba(99, 147, 225, 0.88) 35.66%, rgba(102, 146, 220, 0.82) 55.61%, rgba(92, 136, 207, 0.91) 74.32%, #3B6CBC 99.27%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  & > div {
    font-size: 18px;
    padding-top: 21px;
  }
`;

const StyledLink = styled.li`
  color: #252525;
  font-family: Manrope; 
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  list-style-type: none;
  padding: 6px 0px;
      display: flex;
    align-items: center;
`;



const Footer = () => {
  return (
    <StyledFooter>
      <StyledDiv>
        <Image
          src={servicesData['image']['logo']['address']}
          width={147}
          height={33}
          alt={servicesData['image']['logo']['alt']} />
        <StyledHead>
          <div>
            {servicesData.contant.ContactUs}
          </div>
        </StyledHead>
        <StyledLink>
          <StyledImage
            src={servicesData['image']['Message']['address']}
            width={20}
            height={20}
            alt={servicesData['image']['Message']['alt']} />
          {servicesData.contant.email}
        </StyledLink>
        <StyledHead>
          <div>
            {servicesData.contant.followUs}
          </div>
          <StyledImage
            src={servicesData['image']['linkedIn']['address']}
            width={30}
            height={30}
            alt={servicesData['image']['linkedIn']['alt']} />
          <StyledImage
            src={servicesData['image']['whatsApp']['address']}
            width={30}
            height={30}
            alt={servicesData['image']['whatsApp']['alt']} />
        </StyledHead>
      </StyledDiv>
      {servicesData['category'].map((categories, index) => {
        return (
          <div key={index}>
            <StyledHead>{categories}</StyledHead>
            <ul style={{ padding: 0 }}>
              {servicesData[categories].map((service, index) => (
                <StyledLink key={index}>{service}</StyledLink>
              ))}
            </ul>
          </div>
        )
      })}
    </StyledFooter>
  );
};

export default Footer;
