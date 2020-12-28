import React from 'react';
import styled from 'styled-components/macro';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import GlobalStyles from 'globalStyles'; // importing our global styles

import { calculator } from './reducers/calculator';

import { Header } from './components/Header';
import { Display } from './components/Display';
import { Buttons } from './components/Buttons';

const reducer = combineReducers({
  calculator: calculator.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles /> {/* Global styling */}
      <Wrapper>
        <InnerWrapper>
          <Header />
          <Display />
          <Buttons />
        </InnerWrapper>
      </Wrapper>
    </Provider>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const InnerWrapper = styled.div`
  margin: 30px;
  height: 100%;
`;
