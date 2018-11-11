import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext();

class Provider extends Component {
  state = {
    token: 'This is a token Nooo',
  }

  render() {
    const { children } = this.props;
    const { token } = this.state;
    return (
      <Context.Provider
        value={{ token }}
      >
        {children}
      </Context.Provider>
    );
  }
}
Provider.propTypes = {
  children: PropTypes.node
};

export { Provider, Context };
