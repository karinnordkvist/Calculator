import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';

export const Display = () => {
  const inputData = useSelector((store) => store.calculator.input);
  const sum = useSelector((store) => store.calculator.sum);

  return (
    <DisplayWrapper>
      <DisplayBox>
        {inputData}
        {sum}
      </DisplayBox>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  margin-top: 50px;
`;

const DisplayBox = styled.div`
  border: 2px solid #000;
  height: 10vh;
  margin: auto;
  font-size: 30px;
  padding: 5px 10px;
`;
