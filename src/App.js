import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import OtherPage from "./OtherPage";

import NoMatch from "./NoMatch";
import { Provider } from "./Provider";

const Context = React.createContext();


class App extends Component {
  render() {
    
    return (
      <Router>
        <Provider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/otherpage' component={ OtherPage } />
            <Route exact path="/:access_token" component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </Provider>
      </Router>
    );
  }
}

export { App as default, Context};
