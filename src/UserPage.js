import React from "react";
import PropTypes from "prop-types";
import { user } from "./types";

const UserPage = ({
  heading,
  users,
  onClickDelete,
  onClickUser,
  onClickAddUser
}) => (
  <div>
    <h1>{heading}</h1>
    <button onClick={onClickAddUser}>Add User</button>
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
            <a href="#edit-user" onClick={event => onClickUser(event, user.id)}>
              {user.name}
            </a>{" "}
            - {user.email}
          </li>
        );
      })}
    </ul>
  </div>
);

UserPage.propTypes = {
  heading: PropTypes.string,
  users: PropTypes.arrayOf(user).isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickUser: PropTypes.func.isRequired,
  onClickAddUser: PropTypes.func.isRequired
};

UserPage.defaultProps = {
  heading: "Users"
};

export default UserPage;
