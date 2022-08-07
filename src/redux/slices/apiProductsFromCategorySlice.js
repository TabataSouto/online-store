import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  status: null,
};

const URL_API = 'https://api.mercadolibre.com/sites/MLB/search?';

export const fetchProductsFromCategory = createAsyncThunk(
  'products/fetchProductsFromCategory',
  async (category, query) => {
    const response = await fetch(`${URL_API}category=${category}&q=${query}`);
    const data = await response.json();
    return data;
  },
);

const apiProductsFromCategorySlice = createSlice({
  name: 'productsFromCategory',
  initialState,
  extraReducers: {
    [fetchProductsFromCategory.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchProductsFromCategory.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = 'sucess';
    },
    [fetchProductsFromCategory.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default apiProductsFromCategorySlice.reducer;
