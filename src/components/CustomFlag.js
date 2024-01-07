// components/CustomFlag.js
import React from 'react';
import Flag from 'react-world-flags';

const CustomFlag = ({ code, height }) => (
    <span>
        <Flag code={code} height={height} />
    </span>
);

export default CustomFlag;
