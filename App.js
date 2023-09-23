//React.createElement(elemName, props, content / what_all_things_I_wanna_put)
//props {} , will store attributes of elemName
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello Deepak using ReactJs"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

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
root.render(parent);

//render h1 inside root
//render ==> to give/provide something
// root.render(heading);
