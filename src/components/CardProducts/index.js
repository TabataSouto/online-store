import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProductDetails } from '../../redux/slices/productDetailsSlice';
import iconLoading from '../../images/icon-loading.gif';
import {
  addShoppingCart, updateShoppingCart,
} from '../../redux/slices/shoopingCartSlice';
import Style from './style';

const TITLE_LENGTH = 35;

export default function CardProducts() {
  const dispatch = useDispatch();

  const { products, shoppingCart } = useSelector((state) => ({
    products: state.apiProducts,
    shoppingCart: state.shoppingCart.products,
  }));

  const productDetails = ({ target: { name } }) => {
    dispatch(fetchProductDetails(name));
  };

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
    <Style.MainCard>
      {
        (!products.list.length && products.status === null)
        && <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
      }
      {
        (!products.list.length && products.status === 'sucess')
        && <p>Nenhum produto foi encontrado</p>
      }
      {
        products.status === 'loading' ? <img
          className="loading"
          src={ iconLoading }
          alt="aguardando carregamento da pesquisa"
        />
          : products.list.map(({
            id,
            title,
            thumbnail,
            price,
          }) => (
            <Style.Card key={ id }>
              <p>
                {
                  title.length > TITLE_LENGTH
                    ? `${title.slice(0, TITLE_LENGTH)}...`
                    : title
                }
              </p>
              <Link to={ `${id}` } onClick={ productDetails }>
                <img
                  src={ thumbnail }
                  alt={ `Imagem referente ao produto ${title}` }
                  name={ id }
                />
              </Link>
              <p>
                {' '}
                { price.toLocaleString('pt-br', { minimumFractionDigits: 2 }) }
              </p>
              <button
                name={ id }
                type="button"
                onClick={ handleClick }
              >
                Adicionar ao carrinho
              </button>
            </Style.Card>
          ))
      }
    </Style.MainCard>
  );
}
