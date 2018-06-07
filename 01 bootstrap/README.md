# Bootstrap a TypeScript + React project
> Learn how to setup a TypeScript + React project from scratch. Understand the reason behind every line involved in the configuration allowing you to customize it at will in the future.

We start of with a bare bones package.json file
`cat package.json`
```json
{
  "name": "bootstrap",
  "version": "0.0.0",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/basarat/typescript-react.git"
  },
  "scripts": {}
}
```

Install everything we need in one go.
* General react modules like react, react-dom, webpack, webpack-cli, webpack-dev-server along with TypeScript and TypeScript specific things, like the types for react and react-dom and ts-loader for webpack
```bash
npm install react react-dom webpack webpack-cli webpack-dev-server typescript @types/react @types/react-dom ts-loader
```
* Lets kick off by wrapping up all modifications needed for `package.json` by simply adding two script targets.
  * We add a build script which just invokes webpack in production mode.
  * We also add a start script, which runs the webpack dev server for live application development using development mode and serves up the public folder.

```json
"build": "webpack -p",
"start": "webpack-dev-server -d --content-base ./public"
```

* Next we add a `webpack.config.js`.
* First we specify an application entry point
* Up next is the output location for our built bundle.
* Next we tell Webpack to support `.ts` and `.tsx` file extensions along with the original `.js` extension.
* Finally we tell webpack that for `.ts` and `.tsx` files, it should use `ts-loader`.

```js
module.exports = {
  entry: './src/app.tsx',
  output: {
    path: __dirname + '/public',
    filename: 'build/app.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}

```

Next we create a basic html file in the `public/index.html`
* The file simply contains a root div where we will render our React application and then loads the bundle generated from webpack.
```html
<html>
  <body>
    <div id="root"></div>
    <script src="./build/app.js"></script>
  </body>
</html>

```

Add a `tsconfig.json` to setup the TypeScript compiler options
* We enable sourcemaps so we can debug TypeScript files in the browser.
* We will be transpiling our code to standard nodejs style commonjs modules.
* We want our generated JavaScript to be compatible with ES5.
* Finally for JSX code we want TypeScript to transpile into `React.createElement` calls.
* Our source code will be present in the `src` folder.
* And we disable TypeScript's `compileOnSave` as that will be handled by webpack.

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "module": "commonjs",
    "target": "es5",
    "jsx": "react"
  },
  "include": [
    "src"
  ],
  "compileOnSave": false
}

```

* That's it for the configuration. Now lets write some demo code.
* Now I'll create our `src/app.tsx` file.
* We simply import `react` and `react-dom`.
* And finally use `ReactDOM` to render hello world to our root div.

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
    <div>Hello world</div>,
    document.getElementById('root')
);

```

* If we run `npm start` it will start up the wepack dev server. It will serve the `public` folder up at `localhost:8080`
* If we open that url, we can see our application running.
* If we make an edit to the file (`Hello world again`), webpack will will transpile it on the fly and reload the browser automatically.

Now, when you are ready to deploy your application, you can execute `npm run build`. This time webpack will compile our code and write the `app.js` file to disk. If we wanted we could ship the whole `public` folder to some hosting service provider as it contains our built file along with `index.html`.

***Show these files in the file tree***
To recap, the setup simply involves three simple things
  * `package.json` for specifying our npm modules and `scripts`.
  * `tsconfig.json` for configuring TypeScript.
  * and `webpack.config.js` to use webpack for compiling and running our code and npm modules in the browser.
