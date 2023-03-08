import { configureStore } from '@reduxjs/toolkit';
import apiCategories from '../slices/categoriesSlice';
import apiProducts from '../slices/productsSlice';
import apiProductDetails from '../slices/productDetailsSlice';
import shoppingCart from '../slices/shoopingCartSlice';
import evaluationProduct from '../slices/evaluationSlice';

const store = configureStore({
  reducer: {
    apiCategories,
    apiProducts,
    apiProductDetails,
    shoppingCart,
    evaluationProduct,
  },
});

export default store;
