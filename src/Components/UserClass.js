import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log("child constructor");
  }
  componentDidMount() {
    // console.log("child Component Did Mount");
  }
  render() {
    // console.log("child render");
    const { name, location } = this.props;
    const {} = this.state;
    return (
      <div className="user-card">
        <h1>Name:{name}</h1>
        <h1>location:{location}</h1>
        <h1>Contact:vipinsambhoriya@gmail.com</h1>
      </div>
    );
  }
}
export default UserClass;
