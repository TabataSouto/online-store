import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import iconLoading from '../../images/icon-loading.gif';
import AddCartButton from '../AddCartButton';

const TITLE_LENGTH = 35;

export default function CardProducts() {
  const { products } = useSelector((state) => ({
    products: state.apiProducts,
  }));

  return (
    <section>
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
            <div key={ id }>
              <p>
                {
                  title.length > TITLE_LENGTH
                    ? `${title.slice(0, TITLE_LENGTH)}...`
                    : title
                }
              </p>
              <Link to={ `/product/${id}` }>
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
              <AddCartButton idProduct={ id } />
            </div>
          ))
      }
    </section>
  );
}
