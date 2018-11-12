import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';

const Home = React.lazy(() => import('./containers/Home/Home'));
const About = React.lazy(() => import('./containers/About/About'));
const NoMatch = React.lazy(() => import('./containers'));

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayout exact path="/" component={Home} />
        <DefaultLayout exact path="/about" component={About} />
        <DefaultLayout component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
