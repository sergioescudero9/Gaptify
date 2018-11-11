import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Router from './Router';
import GlobalStyles from './globalStyle';

const Context = React.createContext();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Suspense fallback={<div>Loading...</div>}>
          <Router />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export { App as default, Context };
