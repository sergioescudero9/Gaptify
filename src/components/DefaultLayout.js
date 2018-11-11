import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <div>
        <Header />
        <Component {...props} />
        <div className="Footer">Footer</div>
      </div>
    )}
  />
);

export default DefaultLayout;
