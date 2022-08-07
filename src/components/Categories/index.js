import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/slices/apiCategoriesSlice';
import Style from './style';

export default function Categories() {
  const { categories } = useSelector((state) => ({
    categories: state.apiCategories.list,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Style.CategoriesList>
      { categories.map(({ id, name }) => (
        <button
          key={ id }
          type="button"
        >
          { name }
        </button>
      )) }
    </Style.CategoriesList>
  );
}
