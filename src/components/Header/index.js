import React from 'react';
import { useNavigate } from 'react-router-dom';
import iconCart from '../../images/icon-cart.svg';
import iconGoBack from '../../images/icon-go-back.svg';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <button
        type="button"
        onClick={ () => navigate('/') }
      >
        <img src={ iconGoBack } alt="" width="25" />
      </button>
      <button
        type="button"
        onClick={ () => navigate('/shopping-cart') }
      >
        <img src={ iconCart } alt="icone carrinho de compras" width="30" />
      </button>
    </header>
  );
}
