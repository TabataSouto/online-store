import React from 'react';
import PropTypes from 'prop-types';

export default function Input({
  id,
  testId,
  name,
  value,
  onChange,
}) {
  return (
    <label htmlFor={ id }>
      <input
        id={ id }
        data-testid={ testId }
        name={ name }
        value={ value }
        onChange={ onChange }
      />
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  testId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
