import React from "react";

class Users extends React.Component {
  userItem(user, onDeleteClick) {
    return (
      <div key={user.id}>
        <button onClick={() => onDeleteClick(user.id)}>Delete</button> Name: {user.name}
        <br />
        Email: {user.email}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        {this.props.users.map(user => this.userItem(user, this.props.onDeleteClick))}
      </div>
    );
  }
}

export default Users;
