# Publish a React component with TypeScript
> In this lesson we look at how to create a React Component package using TypeScript. Pro Tip: It is very similiar to creating any other TypeScript Node package, but its always good to see it in practice.

Here we have a simple bare bones `package.json` for a node module which we are going to call `fancy`
***`cat package.json`***
```json
{
  "name": "fancy",
  "version": "0.0.0",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/basarat/typescript-react.git"
  },
  "scripts": {}
}
```

We are going to start off by installing `typescript` / `react` and the types for react as dev dependencies.  
* `npm install typescript react @types/react -D` to all these packages as devDependencies.

* Next within our `package.json` we will just add a hint for our users that they need to provide their own versions of `react` and `react-dom` by adding them to our `peerDependencies`.
```js
  "peerDependencies": {
    "react": ">=16.0.0",
    "react-dom": ">=16.0.0"
  },
```
* Next we create a simple `tsconfig.json` file.
* Within the file we specify the `compilerOptions` for  `sourceMap` / `target` / `jsx` / `declaration` and an output directory for the compiled JavaScript and declaration files using `outDir`.
* We also specify that our source TypeScript files will be in the `src` folder.
```json
{
  "compilerOptions": {
    "sourceMap": true,
    "target": "es5",
    "jsx": "react",
    "declaration": true,
    "outDir": "lib"
  },
  "include": [
    "src"
  ]
}
```

* Next we simply create our root `src/index.tsx` file.
* Within the file we bring in React and export a simple `Fancy` component.
```js
import * as React from 'react';

export const Fancy: React.SFC<{text:string}> = (props) => <h1>{props.text}</h1>;
```

* Just like any other standard TypeSript node projects, we setup package.json with the path to our output `js` files along with `types` for the output `.d.ts` TypeScript declaration files which in our case is the `outDir` we specified in our `tsconfig.json`

```
"main": "lib",
"types": "lib",
```
* We also setup a build script which simply invokes `tsc` on our `tsconfig.json`
* Ad a start script that runs build in watch mode for live development.
```
"build": "tsc -p .",
"start": "npm run build -- -w"
```

* Now we just run this on the console to compile our project.
```
npm run build
```

* At this point if you wanted you could run `npm publish` to push this library to NPM, but we will just use it locally by running `npm link`.

* Now lets jump back to our good old hello world react application. 
```
cd ../use
```
* If we had published our package we could use it by `npm install`. Since we only linked it locally we can bring it in by running `npm link fancy`.
```
npm link fancy
```
* We can now use the component in our main application. Ofcourse since the package was written with TypeScript we get nice autocomplete, error checking and all the other benefits we demonstarted in the first lesson.

```js
import { Fancy } from 'fancy';

ReactDOM.render(
  <Fancy text="Hello world"/>,
  document.getElementById('root')
);
```

***Run the demo***
* As you can see our fancy component works as expected.


# Footnotes
https://medium.com/@BrodaNoel/how-to-create-a-react-component-and-publish-it-in-npm-668ad7d363ce
