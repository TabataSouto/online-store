import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProductDetails } from '../../redux/slices/productDetailsSlice';
import iconLoading from '../../images/icon-loading.gif';
import Style from './style';

const TITLE_LENGTH = 35;

export default function CardProducts() {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => ({
    products: state.apiProducts,
  }));

  const productDetails = ({ target: { name } }) => {
    dispatch(fetchProductDetails(name));
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
            </Style.Card>
          ))
      }
    </Style.MainCard>
  );
}
