import React, { Component } from "react";

class Users extends Component {
  state = {
    users: [
      { id: 1, name: "Cory", email: "cory@example.com" },
      { id: 2, name: "Sally", email: "sally@example.com" },
      { id: 3, name: "Bob", email: "bob@example.com" }
    ]
  };

  render() {
    return (
      <div>
        <h1>Users</h1>
      </div>
    );
  }
}

export default Users;
