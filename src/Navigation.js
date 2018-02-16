import React from "react";
import PropTypes from "prop-types";

class Navigation extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <a
            href="#home"
            onClick={event => this.props.onNavClick(event, "home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#users"
            onClick={event => this.props.onNavClick(event, "users")}
          >
            Users
          </a>
        </li>
      </ul>
    );
  }
}

Navigation.propTypes = {
  onNavClick: PropTypes.func.isRequired
};

export default Navigation;
