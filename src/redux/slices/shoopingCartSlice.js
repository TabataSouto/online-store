import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addShoppingCart: (state, { payload }) => {
      state.products.push(payload);
    },
    updateShoppingCart: (state, { payload }) => {
      const product = state.products.find((p) => p.id === payload.id);
      product.qtde += 1;
      product.price = product.qtde * payload.price;
    },
    incrementProduct: (state, { payload }) => {
      const product = state.products.find((p) => p.id === payload);
      product.qtde += 1;
      product.price += product.singlePrice;
    },
    decrementProduct: (state, { payload }) => {
      const product = state.products.find((p) => p.id === payload);
      console.log(product.qtde);
      if (product.qtde === 1) {
        product.qtde = 1;
        product.price = product.singlePrice;
      } else {
        product.qtde -= 1;
        product.price -= product.singlePrice;
      }
    },
    removeProduct: (state, { payload }) => {
      state.products = payload;
    },
  },
});

export const {
  addShoppingCart, updateShoppingCart, incrementProduct, decrementProduct, removeProduct,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
