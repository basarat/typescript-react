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
```bash
npm install react react-dom webpack webpack-dev-server typescript @types/react @types/react-dom ts-loader -S
```

now we will just go ahead and open some IDE that supports typescript

```bash
alm -o
```

Add a start script to package.json to run the dev server

```json
"build": "webpack ./webpack.config.js",
"start": "webpack-dev-server ./webpack.config.js --no-info --hot --inline --content-base ./public"
```

Add a webpack.config.js

```js
module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: './src/app.tsx'
  },
  output: {
      filename: 'build/app.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
      loaders: [
          { test: /\.tsx?$/, loader: 'ts-loader' }
      ]
  }
}
```

I'll create a public/index.html
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

Now I'll create our src/app/main.tsx file and render hello world
```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(<div>Hello world</div>, document.getElementById('root'));
```

That's it, the project is ready. If you run npm start you can open up the dev server. And if you make an edit to the file you can see it live reload.

And when you are ready to deploy you would just run `npm build` and we get the `app.js` file written to disk.


