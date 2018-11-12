import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { theme } from './theme';
import Router from './Router';
import GlobalStyles from './globalStyle';
import store from './state';

const Context = React.createContext();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyles />
          <Suspense fallback={<div>Loading...</div>}>
            <Router />
          </Suspense>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export { App as default, Context };
