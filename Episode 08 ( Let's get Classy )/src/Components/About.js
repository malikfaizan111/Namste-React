import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
    console.log("Called After Render");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"First"} location={"Dehradun Class"} />
        <User name={"functional Based"}/>
        {/* <UserClass name={"second"} location={"Mumbai Class"} /> */}
      </div>
    );
  }
}

export default About;


/* 
- Parent Constructor
- Parent Render

    - First Constructor
    - First Render
                                -----> Render Phase
    - Second Constructor
    - Second Constructor

    <DOM UPDATED - in  single BATCH>

    - First ComponentDidMount     ---> commit phase
    - Second ComponentDidMount

- Parent ComponentDidMount


*/
