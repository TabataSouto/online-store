import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementProduct, decrementProduct } from '../../redux/slices/shoopingCartSlice';

export default function SumOrSubCartProduct({ idProduct, qtde }) {
  const dispatch = useDispatch();

  const handleClick = ({ target: { name, id } }) => {
    if (name === 'sum') {
      dispatch(incrementProduct(id));
    } else {
      dispatch(decrementProduct(id));
    }
  };

  return (
    <>
      <button
        id={ idProduct }
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
        id={ idProduct }
        type="button"
        name="sum"
        onClick={ handleClick }
      >
        +
      </button>
    </>
  );
}

SumOrSubCartProduct.propTypes = {
  idProduct: PropTypes.string.isRequired,
  qtde: PropTypes.number.isRequired,
};
