import React from "react";

class UserClass extends React.Component {
  // Props, will be defined inside constructor, because, we will pass props each time
  // when we will create object or instance these class
  // Here, it will call super, and inside that pass props,
  // so we can use all the props from parent component as well
  constructor(props) {
    super(props);
    // console.log(props);
    console.log(this.props.name + "Constructor called");

    // State variable will also get created, at the time of creation of these component's instance
    // state variables will be inside this.state, which means "this" component has these "state" variables.
    // Here, we don't have to create a separate state variable, for separate state variable,
    // just like we used to do in the functional components
    // "this.state" is a collection of all the state variables of these particular component i.e. class
    this.state = {
      userInfo: {
        name: "dummyName",
        location: "dumyLocation",
        avatar_url: "dummyAvatar",
      },
    };
  }

  async componentDidMount() {
    console.log(this.props.name + "componentDidMount() called");
    const data = await fetch("https://api.github.com/users/YourOwnItsMeDHC");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log(this.props.name + "componentDidUpdate() called");
  }

  componentWillUnmount() {
    console.log(this.props.name + "componentWillUnmount() called");
  }

  render() {
    console.log(this.props.name + "render() called");
    // const { name, location, contact } = this.props;

    const { name, location, avatar_url } = this.state.userInfo;
    debugger;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>{name}</h2>
        <h3>{location}</h3>
      </div>
    );
  }
}

export default UserClass;
