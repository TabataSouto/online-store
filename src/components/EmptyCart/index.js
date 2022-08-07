import React from 'react';
import iconEmptyCart from '../../images/icon-empty-cart.svg';

export default function EmptyCart() {
  return (
    <main>
      <img src={ iconEmptyCart } alt="ícone de uma caixa vazia" width="250" />
      <p
        data-testid="shopping-cart-empty-message"
      >
        Seu carrinho está vazio
      </p>
    </main>
  );
}
