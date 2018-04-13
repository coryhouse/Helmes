import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <a href="/" onClick={this.props.onNavClick}>
            Home
          </a>
        </li>
        <li>
          <a href="/users" onClick={this.props.onNavClick}>
            Users
          </a>
        </li>
      </ul>
    );
  }
}

export default Navigation;
