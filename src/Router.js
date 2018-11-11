import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';

const Home = React.lazy(() => import('./containers/Home'));
const OtherPage = React.lazy(() => import('./containers/OtherPage'));
const Chat = React.lazy(() => import('./containers/Chat'));
const NoMatch = React.lazy(() => import('./containers/NoMatch'));

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayout exact path="/" component={Home} />
        <DefaultLayout exact path="/otherpage" component={OtherPage} />
        <DefaultLayout exact path="/chat" component={Chat} />
        <DefaultLayout component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
