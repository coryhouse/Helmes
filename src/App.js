import React from "react";
import HomePage from "./HomePage";
import UserPage from "./UserPage";

class App extends React.Component {
  state = {
    users: [
      { id: 1, name: "Cory", email: "housecor@gmail.com" },
      { id: 2, name: "Bob", email: "bob@gmail.com" },
      { id: 3, name: "Jane", email: "jane@gmail.com" }
    ],
    page: "HomePage"
  };

  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

export default App;
