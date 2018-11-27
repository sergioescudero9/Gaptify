import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Home from './containers/Home/Home';
import Artist from './containers/Artist/Artist';
import About from './containers/About/About';
import NoMatch from './containers';
import Header from './components/Header';

const MainContainer = styled.div`
  padding:40px 20px;
`;

function Router() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MainContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/artist/:id" component={Artist} />
            <Route exact path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </MainContainer>
      </div>
    </BrowserRouter>
  );
}
export default Router;
