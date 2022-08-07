import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Router from './routes/Router';
import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/themes/default';

function App() {
  return (
    <ThemeProvider theme={ defaultTheme }>
      <BrowserRouter>
        <Router />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
