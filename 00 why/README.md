# Why use TypeScript with React
> You get a much better developer experience when using TypeScript with React compared to many other frameworks that work off of simple template strings because JSX embedded within TypeScript.

> In this lesson we give a demonstration of the some of the powerful refactorings and type checks enabled by using TypeScript with React. 


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