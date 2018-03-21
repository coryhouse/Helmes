import React from "react";

function userItem(user) {
  return (
    <div>
      Name: {user.name}
      <br />
      Email: {user.email}
    </div>
  );
}

class Users extends React.Component {
  render() {
    // const { name, email } = this.props.user;
    return (
      <div>
        <h1>Users</h1>
        {this.props.users.map(user => userItem(user))}
      </div>
    );
  }
}

export default Users;
