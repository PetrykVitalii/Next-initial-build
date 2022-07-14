import React from 'react';

import { IIcons } from '@/interfaces/icons';

const MinusIcon: React.FC<IIcons> = ({ width = 18, height = 18, color = '#0460A9' }) => (
  <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9.16748" cy="8.8374" r="7.67944" fill="white" stroke="white" strokeWidth="1.02393" />
    <path d="M16.335 8.8374C16.335 4.88226 13.1226 1.66992 9.16748 1.66992C5.21233 1.66992 2 4.88226 2 8.8374C2 12.7925 5.21233 16.0049 9.16748 16.0049C13.1226 16.0049 16.335 12.7925 16.335 8.8374ZM3.30318 8.8374C3.30318 5.60552 5.9356 2.9731 9.16748 2.9731C12.3994 2.9731 15.0318 5.60552 15.0318 8.8374C15.0318 12.0693 12.3994 14.7017 9.16748 14.7017C5.9356 14.7017 3.30318 12.0693 3.30318 8.8374Z" className="icon-color" fill={color} />
    <line x1="9.16748" y1="8.8519" x2="9.16748" y2="8.82797" className="icon-color" stroke={color} strokeWidth="1.02393" strokeLinecap="round" />
    <line x1="12.2393" y1="8.8374" x2="6.0957" y2="8.8374" className="icon-color" stroke={color} strokeWidth="1.02393" strokeLinecap="round" />
  </svg>
);

export default MinusIcon;
