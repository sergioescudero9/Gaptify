import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './Provider';

class Home extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  render() {
    return (
      <Context.Consumer>
        {({ token }) => (
          <div>
            <h1>Hello from home, { token }</h1>
            <a
              className="App-link"
              href="https://accounts.spotify.com/authorize?client_id=a2ccbd48988444b3bf0fe4638c461e0d&redirect_uri=http:%2F%2Flocalhost:3000%2F&scope=user-read-private%20user-read-email&response_type=token"
              rel="noopener noreferrer"
              >
              Login with spotify
            </a>
            <Link to="/otherpage"> To Other Pager</Link>
          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default Home;
