import React from 'react';
import styled from 'styled-components/macro';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderImage src="./images/calculator-icon.png" />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div``;

const HeaderImage = styled.img`
  width: 50px;
`;
