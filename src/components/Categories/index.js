import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/slices/categoriesSlice";
import { fetchProducts } from "../../redux/slices/productsSlice";
import {
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { Container, BpIcon, BpCheckedIcon } from './Style';

export default function Categories() {
  const { categories } = useSelector((state) => ({
    categories: state.apiCategories.list,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleClick = ({ target: { value } }) => {
    dispatch(fetchProducts({ categoryId: value, queryProducts: "" }));
  };

  // função pronta da documentação Material-UI
  function BpRadio(props) {
    return (
      <Radio
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    )
  }

  return (
    <Container>
      <FormControl sx={{ display: "flex" }}>
        <RadioGroup
          sx={{
            display: "flex",
            flexDirection: "column",
            height: '20%'
          }}
          row
          aria-labelledby="form-control"
          name="order"
          defaultValue="top"
        >
          {categories.map(({ id, name }) => (
            <FormControlLabel
              key={id}
              value={id}
              control={<BpRadio />}
              label={name}
              labelPlacement="end"
              onChange={handleClick}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Container>
  );
}
