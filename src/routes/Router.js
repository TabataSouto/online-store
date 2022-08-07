import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Search from '../pages/search';

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={ <Search /> } />
    </Routes>
  );
}
