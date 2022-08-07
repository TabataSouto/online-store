import React from 'react';
import PropTypes from 'prop-types';

export default function Input({
  id,
  name,
  value,
  onChange,
}) {
  return (
    <label htmlFor={ id }>
      <input
        id={ id }
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
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
