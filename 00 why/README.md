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

First up is *autocomplete*.

**Autocomplete**
* Type in component.
* Type in component attribute.

**Checking**

* Misspell the component (Hellow)
* Misspell an attribute (compler)
* Invalid type for an attribute (compiler={123})

**Refactoring**

* Add a new attribute (message: string)
* Change the type of an attribute (message: number)
* Rename an attribute (message -> messages)
* Rename the component (Hello -> HelloPeople)

**Usages**

* The component (2 places)
* The attribute (3 places)