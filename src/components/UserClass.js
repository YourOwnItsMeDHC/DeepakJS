import React from "react";

class UserClass extends React.Component {
  // Props, will be defined inside constructor, because, we will pass props each time
  // when we will create object or instance these class
  // Here, it will call super, and inside that pass props,
  // so we can use all the props from parent component as well
  constructor(props) {
    super(props);
    console.log(props);
    console.log("Child Constructor called");

    // State variable will also get created, at the time of creation of these component's instance
    // state variables will be inside this.state, which means "this" component has these "state" variables.
    // Here, we don't have to create a separate state variable, for separate state variable,
    // just like we used to do in the functional components
    // "this.state" is a collection of all the state variables of these particular component i.e. class
    this.state = {
      count1: 0,
      count2: 0,
    };
  }

  componentDidMount() {
    console.log("Child has been rendered or mounted");
  }

  render() {
    console.log("Child is rendering or mounting...");
    const { name, location, contact } = this.props;
    const { count1, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>Value of count1 : {count1}</h1>
        <h1>Value of count2 : {count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Change Value
        </button>
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>{contact}</h4>
      </div>
    );
  }
}

export default UserClass;
