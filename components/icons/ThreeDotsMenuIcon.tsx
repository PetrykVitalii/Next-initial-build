import React from 'react';

import { IIcons } from '@/interfaces/icons';

const ThreeDotsMenuIcon: React.FC<IIcons> = ({ width = 4, height = 20, color = '#0460A9' }) => (
  <svg width={width} height={height} viewBox="0 0 4 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="2" cy="2" r="2" fill={color} />
    <circle cx="2" cy="10" r="2" fill={color} />
    <circle cx="2" cy="18" r="2" fill={color} />
  </svg>
);

export default ThreeDotsMenuIcon;
