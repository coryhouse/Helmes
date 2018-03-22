import React from "react";
import PropTypes from "prop-types";
import { user } from "./propTypes";

class Users extends React.Component {
  static propTypes = {
    users: PropTypes.arrayOf(user).isRequired,
    onDeleteClick: PropTypes.func.isRequired
  };

  userItem(user, onDeleteClick) {
    return (
      <div key={user.id}>
        <button onClick={() => onDeleteClick(user.id)}>Delete</button> Name:{" "}
        {user.name}
        <br />
        Email: {user.email}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        {this.props.users.map(user =>
          this.userItem(user, this.props.onDeleteClick)
        )}
      </div>
    );
  }
}

export default Users;
