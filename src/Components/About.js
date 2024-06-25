import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/Usercontext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parant constructor");
  }
  componentDidMount() {
    // console.log("parant Component Did Mount");
  }
  render() {
    // console.log("parant render");
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User:
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>Namaste react</h2>
        <UserClass name="vipin sambhoriya(Class)" location="Sikandra Rao" />
      </div>
    );
  }
}
export default About;
