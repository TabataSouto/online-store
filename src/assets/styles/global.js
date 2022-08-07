import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Mono', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.backgrounds.backgroundBody};
    font-size: 16px;
    cursor: default;
  }
  button {
    cursor: pointer;
  }
`;
