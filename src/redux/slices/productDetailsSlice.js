import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: {},
  status: null,
};

const URL_API = 'https://api.mercadolibre.com/items/';

export const fetchProductDetails = createAsyncThunk(
  'product/fetchProductDetails',
  async (productId) => {
    const response = await fetch(URL_API + productId);
    const data = response.json();
    return data;
  },
);

const productDetailsSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: {
    [fetchProductDetails.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchProductDetails.fulfilled]: (state, { payload }) => {
      state.product = payload;
      state.status = 'sucess';
    },
    [fetchProductDetails.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default productDetailsSlice.reducer;
