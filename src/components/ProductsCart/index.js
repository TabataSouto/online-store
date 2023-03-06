import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../../redux/slices/shoopingCartSlice';
import SumOrSubCartProduct from '../SumOrSubCartProduct';
import iconRemove from '../../images/icon-remove.svg';

export default function ProductsCart() {
  const dispatch = useDispatch();

  const { shoppingCart } = useSelector((state) => ({
    shoppingCart: state.shoppingCart.products,
  }));

  const handleRemoveItem = ({ target: { name } }) => {
    const removeItem = shoppingCart.filter(({ id }) => id !== name);
    dispatch(removeProduct(removeItem));
  };

  return (
    <section>
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
          <SumOrSubCartProduct
            idProduct={ id }
            qtde={ qtde }
          />
          <p>{ `RS ${price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}` }</p>
        </div>
      )) }
      <h2>
        { `Valor total da compra: R$: ${
          shoppingCart.reduce((acc, total) => acc + total.price, 0)
            .toLocaleString('pt-br', { minimumFractionDigits: 2 })
        }`}

      </h2>
    </section>
  );
}
