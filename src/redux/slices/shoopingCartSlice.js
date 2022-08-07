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
      console.log('quantidade antes de atualizar', product.qtde);

      product.qtde += 1;
      console.log('quantidade depois de atualizar', product.qtde);

      console.log('preço antes de atualizar', product.price);
      product.price = product.qtde * payload.price;

      console.log('preço depois de atualizar', product.price);
    },
  },
});

export const { addShoppingCart, updateShoppingCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
