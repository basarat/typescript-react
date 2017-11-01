# Create stateful React Components using TypeScript

> You can create stateful React Components in TypeScript by extending from the React.Component class. This parent class takes two generic parameters, Props and State.

> This lessons shows these generic parameters and React.Component in action.

Here I have a simple TypeScript application that renders the div `Hello world` to the dom using React and React Dom.
```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
  <div>Hello world</div>,
  document.getElementById('root')
);
```

We can easily move this div into a stateful component called `<App/>` by creating a class called `App` that extends from `React.Component`. Within the render function we return the JSX element as before.

***Run demo***
And you can see that it works as expected.

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>Hello world</div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
```

Of course one big advantage of components is that you get to use props to change the component behavior.

* React.Component takes Props as its first generic argument.
* Lets go ahead and add a prop with a member `message` of type string.
* We can use this prop in our render method.

***Show the error in `App`***
* As you can see TypeScript already complaining about the component being used without providing the required message prop.
* Lets fix this error and by passing in a new message.

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component<{
  message: string,
}> {
  render() {
    return (
      <div>{this.props.message}</div>
    );
  }
}

ReactDOM.render(
  <App message="Hello again" />,
  document.getElementById('root')
);
```

***Run demo***
And you can see it works as expected.

Components that extend from `React.Component` are called stateful because they can have their own internal state.

* React.Component takes as second generic argument which specifies the type of the State.
* Lets go ahead and setup our state as an object with a member count of type number.
* We can initialize the state in our constructor.
  * When adding a constructor to a react component, you get passed the initial props which we simply pass to the super React.Component class.
  * Now we can setup the initial state.
* Finally we can use this state in other places like the render method.

***Run the demo***
* You can see the render now shows the initial value for the count.

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component<{
  message: string,
}, {
    count: number,
  }> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div>{this.props.message} {this.state.count}</div>
    );
  }
}

ReactDOM.render(
  <App message="Hello again" />,
  document.getElementById('root')
);
```

The key reason for having local state in a component, is that you get to manage it inside the component,

* For example, we can call an increment member function whenever the root div is clicked.
* Within the `increment` function we simply use react.component's `setState` to increment the count member of the state.

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component<{
  message: string,
}, {
    count: number,
  }> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div onClick={this.increment}>{this.props.message} {this.state.count}</div>
    );
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }
}

ReactDOM.render(
  <App message="Hello world prop" />,
  document.getElementById('root')
);
```

***Click the div in the demo***
* Now if we go ahead and click the div you can see that the state changes correctly causing the component to re-render with the new state.

* Of course if you want, you can easily move out the inline type definitions for the Props and State into appropriately named types.

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

type AppProps = {
  message: string,
}
type AppState = {
  count: number,
}
class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div onClick={this.increment}>{this.props.message} {this.state.count}</div>
    );
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }
}

ReactDOM.render(
  <App message="Hello world prop" />,
  document.getElementById('root')
);
```
