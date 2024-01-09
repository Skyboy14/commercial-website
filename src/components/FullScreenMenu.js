// components/FullScreenMenu.js
import React from 'react';
import styled from 'styled-components';
import { MenuData } from '../../public/content/content';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background: rgba(255, 255, 255, 0.95); /* Semi-transparent white background */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999; /* Ensure it appears above other content */
`;

const MenuContent = styled.div`
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  height: 36px;
  width: 36px;
  font-size: 33px;
  background-color: #3B6CBC;
  color: #FFFFFF;
  border-radius: 50%;
`;

const StyledHeadingDiv = styled.div`
  color: #FFF;
  font-family: Manrope;
  font-size: 51px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: row;
  padding-top: 3%;
  padding-left: 10%;
`

const StyledContentDiv = styled.div`
  color: #FFF;
  font-family: Proxima Nova;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.8;
  padding: 3px 0;
`

const StyledColoredHeading = styled.li`
  font-family: Manrope;
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(91deg, #3B6CBC 3.66%, rgba(82, 116, 173, 0.80) 36.53%, rgba(67, 107, 172, 0.87) 55.86%, rgba(65, 119, 206, 0.80) 73.98%, #3B6CBC 98.15%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  & :: marker{
    color: red;
  }
`

const StyledHeading = styled.li`
  color: #252525;
  font-family: Manrope;
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.6;
  list-style: none;
`;

const StyledBackground = styled.div`
  background: #3B6CBC;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

const CoverDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100vw;
  height: 100vh;
`

const WrapperDiv = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3%;
  justify-content: flex-start;
  padding-top: 3%;
  padding-left: 10%;
`;

const WrapperDivCover = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  align-items: flex-start;
  padding-left: 24%;
`;

const StyledHr = styled.hr`
  opacity: 0.4;
  width: 80%;
  background: #FFF;
`;




const FullScreenMenu = ({ onClose }) => {
  return (
    <Overlay>
      <MenuContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <CoverDiv>
          <StyledBackground>
            {MenuData['category'].map((categories, index) => {
              return (
                <div key={index}>
                  <StyledHeadingDiv>{categories}</StyledHeadingDiv>
                  <WrapperDiv>
                    {MenuData[categories].map((service, index) => (
                      <StyledContentDiv key={index}>{service}</StyledContentDiv>
                    ))}
                  </WrapperDiv>
                  {index < 2 && <StyledHr />}
                </div>
              )
            })}
          </StyledBackground>
          <WrapperDivCover>
            {MenuData['Links'].map((Link, index) => (
              index === 0 ? (
                <StyledColoredHeading key={index}>
                  {Link}
                </StyledColoredHeading>
              ) : (
                <StyledHeading key={index}>
                  {Link}
                </StyledHeading>
              )
            ))}
          </WrapperDivCover>
        </CoverDiv>
      </MenuContent>
    </Overlay>
  );
};

export default FullScreenMenu;
