import React from 'react';
import { Context } from '../state/Provider';

function OtherPage() {
  return (
    <Context.Consumer>
      {({ token }) => (
        <div>
          <h1>
            Hello from OtherPage,
            { token }
          </h1>
          <div>💩</div>
        </div>
      )}
    </Context.Consumer>
  );
}
export default OtherPage;
