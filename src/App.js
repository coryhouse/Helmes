import React from "react";
import HomePage from "./HomePage";
import Navigation from "./Navigation";
import Users from "./Users";
import ManageUser from "./ManageUser";
import { saveUser } from "./api/userApi";

class App extends React.Component {
  state = {
    currentPage: "Home",
    users: [
      { id: 1, name: "Cory", email: "cory@example.com" },
      { id: 2, name: "Sally", email: "sally@example.com" },
      { id: 3, name: "Bob", email: "bob@example.com" }
    ],
    currentUser: null,
    loggedInUser: {
      id: null,
      username: null,
      isAdmin: true
    },
    errors: {}
  };

  componentDidMount() {
    alert("mounted");
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
    const { currentUser } = this.state;
    if (!currentUser.name) {
      this.setState({ errors: { name: "Name is Required." } });
      return;
    }
    if (!currentUser.email) {
      this.setState({ errors: { email: "Email is Required." } });
      return;
    }
    // Map over list of users and replace the currentUser in the array.
    // Use ternary to determine if we're looking at the current user.
    let users;
    let savedUser;
    if (currentUser.id) {
      // editing existing user
      savedUser = saveUser(currentUser);
      users = this.state.users.map(
        user => (user.id === savedUser.id ? savedUser : user)
      );
    } else {
      // adding a new user
      savedUser = saveUser(currentUser);
      users = [...this.state.users, savedUser];
    }
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
            errors={this.state.errors}
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
  };

  render() {
    const navigationProps = {
      loggedInUser: this.state.loggedInUser,
      onNavClick: this.handleNavClick
    };

    return (
      <div>
        <Navigation {...navigationProps} />
        {this.getCurrentPage()}
      </div>
    );
  }
}

export default App;
