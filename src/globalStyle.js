import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    background: #eeeeee;
    font-family: 'helvetica neue';
    font-size: 20px;
    font-weight: 200;
  }

  body {
    margin: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

/*
  .fixed-nav li.logo {
    max-width: 500px;
  } */
`;
export default GlobalStyles;
