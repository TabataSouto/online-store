import React from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import iconSearch from '../../images/icon-search.svg';

export default function Search() {
  return (
    <section>
      <Header />
      <div>
        <img src={ iconSearch } alt="icone de pesquisa" />
        <Input
          id="search-product"
          testId=""
          name="input-search-product"
          value="Pesquisa será feita aqui"
          onChange={ () => {} }
        />
      </div>
      <main>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </main>
    </section>
  );
}
