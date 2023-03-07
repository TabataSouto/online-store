import React from "react";
import PropTypes from "prop-types";
import { InputBase } from "@mui/material";

export default function Input({ id, value, onChange }) {
  return (
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Faça sua pesquisa"
      inputProps={{ "aria-label": "Faça sua" }}
      id={id}
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
