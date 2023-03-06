import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Categories from '../../components/Categories';
import Input from '../../components/Input';
import CardProducts from '../../components/CardProducts';
import { fetchProducts } from '../../redux/slices/productsSlice';
import iconSearch from '../../images/icon-search.svg';
import iconCart from '../../images/icon-cart.svg';
import Style from './Style';

export default function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleChange = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleClick = () => {
    dispatch(fetchProducts({ categoryId: '', queryProducts: search }));
  };

  return (
    <Style.ContainerMain>

      <div>
        <Categories />
      </div>

      <div>
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
          <button
            type="button"
            onClick={ () => navigate('/shopping-cart') }
          >
            <img src={ iconCart } alt="icone carrinho de compras" width="30" />
          </button>
        </div>
        <CardProducts />
      </div>
    </Style.ContainerMain>
  );
}
