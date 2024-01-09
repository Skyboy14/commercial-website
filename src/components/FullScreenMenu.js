// components/FullScreenMenu.js
import React from 'react';
import styled from 'styled-components';
import { MenuData } from '../../public/content/content';
import { color, font } from '../../public/styleContetnt/styleContent';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background: ${color.transparentBackground};
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
  background-color: ${color.coloredBackground};
  color: ${color.secondary};
  border-radius: 50%;
`;

const StyledHeadingDiv = styled.div`
  color: ${color.lightSecondary};
  font-family: ${font.Manrope};
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
  color: ${color.lightSecondary};
  font-family: ${font.ProximaNova};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.8;
  padding: 3px 0;
`

const StyledColoredHeading = styled.li`
  font-family: ${font.Manrope};
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: ${color.linerGradiant01};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${color.transparent};
`

const StyledHeading = styled.li`
  color: ${color.text};
  font-family: ${font.Manrope};
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.6;
  list-style: none;
`;

const StyledBackground = styled.div`
  background: ${color.primary};
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
  background: ${color.lightSecondary};
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
