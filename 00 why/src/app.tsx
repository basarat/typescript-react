import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Hello = (props: { compiler: string, framework: string }) => {
  return (
    <div>
      <div>{props.compiler}</div>
      <div>{props.framework}</div>
    </div>
  );
}

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);
