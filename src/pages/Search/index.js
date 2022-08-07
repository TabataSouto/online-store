import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import CartButton from '../../components/CartButton';
import Categories from '../../components/Categories';
import Input from '../../components/Input';
import CardProducts from '../../components/CardProducts';

import { fetchProducts } from '../../redux/slices/productsSlice';
import iconSearch from '../../images/icon-search.svg';
import Style from './style';

export default function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleChange = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleClick = () => {
    dispatch(fetchProducts({ categoryId: '', queryProducts: search }));
  };

  return (
    <Style.PageContainer>

      <Style.CategoriesContainer>
        <Categories />
      </Style.CategoriesContainer>

      <Style.ContainerSearch>
        <div>
          <button
            type="button"
            onClick={ handleClick }
          >
            <img src={ iconSearch } alt="icone de pesquisa" />
          </button>
          <Input
            id="search-product"
            name="input-search-product"
            value={ search }
            onChange={ handleChange }
          />
          <CartButton />
        </div>
        <CardProducts />
      </Style.ContainerSearch>
    </Style.PageContainer>
  );
}
