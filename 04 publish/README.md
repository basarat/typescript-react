# Publish a React component with TypeScript
> In this lesson we look at the some simple best practices for creating high quality React components with TypeScript.


TODO use `expandible` example code 

DEMO using a simple `Noop` component


```js
export const Noop: React.SFC = (props) => props.children;
Noop.name = "Noop";
```