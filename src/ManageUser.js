import React, { Component } from "react";
import { user } from "./types";
import PropTypes from "prop-types";

class ManageUser extends Component {
  render() {
    const { name, email } = this.props.user;
    return (
      <form onSubmit={this.props.onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} />
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={email} />
        <br />
        <button type="submit">Save</button>
      </form>
    );
  }
}

ManageUser.propTypes = {
  user: user,
  onSubmit: PropTypes.func.isRequired
};

export default ManageUser;
