import React from 'react';
import { useSelector } from 'react-redux';
import iconLoading from '../../images/icon-loading.gif';
import Style from './style';

const TITLE_LENGTH = 35;

export default function CardProducts() {
  const { products } = useSelector((state) => ({
    products: state.apiProducts,
  }));

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
              <img src={ thumbnail } alt={ `Imagem referente ao produto ${title}` } />
              <p>{ price }</p>
            </Style.Card>
          ))
      }
    </Style.MainCard>
  );
}
