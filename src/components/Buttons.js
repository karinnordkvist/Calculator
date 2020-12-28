import React from 'react';
import { useDispatch } from 'react-redux';
import { calculator } from '../reducers/calculator';
import styled from 'styled-components/macro';

export const Buttons = () => {
  const dispatch = useDispatch();
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ['+', '–', '*', '/'];
  return (
    <ButtonsWrapper>
      <Button onClick={() => dispatch(calculator.actions.clearData())}>
        AC
      </Button>
      <Button onClick={() => dispatch(calculator.actions.clearEntry())}>
        CE
      </Button>

      {numbers.map((number) => {
        return (
          <NumberButton
            key={number}
            onClick={() => dispatch(calculator.actions.setInputData(number))}
          >
            {number}
          </NumberButton>
        );
      })}

      {operators.map((operator) => {
        return (
          <Button
            key={operator}
            onClick={() => dispatch(calculator.actions.setInputData(operator))}
          >
            {operator}
          </Button>
        );
      })}

      <Button onClick={() => dispatch(calculator.actions.calculateData())}>
        =
      </Button>
    </ButtonsWrapper>
  );
};

const ButtonsWrapper = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5px;
  justify-content: end;
`;

const Button = styled.button`
  font-family: 'JetBrains Mono';
  font-size: 30px;
  height: 70px;
  padding: 10px;
  border: 2px solid #000;
  background: none;

  &:nth-child(3),
  &:nth-child(6),
  &:nth-child(9) {
    grid-column-start: 1;
  }

  &:nth-child(12) {
    grid-column-start: 2;
  }

  &:nth-child(13) {
    grid-column-start: 4;
    grid-row-start: 1;
  }
  &:nth-child(14) {
    grid-column-start: 4;
    grid-row-start: 2;
  }
  &:nth-child(15) {
    grid-column-start: 4;
    grid-row-start: 3;
  }
  &:nth-child(16) {
    grid-column-start: 4;
    grid-row-start: 4;
  }
  &:last-child {
    grid-column-start: 4;
    grid-row-start: 5;
  }
`;

const NumberButton = styled(Button)``;

// &:nth-child(15) {
//   grid-column-start: 4;
//   grid-row-start: 4;
// }
// &:nth-child(16) {
//   grid-column-start: 4;
//   grid-row-start: 3;
// }
