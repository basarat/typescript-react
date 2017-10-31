# Create stateless React components using TypeScript

> You can create a stateless React component in TypeScript as easily as creating a function.

> But if you want to create high quality idiomatic React + TypeScript components we cover some improved patterns in this lesson.

Here I have a simple TypeScript application that renders the div `Hello world` to the dom using React and React Dom.
```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
  <div>Hello world</div>,
  document.getElementById('root')
);
```

We can easily move this div into a stateless component called <App/> by creating a function App and returning the same JSX element.

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
* And TypeScript tells us that this property needs to be provided
* And helps us pass in the message as a property to the component.

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = ({ message }) => <div>{message}</div>;

ReactDOM.render(
  <App message="Hello world again" />,
  document.getElementById('root')
);
```
***Save and show the reload***
* You can see that it still behaves the same but now we can control the rendering with the passed in prop.

***Select the `App` function***
* Although such simple functions work fine for stateless components, if you want to create high quality TypeScript components, it is recommended that you annotate such  functions as `React.SFC`
* The `React.SFC` interface takes a generic argument that allows you to easily provide the type annotations for the component props.
***Hover over the message argument***
* And you can see that the type specified flows through to the function argument.

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

* Ofcourse, if you want, you can easily move out this inline prop type definition, into an appropriately named type.

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

type AppProps = { message: string }
const App: React.SFC<AppProps> = ({ message }) => <div>{message}</div>;

ReactDOM.render(
  <App message="Hello world again" />,
  document.getElementById('root')
);
```
