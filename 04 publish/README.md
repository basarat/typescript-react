# Publish a React component with TypeScript
> In this lesson we look at how to create a React Component package using TypeScript. Pro Tip: It is very similiar to creating any other TypeScript Node package, but its always good to see it in practice.

NPM linking voodoo https://medium.com/@BrodaNoel/how-to-create-a-react-component-and-publish-it-in-npm-668ad7d363ce 
Lets create a new node project, lets call it `Fancy`.


* TODO: npm install `typescript` / `react` / `@types/react` to peer deps? Check blueprint. The article does `peerDependencies` manually.
* Next we create a simple tsconfig file. Within the file we specify the `compilerOptions` for   `sourcemap` / `jsx` / `target` / `declaration` and an output directory for the compiled JavaScript `outDir`.
```json
{
  "compilerOptions": {
    "sourceMap": true,
    "jsx": "react",
    "target": "es5",
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

* Just like any other standard TypeSript node project, we setup package.json with the path to our output `js` files along with `types` for the output `.d.ts` TypeScript declaration files.

```
"main": "lib",
"types": "lib",
```
* We also setup a build script which simply invokes `tsc` on our `tsconfig.json`


* At this point if you wanted you could jump `npm publish` this library, but we will just use it locally by running `npm link`.


* Now lets jump back to our good old hello world application. 
* If we had published our package we could use it by `npm install`. Since we only linked it locally we can bring it in by running `npm link fancy`.
* We can now use the component in our main application. Ofcouse since the package was written with TypeScript we get nice autocomplete, error checking and all the other benefits we demonstarted in the first lesson.
* As you can see our fancy component works as expected.
