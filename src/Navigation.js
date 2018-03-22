import React from "react";

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

export default Navigation;
