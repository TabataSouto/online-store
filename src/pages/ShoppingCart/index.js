import React from 'react';
import Header from '../../components/Header';
import EmptyCart from '../../components/EmptyCart';

export default function ShoppingCart() {
  return (
    <section>
      <div>
        <Header />
        <p>Carrinho de compras</p>
      </div>
      <EmptyCart />
    </section>
  );
}
