import React from 'react';
import styled from 'styled-components';

import useLanguage from '@/components/hooks/useLanguage';

const Header: React.FC = () => {
  const [{ commonLn }] = useLanguage();

  return (<HeaderStyled>{commonLn.home}</HeaderStyled>);
};

const HeaderStyled = styled.h1`
  color: red;
`;

export default Header;
