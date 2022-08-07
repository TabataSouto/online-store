import { configureStore } from '@reduxjs/toolkit';
import apiCategories from '../slices/apiCategoriesSlice';
import apiProductsFromCategory from '../slices/apiProductsFromCategorySlice';

const store = configureStore({
  reducer: {
    apiCategories,
    apiProductsFromCategory,
  },
});

export default store;
