// components/Header.js
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import FullScreenMenu from '../components/FullScreenMenu';
import LangSelect from '../components/LangSelect';

const HeaderContainer = styled.header`
  position: fixed;
  width: -webkit-fill-available;
  top: 0;
  z-index: 1000;
  padding: 18px 20px;
  display: flex;
  height: 27px;
  background: rgba(0, 0, 0, 0.20);
  backdrop-filter: blur(20px);
`;

const LogoContainer = styled.div`
  flex: 1;
  margin-left: 69px;
`;

const HamburgerButton = styled.button`
  display: none;
  border-radius: 50%;
  height: 33px;
  width: 33px;
  margin: 0 30px;

  &::before,
  &::after,
  span {
    content: '';
    display: block;
    height: 3px;
    width: 18px;
    background-color: #007bff;
    margin: 3px 0;
    transition: 0.3s;
    border-radius: 3px;
  }

  &:hover {
    span {
      background-color: #0056b3; /* Darker blue color on hover */
    }
  }  
  
  display: block;
`;

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <Image src="/Logo.png" alt="logo" width={130} height={24} />
      </LogoContainer>
      <LangSelect />
      <HamburgerButton onClick={toggleMenu}>
        <span></span>
      </HamburgerButton>
      {isMenuOpen && <FullScreenMenu onClose={closeMenu} />}
    </HeaderContainer>
  );
};

export default Header;
