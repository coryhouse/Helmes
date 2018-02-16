import React from "react";
import PropTypes from "prop-types";
import { user } from "./types";

const UserPage = ({ heading, users, onClickDelete }) => (
  <div>
    <h1>{heading}</h1>
    <ul>
      {users.map(user => {
        return (
          <li key={user.id}>
            <button
              onClick={event => {
                onClickDelete(event, user.id);
              }}
            >
              Delete
            </button>{" "}
            <a href="#edit-user">{user.name}</a> - {user.email}
          </li>
        );
      })}
    </ul>
  </div>
);

UserPage.propTypes = {
  heading: PropTypes.string,
  users: PropTypes.arrayOf(user).isRequired,
  onClickDelete: PropTypes.func.isRequired
};

UserPage.defaultProps = {
  heading: "Users"
};

export default UserPage;