import React from 'react';
import { FaStar } from 'react-icons/fa';
import { getEvaluation } from '../../helpers/saveEvaluation';

const STAR_NUMBER = 5;

export default function ResponseRatings() {
  const responses = getEvaluation();
  console.log(responses);

  return (
    <div>
      {
        !responses
          ? (<p>Produto sem avaliações!</p>)
          : responses.map(({ email, message, qtdeStar }, i) => (
            <>
              <div key={ i }>
                <p>{ email }</p>
                { [...Array(STAR_NUMBER)].map((_, index) => {
                  const ratingValue = index + 1;
                  return (
                    <span key={ index }>
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
