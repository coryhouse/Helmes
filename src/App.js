import React from "react";
import HomePage from "./HomePage";
import Navigation from "./Navigation";
import Users from "./Users";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Home",
      users: [
        { id: 1, name: "Cory", email: "cory@example.com" },
        { id: 2, name: "Sally", email: "sally@example.com" },
        { id: 3, name: "Bob", email: "bob@example.com" }
      ]
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

  handleUserClick = event => {
    event.preventDefault();
    alert("clicked");
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
