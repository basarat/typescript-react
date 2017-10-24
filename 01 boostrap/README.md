# Bootstrap a TypeScript + React  project
> Setup a TypeScript + React project from scratch using webpack. Learn the reason behind every line involved in the configuration allowing you to customize it at will in the future.

We start of with a bare bones packages.json file
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
* react, react-dom, webpack, webpack-dev-server along with TypeScript, the types for react and react-dom and ts-loader for webpack
```bash
npm install react react-dom webpack webpack-dev-server typescript @types/react @types/react-dom ts-loader
```

now we will just go ahead and open some IDE that supports typescript

```bash
alm -o
```

* We add a build script to run webpack against our config.
* We also add a start script to to run the dev server for live development

```json
"build": "webpack ./webpack.config.js",
"start": "webpack-dev-server ./webpack.config.js --content-base ./public"
```

* Next we add a webpack.config.js. 
* First we specify source maps so we can debug `TypeScript` files in our browser.
* Then we specify an application entry point
* Up next is the output location for our built bundle.
* Next we tell Webpack to support `.ts` and `.tsx` file extensions along with the original `.js` extension. 
* Finally we tell webpack to use `ts-loader` to handle `.ts` and `.tsx` files.

```js
module.exports = {
  devtool: 'inline-source-map',
  entry: './src/app.tsx',
  output: {
      filename: __dirname + '/build/app.js'
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

Next we create a basic html file in the public/index.html
* The file simply contains a root div where we will render our React application and then loads the bundle generated from webpack.
```html
<html>
    <body>
        <div id="root"></div>
        <script src="./build/app.js"></script>
    </body>
</html>
```

Add a tsconfig.json

```json
{
  "compilerOptions": {
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
I'll go ahead and select this newly created tsconfig.json as the typescript configuration file for my IDE.

* Now I'll create our src/app.tsx file
* We simply import react and react-dom 
* And finally use ReactDOM to render hello world to our root div.
```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(<div>Hello world</div>, document.getElementById('root'));
```

That's it, the project is ready.

* If we run `npm start` it will start up the dev server. 
* If we make an edit to the file (`hello world again`)you can see it live reload.

And when you are ready to deploy you would just run `npm build` and we get the `app.js` file written to disk.
