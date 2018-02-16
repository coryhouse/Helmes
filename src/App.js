import React from "react";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import Navigation from "./Navigation";

class App extends React.Component {
  state = {
    users: [
      { id: 1, name: "Cory", email: "housecor@gmail.com" },
      { id: 2, name: "Bob", email: "bob@gmail.com" },
      { id: 3, name: "Jane", email: "jane@gmail.com" }
    ],
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

  getCurrentPage() {
    switch (this.state.page) {
      case "home":
        return <HomePage />;
      case "users":
        return (
          <UserPage
            users={this.state.users}
            onClickDelete={this.onClickDelete}
          />
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
