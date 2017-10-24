# Create stateless React components using TypeScript

> You can create a stateless React component in TypeScript as easily as creating a function. 

> But if you want to create high quality idiomatic React + TypeScript components we cover some improved patterns in this lesson.

Here I have a simple application that renders the div `Hello world` to the dom using React and React Dom.
```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
  <div>Hello world</div>,
  document.getElementById('root')
);
```

We can easily move this div into a stateless component called <App/> by creating a function App and returning this element.

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = () => <div>Hello world</div>;

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
```