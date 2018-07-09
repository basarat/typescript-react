# Test React Applications with Cypress

> Cypress is an E2E testing tool designed specifically to be easy to use for frontend developers. In this lesson we test the functionality of a React application using Cypress.

* We start off with a simple react typecript application that shows a checkbox with an on label and an off label

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
Here is quick look at its behaviour in the dom. The text of the checkbox changes as we click the component.  


### TODO 

* Next we create a `checkboxWithLabel.test.tsx` test file.
* We bring in react, shallow from enzyme, and our component
* Our test will do a shallow rendering of the component
* We expect the initial text to be off
* We can do dom interactions on the checkbox by simple selector queries and simulated actions. 
* We now expect the checkbox to have the new text based on the user's change interaction. 

We run the test using `npx jest` and you can see that it works as expected.
