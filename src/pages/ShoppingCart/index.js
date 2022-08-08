import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import EmptyCart from '../../components/EmptyCart';
import ProductsCart from '../../components/ProductsCart';

export default function ShoppingCart() {
  const { shoppingCart } = useSelector((state) => ({
    shoppingCart: state.shoppingCart.products,
  }));

  return (
    <section>
      <Header />
      {
        !shoppingCart.length
          ? <EmptyCart />
          : <ProductsCart />
      }
    </section>
  );
}
