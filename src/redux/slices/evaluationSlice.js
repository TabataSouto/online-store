import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  message: '',
  qtdeStar: 0,
};

const evaluationSlice = createSlice({
  name: 'evaluation',
  initialState,
  reducers: {
    addEmail: (state, { payload }) => {
      state.email = payload;
    },
    addMessage: (state, { payload }) => {
      state.message = payload;
    },
    addQtde: (state, { payload }) => {
      state.qtdeStar = payload;
    },
  },
});

export const { addEmail, addMessage, addQtde } = evaluationSlice.actions;

export default evaluationSlice.reducer;
