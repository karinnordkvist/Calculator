/* eslint no-eval: 0 */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  input: '',
  sum: '',
};

export const calculator = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setInputData: (state, action) => {
      state.sum = '';
      state.input = state.input.concat(action.payload);
    },
    calculateData: (state, action) => {
      if (state.input === '') {
        state.input = '';
        state.sum = '--- err';
      } else if (!/\d/.test(state.input)) {
        state.input = '';
        state.sum = '--- err';
      } else {
        state.sum = eval(state.input);
        state.input = '';
      }
    },
    clearData: (state, action) => {
      state.input = '';
      state.sum = '';
    },
    clearEntry: (state, action) => {
      state.input = state.input.substring(0, state.input.length - 1);
    },
  },
});
