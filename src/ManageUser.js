import React, { Component } from "react";
import PropTypes from "prop-types";

class ManageUser extends Component {
  render() {
    const { onSaveUser, user, onUserChange } = this.props;
    return (
      <form onSubmit={onSaveUser}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={onUserChange}
        />

        <label>Email</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={onUserChange}
        />

        <input type="submit" value="Save" />
      </form>
    );
  }
}

ManageUser.propTypes = {
  user: PropTypes.object.isRequired,
  onSaveUser: PropTypes.func.isRequired,
  onUserChange: PropTypes.func.isRequired
};

export default ManageUser;
