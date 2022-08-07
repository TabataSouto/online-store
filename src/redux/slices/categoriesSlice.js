import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  status: null,
};

const URL_API = 'https://api.mercadolibre.com/sites/MLB/categories';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await fetch(URL_API);
    const data = await response.json();
    return data;
  },
);

const categoriesSlice = createSlice({
  name: 'apis',
  initialState,
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchCategories.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = 'sucess';
    },
    [fetchCategories.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default categoriesSlice.reducer;
