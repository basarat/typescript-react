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

Lets add an E2E real browser test for this using cypress.

```
mkdir e2e
cd e2e
npm init -y
npm install cypress webpack @cypress/webpack-preprocessor typescript ts-loader
```
* We make a new directory for these e2e tests, initialize a new npm root and install `cypress` and its dependencies for writing tests in TypeScript. 

```
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
npx cypress open
```
* Next we open the cypress IDE to let it initilize this folder with example cypress files.


```
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
* Finally we configure cypress `plugins/index.js` to use the TypeScript packages we installed to transpile tests on the fly.

```
 "scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
  },
```
* Optionally we add a few script targets to essentially document how to run these test. 

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


## TODO 
* Finally we can make our tests more deterministic by sharing some constants like the 'id' and even the texts with our tests.

* On the build server you can run the tests using `npm run cypress:run`. Once the test completes you even get a nice video that allows you to debug the test run should you need to.