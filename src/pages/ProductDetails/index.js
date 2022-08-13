/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import AddCartButton from '../../components/AddCartButton';
import { fetchProductDetails } from '../../redux/slices/productDetailsSlice';
import iconLoading from '../../images/icon-loading.gif';
import Style from './style';
import ProductImages from '../../components/ProductImages';

const MAGIC_NUMBER = 9;

export default function ProductDetails() {
  const dispatch = useDispatch();

  const { product, status } = useSelector((state) => ({
    product: state.apiProductDetails.product,
    status: state.apiProductDetails.status,
  }));

  useEffect(() => {
    const id = window.location.pathname.slice(MAGIC_NUMBER);
    dispatch(fetchProductDetails(id));
  }, [dispatch]);

  return (
    <section>
      {
        status === 'loading'
          ? <img className="loading" src={ iconLoading } alt="carregando" />
          : <>
            <Header />
            <div>
              <h5>{product.title}</h5>
              <p>
                {
                  product.price !== undefined
            && `R$ ${product.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`
                }
              </p>
            </div>
            <Style.MainProductDetails>
              { product.pictures !== undefined && <ProductImages product={ product } />}
              <div>
                <p>O que você precisa saber sobre este produto</p>
                <ul>
                  {product.attributes !== undefined
              && product.attributes.map(({ id, name, value_name: valueName }) => (
                <li key={ id }>
                  {`${name}: ${valueName}`}
                </li>
              ))}
                </ul>
              </div>
            </Style.MainProductDetails>
            {product.id !== undefined && <AddCartButton idProduct={ product.id } /> }
          </>
      }
    </section>
  );
}
