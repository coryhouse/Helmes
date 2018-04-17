import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.loggedInUser.id &&
          `Hello ${this.props.loggedInUser.username}`}
        <ul>
          <li>
            <a href="/" name="Home" onClick={this.props.onNavClick}>
              Home
            </a>
          </li>
          <li>
            <a href="/users" name="Users" onClick={this.props.onNavClick}>
              Users
            </a>
          </li>
          {this.props.loggedInUser.isAdmin && (
            <li>
              <a href="/admin" name="Admin" onClick={this.props.onNavClick}>
                Admin
              </a>
            </li>
          )}
        </ul>
      </React.Fragment>
    );
  }
}

export default Navigation;
