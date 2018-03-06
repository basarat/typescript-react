# Test React components and dom using Enzyme

> In this lesson we test the functionality of a React components using Jest and Ezyme.

* We start off by installing jest, types for jest, typescript preprocessor for jest, enzyme, types for enzyme, and an adator for enzyme for our react version to our example react typescript application.

```
npm i jest @types/jest ts-jest enzyme @types/enzyme enzyme-adapter-react-16 -D
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
  ],
  "setupTestFrameworkScriptFile": "<rootDir>/src/setupEnzyme.ts",
}
```
This file just tells jest that all our source is located in the `src` folder
* For ts and tsx files we will be using ts-jest.
* Jest should pickup files that end with `.test`
* And that jest should pickup `.ts` and `.tsx` files as a part of its module lookup.
* And a configuration file for enzyme.

Now in our configuraiton file `src/setupEnzyme.ts` we have some simple boiler plate to configure ezyme for react 16. 

```js
import { configure } from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new EnzymeAdapter() });
```


That is it for our jest and enzyme configuration. 

Lets create a simple component that takes two props `labelOn` and `labelOff` and shows one of these strings based on whether an input checkbox is checked. 

***create `checkboxWithLabel.tsx`***
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

Here is quick look at its behaviour in the dom  
```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CheckboxWithLabel } from './checkboxWithLabel';

ReactDOM.render(
  <CheckboxWithLabel labelOn="on" labelOff="off"/>,
  document.getElementById('root')
);
```
***npm start***
The text of the checkbox changes as we click the component. Such internal state, dom based component are exactly what enzyme is designed to test. 

```js
import * as React from 'react';
import { shallow } from 'enzyme';
import { CheckboxWithLabel } from './checkboxWithLabel';

test('CheckboxWithLabel changes the text after click', () => {
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
  expect(checkbox.text()).toEqual('Off');
  checkbox.find('input').simulate('change');
  expect(checkbox.text()).toEqual('On');
});
```

* Next we create a `checkboxWithLabel.test.tsx` test file.
* We bring in react, shallow from enzyme, and our component
* Our test will do a shallow rendering of the component
* We expect the initial text to be off
* We can do dom interactions on the checkbox by simple selector queries and simulated actions. 
* We now expect the checkbox to have the new text based on the user's change interaction. 

We run the test using `npx jest` and you can see that it works as expected.
