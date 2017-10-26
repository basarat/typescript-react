# Why use TypeScript with React
> You get excellent developer experience when using TypeScript with React. This is better when compared to many other frameworks that work off of simple template strings because JSX is embedded within TypeScript.

> In this lesson we give a demonstration of the some of the powerful refactorings and type checks enabled by using TypeScript with React.

Here we have a basic ReactJS application, and even in such a simple application we can demonstrate a bit of the great developer experience offered to react development by using TypeScript.

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Hello = (props: { compiler: string, framework: string }) => {
  return (
    <div>
      <div>{props.compiler}</div>
      <div>{props.framework}</div>
    </div>
  );
}

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);
```

***Delete everything after <`***
First up is *autocomplete*.
* TypeScript suggests and autocompletes the component name for us.
* It also autocompletes any component props.
```js
<Hello compiler=
```

***(Git reset file)***
Next up is *type checking*.
* Misspell any component name and TypeScript gives us a nice error. `Hellow` (show error)
* Misspelling any component prop also gives you an immediate error. (compilers)
* Forget to provide a *required* prop you get an error. (delete framework and show error)
* Provide a value of the wrong type by mistake and you get a nice error (point compiler to `framework={123}`)

With this active compile time error analysis, you get a lot less runtime issues in your codebase.

***Git reset file***
As developers we spend a large chunk of our time refactoring existing code. TypeScript is an ideal tool for refactoring.
* TypeScript makes it easy to rename the component to something that makes more sense as you understand more of your business requirements (Hello -> Better). And this is not a dumb string search and replace, this is true semantic rename.
* You can just as easily rename a prop (compiler -> name)
* And as requirements change and you add new props, users of your components get nice errors. (add prop count: number and show error, and then autocomplete to provide it)
* Later on, if you decide that you need change the type of an prop, that is pointed out to your component users as well thanks to TypeScript. (count: string, count="fixed")

These are just some of the refactoring advantages offered by TypeScript.

***Git reset file***
TypeScript also enables excellent code navigation tools for your applications.
* With one simple command I can find all the references to the Hello component (show 2 places)
* Similarly I can easily see how any of the props for the component are used (`compiler` show 3 places)

TypeScript really enables a whole new level of developer productivity for React Developers and in this course we will explore this simple TypeScript - React combination.
