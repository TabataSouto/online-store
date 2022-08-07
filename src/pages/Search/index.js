import React from 'react';
import CartButton from '../../components/CartButton';
import Categories from '../../components/Categories';
import Input from '../../components/Input';
import iconSearch from '../../images/icon-search.svg';
import Style from './style';

export default function Search() {
  return (
    <Style.PageContainer>

      <Style.CategoriesContainer>
        <Categories />
      </Style.CategoriesContainer>

      <Style.ContainerSearch>
        <div>
          <img src={ iconSearch } alt="icone de pesquisa" />
          <Input
            id="search-product"
            testId=""
            name="input-search-product"
            value="Pesquisa será feita aqui"
            onChange={ () => {} }
          />
          <CartButton />
        </div>
        <main>
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        </main>
      </Style.ContainerSearch>
    </Style.PageContainer>
  );
}
