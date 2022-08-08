import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementProduct, decrementProduct, removeProduct,
} from '../../redux/slices/shoopingCartSlice';
import iconRemove from '../../images/icon-remove.svg';
import Style from './style';

export default function ProductsCart() {
  const dispatch = useDispatch();

  const { shoppingCart } = useSelector((state) => ({
    shoppingCart: state.shoppingCart.products,
  }));

  const handleClick = ({ target: { name, id } }) => {
    if (name === 'sum') {
      dispatch(incrementProduct(id));
    } else {
      dispatch(decrementProduct(id));
    }
  };

  const handleRemoveItem = ({ target: { name } }) => {
    const removeItem = shoppingCart.filter(({ id }) => id !== name);
    console.log(removeItem);
    dispatch(removeProduct(removeItem));
  };

  return (
    <Style.MainSopphingCart>
      { shoppingCart.length > 0
      && shoppingCart.map(({
        id, thumbnail, title, qtde, price,
      }) => (
        <div key={ id }>
          <button
            type="button"
            name={ id }
            onClick={ handleRemoveItem }
          >
            <img src={ iconRemove } alt="remover item do carrinho" name={ id } />
          </button>
          <img src={ thumbnail } alt="imagem do produto a ser comprado" />
          <p>{ title }</p>
          <button
            id={ id }
            type="button"
            name="sub"
            onClick={ handleClick }
          >
            -
          </button>
          <div>
            <p>{ qtde }</p>
          </div>
          <button
            id={ id }
            type="button"
            name="sum"
            onClick={ handleClick }
          >
            +
          </button>
          <p>{ `RS ${price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}` }</p>
        </div>
      )) }
      <h2>
        { `Valor total da compra: R$: ${
          shoppingCart.reduce((acc, total) => acc + total.price, 0)
            .toLocaleString('pt-br', { minimumFractionDigits: 2 })
        }`}

      </h2>
    </Style.MainSopphingCart>
  );
}
