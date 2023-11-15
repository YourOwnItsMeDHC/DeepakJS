import React from "react";
import Header from "./Header";

import User from "./User";
import UserClass from "./UserClass";

// React Lifecycle ==> Whenever a component gets loaded onto the web page, or gets mounted
// Firstly, that component's constructor will be called, then that component will get render i.e. mounted
// While renderingor mounting,if it has encountered some child
// Then, firstly, that child component's constructor will be called, then that child component will get render i.e. mounted
// And, then after complete rendering or mounting of these child component, componentDidMount() method will get called
// Then,it's parent's component's componentDidMount() method will get called
// Eg: Here, <About /> is parent, and while rendering or mounting, <UserClass /> hasbeen encountered

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor called");
  }

  componentDidMount() {
    console.log("Parent componentDidMount() called");
  }
  render() {
    console.log("Parent render() called");
    return (
      <>
        <h1>About Page</h1>
        <UserClass name={"First Child "} />
        <UserClass name={"Second Child "} />
        <UserClass name={"Third Child "} />
      </>
    );
  }
}

// const About = () => {
//   return (
//     <>
//       <h1>About Page</h1>
//       <User />
//       <UserClass
//         name={"Deepak Chourasiya"}
//         location={"Heart"}
//         contact={"Leave these part"}
//       />
//       <div>
//         <a href="https://endearing-genie-98de4c.netlify.app/" target="_blank">
//           <img
//             className="clickMe"
//             src="data:image/jpeg;base64,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"
//           />
//         </a>
//       </div>
//     </>
//   );
// };

export default About;
