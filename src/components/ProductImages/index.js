import PropTypes from 'prop-types';
import React, { useState } from 'react';
import iconPrevious from '../../images/icon-previous.svg';
import iconNext from '../../images/icon-next.svg';

export default function ProductImages({ product }) {
  const [gallery, setGallery] = useState(0);

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
      <img src={ product.pictures[gallery].url } alt="imagem do produto" />
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
  );
}

ProductImages.propTypes = {
  product: PropTypes.shape({
    pictures: PropTypes.arrayOf(
      PropTypes.objectOf(
        PropTypes.string,
      ),
    ),
  }).isRequired,
};
