# Publish a React component with TypeScript
> In this lesson we look at the some simple best practices for creating high quality React components with TypeScript.

NPM linking voodoo https://medium.com/@BrodaNoel/how-to-create-a-react-component-and-publish-it-in-npm-668ad7d363ce 

Lets create a new node project, lets call it `Fancy`.


```js
export const Fancy: React.SFC<{text:string}> = (props) => <h1>{props.text}</h1>;
```
* TODO: npm install `react` / `@types/react` to peer deps
* TODO: setup tsconfig with `jsx` / `sourcemap` / `outDir`
* TODO: setup package.json with `types`.
* TODO: setup package.json build script

* At this point if you wanted you could jump `npm publish` this library, but we will just use it locally by running `npm link`.


* Now lets jump back to our good old hello world application. 
* If we had published our package we could use it by `npm install`. Since we only linked it locally we can bring it in by running `npm link fancy`.
* We can now use the component in our main application. Ofcouse since the package was written with TypeScript we get nice autocomplete, error checking and all the other benefits we demonstarted in the first lesson.
* As you can see our fancy component works as expected.
