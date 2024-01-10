"use client"
// conatiners/BookDemoSection.js
import React from 'react';
import styled from 'styled-components';
import { BookDemoData } from '../../public/content/content';
import { color, font } from '../../public/styleContetnt/styleContent';


const Cover = styled.div`
    background-color: ${color.lightPrimary};
    padding: 6%;
    `;

const Wapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    border-radius: 40px;
    border: 0.5px solid var(--2, #F3F3F3);
    background: ${color.lighterText};
    padding: 6%
    `;

const HeadingTitle = styled.div`
  font-family: ${font.Manrope};
  font-size: 46px;
  font-style: normal;
  font-weight: 600;
  line-height: 64px;
  background: ${color.linerGradiant01};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${color.transparent};
  padding-bottom: 6%;
`

const QouteHeading = styled.div`
    font-family: ${font.Manrope};
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background: ${color.linerGradiant01};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color:  ${color.transparent};
    width: 86%;
    padding-bottom: 6%;
`

const StyledText = styled.div`
  color:  ${color.text};
  font-family:  ${font.ProximaNova};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  opacity: 0.9;
`
const StyledButton = styled.div`
  border-radius: 8px;
  border: 1px solid var(--2, #F3F3F3);
  background: ${color.primary};
  width: fit-content;
  padding: 9px 18px;
  margin: 3% 0;

  & > span {
    color: ${color.lightGrey};
    font-family: ${font.ProximaNova};
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 30px;
  }
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;



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
                <StyledWrapper>
                    <StyledText>
                        {BookDemoData.description}
                    </StyledText>
                    <StyledButton>
                        <span>
                            {BookDemoData.buttonText}
                        </span>
                    </StyledButton>
                </StyledWrapper>
            </Wapper>
        </Cover>
    );
};


export default BookDemoSection;