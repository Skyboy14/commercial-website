// components/FullScreenMenu.js
import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
`;

const FullScreenMenu = ({ onClose }) => {
    return (
        <Overlay>
            <MenuContent>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                {/* Your menu content goes here */}
                <p>Menu Item 1</p>
                <p>Menu Item 2</p>
                {/* Add more menu items as needed */}
            </MenuContent>
        </Overlay>
    );
};

export default FullScreenMenu;
