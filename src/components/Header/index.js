import React from 'react';
import { useNavigate } from 'react-router-dom';
import iconCart from '../../images/icon-cart.svg';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <button
        type="button"
        data-testid="shopping-cart-button"
        onClick={ () => navigate('/shopping-cart') }
      >
        <img src={ iconCart } alt="icone carrinho de compras" width="30" />
      </button>
    </header>
  );
}
