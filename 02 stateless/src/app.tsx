import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App: React.SFC<{ message: string }>
  = ({ message }) => <div>{message}</div>;

ReactDOM.render(
  <App message="Hello world!" />,
  document.getElementById('root')
);
