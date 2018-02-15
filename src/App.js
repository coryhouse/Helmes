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

  onClickDelete = (event, userId) => {
    const users = this.state.users.filter(user => user.id !== userId);
    this.setState({ users });
    alert(`deleted ${userId}`);
  };

  render() {
    return (
      <div>
        <HomePage />
        <UserPage users={this.state.users} onClickDelete={this.onClickDelete} />
      </div>
    );
  }
}

export default App;
