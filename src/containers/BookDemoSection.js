"use client"
// conatiners/BookDemoSection.js
import React from 'react';
import styled from 'styled-components';


const Cover = styled.div`
    background-color: #E9F0FF;
    padding: 6%;
    `;

const Wapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    border-radius: 40px;
    border: 0.5px solid var(--2, #F3F3F3);
    background: rgba(59, 108, 188, 0.10);
    padding: 6%
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

const BookDemoData = {
    title: 'Book a Demo',
    quote: '“Discover the Future of Digital Formation and  Quality"',
    description: 'Join us for an exclusive demo of our cutting-edge Digital Fomation Management Software. This innovative solution is transforming the landscape of digital formation, offering unprecedented digital transparency and efficiency in the supply chain.',
    buttonText: 'Book Demo'
}

const BookDemoSection = () => {
    return (
        <Cover>
            <Wapper>
                <div style={{ paddingLeft: '8%' }}>
                    <HeadingTitle>
                        {BookDemoData.title}
                    </HeadingTitle>
                    <QouteHeading>
                        {BookDemoData.quote}
                    </QouteHeading>
                </div>
                <div>
                    <StyledText>
                        {BookDemoData.description}
                    </StyledText>
                    <StyledButton>
                        <span>
                            {BookDemoData.buttonText}
                        </span>
                    </StyledButton>
                </div>
            </Wapper>
        </Cover>
    );
};


export default BookDemoSection;