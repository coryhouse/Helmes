import React from "react";

class Navigation extends React.Component {
  render() {
    return (
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
      </ul>
    );
  }
}

export default Navigation;
