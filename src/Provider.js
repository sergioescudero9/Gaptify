import React, { Component } from 'react';

console.log('Numbver of render')
const Context = React.createContext();
console.log('1')

class Provider extends Component {
  state = {
    token: 'This is a token Nooo'
  }
  render(){
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export { Provider, Context };
