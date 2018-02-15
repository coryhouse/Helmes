import React, { Component } from "react";

class UserPage extends Component {
  onClickDelete(event, userId) {
    const users = this.state.users.filter(user => user.id !== userId);
    this.setState({ users });
    alert(`deleted ${userId}`);
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {this.state.users.map(user => {
            return (
              <li key={user.id}>
                <button
                  onClick={event => {
                    this.onClickDelete(event, user.id);
                  }}
                >
                  Delete
                </button>{" "}
                {user.name} - {user.email}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UserPage;
