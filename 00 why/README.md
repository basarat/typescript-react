# Why use TypeScript with React
> You get a much better developer experience when using TypeScript with React compared to many other frameworks that work off of simple template strings because JSX is embedded within TypeScript.

> In this lesson we give a demonstration of the some of the powerful refactorings and type checks enabled by using TypeScript with React. 

Here we have a simple basic ReactJS application. 

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

Even in such a simple application we can demonstrate the great developer experience offered to react development by using TypeScript.

***Delete everything after <`***
First up is *autocomplete*.
* It autocompletes the component name for us.
* It also autocompletes any component attributes.
```js
<Hello compiler=
```

***(Git reset file)***
Next up is *type checking*. 
* Misspell any component name gives us a nice error. `Hellow` (show error)
* Misspelling any component attribute and you get an error. (compilers)
* Forget to provide a *required* attribute you get an error. (delete compilers and show error)
* Provide a value of the wrong type and you get a nice error (point compiler to `compiler={123}`)


***Git reset file***
As developers we spend a large chunk of our time refactoring existing code. TypeScript is an ideal tool for this task.
* TypeScript makes it easy to rename the component (Hello -> HelloPeople)
* You can easily rename an attribute (message -> messages)
* And as requirements change and you add new attributes, users of your components get nice errors. (add attribute count: number)
* If you decide to change the type of an attribute, that is caught too. (message: number)

These are just some of the refactoring advantages offered by TypeScript.

***Git reset file***
TypeScript also enables excellent code navigation tools for your applications.
* With one simple command I can file all the references to the Hello component (2 places)
* Similarly I can easily see how any of the props for the component are used (`compiler` 3 places)

TypeScript really enables a whole new level of developer productivity for React Developers and in this course we will continue to explore this TypeScript - React combination.
