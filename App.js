import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement(elemName, props, content / what_all_things_I_wanna_put)
//props {} , will store attributes of elemName
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello Deepak using ReactJs"
);

// const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading); //object

//Each and every element in ReactJs is an Object
// Third argument in React.createElement() is "children" i.e. what these particular element should consist
//Putting these newly created h1 tag inside "root"

//When we want to add multiple children
//Example :
//<div id="parent">
// <div id="child">
//   <h1>I'm H1 tag</h1>
// </div>
//</div>
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm H1 Tag")
  )
);
// root.render(parent);

// Complex HTML Structure  :
//When we want to add multiple children, we pass that as an array
//Example :
// <div id="container">
//     <h1>Heading-1 Using ReactJs</h1>
//     <h1>Heading-2 Using ReactJs</h1>
// </div>

const head1 = React.createElement("h1", {}, "Heading-1 Using ReactJs");

const head2 = React.createElement("h1", {}, "Heading-2 Using ReactJS");

const cont = React.createElement(
  "div",
  {
    id: "container",
  },
  [head1, head2]
);

// root.render(cont);

//render h1 inside root
//render ==> to give/provide something
// root.render(heading);

// ******************************* JSX **********************************
// JSX ==> HTML like syntax or XML like syntax
//JSX - It's getting transpiled, before it reaches the JSX
// JSX ==> Babel trasnpiles it to ==> React.createElement ==> React element - JS object ==> HTMLElement(render)
// In JSX, attributes should be in camel case

// ******************************* React Element **********************************
const jsxHeading = (
  <h1 id="heading" className="head">
    I am JSX heading
  </h1>
);
console.log(jsxHeading); //Object

// ******************************* Functional Component **********************************
// Functional Component ==> A function which returns jsx code or return react element
// or return bunch of react element
/*
Arrow Function :
 const fn => () = true;

 const fn2 => () = {
  return true

  Above, both syntax is Ok
 */

// Component Composition ==> Component inside another component
//Functional component using Arrow function
const HeaderComponent = () => {
  return (
    <div>
      {/* Using react element inside component */}
      {cont}
      <h1>I am head 1 from header component</h1>
      <h2>I am head 2 from header component</h2>
    </div>
  );
};

//Without "return" keyword is also OK
const HeaderComponent2 = () => (
  <div>
    <h1>I am head 1 from header component</h1>
    <h2>I am head 2 from header component</h2>
  </div>
);

//Functional component using normal function
const HeaderComponent3 = function () {
  return (
    <div>
      <h1>I am head 1 from header component</h1>
      <h2>I am head 2 from header component</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
