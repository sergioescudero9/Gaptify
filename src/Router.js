import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import NoMatch from './containers';
import Header from './components/Header';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
