import React from 'react';
import iconGoBack from '../../images/icon-go-back.svg';
import iconCart from '../../images/icon-cart.svg';
import EmptyCart from '../../components/EmptyCart';

export default function ShoppingCart() {
  return (
    <section>
      <div>
        <img src={ iconGoBack } alt="" width="25" />
        <img src={ iconCart } alt="" width="50" />
        <p>Carrinho de compras</p>
      </div>
      <EmptyCart />
    </section>
  );
}
