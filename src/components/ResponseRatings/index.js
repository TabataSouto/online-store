import React from 'react';
import { FaStar } from 'react-icons/fa';
import { getEvaluation } from '../../helpers/saveEvaluation';

const STAR_NUMBER = 5;
const MAGIC_NUMBER = 9;

export default function ResponseRatings() {
  const responses = getEvaluation();

  let belongsToProduct = [];
  if (responses) {
    belongsToProduct = responses
      .filter(({ id }) => id === window.location.pathname.slice(MAGIC_NUMBER));
  }

  return (
    <div>
      {
        !belongsToProduct.length
          ? <p>Produto sem avaliações!</p>
          : belongsToProduct.map(({ email, message, qtdeStar }) => (
            <>
              <div key={ email }>
                <p>{ email }</p>
                { [...Array(STAR_NUMBER)].map((_, index) => {
                  const ratingValue = index + 1;
                  return (
                    <span key={ ratingValue }>
                      <FaStar
                        color={ ratingValue <= qtdeStar ? '#000000' : '#e4e5e9' }
                      />
                    </span>
                  );
                }) }
              </div>
              <div>
                { message }
              </div>
            </>
          ))
      }
    </div>
  );
}
