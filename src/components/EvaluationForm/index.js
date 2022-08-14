import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmail, addMessage } from '../../redux/slices/evaluationSlice';
import RatingStar from '../RatingStar';
import { getEvaluation, saveEvaluation } from '../../helpers/saveEvaluation';

export default function EvaluationForm() {
  const dispatch = useDispatch();

  const evaluationGrade = useSelector(
    (state) => state.evaluationProduct.qtdeStar,
  );

  const [evaluation, setEvaluation] = useState({
    email: '',
    message: '',
  });

  const evaluationsStorage = getEvaluation();
  const save = {
    email: evaluation.email,
    message: evaluation.message,
    qtdeStar: evaluationGrade,
  };

  const handleClick = (event) => {
    event.preventDefault();
    const email = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;

    if (evaluationGrade > 0 && email.test(evaluation.email)) {
      dispatch(addEmail(evaluation.email));
      dispatch(addMessage(evaluation.message));

      console.log(evaluationsStorage);
      if (!evaluationsStorage) {
        saveEvaluation([save]);
      }
      evaluationsStorage.push(save);
      saveEvaluation(evaluationsStorage);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setEvaluation({
      ...evaluation,
      [name]: value,
    });
  };

  return (
    <form>
      <div>
        <label htmlFor="email">
          <input
            id="email"
            name="email"
            placeholder="Email"
            value={ evaluation.email }
            onChange={ handleChange }
          />
        </label>
        <RatingStar />
      </div>
      <div>
        <label htmlFor="message">
          <textarea
            id="message"
            name="message"
            placeholder="Mensagem (opcional)"
            value={ evaluation.message }
            onChange={ handleChange }
          />
        </label>
      </div>
      <div>
        <button
          type="button"
          onClick={ handleClick }
        >
          Avaliar
        </button>
      </div>
    </form>
  );
}
