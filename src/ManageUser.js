import React, { Component } from "react";
import PropTypes from "prop-types";

class ManageUser extends Component {
  render() {
    return (
      <form onSubmit={onSaveUser}>
        <label>Name</label>
        <input type="text" value={user.name} />

        <label>Email</label>
        <input type="text" value={user.email} />

        <input type="submit" value="Save" />
      </form>
    );
  }
}

ManageUser.propTypes = {
  user: PropTypes.object.isRequired,
  onSaveUser: PropTypes.func.isRequired
};

export default ManageUser;
