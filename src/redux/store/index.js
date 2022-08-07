import { configureStore } from '@reduxjs/toolkit';
import apiCategories from '../slices/categoriesSlice';
import apiProducts from '../slices/productsSlice';

const store = configureStore({
  reducer: {
    apiCategories,
    apiProducts,
  },
});

export default store;
