import React from 'react';

import { IIcons } from '@/interfaces/icons';

const SearchIcon: React.FC<IIcons> = ({ width = 14, height = 20, color = '#0460A9' }) => (
  <svg width={width} height={height} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6.4368" cy="7.43671" r="5.25" transform="rotate(-45 6.4368 7.43671)" stroke={color} strokeWidth="1.5" />
    <line x1="10.5024" y1="11.8561" x2="15.0986" y2="16.4523" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default SearchIcon;
