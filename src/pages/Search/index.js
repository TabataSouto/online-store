import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Categories from "../../components/Categories";
import Input from "../../components/Input";
import CardProducts from "../../components/CardProducts";
import { fetchProducts } from "../../redux/slices/productsSlice";
import { Paper, IconButton } from "@mui/material";
import { Container, SearchContainer, SearchComponent } from "./Style";
import { Search as SearchIcon, ShoppingCart } from "@mui/icons-material";

export default function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleChange = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleClick = () => {
    dispatch(fetchProducts({ categoryId: "", queryProducts: search }));
  };

  return (
    <Container>
      <div>
        <Categories />
      </div>
      <SearchContainer>
        <SearchComponent>
          <Paper
            sx={{ display: 'flex' }}
          >
            <IconButton
              sx={{ p: "10px", display: "inline-block" }}
              aria-label="search"
              onClick={handleClick}
            >
              <SearchIcon />
            </IconButton>
            <Input
              id="search-product"
              name="input-search-product"
              value={search}
              onChange={handleChange}
            />
            <IconButton
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={() => navigate("/shopping-cart")}
            >
              <ShoppingCart />
            </IconButton>
          </Paper>
        </SearchComponent>
        <CardProducts />
      </SearchContainer>
    </Container>
  );
}
