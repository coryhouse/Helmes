import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/users">Users</a>
        </li>
      </ul>
    );
  }
}

export default Navigation;
