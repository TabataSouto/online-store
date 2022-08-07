import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import iconPrevious from '../../images/icon-previous.svg';
import iconNext from '../../images/icon-next.svg';
import Style from './style';

export default function ProductDetails() {
  const [gallery, setGallery] = useState(0);

  const { product } = useSelector((state) => ({
    product: state.apiProductDetails.product,
  }));

  const handleClick = ({ target: { name } }) => {
    if (name === 'next') {
      setGallery(gallery + 1);
      if (gallery === product.pictures.length - 1) {
        setGallery(0);
      }
    }
    if (name === 'previous') {
      setGallery(gallery - 1);
      if (gallery === 0) {
        setGallery(product.pictures.length - 1);
      }
    }
  };

  return (
    <section>
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
        <div>
          <button
            name="previous"
            type="button"
            onClick={ handleClick }
          >
            <img
              src={ iconPrevious }
              alt="imagem do produto"
              width="20"
              name="previous"
            />
          </button>
          {
            product.pictures !== undefined
            && <img src={ product.pictures[gallery].url } alt="imagem do produto" />
          }
          <button
            name="next"
            type="button"
            onClick={ handleClick }
          >
            <img
              src={ iconNext }
              alt="imagem do produto"
              width="20"
              name="next"
            />
          </button>
        </div>
        <div>
          <p>O que você precisa saber sobre este produto</p>
          <ul>
            { product.attributes !== undefined
            && product.attributes.map(({ id, name, value_name: valueName }) => (
              <li key={ id }>
                { `${name}: ${valueName}`}
              </li>
            )) }
          </ul>
        </div>
      </Style.MainProductDetails>
    </section>
  );
}
