import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  status: null,
};

const URL_API = 'https://api.mercadolibre.com/sites/MLB/search?category=';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ categoryId, queryProducts }) => {
    const response = await fetch(`${URL_API}${categoryId}&q=${queryProducts}`);
    const data = await response.json();
    return data.results;
  },
);

const productsSlice = createSlice({
  name: 'productsFromQuery',
  initialState,
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = 'sucess';
    },
    [fetchProducts.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default productsSlice.reducer;
