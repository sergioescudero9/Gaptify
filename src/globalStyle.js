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
  h1,h2,h3,h4,h5,h6{
    margin: 0;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
export default GlobalStyles;
