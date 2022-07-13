import React from 'react';

import { IIcons } from '@/interfaces/icons';

const FaqIcon: React.FC<IIcons> = ({ width = 28, height = 28, color = '#0460A9' }) => (
  <svg width={width} height={height} viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.1175 4.78428V3.58821C25.1175 2.63656 24.7394 1.72388 24.0665 1.05096C23.3936 0.378042 22.4809 0 21.5293 0L10.7646 0V2.39214H21.5293C21.8465 2.39214 22.1507 2.51815 22.375 2.74246C22.5993 2.96677 22.7253 3.27099 22.7253 3.58821V4.78428H15.5489C14.5973 4.78428 13.6846 5.16232 13.0117 5.83524C12.3387 6.50816 11.9607 7.42084 11.9607 8.37249V16.745H10.9082L7.17642 20.0581V16.745H3.58821C3.27099 16.745 2.96677 16.619 2.74246 16.3947C2.51815 16.1704 2.39214 15.8661 2.39214 15.5489V14.3528H0V15.5489C0 16.5006 0.378042 17.4132 1.05096 18.0862C1.72388 18.7591 2.63656 19.1371 3.58821 19.1371H4.78428V25.3926L11.8172 19.1371H11.9607C11.9607 20.0888 12.3387 21.0014 13.0117 21.6744C13.6846 22.3473 14.5973 22.7253 15.5489 22.7253H19.8428L25.1175 28V22.7253C26.0691 22.7253 26.9818 22.3473 27.6547 21.6744C28.3276 21.0014 28.7057 20.0888 28.7057 19.1371V9.56856C28.7057 7.66681 27.2704 4.78428 25.1175 4.78428ZM26.3135 19.1371C26.3135 19.4543 26.1875 19.7586 25.9632 19.9829C25.7389 20.2072 25.4347 20.3332 25.1175 20.3332H22.7253V22.2349L20.8236 20.3332H15.5489C15.2317 20.3332 14.9275 20.2072 14.7032 19.9829C14.4789 19.7586 14.3528 19.4543 14.3528 19.1371V16.745V8.37249C14.3528 8.05527 14.4789 7.75105 14.7032 7.52674C14.9275 7.30244 15.2317 7.17642 15.5489 7.17642H25.1175C25.5002 7.17642 26.3135 8.58778 26.3135 9.56856V19.1371Z" fill={color} />
    <path d="M19.2328 9.1021L15.6446 17.4746L17.8454 18.4075L18.563 16.745H22.1512L22.8689 18.4075L25.0696 17.4746L21.4814 9.1021H19.2328ZM19.5797 14.3528L20.3332 12.6066L21.0867 14.3528H19.5797Z" fill="#0460A9" />
    <path d="M9.56856 9.56856V3.58821C9.56856 2.63656 9.19052 1.72388 8.5176 1.05096C7.84468 0.378042 6.932 0 5.98035 0L3.58821 0C2.63656 0 1.72388 0.378042 1.05096 1.05096C0.378043 1.72388 0 2.63656 0 3.58821L0 9.56856C0 10.5202 0.378043 11.4329 1.05096 12.1058C1.72388 12.7787 2.63656 13.1568 3.58821 13.1568H5.48996L7.52328 15.2021L9.2217 13.5036L8.13328 12.4272C8.57731 12.0942 8.93803 11.6627 9.18708 11.1666C9.43612 10.6706 9.56671 10.1236 9.56856 9.56856V9.56856ZM2.39214 9.56856V3.58821C2.39214 3.27099 2.51815 2.96677 2.74246 2.74246C2.96677 2.51815 3.27099 2.39214 3.58821 2.39214H5.98035C6.29757 2.39214 6.60179 2.51815 6.8261 2.74246C7.05041 2.96677 7.17642 3.27099 7.17642 3.58821V9.56856C7.17642 9.88578 7.05041 10.19 6.8261 10.4143C6.60179 10.6386 6.29757 10.7646 5.98035 10.7646H3.58821C3.27099 10.7646 2.96677 10.6386 2.74246 10.4143C2.51815 10.19 2.39214 9.88578 2.39214 9.56856V9.56856Z" fill={color} />
  </svg>

);

export default FaqIcon;
