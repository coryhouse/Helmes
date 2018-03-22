import React from "react";
import PropTypes from "prop-types";

const Navigation = ({ isAdmin, onLinkClick }) => (
  <ul>
    <li>
      <a href="/" onClick={event => onLinkClick(event, "HomePage")}>
        Home
      </a>
    </li>
    {isAdmin && (
      <li>
        <a href="/users" onClick={event => onLinkClick(event, "Users")}>
          Users
        </a>
      </li>
    )}
  </ul>
);

Navigation.propTypes = {
  isAdmin: PropTypes.bool,
  onLinkClick: PropTypes.func.isRequired
};

Navigation.defaultProps = {
  isAdmin: false
};

export default Navigation;
