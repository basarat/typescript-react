# Test React Applications with Cypress

> Cypress is an E2E testing tool designed specifically to be easy to use for frontend developers. In this lesson we test the functionality of a React application using Cypress.

* We start off with a simple react typecript application that shows a checkbox with an on label and an off label

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CheckboxWithLabel } from './checkboxWithLabel';

ReactDOM.render(
  <CheckboxWithLabel id="onOff" labelOn="on" labelOff="off"/>,
  document.getElementById('root')
);
```

***npm start***
Here is quick look at its behaviour in the dom. The text of the checkbox changes as we change the checked state by clicking on the component.  

> Lets add an E2E real browser test for this using cypress.

```bash
mkdir e2e
cd e2e
npm init -y
npm install cypress webpack @cypress/webpack-preprocessor typescript ts-loader
```
* We make a new directory for these e2e tests, initialize a new npm root and install `cypress` and its dependencies for writing tests in TypeScript. 

```
npx cypress open
```
* Next we open the cypress IDE to let it initilize the cypress folder structure.

```js
const wp = require('@cypress/webpack-preprocessor')
module.exports = (on) => {
  const options = {
    webpackOptions: {
      resolve: {
        extensions: [".ts", ".tsx", ".js"]
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: "ts-loader",
            options: { transpileOnly: true }
          }
        ]
      }
    },
  }
  on('file:preprocessor', wp(options))
}

```
* We configure cypress `plugins/index.js` to use the TypeScript packages we installed to transpile tests on the fly.


```json
{
  "compilerOptions": {
    "strict": true,
    "sourceMap": true,
    "module": "commonjs",
    "target": "es5",
    "lib": [
      "dom",
      "es6"
    ],
    "jsx": "react",
    "experimentalDecorators": true
  },
  "compileOnSave": false
}
```

* Lets add a seperate `tsconfig.json` file for this folder. Keeping E2E tests seperate from our project code prevents global type definition conflicts e.g with `describe` `it` etc. 

```
 "scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
  },
```
* Optionally we add a few script targets to essentially document how to run these test. 

***Select the e2e folder***
> That's it, we are done with the configuration. Note that at this point this e2e folder is primed to be copy pasted into any TypeScript / React Project you want to add e2e tests for.

***Expand the `/integration` folder***
* Now lets write some tests
* All the cypress tests are located in the `integration` folder and we can safely delete the examples. 
* We create a new file `happy.spec.ts` 
* To start our test simply goes and opens the url. 

```ts
/// <reference types="cypress"/>

describe('happy path', () => {
  it('should work', () => {
    cy.visit('http://localhost:8080')
  })
})
```
We launch the cypress IDE using `npm run cypress:open` and select this new test.

***use cypress to get the id***
Next we need to trigger a click on the input element. We can get the id quite easily using the Cypress IDE


```ts
cy.get('#onOff')
  .should('have.text', 'off')
  .click()
  .should('have.text', 'on')
```
* We paste in this get.
* Next we need to add an assertion. Cypress provides assertions under the `should` command and we can use the `has.text` chain. 
* Next we trigger a `click`
* Finally we add another assertion to ensure the text updates as expected.

> There is lots more to cypress commands and we have only scratched the surface.

* Finally we can make our tests more deterministic by sharing some constants like the 'id' and even the texts with our tests.

```ts
export const id = 'onOff';
export const onText = 'on';
export const offText = 'off';
```
* We create a file `constants.ts` in our applicaiton. 
* This file exports these common constants. 

```ts
import { id, onText, offText } from './constants';
// Also use
```
* We use these to power our application

```ts
import { id, onText, offText } from './constants';
```
* And new we can use the same constants to power our test. 

> This means our test continues to if someone feels like doing some like refactoring.

***Edit constants file***
e.g. lets use capital `On` and `Off`. 

***Show the running tests***
You can see our tests still works as expected.

```
npm run cypress:run
```
* On the build server you can execute the tests using `npm run cypress:run`. 

# Post recording cleanup
* Delete e2e folder :) 
