import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addQtde } from '../../redux/slices/evaluationSlice';

const STAR_NUMBER = 5;

export default function RatingStar() {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);

  const handleChangeRating = ({ target: { value } }) => {
    setRating(value);
    dispatch(addQtde(value));
  };

  return (
    <div>
      {
        /* o método "Array" cria um array com o tamanho de
        de acordo com o que for especificado dentro do
        parenteses. Nesse caso, ele irá criar 5 inputs
        com a imagem de estrela */
        [...Array(STAR_NUMBER)].map((_, index) => {
          /* usado para fazer a comparação da quantidade de
          estrelas que foi marcado pelo usuŕio, fazendo assim
          a mudança de cor dessa estrela de acordo com a
          avaliação feita  */
          const ratingValue = index + 1;

          return (
            <label
            /* cada estrela precisa ter seu id próprio para que
            a label funcione corretamente */
              htmlFor={ `${ratingValue}-rating` }
              key={ `${ratingValue}-rating` }
            >
              <input
                id={ `${ratingValue}-rating` }
                type="radio"
                name="rating"
                value={ ratingValue }
                onClick={ handleChangeRating }
                style={ { display: 'none' } }
              />
              <FaStar
                color={ ratingValue <= rating ? '#000000' : '#e4e5e9' }
              />
            </label>
          );
        })
      }
    </div>
  );
}
