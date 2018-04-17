import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";

class Users extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.email
      })
    ).isRequired,
    onDeleteUserClick: PropTypes.func.isRequired,
    onUserClick: PropTypes.func.isRequired,
    onAddUserClick: PropTypes.func.isRequired,
    headerMessage: PropTypes.string
  };

  static defaultProps = {
    headerMessage: "User details"
  };

  displayUserTable() {
    return (
      <React.Fragment>
        {this.props.headerMessage}
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(user => {
              return (
                <tr key={user.id}>
                  <td>
                    <a
                      href="/delete"
                      name={user.id}
                      onClick={this.props.onDeleteUserClick}
                    >
                      Delete
                    </a>
                  </td>
                  <td>
                    <a
                      href="/user"
                      onClick={event => this.props.onUserClick(event, user.id)}
                    >
                      {user.name}
                    </a>
                  </td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  render() {
    const { onAddUserClick, users } = this.props;
    return (
      <React.Fragment>
        <h1 style={styles.h1}>Users</h1>
        <button onClick={onAddUserClick}>Add User</button>
        {users.length === 0 ? (
          <div>No Users Found</div>
        ) : (
          this.displayUserTable()
        )}
      </React.Fragment>
    );
  }
}

export default Users;
