import React from "react";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import Navigation from "./Navigation";
import ManageUser from "./ManageUser";

class App extends React.Component {
  state = {
    users: [
      { id: 1, name: "Cory", email: "housecor@gmail.com" },
      { id: 2, name: "Bob", email: "bob@gmail.com" },
      { id: 3, name: "Jane", email: "jane@gmail.com" }
    ],
    selectedUserId: null,
    page: "home"
  };

  onClickDelete = (event, userId) => {
    const users = this.state.users.filter(user => user.id !== userId);
    this.setState({ users });
    alert(`deleted ${userId}`);
  };

  handleNavClick = (event, page) => {
    event.preventDefault();
    this.setState({ page });
  };

  handleClickUser = (event, userId) => {
    event.preventDefault();
    this.setState({ selectedUserId: userId, page: "manageUser" });
  };

  handleManageUserSubmit = (event, user) => {
    event.preventDefault();
    const isNewUser = !user.id;
    let users;
    if (isNewUser) {
      // Hack - Assign ID via random number. In real app, make AJAX call
      user.id = Math.floor(Math.random() * 20000);
      users = [...this.state.users, user];
    } else {
      users = this.state.users.map(u => {
        return user.id === u.id ? user : u;
      });
    }
    this.setState({ users, page: "users" });
    alert("User saved.");
  };

  handleClickAddUser = event => {
    event.preventDefault();
    this.setState({ page: "manageUser", selectedUserId: null });
  };

  getCurrentPage() {
    switch (this.state.page) {
      case "home":
        return <HomePage />;
      case "users":
        return (
          <UserPage
            users={this.state.users}
            onClickDelete={this.onClickDelete}
            onClickAddUser={this.handleClickAddUser}
            onClickUser={this.handleClickUser}
          />
        );
      case "manageUser":
        let user = {
          id: "",
          name: "",
          email: ""
        };
        if (this.state.selectedUserId) {
          user = this.state.users.find(
            user => user.id === this.state.selectedUserId
          );
        }
        return (
          <ManageUser user={user} onSubmit={this.handleManageUserSubmit} />
        );
      default:
        throw new Error("Unknown page passed:" + this.state.page);
    }
  }

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
