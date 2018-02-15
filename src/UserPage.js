import React from "react";
import PropTypes from "prop-types";
import { user } from "./types";

const UserPage = props => (
  <div>
    <h1>Users</h1>
    <ul>
      {props.users.map(user => {
        return (
          <li key={user.id}>
            <button
              onClick={event => {
                props.onClickDelete(event, user.id);
              }}
            >
              Delete
            </button>{" "}
            {user.name} - {user.email}
          </li>
        );
      })}
    </ul>
  </div>
);

UserPage.propTypes = {
  users: PropTypes.arrayOf(user).isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default UserPage;
