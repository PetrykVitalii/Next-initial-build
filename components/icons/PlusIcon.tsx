import React from 'react';

import { IIcons } from '@/interfaces/icons';

const PlusIcon: React.FC<IIcons> = ({ width = 18, height = 18, color = '#12395D' }) => (
  <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9.16748" cy="9.16748" r="7.67944" fill="white" stroke="white" strokeWidth="1.02393" />
    <path className="icon-color" d="M16.335 9.16748C16.335 5.21233 13.1226 2 9.16748 2C5.21233 2 2 5.21234 2 9.16748C2 13.1226 5.21233 16.335 9.16748 16.335C13.1226 16.335 16.335 13.1226 16.335 9.16748ZM3.30318 9.16748C3.30318 5.9356 5.9356 3.30318 9.16748 3.30318C12.3994 3.30318 15.0318 5.9356 15.0318 9.16748C15.0318 12.3994 12.3994 15.0318 9.16748 15.0318C5.9356 15.0318 3.30318 12.3994 3.30318 9.16748Z" fill={color} />
    <line x1="9.16748" y1="6.0957" x2="9.16748" y2="12.2393" className="icon-color" stroke={color} strokeWidth="1.02393" strokeLinecap="round" />
    <line x1="12.2393" y1="9.16748" x2="6.0957" y2="9.16748" className="icon-color" stroke={color} strokeWidth="1.02393" strokeLinecap="round" />
  </svg>

);

export default PlusIcon;
