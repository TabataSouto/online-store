import { configureStore } from '@reduxjs/toolkit';
import apiCategories from '../slices/categoriesSlice';
import apiProducts from '../slices/productsSlice';
import apiProductDetails from '../slices/productDetailsSlice';

const store = configureStore({
  reducer: {
    apiCategories,
    apiProducts,
    apiProductDetails,
  },
});

export default store;
