import PropTypes from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addShoppingCart, updateShoppingCart,
} from '../../redux/slices/shoopingCartSlice';

export default function AddCartButton({ idProduct }) {
  const dispatch = useDispatch();

  const { products, shoppingCart } = useSelector((state) => ({
    products: state.apiProducts,
    shoppingCart: state.shoppingCart.products,
  }));

  const handleClick = ({ target: { name } }) => {
    const product = products.list
      .filter((el) => el.id === name)
      .map(({ id, title, thumbnail, price }) => (
        { id, title, thumbnail, price, qtde: 1 }))[0];

    const existedProduct = shoppingCart
      .some((el) => el.id === name);

    if (!existedProduct) {
      dispatch(addShoppingCart(product));
    } else {
      dispatch(updateShoppingCart(product));
    }
  };

  return (
    <button
      name={ idProduct }
      type="button"
      onClick={ handleClick }
    >
      Adicionar ao carrinho
    </button>
  );
}

AddCartButton.propTypes = {
  idProduct: PropTypes.string.isRequired,
};
