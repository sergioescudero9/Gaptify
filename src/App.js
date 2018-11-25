import React from 'react';
import { Provider } from 'react-redux';
import Router from './Router';
import GlobalStyles from './globalStyle';
import store from './state';


function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyles />
        <Router />
      </div>
    </Provider>
  );
}

export default App;
