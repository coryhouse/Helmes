import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation";
import registerServiceWorker from "./registerServiceWorker";
import Users from "./Users";
import HomePage from "./HomePage";
import ManageUser from "./ManageUser";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.emptyUser = {
      id: "",
      name: "",
      email: ""
    };

    this.state = {
      users: [
        { id: 1, name: "Cory", email: "housecor@gmail.com" },
        { id: 2, name: "Sally", email: "sally@gmail.com" },
        { id: 3, name: "Tammy", email: "tammy@gmail.com" }
      ],
      currentPage: "HomePage",
      currentUser: { ...this.emptyUser }
    };
  }

  handleDeleteUserClick = id => {
    const users = this.state.users.filter(user => user.id !== id);
    this.setState({ users });
  };

  handleNavigationClick = (event, page) => {
    event.preventDefault();
    this.setState({ currentPage: page });
  };

  handleUserClick = (event, userId) => {
    event.preventDefault();
    this.setState({ currentPage: "ManageUser" });
    alert(userId);
  };

  handleAddUserClick = event => {
    event.preventDefault();
    this.setState({ currentPage: "ManageUser" });
  };

  getPage() {
    switch (this.state.currentPage) {
      case "HomePage":
        return <HomePage />;
      case "Users":
        return (
          <Users
            users={this.state.users}
            onDeleteClick={this.handleDeleteUserClick}
            onUserClick={this.handleUserClick}
            onAddUserClick={this.handleAddUserClick}
          />
        );
      case "ManageUser":
        return <ManageUser user={this.state.currentUser} />;
      default:
        throw new Error("Unknown page:" + this.state.currentPage);
    }
  }

  render() {
    return (
      <div>
        <Navigation isAdmin onLinkClick={this.handleNavigationClick} />
        {this.getPage()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
