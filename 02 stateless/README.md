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
  <App />,
  document.getElementById('root')
);
```

Of course one big advantage of components is that you get to use props to change the component behavior.

* e.g we can take the message as a prop by adding it to the function arguments, using it inside the function body.
* And now we get to pass in the message as a property to the component.

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = ({ message }) => <div>{message}</div>;

ReactDOM.render(
  <App message="Hello world" />,
  document.getElementById('root')
);
```
***Save and show the reload***
* You can see that it still behaves the ssame but now we can control the rendering with the passed in prop.

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = ({ message }) => <div>{message}</div>;

ReactDOM.render(
  <App message="Hello, is it me you are looking for?" />,
  document.getElementById('root')
);
```
***Save and show the reload***

***Select the `App` function***
* Although simple functions work fine for simple stateless components, if you want to create high quality TypeScript components, it is recommended that you annotate your component as a `React.SFC` 
* This interface takes a generic argument that allows you to easily provide type annotations for the component props.

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App: React.SFC<{ message: string }>
  = ({ message }) => <div>{message}</div>;

ReactDOM.render(
  <App message="Hello world!" />,
  document.getElementById('root')
);
```
