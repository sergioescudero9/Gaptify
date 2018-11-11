import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const ContentStyle = styled.div`
  font-size: 100px;
`;

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <ContentStyle>
          2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dicta. Harum quae ad adipisci magni labore doloremque veritatis cupiditate numquam voluptatum. Minus molestiae repudiandae sunt exercitationem obcaecati. Aliquam, libero aperiam!
        </ContentStyle>
      </React.Fragment>
    );
  }
}

export default Home;


/* <Context.Consumer>
      {({ token }) => (
        <div>
          <h1>
            Hello from home,
            { token }
          </h1>
          <a
            href="https://accounts.spotify.com/authorize?client_id=a2ccbd48988444b3bf0fe4638c461e0d&redirect_uri=http:%2F%2Flocalhost:3000%2F&scope=user-read-private%20user-read-email&response_type=token"
            rel="noopener noreferrer"
          >
            Login with spotify
          </a>
          <Link to="/otherpage"> To Other Pager</Link>
        </div>
      )}
    </Context.Consumer> */
