import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/slices/categoriesSlice';
import { fetchProducts } from '../../redux/slices/productsSlice';
import Style from './style';

export default function Categories() {
  const { categories } = useSelector((state) => ({
    categories: state.apiCategories.list,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleClick = ({ target: { name } }) => {
    dispatch(fetchProducts({ categoryId: name, queryProducts: '' }));
  };

  return (
    <Style.CategoriesList>
      { categories.map(({ id, name }) => (
        <button
          key={ id }
          name={ id }
          type="button"
          onClick={ handleClick }
        >
          { name }
        </button>
      )) }
    </Style.CategoriesList>
  );
}
