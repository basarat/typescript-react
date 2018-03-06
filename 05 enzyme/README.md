# Test React components using Enzyme

> In this lesson we test the basic functionality of a React component using Jest.

Here we have a basic react-typescript application. 

***run the demo to show hello world***

* We start off by installing just the dependencies for jest. 

```
npm i jest @types/jest ts-jest -D
```

We configure jest using a simple `jest.config.js` file. 

```js
module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ]
}
```
This file just tells jest that all our source is located in the `src` folder
* For ts and tsx files we will be using ts-jest.
* Jest should pickup files that end with `.test`
* And that jest should pickup `.ts` and `.tsx` files as a part of its module lookup.

This is just the basic jest configuration. Lets create a simple component that takes two props `labelOn` and `labelOff` and shows one of these strings based on whether an input checkbox is checked. 

```js
import * as React from 'react';

export class CheckboxWithLabel extends React.Component<{
  labelOn: string,
  labelOff: string
}, {
    isChecked: boolean
  }> {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
  }

  onChange = () => {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}

```

We can test the `shallow` rendering of such components quite easily with `enzyme`. We install enzyme and its types from npm.

```
npm i enzyme @types/enzyme enzyme-adapter-react-16 -D
```
* Next we create a `checkboxWithLabel.test.tsx` test file.
* We bring in react, shallow from enzyme, and our component
* Our test will do a shallow rendering of the component
* We expect the initial text to be off
* We can do dom interactions on the checkbox by simple selector queries and simulated actions. 
* We now expect the checkbox to have the new text based on the user's change interaction. 

We run the test using `npx jest` and you can see that it works as expected.
