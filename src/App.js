import React from "react";
import HomePage from "./HomePage";
import Navigation from "./Navigation";
import Users from "./Users";
import ManageUser from "./ManageUser";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Home",
      users: [
        { id: 1, name: "Cory", email: "cory@example.com" },
        { id: 2, name: "Sally", email: "sally@example.com" },
        { id: 3, name: "Bob", email: "bob@example.com" }
      ],
      currentUser: null
    };

    // this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleDeleteUserClick = event => {
    event.preventDefault();
    const filteredUsers = this.state.users.filter(
      user => user.id !== Number(event.target.name)
    );
    this.setState({ users: filteredUsers });
  };

  handleUserClick = (event, userId) => {
    event.preventDefault();
    const user = this.state.users.find(u => u.id === userId);
    this.setState({ currentPage: "ManageUser", currentUser: user });
  };

  handleUserChange = event => {
    const user = { ...this.state.currentUser };
    user[event.target.name] = event.target.value;
    this.setState({ currentUser: user });
  };

  handleSaveUser = event => {
    event.preventDefault();
    // Map over list of users and replace the currentUser in the array.
    // Use ternary to determine if we're looking at the current user.
    const { currentUser } = this.state;
    const users = this.state.users.map(
      user => (user.id === currentUser.id ? currentUser : user)
    );
    this.setState({ users, currentPage: "Users" });
  };

  handleAddUserClick = event => {
    const emptyUser = { id: null, name: "", email: "" };
    this.setState({ currentPage: "ManageUser", currentUser: emptyUser });
  };

  getCurrentPage() {
    switch (this.state.currentPage) {
      case "Home":
        return <HomePage />;
      case "Users":
        return (
          <Users
            users={this.state.users}
            onDeleteUserClick={this.handleDeleteUserClick}
            onUserClick={this.handleUserClick}
            onAddUserClick={this.handleAddUserClick}
          />
        );
      case "ManageUser":
        return (
          <ManageUser
            user={this.state.currentUser}
            onUserChange={this.handleUserChange}
            onSaveUser={this.handleSaveUser}
          />
        );
      default:
        throw new Error(`Unknown page: ${this.state.currentPage}`);
    }
  }

  handleNavClick = event => {
    event.preventDefault();
    this.setState({ currentPage: event.target.name });
    //alert();
  };

  render() {
    return (
      <div>
        <Navigation onNavClick={this.handleNavClick} />
        {this.getCurrentPage()}
      </div>
    );
  }
}

export default App;
