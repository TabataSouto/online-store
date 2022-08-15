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
    evaluationProduct: (state, { payload }) => {
      state.email = payload.email;
      state.message = payload;
    },
    addQtde: (state, { payload }) => {
      state.qtdeStar = payload;
    },
  },
});

export const { evaluationProduct, addQtde } = evaluationSlice.actions;

export default evaluationSlice.reducer;
