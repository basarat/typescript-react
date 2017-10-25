# Create stateful React Components using TypeScript

> You can create stateful React Components in TypeScript by extending from the React.Component class. This parent class takes two generic parameters, Props and State.

> This lessons shows these generic parameters and React.Component in action.

Here I have a simple application that renders the div `Hello world` to the dom using React and React Dom.
```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
  <div>Hello world</div>,
  document.getElementById('root')
);
```

We can easily move this div into a stateful component called `<App/>` by creating a class that extends from `React.Component` and returning the div from the render function.

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

Of course one big advantage of components is that you get to use props to change the component behaviour. 

* React.Component takes Props as its first generic argument. 
* Lets go ahead and add a prop with a member `message` of type string. 
* We can use this prop in our render method. 

***Show the error in `App`***
* As you can see TypeScript already complaining about the component being used without providing the required message prop.
* Lets fix this error and by passing in a message. 

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component<{
  message: string
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

And you can see that now the div contents are driven by the prop. 

Components that extend from `React.Component` are called stateful because they can have their own internal state. 

* The second generic that React.Component takes is actually the type of this State. - Lets go ahead and setup our state have a count of type number. 
- We can initialize the state in our constructor. 
- When adding a constructor to a react component, you get passed the initial props which you simply pass to the super React.Component class. 
- Now we can setup the initial state, which thanks to our generic setup is rich with autocomplete.
- Finally we can use this state in other places like the render method.

```
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
    )
  }
}

ReactDOM.render(
  <App message="Hello world prop" />,
  document.getElementById('root')
);
```

The key reason for having local state in a component is ofcourse that you get to manage it inside the component, for example you can add an increment function that uses react.component's setState to increment the count member of the state 

```
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
    )
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
}

ReactDOM.render(
  <App message="Hello world prop" />,
  document.getElementById('root')
);
```

We can then call this function whenever the root div is clicked. 

```
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
      <div onClick={this.increment}>
        {this.props.message} {this.state.count}</div>
    )
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
}

ReactDOM.render(
  <App message="Hello world prop" />,
  document.getElementById('root')
);
```

Now if we go ahead and click the div you can see that the state changes correctly causing the component to re-render with the new state.

Lets say we want to add another property `foo` to the state. As soon as we do that we get an error for calls to `setState` that do not pass in the property `foo`. We can fix that by marking foo as optional. It is conventional to mark all state members as optional so that setState can be called with just the members you want changed.