import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from '../pages/ProductDetails';
import Search from '../pages/Search';
import ShoppingCart from '../pages/ShoppingCart';

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={ <Search /> } />
      <Route path="/product/:id" element={ <ProductDetails /> } />
      <Route path="/shopping-cart" element={ <ShoppingCart /> } />
    </Routes>
  );
}
